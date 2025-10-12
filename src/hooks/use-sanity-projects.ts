import { client, projectsQuery, urlFor } from "@/lib/sanity";
import { ProjectFromSanity, SanityProject } from "@/types/sanity";
import { useEffect, useState } from "react";

export const useSanityProjects = () => {
  const [projects, setProjects] = useState<ProjectFromSanity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        setError(null);

        const sanityProjects: SanityProject[] =
          await client.fetch(projectsQuery);

        // Transform Sanity data to match existing LocalProject structure
        const transformedProjects: ProjectFromSanity[] = sanityProjects.map(
          (project) => ({
            title: project.title,
            description: project.description,
            achievements: project.achievements || [],
            tags: project.technologies?.map((tech) => tech.name) || [],
            image: project.image?.asset
              ? urlFor(project.image.asset).url()
              : "",
            imageAlt: project.image?.alt || project.title,
            github: project.githubUrl || "",
            demo: project.liveUrl || "",
          })
        );

        setProjects(transformedProjects);
      } catch (err) {
        console.error("Error fetching projects from Sanity:", err);
        setError(
          err instanceof Error ? err : new Error("Failed to fetch projects")
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { projects, loading, error };
};
