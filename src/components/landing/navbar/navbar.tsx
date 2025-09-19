'use client';

import { FileText, Code, Home } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsMounted(true);
      } else {
        setIsMounted(false);
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        'bg-muted/50 font-bold border-b border-border rounded-full fixed top-0 left-1/2 transform -translate-x-1/2 z-10 backdrop-blur-sm w-fit mx-auto mt-4 transition-all duration-300',
        isMounted
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 -translate-y-10 pointer-events-none'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-center gap-8 py-4 text-primary">
          {pathname !== '/articles' && (
            <Link
              href="/articles"
              className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-accent transition-colors"
            >
              <FileText className="w-4 h-4" />
              Articles
            </Link>
          )}
          {pathname !== '/projects' && (
            <Link
              href="/projects"
              className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-accent transition-colors"
            >
              <Code className="w-4 h-4" />
              Projects
            </Link>
          )}
          {pathname !== '/' && (
            <Link
              href="/"
              className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-accent transition-colors"
            >
              <Home className="w-4 h-4" />
              Home
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
