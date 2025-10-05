import { Card, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Badge } from './ui/badge';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { CardProps } from '@/types/card';

export default function ProjectCard({
  href,
  title,
  subtitle,
  tags,
  image,
  date,
}: CardProps) {
  return (
    <Link href={href}>
      <Card className="hover:shadow-lg transition-shadow p-0 pb-6 my-5">
        {image && (
          <Image
            src={image}
            alt={title}
            width={500}
            height={200}
            className="aspect-video w-full object-cover"
          />
        )}
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <CardTitle className="text-xl hover:text-primary transition-colors">
                {title}
              </CardTitle>
              <CardDescription>{subtitle}</CardDescription>
              <p className="text-sm text-muted-foreground">{date}</p>
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
    </Link>
  );
}
