import { Button } from '@/components/ui/button';
import ArticleCard from '@/components/articleCard';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function FeaturedArticles() {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-foreground">
          Featured Articles
        </h2>
        <Button variant="ghost" asChild>
          <Link href="/articles" className="text-primary hover:text-primary/80">
            View All
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </div>
      <div className="space-y-4">
        <ArticleCard
          href="/articles/modern-react-patterns"
          title="Modern React Patterns for Scalable Applications"
          description="Exploring advanced React patterns including compound components, render props, and custom hooks for building maintainable UIs."
          tags={['React', 'TypeScript', 'Architecture']}
        />
        <ArticleCard
          href="/articles/modern-react-patterns"
          title="Modern React Patterns for Scalable Applications"
          description="Exploring advanced React patterns including compound components, render props, and custom hooks for building maintainable UIs."
          tags={['React', 'TypeScript', 'Architecture']}
        />
        <ArticleCard
          href="/articles/modern-react-patterns"
          title="Modern React Patterns for Scalable Applications"
          description="Exploring advanced React patterns including compound components, render props, and custom hooks for building maintainable UIs."
          tags={['React', 'TypeScript', 'Architecture']}
        />
      </div>
    </section>
  );
}
