import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import ProjectCard from '@/components/projectCard';
import Link from 'next/link';
import codeImage from '../../../public/code.jpeg';

export default function RecentProjects() {
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
        <ProjectCard
          href="/projects/ecommerce-platform"
          title="E-commerce Platform"
          description="Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include payment processing, inventory management, and admin dashboard."
          tags={['React', 'Node.js', 'PostgreSQL']}
          image={codeImage}
        />
        <ProjectCard
          href="/projects/task-management"
          title="Task Management App"
          description="Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features."
          tags={['Next.js', 'WebSocket', 'Prisma']}
          image={codeImage}
        />
        <ProjectCard
          href="/projects/analytics-dashboard"
          title="Analytics Dashboard"
          description="Real-time analytics dashboard with interactive charts, data visualization, and customizable reporting features."
          tags={['Vue.js', 'D3.js', 'MongoDB']}
          image={codeImage}
        />
      </div>
    </section>
  );
}
