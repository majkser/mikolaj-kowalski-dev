import Image from 'next/image';
import { cn } from '@/lib/utils';
import { MdxImageProps } from '@/types/mdxTypes';

export function MdxImage({
  src,
  alt,
  width,
  height,
  className,
}: MdxImageProps) {
  return (
    <div className={cn('my-6', className)}>
      <Image
        src={src}
        alt={alt}
        width={width || 800}
        height={height || 450}
        className="rounded-lg"
      />
    </div>
  );
}
