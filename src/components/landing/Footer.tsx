import { Mail, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-muted/40 to-muted/20 border-t border-border relative">
      <div className="container mx-auto px-4 py-12 text-center text-foreground">
        <div className="flex justify-around items-center flex-col md:flex-row gap-6">
          <h3 className="text-lg font-semibold mb-2">
            © 2025 Mikołaj Kowalski. All rights reserved.
          </h3>
          <div className="flex gap-8">
            <div className="relative group">
              <Link
                href="https://www.linkedin.com/in/miko%C5%82aj-kowalski-ab1b1531a/"
                target="_blank"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-background/80 hover:bg-primary/20 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5 group-hover:text-primary group-hover:scale-110 transition-transform" />
              </Link>
            </div>
            <div className="relative group">
              <Link
                href="https://github.com/majkser"
                target="_blank"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-background/80 hover:bg-primary/20 transition-all duration-300"
              >
                <Github className="w-5 h-5 group-hover:text-primary group-hover:scale-110 transition-transform" />
              </Link>
            </div>
            <div className="relative group">
              <Link
                href="mailto:mikser.kowalski@gmail.com"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-background/80 hover:bg-primary/20 transition-all duration-300"
              >
                <Mail className="w-5 h-5 group-hover:text-primary group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
