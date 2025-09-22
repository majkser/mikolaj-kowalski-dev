import fs from 'fs';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote/rsc';
import matter from 'gray-matter';
import { Badge } from '@/components/ui/badge';
import { notFound } from 'next/navigation';

// Get all article slugs for static generation
export async function generateStaticParams() {
  const files = fs.readdirSync(
    path.join(process.cwd(), 'src/content/articles')
  );

  return files.map((filename) => ({
    slug: filename.replace('.mdx', ''),
  }));
}

// Article page component
export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  console.log('slug: ', slug);

  // Read the MDX file
  const filePath = path.join(
    process.cwd(),
    'src/content/articles',
    `${slug}.mdx`
  );

  // Check if file exists
  if (!fs.existsSync(filePath)) {
    notFound();
  }

  // Read the file content
  const fileContent = fs.readFileSync(filePath, 'utf8');

  // Parse the frontmatter and content
  const { data: frontmatter, content } = matter(fileContent);

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <article className="prose lg:prose-xl dark:prose-invert mx-auto">
        <h1 className="text-4xl font-bold mb-6">{frontmatter.title}</h1>

        <div className="flex gap-2 mb-8">
          {frontmatter.tags?.map((tag: string) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        {frontmatter.date && (
          <p className="text-muted-foreground mb-6">
            Published on {new Date(frontmatter.date).toLocaleDateString()}
          </p>
        )}

        <div className="mt-8">
          <MDXRemote source={content} />
        </div>
      </article>
    </div>
  );
}
