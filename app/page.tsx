import { Navbar } from '@/components/public/navbar';
import { Footer } from '@/components/public/footer';
import { HeroSection } from '@/components/public/hero-section';
import { FeaturedContent } from '@/components/public/featured-content';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturedContent />
      <Footer />
    </main>
  );
}