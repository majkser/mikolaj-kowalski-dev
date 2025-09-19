import HeroSection from '@/components/landing/HeroSection';
import FeaturedArticles from '@/components/landing/FeaturedArticles';
import RecentProjects from '@/components/landing/RecentProjects';
import CallToAction from '@/components/landing/CallToAction';
import Footer from '@/components/landing/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <main className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          <FeaturedArticles />
          <RecentProjects />
        </div>
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
