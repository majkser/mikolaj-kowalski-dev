import { StaticImageData } from 'next/image';

export interface CardProps {
  href: string;
  title: string;
  description: string;
  tags: string[];
  date: string;
  image?: StaticImageData | string;
}
