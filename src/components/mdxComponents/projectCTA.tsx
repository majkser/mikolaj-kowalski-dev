import { ProjectCTAProps } from '@/types/mdxTypes';

export function ProjectCTA({ url, label }: ProjectCTAProps) {
  return (
    <div className="my-12 text-center">
      <a
        href={url}
        className="inline-block px-8 py-3 font-semibold text-white bg-gradient-to-r from-primary to-accent rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
      </a>
    </div>
  );
}
