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
  timeToRead,
}: CardProps) {
  return (
    <Link href={href}>
      <Card className="hover:shadow-lg transition-shadow my-5 group">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <CardTitle className="text-xl group-hover:text-primary transition-colors break-words">
                {title}
              </CardTitle>
              <CardDescription className="break-words">
                {subtitle}
              </CardDescription>
              {timeToRead && (
                <>
                  <p className="text-sm text-muted-foreground">
                    ~ {timeToRead} {timeToRead === 1 ? 'minute' : 'minutes'}{' '}
                    read
                  </p>
                </>
              )}
              <p className="text-sm text-muted-foreground">{date}</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-1" />
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
}
