import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import { CardProps } from '@/types/card';

export default function ArticleCard({
  href,
  title,
  subtitle,
  tags,
  date,
}: CardProps) {
  return (
    <Link href={href}>
      <Card className="hover:shadow-lg transition-shadow my-5">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <CardTitle className="text-xl hover:text-primary transition-colors">
                {title}
              </CardTitle>
              <p className="text-sm text-muted-foreground">{date}</p>
              <CardDescription>{subtitle}</CardDescription>
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
