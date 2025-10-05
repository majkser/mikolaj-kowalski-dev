import { getAllArticles } from '../../utils/getAllArticles';
import Articles from '@/components/articles';

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <div className="bg-gradient-to-b from-background to-primary/25 min-h-screen">
      <div className="container mx-auto px-4 pt-16 pb-24">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 pb-2">
            Articles
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Thoughts, tutorials and insights on web development, programming,
            and technology
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Articles />
        </div>
      </div>
    </div>
  );
}
