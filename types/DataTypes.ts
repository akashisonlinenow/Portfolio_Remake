export interface AboutProps {
  defaultStyles: { [key: string]: string };
}

export interface ContactTypes {
  id: number;
  name: string;
  link: string;
  color?: string;
  component: JSX.Element;
}

interface userTypes {
  avatar_url: string;
  html_url: string;
}

interface licenseType {
  key: string;
  name: string;
}

export interface SafeTypes {
  id: number;
  name: string;
  full_name: string;
  owner: userTypes;
  private: boolean;
  html_url: string;
  description: string | null;
  fork: boolean;
  url: string;
  clone_url: string;
  homepage: string | null;
  size: number;
  stargazers_count: number | string;
  watchers_count: number | string;
  language: string | null;
  forks_count: number | string;
  forks: number | string;
  topics: string[];
  watchers: number;
  languages_url: string;
  created_at: string;
  updated_at: string;
  archived: boolean;
  open_issues: number;
  license: licenseType | null;
}

export interface PanelTypes {
  id: number;
  title: string;
  link: string;
  icon: JSX.Element;
}

export interface SkillTypes {
  name: string;
  iconName: string;
  level: "Intermediate" | "Beginner" | "Expert";
  intNode?: SkillTypes[] | null;
  type: string;
  isLearning: boolean;
}

export interface TimelineTypes {
  id: number;
  date: string;
  icon: JSX.Element;
  title: string;
  location: string | null;
  info: string | null;
}

export interface TimelineInputProps {
  data: TimelineTypes[];
}

export interface SkillCardInterface {
  data: SkillTypes[];
}
