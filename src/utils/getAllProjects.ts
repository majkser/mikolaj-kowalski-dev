import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { ProjectMeta } from '@/types/project';

const projectsDirectory = path.join(process.cwd(), 'src/content/projects');

export function getAllProjects(): ProjectMeta[] {
  const fileNames = fs.readdirSync(projectsDirectory);

  const allProjectsData = fileNames.map((fileName) => {
    // Remove ".mdx" from file name to get slug
    const slug = fileName.replace('.mdx', '');

    // Read markdown file as string
    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const { data } = matter(fileContents);

    return {
      slug,
      ...(data as Omit<ProjectMeta, 'slug'>),
    };
  });

  const sortedProjects = allProjectsData.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return sortedProjects;
}
