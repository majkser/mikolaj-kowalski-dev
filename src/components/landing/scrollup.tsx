'use client';

import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

export default function ScrollUp() {
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
    <div>
      <button
        className={cn(
          'fixed bottom-8 right-8 p-2 bg-primary text-white rounded-full shadow-lg hover:cursor-pointer hover:scale-105 hover:bg-primary/80 transition-all duration-300 z-10',
          isMounted
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 translate-x-10 pointer-events-none'
        )}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-8 h-8 m-auto" />
      </button>
    </div>
  );
}
