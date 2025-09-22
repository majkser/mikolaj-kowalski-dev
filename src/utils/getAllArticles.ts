import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { ArticleMeta } from '../types/article';

const articlesDirectory = path.join(process.cwd(), 'src/content/articles');

export function getAllArticles(): ArticleMeta[] {
  const fileNames = fs.readdirSync(articlesDirectory);

  const allArticlesData = fileNames.map((fileName) => {
    // Remove ".mdx" from file name to get slug
    const slug = fileName.replace('.mdx', '');

    // Read markdown file as string
    const fullPath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const { data } = matter(fileContents);

    return {
      slug,
      ...(data as Omit<ArticleMeta, 'slug'>),
    };
  });

  const sortedArticles = allArticlesData.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return sortedArticles;
}
