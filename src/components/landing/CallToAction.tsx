import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="text-center py-16">
      <div className="max-w-2xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold text-foreground">
          Let's Build Something Amazing Together
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          I'm always interested in new opportunities and exciting projects.
          Whether you have a question about my work or want to collaborate, I'd
          love to hear from you.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="mailto:john@example.com">
              Get In Touch
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
