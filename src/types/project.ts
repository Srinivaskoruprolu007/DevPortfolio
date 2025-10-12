export type LocalProject = {
  title: string;
  description: string;
  achievements: string[];
  tags: string[];
  image: string;
  imageAlt: string;
  github: string;
  demo: string;
};

// Keep this for backward compatibility
export type Project = LocalProject;
