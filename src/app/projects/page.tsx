import ProjectCard from '@/components/projectCard';
import codeImage from '../../../public/code.jpeg';

export default function ProjectsPage() {
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
      </div>
    </div>
  );
}
