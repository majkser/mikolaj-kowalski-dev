import { getAllArticles } from '@/utils/getAllArticles';
import ArticleCard from '@/components/articleCard';
import { timeToRead } from '@/utils/timeToRead';

export default function Articles({ limit }: { limit?: number }) {
  const articles = getAllArticles();

  limit = limit || Number.MAX_SAFE_INTEGER;

  return (
    <>
      {articles.slice(0, limit).map((article) => (
        <ArticleCard
          key={article.slug}
          href={`/articles/${article.slug}`}
          title={article.title}
          subtitle={article.subtitle}
          tags={article.tags}
          date={article.date}
          timeToRead={timeToRead(article.content)}
        />
      ))}
    </>
  );
}
