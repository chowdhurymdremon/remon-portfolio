export type Language = 'en' | 'bn' | 'ko' | string;

export interface LanguageConfig {
  code: string;
  label: string;
  nativeName: string;
  flag: string;
  isReady: boolean;
}

export interface ProjectItem {
  id: string;
  titleKey: string;
  categoryKey: string;
  descriptionKey: string;
  longDescriptionKey: string;
  tags: string[];
  statusKey: string;
  githubUrl: string;
  demoUrl?: string;
  featured: boolean;
  accentColor: string;
  iconName: string;
}

export interface SkillCategory {
  titleKey: string;
  descriptionKey: string;
  skills: {
    name: string;
    level: string; // e.g. "Proficient", "Intermediate", "Foundational / Academic"
    badgeKey: string;
    icon: string;
    focus: string;
  }[];
}

export interface CareerInterestItem {
  id: string;
  titleKey: string;
  taglineKey: string;
  descriptionKey: string;
  iconName: string;
  keyTechnologies: string[];
  goalsKey: string;
}
