"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Camera, BookOpen, Calendar, Clock, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import Image from 'next/image';

// Mock data - replace with actual API calls
const mockVideos = [
  {
    id: '1',
    title: 'Epic Toy Adventure: Exploring the Magical Castle',
    description: 'Join us as we explore an amazing toy castle with hidden secrets and surprises!',
    youtube_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    thumbnail_url: 'https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg',
    created_at: '2024-01-15T10:00:00Z',
  },
  {
    id: '2',
    title: 'Building the Ultimate LEGO City',
    description: 'Watch us create an incredible LEGO metropolis from scratch!',
    youtube_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    thumbnail_url: 'https://images.pexels.com/photos/1619650/pexels-photo-1619650.jpeg',
    created_at: '2024-01-12T15:30:00Z',
  },
];

const mockGalleries = [
  {
    id: '1',
    title: 'Toy Collection Showcase',
    description: 'Our amazing collection of rare and vintage toys',
    images: [
      { url: 'https://images.pexels.com/photos/264905/pexels-photo-264905.jpeg', caption: 'Vintage Cars' },
      { url: 'https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg', caption: 'Action Figures' },
    ],
    created_at: '2024-01-10T12:00:00Z',
  },
];

const mockBlogs = [
  {
    id: '1',
    title: 'The Evolution of Toy Design: From Simple to Smart',
    excerpt: 'Discover how toys have evolved over the decades, from simple wooden blocks to AI-powered interactive companions.',
    featured_image: 'https://images.pexels.com/photos/1619650/pexels-photo-1619650.jpeg',
    created_at: '2024-01-08T09:00:00Z',
  },
];

export function FeaturedContent() {
  const [activeTab, setActiveTab] = useState('videos');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Featured{' '}
            <span className="bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent">
              Content
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our latest videos, stunning photo galleries, and engaging blog posts
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-1 shadow-lg">
            {[
              { id: 'videos', label: 'Videos', icon: Play },
              { id: 'galleries', label: 'Galleries', icon: Camera },
              { id: 'blogs', label: 'Blogs', icon: BookOpen },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-primary text-white shadow-md'
                      : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {activeTab === 'videos' &&
            mockVideos.map((video) => (
              <motion.div key={video.id} variants={itemVariants}>
                <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={video.thumbnail_url}
                      alt={video.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-8 h-8 text-primary ml-1" />
                      </div>
                    </div>
                    <Badge className="absolute top-4 left-4 bg-red-500 hover:bg-red-600">
                      Video
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {video.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(video.created_at).toLocaleDateString()}</span>
                      </div>
                      <Button size="sm" asChild>
                        <Link href={`/videos/${video.id}`}>Watch Now</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

          {activeTab === 'galleries' &&
            mockGalleries.map((gallery) => (
              <motion.div key={gallery.id} variants={itemVariants}>
                <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <div className="relative aspect-video overflow-hidden">
                    <div className="grid grid-cols-2 h-full gap-1">
                      {gallery.images.slice(0, 4).map((image, index) => (
                        <div key={index} className="relative overflow-hidden">
                          <Image
                            src={image.url}
                            alt={image.caption}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          {index === 3 && gallery.images.length > 4 && (
                            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                              <span className="text-white font-bold text-lg">
                                +{gallery.images.length - 4}
                              </span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    <Badge className="absolute top-4 left-4 bg-blue-500 hover:bg-blue-600">
                      Gallery
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {gallery.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {gallery.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Camera className="w-3 h-3" />
                        <span>{gallery.images.length} photos</span>
                      </div>
                      <Button size="sm" asChild>
                        <Link href={`/gallery/${gallery.id}`}>View Gallery</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

          {activeTab === 'blogs' &&
            mockBlogs.map((blog) => (
              <motion.div key={blog.id} variants={itemVariants}>
                <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={blog.featured_image}
                      alt={blog.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <Badge className="absolute top-4 left-4 bg-green-500 hover:bg-green-600">
                      Blog
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{new Date(blog.created_at).toLocaleDateString()}</span>
                      </div>
                      <Button size="sm" asChild>
                        <Link href={`/blog/${blog.id}`}>Read More</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button size="lg" className="fire-gradient text-white" asChild>
            <Link href={`/${activeTab}`}>
              View All {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}