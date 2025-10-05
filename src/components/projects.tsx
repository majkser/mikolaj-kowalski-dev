import ProjectCard from '@/components/projectCard';
import { getAllProjects } from '@/utils/getAllProjects';

export default function Projects({ limit }: { limit?: number }) {
  const projects = getAllProjects();

  limit = limit || Number.MAX_SAFE_INTEGER;

  return (
    <>
      {projects.slice(0, limit).map((project) => (
        <ProjectCard
          key={project.slug}
          href={`/projects/${project.slug}`}
          title={project.title}
          subtitle={project.subtitle}
          tags={project.tags}
          image={`/${project.image}`}
          date={project.date}
        />
      ))}
    </>
  );
}
