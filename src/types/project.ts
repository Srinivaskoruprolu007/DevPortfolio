import { EntryFields } from "contentful";

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

export type Project = {
  title: string;
  description: string;
  demoLink: string;
  githubLink: string;
  tags?: string[];
  image: {
    metadata: {
      tags: { sys: { id: string; type: string } }[];
    };
    sys: {
      id: string;
      type: string;
      createdAt: string;
      updatedAt: string;
      environment: { sys: { id: string; type: string } };
    };
    fields: {
      file: {
        url: string;
        details: {
          size: number;
          image?: { width: number; height: number };
        };
        fileName: string;
        contentType: string;
      };
      title: string;
    };
  };
};

export type ProjectSkeleton = {
  contentTypeId: "project";
  fields: {
    title: EntryFields.Text;
    description: EntryFields.Text;
    demoLink: EntryFields.Text;
    githubLink: EntryFields.Text;
    tags?: string[];
    achievements?: string[];
    image?: EntryFields.AssetLink;
  };
};
