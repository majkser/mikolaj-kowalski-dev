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
        'bg-muted/50 font-bold shadow-2xl rounded-full fixed top-0 left-1/2 transform -translate-x-1/2 z-10 backdrop-blur-sm w-fit mx-auto mt-4 transition-all duration-300',
        isMounted
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 -translate-y-10 pointer-events-none'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-center gap-4 md:gap-12 py-4 mx-4 my-2 text-primary">
          {pathname !== '/' && (
            <Link href="/" className="flex items-center gap-2 relative group">
              <Home className="w-4 h-4" />
              Home
              <div className="absolute mt-6 left-1/2 w-0 h-0.5 bg-primary transform -translate-x-1/2 transition-all duration-300 ease-out group-hover:w-full"></div>
            </Link>
          )}
          {pathname !== '/articles' && (
            <Link
              href="/articles"
              className="flex items-center gap-2 relative group"
            >
              <FileText className="w-4 h-4" />
              Articles
              <div className="absolute mt-6 left-1/2 w-0 h-0.5 bg-primary transform -translate-x-1/2 transition-all duration-300 ease-out group-hover:w-full"></div>
            </Link>
          )}
          {pathname !== '/projects' && (
            <Link
              href="/projects"
              className="flex items-center gap-2 relative group"
            >
              <Code className="w-4 h-4" />
              Projects
              <div className="absolute mt-6 left-1/2 w-0 h-0.5 bg-primary transform -translate-x-1/2 transition-all duration-300 ease-out group-hover:w-full"></div>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
