import ProjectCard from '@/components/projectCard';
import { getAllProjects } from '@/utils/getAllProjects';

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="bg-gradient-to-b from-background to-primary/25 min-h-screen">
      <div className="container mx-auto px-4 pt-16 pb-24">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 pb-2">
            Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing my work in computer science. Browse through my featured
            projects that demonstrate my technical skills and problem-solving
            capabilities.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
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
        </div>
      </div>
    </div>
  );
}
