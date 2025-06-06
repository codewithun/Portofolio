'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Dummy blog post data
const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with Laravel',
    slug: 'getting-started-with-laravel',
    date: '2023-11-15',
    excerpt:
      'Learn the basics of Laravel framework and how to build your first application with it.',
    tags: ['Laravel', 'PHP', 'Web Development'],
    thumbnail: '/images/blog/laravel.jpg',
  },
  {
    id: 2,
    title: 'Network Infrastructure Essentials',
    slug: 'network-infrastructure-essentials',
    date: '2023-10-22',
    excerpt:
      'Understanding the fundamentals of network infrastructure and its importance in modern applications.',
    tags: ['Networking', 'Infrastructure', 'DevOps'],
    thumbnail: '/images/blog/networking.jpg',
  },
  {
    id: 3,
    title: 'Optimizing Backend Performance',
    slug: 'optimizing-backend-performance',
    date: '2023-09-05',
    excerpt:
      'Tips and techniques to improve the performance of your backend applications.',
    tags: ['Backend', 'Performance', 'Optimization'],
    thumbnail: '/images/blog/performance.jpg',
  },
];

export default function BlogPage() {
  return (
    <div className='min-h-screen bg-white text-gray-800 font-sans'>
      {/* Navigation - Same as Portfolio with Enhanced Visual Style */}
      <header className='sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-sm shadow-sm transition-all duration-300'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex h-16 items-center justify-between'>
            <div className='flex-shrink-0 flex items-center space-x-2 group'>
              <div className='h-8 w-8 rounded-full overflow-hidden border-2 border-red-200 transition-all duration-300 group-hover:border-red-400 shadow-sm'>
                <Image
                  src='/assets/logo.png'
                  alt='Codewithun Logo'
                  width={32}
                  height={32}
                  className='object-cover w-full h-full'
                />
              </div>
              <Link
                href='/'
                className='font-bold text-red-600 text-xl tracking-tight group-hover:text-red-700 transition-all duration-300'
              >
                Codewithun
              </Link>
            </div>
            <nav className='hidden md:flex items-center space-x-8'>
              <Link
                href='/#profile'
                className='text-sm font-medium text-gray-600 hover:text-red-600 transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-red-500 after:transition-all after:duration-300'
              >
                About
              </Link>
              <Link
                href='/#skills'
                className='text-sm font-medium text-gray-600 hover:text-red-600 transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-red-500 after:transition-all after:duration-300'
              >
                Skills
              </Link>
              <Link
                href='/#projects'
                className='text-sm font-medium text-gray-600 hover:text-red-600 transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-red-500 after:transition-all after:duration-300'
              >
                Projects
              </Link>
              <Link
                href='/#experience'
                className='text-sm font-medium text-gray-600 hover:text-red-600 transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-red-500 after:transition-all after:duration-300'
              >
                Experience
              </Link>
              <Link
                href='/#certifications'
                className='text-sm font-medium text-gray-600 hover:text-red-600 transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-red-500 after:transition-all after:duration-300'
              >
                Certifications
              </Link>
              <Link
                href='/blog'
                className='text-sm font-medium text-red-600 transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-2/3 after:bg-red-500 after:transition-all after:duration-300'
              >
                Blog
              </Link>
              <Link
                href='/#contact'
                className='text-sm font-medium text-gray-600 hover:text-red-600 transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-red-500 after:transition-all after:duration-300'
              >
                Contact
              </Link>
            </nav>
            <Button
              variant='ghost'
              size='icon'
              className='md:hidden ml-auto hover:bg-red-50 hover:text-red-600 transition-all'
            >
              <Menu className='h-5 w-5' />
            </Button>
          </div>
        </div>
      </header>

      {/* Blog Header */}
      <section className='py-16 bg-gradient-to-r from-red-50 to-pink-50'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='max-w-3xl mx-auto text-center'
          >
            <h1 className='text-4xl font-bold text-gray-900 mb-4'>Blog</h1>
            <p className='text-lg text-gray-600'>
              Thoughts, insights, and guides on web development, networking, and
              technology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className='py-16'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='h-full'
              >
                <Link href={`/blog/${post.slug}`}>
                  <Card className='h-full flex flex-col rounded-lg shadow-md overflow-hidden border border-gray-200 hover:border-red-200 transition-all duration-300 hover:shadow-lg hover:scale-105 transform cursor-pointer'>
                    <div className='relative h-48 w-full'>
                      <Image
                        src={post.thumbnail}
                        alt={post.title}
                        fill
                        className='object-cover'
                        onError={(e) => {
                          // Fallback image if the specified image fails to load
                          e.currentTarget.src =
                            'https://via.placeholder.com/800x400?text=Blog+Image';
                        }}
                      />
                    </div>
                    <CardHeader>
                      <div className='flex items-center text-sm text-gray-500 mb-2'>
                        <Calendar className='h-4 w-4 mr-1' />
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </time>
                      </div>
                      <CardTitle className='text-xl font-bold text-gray-900 hover:text-red-600 transition-all'>
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className='flex-grow'>
                      <p className='text-gray-600 mb-4'>{post.excerpt}</p>
                      <div className='flex flex-wrap gap-2'>
                        {post.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant='secondary'
                            className='bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all'
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button
                        variant='outline'
                        className='w-full text-red-600 hover:bg-red-50 hover:text-red-700 transition-all'
                      >
                        Read Article
                      </Button>
                    </CardFooter>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className='py-8 text-center'>
        <Link href='/'>
          <Button variant='ghost' className='text-gray-600 hover:text-red-600'>
            Back to Portfolio
          </Button>
        </Link>
      </section>

      {/* Footer */}
      <footer className='bg-white py-12 border-t border-gray-100'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <p className='text-gray-500'>
            © {new Date().getFullYear()} Untara Eka Saputra. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
