import { Card, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Badge } from './ui/badge';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

export default function ProjectCard({
  href,
  title,
  description,
  tags,
  image,
}: {
  href: string;
  title: string;
  description: string;
  tags: string[];
  image: StaticImageData;
}) {
  return (
    <Card className="hover:shadow-lg transition-shadow p-0 pb-6">
      <Image
        src={image}
        alt={title}
        className="aspect-video w-full object-cover"
      />
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <CardTitle className="text-xl hover:text-primary transition-colors">
              <Link href={href}>{title}</Link>
            </CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          <ExternalLink className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-1" />
        </div>
        <div className="flex gap-2 pt-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>
    </Card>
  );
}
