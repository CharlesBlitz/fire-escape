"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Camera, BookOpen, Users, Eye, TrendingUp, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const statsCards = [
  {
    title: 'Total Videos',
    value: '12',
    change: '+2 this month',
    icon: Play,
    color: 'text-red-600',
    bgColor: 'bg-red-100',
  },
  {
    title: 'Photo Galleries',
    value: '8',
    change: '+1 this week',
    icon: Camera,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    title: 'Blog Posts',
    value: '24',
    change: '+3 this month',
    icon: BookOpen,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
  {
    title: 'Page Views',
    value: '1,247',
    change: '+12% this week',
    icon: Eye,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
  },
];

const quickActions = [
  {
    title: 'Add New Video',
    description: 'Upload and embed a new YouTube video',
    href: '/admin/videos/new',
    icon: Play,
    color: 'fire-gradient',
  },
  {
    title: 'Create Gallery',
    description: 'Start a new photo gallery',
    href: '/admin/galleries/new',
    icon: Camera,
    color: 'toy-gradient',
  },
  {
    title: 'Write Blog Post',
    description: 'Create a new blog article',
    href: '/admin/blogs/new',
    icon: BookOpen,
    color: 'brand-gradient',
  },
];

const recentActivity = [
  {
    id: 1,
    action: 'Video Published',
    title: 'Epic Toy Adventure: Exploring the Magical Castle',
    time: '2 hours ago',
    icon: Play,
  },
  {
    id: 2,
    action: 'Gallery Created',
    title: 'Toy Collection Showcase',
    time: '1 day ago',
    icon: Camera,
  },
  {
    id: 3,
    action: 'Blog Post Published',
    title: 'The Evolution of Toy Design',
    time: '3 days ago',
    icon: BookOpen,
  },
];

export default function AdminDashboard() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-pink-500 to-orange-500 rounded-2xl p-8 text-white"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">
              Welcome back! 👋
            </h1>
            <p className="text-lg opacity-90">
              Ready to create amazing content for FireEscapeToys?
            </p>
            <p className="text-sm opacity-75 mt-2">
              {currentTime.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })} • {currentTime.toLocaleTimeString()}
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100"
              asChild
            >
              <Link href="/" target="_blank">
                <Eye className="w-5 h-5 mr-2" />
                View Live Site
              </Link>
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsCards.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 mb-1">
                        {stat.title}
                      </p>
                      <p className="text-3xl font-bold text-gray-900">
                        {stat.value}
                      </p>
                      <p className="text-sm text-green-600 mt-1">
                        {stat.change}
                      </p>
                    </div>
                    <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                      <Icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5" />
                <span>Quick Actions</span>
              </CardTitle>
              <CardDescription>
                Create new content quickly and efficiently
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {quickActions.map((action) => {
                const Icon = action.icon;
                return (
                  <Button
                    key={action.title}
                    variant="outline"
                    className="w-full h-auto p-4 justify-start text-left hover:shadow-md transition-shadow"
                    asChild
                  >
                    <Link href={action.href}>
                      <div className={`p-2 rounded-lg ${action.color} mr-4`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold">{action.title}</p>
                        <p className="text-sm text-gray-600">{action.description}</p>
                      </div>
                    </Link>
                  </Button>
                );
              })}
            </CardContent>
          </Card>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Recent Activity</span>
              </CardTitle>
              <CardDescription>
                Your latest content updates and changes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => {
                  const Icon = activity.icon;
                  return (
                    <div key={activity.id} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="p-2 bg-gray-100 rounded-lg">
                        <Icon className="w-4 h-4 text-gray-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">
                          {activity.action}
                        </p>
                        <p className="text-sm text-gray-600 truncate">
                          {activity.title}
                        </p>
                      </div>
                      <div className="text-xs text-gray-500">
                        {activity.time}
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}