import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';
import { createServer as createViteServer } from 'vite';
import { translations, TranslationDictionary } from './src/data/translations';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
// AI Studio dev server strictly requires port 3000
const PORT = 3000;

app.use(express.json({ limit: '10mb' }));

// In-memory server cache for translated dictionaries
const translationCache = new Map<string, TranslationDictionary>();

// Seed existing verified translations
if (translations.en) translationCache.set('en', translations.en);
if (translations.bn) translationCache.set('bn', translations.bn);
if (translations.ko) translationCache.set('ko', translations.ko);

// Initialize Gemini client with telemetry header
const geminiApiKey = process.env.GEMINI_API_KEY;
let aiClient: GoogleGenAI | null = null;

if (geminiApiKey) {
  aiClient = new GoogleGenAI({
    apiKey: geminiApiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

/**
 * Endpoint: POST /api/translate
 * Translates the complete portfolio dictionary into target language
 */
app.post('/api/translate', async (req: Request, res: Response): Promise<void> => {
  try {
    const { targetLang, targetName } = req.body;

    if (!targetLang || typeof targetLang !== 'string') {
      res.status(400).json({ error: 'Missing or invalid targetLang' });
      return;
    }

    const langCode = targetLang.trim();
    const languageDisplayName = targetName || langCode;

    // Check server cache first
    if (translationCache.has(langCode)) {
      res.json({
        success: true,
        language: langCode,
        cached: true,
        translation: translationCache.get(langCode),
      });
      return;
    }

    if (!aiClient) {
      res.status(503).json({
        error: 'Gemini API is not configured on the server. Please check GEMINI_API_KEY.',
      });
      return;
    }

    // Base template is English
    const baseContent = translations.en;

    const systemPrompt = `You are an expert software engineer and localization specialist.
Your task is to translate an entire JSON dictionary for a Software Engineer & Computer Science student portfolio from English into ${languageDisplayName} (ISO code: ${langCode}).

CRITICAL PRESERVATION RULES:
1. Return ONLY a valid JSON object matching the exact structure and keys of the input.
2. DO NOT translate personal name: "CHOWDHURY MD REMON".
3. DO NOT translate university name: "Tongmyong University" (you may include native script in parentheses if standard in that language, e.g. "Tongmyong University (동명대학교)").
4. DO NOT translate programming languages, tools, and technical terms: "Python", "Dart", "JavaScript", "Flutter", "Arduino", "NumPy", "Pandas", "React", "TypeScript", "Git", "GitHub", "VS Code", "Google Colab", "C/C++", "HTML5", "CSS3".
5. DO NOT translate "KakaoMap".
6. DO NOT translate phone number "+82 10 9829 9331" or email "contact.remon@example.com".
7. Location string can be translated accurately into the target script (e.g., Busan, South Korea).
8. Translate EVERY OTHER string accurately, naturally, and fluently. Do not leave English sentences or placeholders behind.
9. Ensure all sections are translated: nav, hero, about, education, skills, projects, interests, contact, resumeModal, footer.
10. Ensure the response is valid, parseable JSON only.`;

    const response = await aiClient.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: [
        {
          role: 'user',
          parts: [
            {
              text: `Translate the following portfolio dictionary JSON into ${languageDisplayName} (${langCode}):\n\n${JSON.stringify(
                baseContent,
                null,
                2
              )}`,
            },
          ],
        },
      ],
      config: {
        systemInstruction: systemPrompt,
        responseMimeType: 'application/json',
      },
    });

    const responseText = response.text?.trim() || '';

    if (!responseText) {
      throw new Error('Received empty response from Gemini API.');
    }

    let parsedTranslation: TranslationDictionary;
    try {
      parsedTranslation = JSON.parse(responseText);
    } catch {
      // Attempt cleanup if markdown ticks slipped through
      const cleaned = responseText.replace(/^```json\s*/, '').replace(/```$/, '').trim();
      parsedTranslation = JSON.parse(cleaned);
    }

    // Basic schema verification: check required top-level keys
    const requiredKeys = ['nav', 'hero', 'about', 'education', 'skills', 'projects', 'interests', 'contact', 'footer'];
    for (const key of requiredKeys) {
      if (!(key in parsedTranslation)) {
        throw new Error(`Translated dictionary is missing section: ${key}`);
      }
    }

    // Cache translated dictionary
    translationCache.set(langCode, parsedTranslation);

    res.json({
      success: true,
      language: langCode,
      cached: false,
      translation: parsedTranslation,
    });
  } catch (err: unknown) {
    const error = err as Error;
    console.error('Error during translation:', error);
    res.status(500).json({
      error: error.message || 'Failed to generate translation.',
    });
  }
});

// Health check endpoint
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    cachedLanguages: Array.from(translationCache.keys()),
    hasGeminiKey: Boolean(geminiApiKey),
  });
});

async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    // Production: serve built static files from dist
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  } else {
    // Development: integrate Vite dev server middlewares
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        host: '0.0.0.0',
        hmr: false,
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Portfolio server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
