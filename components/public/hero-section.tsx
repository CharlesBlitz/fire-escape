"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const heroImages = [
  'https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg',
  'https://images.pexels.com/photos/1619650/pexels-photo-1619650.jpeg',
  'https://images.pexels.com/photos/264905/pexels-photo-264905.jpeg',
];

export function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: currentImage === index ? 1 : 0 }}
            transition={{ duration: 1 }}
          />
        ))}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Star className="w-6 h-6 text-yellow-400 fill-current" />
            <span className="text-yellow-400 font-medium">Adventure Awaits!</span>
            <Star className="w-6 h-6 text-yellow-400 fill-current" />
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-pink-400 via-red-400 to-orange-400 bg-clip-text text-transparent">
              FireEscapeToys
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Join us on exciting adventures filled with toys, games, and endless family fun! 
            Discover amazing content that brings joy to kids and parents alike.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-8">
            <Button
              size="lg"
              className="group fire-gradient hover:shadow-lg hover:shadow-pink-500/25 text-white border-0 px-8 py-4 text-lg font-semibold"
              asChild
            >
              <Link href="/videos">
                <Play className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform" />
                Watch Videos
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 px-8 py-4 text-lg font-semibold"
              asChild
            >
              <Link href="/gallery">
                Explore Gallery
              </Link>
            </Button>
          </div>

          <div className="pt-12">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block"
            >
              <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/60 rounded-full mt-2" />
              </div>
            </motion.div>
            <p className="text-white/60 text-sm mt-2">Scroll to explore</p>
          </div>
        </motion.div>
      </div>

      {/* Image indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              currentImage === index ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentImage(index)}
          />
        ))}
      </div>
    </section>
  );
}