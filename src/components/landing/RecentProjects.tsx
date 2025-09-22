import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import ProjectCard from '@/components/projectCard';
import Link from 'next/link';
import { getAllProjects } from '../../utils/getAllProjects';

export default function RecentProjects() {
  const allProjects = getAllProjects();

  //limit to the 2 projects displayed on the main page
  const projects = allProjects.slice(0, 2);
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-foreground">Recent Projects</h2>
        <Button variant="ghost" asChild>
          <Link href="/projects" className="text-primary hover:text-primary/80">
            View All
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </div>
      <div className="space-y-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            href={`/projects/${project.slug}`}
            title={project.title}
            description={project.description}
            tags={project.tags}
            image={`/${project.image}`}
            date="2023.01.01"
          />
        ))}
      </div>
    </section>
  );
}
