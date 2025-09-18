import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  ArrowRight,
  Code,
  FileText,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  MapPin,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import photoCV from '../../public/photo-CV.png';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/20 to-accent/10 flex flex-col items-center justify-center h-screen">
        <div className="container mx-auto px-4 flex flex-col items-center justify-center mt-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>Available for remote work</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
                  Hi, I'm <span className="text-primary">Mikołaj Kowalski</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                  Full-stack developer crafting elegant solutions with modern
                  technologies. Passionate about clean code, user experience,
                  and continuous learning.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href="mailto:john@example.com">
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

              {/* Social Links */}
              <div className="flex gap-4">
                <Button variant="ghost" size="sm" asChild>
                  <Link href="https://github.com" target="_blank">
                    <Github className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="https://linkedin.com" target="_blank">
                    <Linkedin className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Column - Photo and Stats */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Photo Placeholder */}
                <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-border/50 flex items-center justify-center shadow-2xl">
                  <div className="relative overflow-hidden transition-all duration-300 rounded-xl group">
                    <Image
                      src={photoCV}
                      alt="Mikołaj Kowalski"
                      className="w-72 h-72 object-cover rounded-xl transition-all duration-300 group-hover:brightness-110 group-hover:contrast-110 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 rounded-xl border-4 border-transparent group-hover:border-primary/70 transition-all duration-300"></div>
                  </div>
                </div>

                {/* Floating Stats Cards */}
                <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-lg p-4 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">50+</div>
                    <div className="text-xs text-muted-foreground">
                      Projects
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 bg-card border border-border rounded-lg p-4 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">3+</div>
                    <div className="text-xs text-muted-foreground">
                      Years Exp
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground/30 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Navigation Bar */}
      <nav className="bg-muted/50 border-b border-border fixed top-0 left-0 right-0 z-10 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-8 py-4">
            <Link
              href="/articles"
              className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <FileText className="w-4 h-4" />
              Articles
            </Link>
            <Link
              href="/projects"
              className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <Code className="w-4 h-4" />
              Projects
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Featured Articles Section */}
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-foreground">
                Featured Articles
              </h2>
              <Button variant="ghost" asChild>
                <Link
                  href="/articles"
                  className="text-primary hover:text-primary/80"
                >
                  View All
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>

            <div className="space-y-4">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <CardTitle className="text-xl hover:text-primary transition-colors">
                        <Link href="/articles/modern-react-patterns">
                          Modern React Patterns for Scalable Applications
                        </Link>
                      </CardTitle>
                      <CardDescription>
                        Exploring advanced React patterns including compound
                        components, render props, and custom hooks for building
                        maintainable UIs.
                      </CardDescription>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-1" />
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                    <Badge variant="secondary">Architecture</Badge>
                  </div>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <CardTitle className="text-xl hover:text-primary transition-colors">
                        <Link href="/articles/database-optimization">
                          Database Optimization Techniques for High-Traffic Apps
                        </Link>
                      </CardTitle>
                      <CardDescription>
                        Deep dive into indexing strategies, query optimization,
                        and caching mechanisms for improved database
                        performance.
                      </CardDescription>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-1" />
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Badge variant="secondary">PostgreSQL</Badge>
                    <Badge variant="secondary">Performance</Badge>
                    <Badge variant="secondary">Backend</Badge>
                  </div>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <CardTitle className="text-xl hover:text-primary transition-colors">
                        <Link href="/articles/ai-integration">
                          Integrating AI into Web Applications: A Practical
                          Guide
                        </Link>
                      </CardTitle>
                      <CardDescription>
                        Step-by-step guide to incorporating machine learning
                        models and AI APIs into modern web applications.
                      </CardDescription>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-1" />
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Badge variant="secondary">AI/ML</Badge>
                    <Badge variant="secondary">APIs</Badge>
                    <Badge variant="secondary">Integration</Badge>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </section>

          {/* Recent Projects Section */}
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-foreground">
                Recent Projects
              </h2>
              <Button variant="ghost" asChild>
                <Link
                  href="/projects"
                  className="text-primary hover:text-primary/80"
                >
                  View All
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>

            <div className="space-y-4">
              <Card className="hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-t-lg"></div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <CardTitle className="text-xl hover:text-primary transition-colors">
                        <Link href="/projects/ecommerce-platform">
                          E-commerce Platform
                        </Link>
                      </CardTitle>
                      <CardDescription>
                        Full-stack e-commerce solution with React, Node.js, and
                        PostgreSQL. Features include payment processing,
                        inventory management, and admin dashboard.
                      </CardDescription>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-1" />
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">PostgreSQL</Badge>
                  </div>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-accent/10 to-primary/10 rounded-t-lg"></div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <CardTitle className="text-xl hover:text-primary transition-colors">
                        <Link href="/projects/task-management">
                          Task Management App
                        </Link>
                      </CardTitle>
                      <CardDescription>
                        Collaborative task management application with real-time
                        updates, drag-and-drop functionality, and team
                        collaboration features.
                      </CardDescription>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-1" />
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Badge variant="secondary">Next.js</Badge>
                    <Badge variant="secondary">WebSocket</Badge>
                    <Badge variant="secondary">Prisma</Badge>
                  </div>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-t-lg"></div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <CardTitle className="text-xl hover:text-primary transition-colors">
                        <Link href="/projects/analytics-dashboard">
                          Analytics Dashboard
                        </Link>
                      </CardTitle>
                      <CardDescription>
                        Real-time analytics dashboard with interactive charts,
                        data visualization, and customizable reporting features.
                      </CardDescription>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-1" />
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Badge variant="secondary">Vue.js</Badge>
                    <Badge variant="secondary">D3.js</Badge>
                    <Badge variant="secondary">MongoDB</Badge>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </section>
        </div>

        {/* Call to Action */}
        <section className="text-center py-16">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-foreground">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm always interested in new opportunities and exciting projects.
              Whether you have a question about my work or want to collaborate,
              I'd love to hear from you.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="mailto:john@example.com">
                  Get In Touch
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/projects">View All Projects</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground">
              © 2024 John Developer. Built with Next.js and Tailwind CSS.
            </p>
            <div className="flex gap-4">
              <Link
                href="mailto:john@example.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-5 h-5" />
              </Link>
              <Link
                href="https://github.com"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
