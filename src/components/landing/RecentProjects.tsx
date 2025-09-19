import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';

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
        <Card className="hover:shadow-lg transition-shadow">
          <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-t-lg"></div>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <CardTitle className="text-xl hover:text-primary transition-colors">
                  <Link href="/projects/ecommerce-platform">
                    E-commerce Platform
                  </Link>
                </CardTitle>
                <CardDescription>
                  Full-stack e-commerce solution with React, Node.js, and
                  PostgreSQL. Features include payment processing, inventory
                  management, and admin dashboard.
                </CardDescription>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-1" />
            </div>
            <div className="flex gap-2 pt-2">
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">Node.js</Badge>
              <Badge variant="secondary">PostgreSQL</Badge>
            </div>
          </CardHeader>
        </Card>
        <Card className="hover:shadow-lg transition-shadow">
          <div className="aspect-video bg-gradient-to-br from-accent/10 to-primary/10 rounded-t-lg"></div>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <CardTitle className="text-xl hover:text-primary transition-colors">
                  <Link href="/projects/task-management">
                    Task Management App
                  </Link>
                </CardTitle>
                <CardDescription>
                  Collaborative task management application with real-time
                  updates, drag-and-drop functionality, and team collaboration
                  features.
                </CardDescription>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-1" />
            </div>
            <div className="flex gap-2 pt-2">
              <Badge variant="secondary">Next.js</Badge>
              <Badge variant="secondary">WebSocket</Badge>
              <Badge variant="secondary">Prisma</Badge>
            </div>
          </CardHeader>
        </Card>
        <Card className="hover:shadow-lg transition-shadow">
          <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-t-lg"></div>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <CardTitle className="text-xl hover:text-primary transition-colors">
                  <Link href="/projects/analytics-dashboard">
                    Analytics Dashboard
                  </Link>
                </CardTitle>
                <CardDescription>
                  Real-time analytics dashboard with interactive charts, data
                  visualization, and customizable reporting features.
                </CardDescription>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-1" />
            </div>
            <div className="flex gap-2 pt-2">
              <Badge variant="secondary">Vue.js</Badge>
              <Badge variant="secondary">D3.js</Badge>
              <Badge variant="secondary">MongoDB</Badge>
            </div>
          </CardHeader>
        </Card>
      </div>
    </section>
  );
}
