import { Button } from '@/components/ui/button';
import ArticleCard from '@/components/articleCard';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { getAllArticles } from '../../utils/getAllArticles';

export default function FeaturedArticles() {
  const allArticles = getAllArticles();

  //limit to the 5 articles displayed on the main page
  const articles = allArticles.slice(0, 5);
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
      <div className="space-y-5">
        {articles.map((article) => (
          <ArticleCard
            key={article.slug}
            href={`/articles/${article.slug}`}
            title={article.title}
            description={article.description}
            tags={article.tags}
            date={article.date}
          />
        ))}
      </div>
    </section>
  );
}
