import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Projects from '@/components/projects';

export default function RecentProjects() {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-foreground">Recent Projects</h2>
        <Button variant="ghost" asChild>
          <Link href="/projects" className="text-primary">
            View All
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </div>
      <div className="space-y-4">
        <Projects limit={2} />
      </div>
    </section>
  );
}
