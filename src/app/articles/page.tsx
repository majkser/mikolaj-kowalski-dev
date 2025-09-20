import ArticleCard from '@/components/articleCard';

export default function page() {
  return (
    <div className="bg-gradient-to-b from-background to-muted/30 min-h-screen pb-16">
      <div className="container mx-auto px-4 pt-16 pb-24">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Articles
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Thoughts, tutorials and insights on web development, programming,
            and technology
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ArticleCard
            href="/articles/modern-react-patterns"
            title="Modern React Patterns for Scalable Applications"
            description="Exploring advanced React patterns including compound components, render props, and custom hooks for building maintainable UIs."
            tags={['React', 'TypeScript', 'Architecture']}
          />
          <ArticleCard
            href="/articles/database-optimization"
            title="Database Optimization Techniques for High-Traffic Apps"
            description="Deep dive into indexing strategies, query optimization, and caching mechanisms for improved database performance."
            tags={['PostgreSQL', 'Performance', 'Backend']}
          />
          <ArticleCard
            href="/articles/ai-integration"
            title="Integrating AI into Web Applications: A Practical Guide"
            description="Step-by-step guide to incorporating machine learning models and AI APIs into modern web applications."
            tags={['AI/ML', 'APIs', 'Integration']}
          />
          <ArticleCard
            href="/articles/secure-authentication"
            title="Building Secure Authentication Systems with OAuth2 and JWT"
            description="Comprehensive overview of implementing secure authentication using OAuth2 and JSON Web Tokens in web applications."
            tags={['Security', 'OAuth2', 'JWT']}
          />
        </div>
      </div>
    </div>
  );
}
