import { EntryFields } from "contentful";
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
    title: string ;
    description: EntryFields.Text;
    demoLink: EntryFields.Text;
    githubLink: EntryFields.Text;
    tags?: EntryFields.Array<string>;
    image?: EntryFields.AssetLink;
  };
};
