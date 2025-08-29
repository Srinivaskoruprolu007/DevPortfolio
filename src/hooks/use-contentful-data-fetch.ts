import { useEffect, useState } from "react";
import { ProjectSkeleton } from "@/types/project";
import client from "@/lib/contentful";
import { Entry } from "contentful";


export const useFetchProjects = () => {
  const [projects, setProjects] = useState<ProjectSkeleton[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const response = await client.getEntries<ProjectSkeleton>({ content_type: "project" });


        const items: ProjectSkeleton[] = response.items.map((item: Entry<ProjectSkeleton>) => ({
          contentTypeId: "project",
          fields: {
            title: item.fields.title,
            description: item.fields.description,
            demoLink: item.fields.demoLink,
            githubLink: item.fields.githubLink,
            tags: item.fields.tags || [],
            image: item.fields.image || null,
          },
        }));

        setProjects(items);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err);
        } else {
          setError(new Error("Unknown error occurred"));
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { projects, loading, error };
};
