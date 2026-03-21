export type LocalProject = {
  title: string;
  eyebrow: string;
  impact: string;
  description: string;
  achievements: string[];
  tags: string[];
  image: string;
  imageAlt: string;
  github?: string;
  demo?: string;
  demoLabel?: string;
};

// Keep this for backward compatibility
export type Project = LocalProject;
