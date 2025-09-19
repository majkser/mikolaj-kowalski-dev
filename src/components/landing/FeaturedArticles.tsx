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
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <CardTitle className="text-xl hover:text-primary transition-colors">
                  <Link href="/articles/modern-react-patterns">
                    Modern React Patterns for Scalable Applications
                  </Link>
                </CardTitle>
                <CardDescription>
                  Exploring advanced React patterns including compound
                  components, render props, and custom hooks for building
                  maintainable UIs.
                </CardDescription>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-1" />
            </div>
            <div className="flex gap-2 pt-2">
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="secondary">Architecture</Badge>
            </div>
          </CardHeader>
        </Card>
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <CardTitle className="text-xl hover:text-primary transition-colors">
                  <Link href="/articles/database-optimization">
                    Database Optimization Techniques for High-Traffic Apps
                  </Link>
                </CardTitle>
                <CardDescription>
                  Deep dive into indexing strategies, query optimization, and
                  caching mechanisms for improved database performance.
                </CardDescription>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-1" />
            </div>
            <div className="flex gap-2 pt-2">
              <Badge variant="secondary">PostgreSQL</Badge>
              <Badge variant="secondary">Performance</Badge>
              <Badge variant="secondary">Backend</Badge>
            </div>
          </CardHeader>
        </Card>
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <CardTitle className="text-xl hover:text-primary transition-colors">
                  <Link href="/articles/ai-integration">
                    Integrating AI into Web Applications: A Practical Guide
                  </Link>
                </CardTitle>
                <CardDescription>
                  Step-by-step guide to incorporating machine learning models
                  and AI APIs into modern web applications.
                </CardDescription>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-1" />
            </div>
            <div className="flex gap-2 pt-2">
              <Badge variant="secondary">AI/ML</Badge>
              <Badge variant="secondary">APIs</Badge>
              <Badge variant="secondary">Integration</Badge>
            </div>
          </CardHeader>
        </Card>
      </div>
    </section>
  );
}
