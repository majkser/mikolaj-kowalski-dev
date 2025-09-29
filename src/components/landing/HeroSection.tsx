import { Button } from '@/components/ui/button';
import { Mail, Download, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';
import PhotoAndStats from './photoAndStats';
import ScrollIndicator from './scrollIndicator';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/20 to-accent/10 flex flex-col items-center justify-center min-h-screen w-full">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center my-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
                Hi, I'm <span className="text-primary">Mikołaj Kowalski</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Full-stack developer crafting elegant solutions with modern
                technologies. Passionate about clean code, user experience, and
                continuous learning.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 items-center justify-center lg:justify-start">
              <Button size="lg" asChild>
                <Link href="mailto:mikser.kowalski@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/cv.pdf" target="_blank">
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Link>
              </Button>
            </div>
            <div className="flex gap-12 items-center justify-center lg:justify-start">
              <Button variant="ghost" size="sm" className="scale-175" asChild>
                <Link href="https://github.com/majkser" target="_blank">
                  <Github className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="sm" className="scale-175" asChild>
                <Link
                  href="https://www.linkedin.com/in/miko%C5%82aj-kowalski-ab1b1531a"
                  target="_blank"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
          <PhotoAndStats />
        </div>
      </div>
      <ScrollIndicator />
    </section>
  );
}
