import { StaticImageData } from 'next/image';

export interface CardProps {
  href: string;
  title: string;
  subtitle: string;
  tags: string[];
  date: string;
  image?: StaticImageData | string;
  timeToRead?: number;
}
