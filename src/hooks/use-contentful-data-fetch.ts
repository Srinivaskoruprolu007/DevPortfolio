/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Project } from "@/types/project";
import client from "@/lib/contentful";


export const useFetchProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const response = await client.getEntries({ content_type: "project" });


        const items = response.items.map((item: any) => ({
          title: item.fields.title,
          description: item.fields.description,
          demoLink: item.fields.demoLink,
          githubLink: item.fields.githubLink,
          image: item.fields.image?.fields?.file?.url || "",
          tags: item.fields.tags || [],
        }));

        setProjects(items);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { projects, loading, error };
};
