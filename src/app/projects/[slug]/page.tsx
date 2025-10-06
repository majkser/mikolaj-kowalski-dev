import fs from 'fs';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote/rsc';
import matter from 'gray-matter';
import { Badge } from '@/components/ui/badge';
import { notFound } from 'next/navigation';
import { MdxImage } from '@/components/mdxComponents/mdxImage';
import { FeaturesGrid } from '@/components/mdxComponents/featuresGrid';
import { ProjectCTA } from '@/components/mdxComponents/projectCTA';
import { InfoBox } from '@/components/mdxComponents/infoBox';

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const filePath = path.join(
    process.cwd(),
    'src/content/projects',
    `${slug}.mdx`
  );

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContent = fs.readFileSync(filePath, 'utf8');

  const { data: frontmatter, content } = matter(fileContent);

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <article className="prose lg:prose-xl dark:prose-invert mx-auto">
        <div className="mb-8 border-l-4 border-primary pl-4">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent py-1">
            {frontmatter.title}
          </h1>
          <h2 className="text-2xl mt-0 opacity-80">{frontmatter.subtitle}</h2>
          <div className="flex gap-2 mb-2 mt-4">
            {frontmatter.tags?.map((tag: string) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          {frontmatter.date && (
            <p className="text-muted-foreground mb-6">
              Published on {frontmatter.date}
            </p>
          )}
        </div>
        <div className="mt-8">
          <MDXRemote
            source={content}
            components={{ MdxImage, FeaturesGrid, ProjectCTA, InfoBox }}
          />
        </div>
      </article>
    </div>
  );
}
