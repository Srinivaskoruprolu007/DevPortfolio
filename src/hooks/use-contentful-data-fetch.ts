import client from "@/lib/contentful";
import { ProjectSkeleton } from "@/types/project";
import { useEffect, useState } from "react";

export const useFetchProjects = () => {
  const [projects, setProjects] = useState<ProjectSkeleton[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const response = await client.getEntries<ProjectSkeleton>({
          content_type: "project",
        });

        const items = response.items.map((item) => ({
          contentTypeId: "project" as const,
          fields: {
            title: item.fields.title as string,
            description: item.fields.description as string,
            demoLink: item.fields.demoLink as string,
            githubLink: item.fields.githubLink as string,
            tags: (item.fields.tags || []) as string[],
            achievements: (item.fields.achievements || []) as string[],
            image: item.fields.image,
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
