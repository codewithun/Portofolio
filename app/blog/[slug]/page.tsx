'use client';

import { useEffect, useState, useRef } from 'react';
import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Calendar,
  ArrowLeft,
  Clock,
  ChevronRight,
  ChevronDown,
  Menu,
} from 'lucide-react';

// Dummy blog post data (same as in blog/page.tsx for consistency)
const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with Laravel',
    slug: 'getting-started-with-laravel',
    date: '2023-11-15',
    author: 'Untara Eka Saputra',
    readTime: '5 min read',
    excerpt:
      'Learn the basics of Laravel framework and how to build your first application with it.',
    tags: ['Laravel', 'PHP', 'Web Development'],
    thumbnail: '/images/blog/laravel.jpg',
    content: `
      # Getting Started with Laravel

      Laravel is a powerful PHP framework with elegant syntax. It aims to make the development process a pleasing one for developers.

      ## Why Choose Laravel?

      Laravel offers a rich set of features right out of the box including routing, authentication, caching, and much more. Here are some key benefits:

      * **Elegant Syntax** - Laravel's syntax is expressive and intuitive
      * **MVC Architecture** - Clear separation between logic and presentation
      * **Robust Ecosystem** - Rich set of tools like Artisan CLI, migrations, etc.
      * **Active Community** - Large community offering support and packages

      ### The Elegant Syntax

      Laravel's code is easy to read and understand. Here's an example of a route definition:

      \`\`\`php
      Route::get('/welcome', function () {
          return view('welcome');
      });
      \`\`\`

      ### MVC Architecture Benefits

      The Model-View-Controller pattern helps organize code effectively.

      ## Setting Up Your First Laravel Project

      Getting started with Laravel is easy. First, ensure you have Composer installed, then run:

      \`\`\`bash
      composer create-project laravel/laravel my-project
      cd my-project
      php artisan serve
      \`\`\`

      ### Installation Requirements

      Before installing Laravel, make sure your environment meets these requirements:
      
      * PHP >= 8.1
      * Composer
      * Node.js & NPM (for frontend assets)

      ### Configuration

      After installation, you'll need to set up your environment variables in the .env file.

      ## Basic Routing

      Laravel's routing is simple yet powerful. Here's how you can define a basic route:

      \`\`\`php
      Route::get('/welcome', function () {
          return view('welcome');
      });
      \`\`\`

      ### Route Parameters

      You can capture segments of the URI using route parameters:

      \`\`\`php
      Route::get('/user/{id}', function ($id) {
          return 'User '.$id;
      });
      \`\`\`

      ## Creating Controllers

      Controllers help organize your code better:

      \`\`\`bash
      php artisan make:controller WelcomeController
      \`\`\`

      ### Resource Controllers

      Resource controllers make it easy to build RESTful controllers:

      \`\`\`bash
      php artisan make:controller PhotoController --resource
      \`\`\`

      ## Working with Databases

      Laravel makes database operations simpler with migrations and Eloquent ORM.

      ### Database Migrations

      Create tables and modify your database schema using migrations:

      \`\`\`bash
      php artisan make:migration create_users_table
      \`\`\`

      ### Eloquent ORM

      Laravel's Eloquent ORM provides a beautiful ActiveRecord implementation:

      \`\`\`php
      class User extends Model
      {
          // Model definition
      }

      // Using the model
      $users = User::all();
      \`\`\`

      ## Summary

      Laravel provides an incredible development experience with its rich feature set and elegant syntax. Getting started is simple, and the learning curve is quite manageable for developers with some PHP background.

      In future articles, we'll dive deeper into Laravel's advanced features like Eloquent ORM, middleware, and testing.
    `,
  },
  {
    id: 2,
    title: 'Network Infrastructure Essentials',
    slug: 'network-infrastructure-essentials',
    date: '2023-10-22',
    author: 'Untara Eka Saputra',
    readTime: '7 min read',
    excerpt:
      'Understanding the fundamentals of network infrastructure and its importance in modern applications.',
    tags: ['Networking', 'Infrastructure', 'DevOps'],
    thumbnail: '/images/blog/networking.jpg',
    content: `
      # Network Infrastructure Essentials

      Network infrastructure forms the backbone of modern applications. Understanding its components is crucial for any developer or IT professional.

      ## Key Components

      A robust network infrastructure includes several key components:

      * **Routers** - Direct traffic between different networks
      * **Switches** - Connect devices within the same network
      * **Firewalls** - Protect against unauthorized access
      * **Load Balancers** - Distribute traffic across multiple servers
      * **DNS Servers** - Translate domain names to IP addresses

      ## Network Topology Types

      The physical and logical arrangement of network elements defines its topology:

      1. **Star Topology** - All devices connect to a central hub
      2. **Mesh Topology** - Devices connect to multiple other devices
      3. **Bus Topology** - All devices connect to a single backbone
      4. **Ring Topology** - Devices connect in a circular fashion

      ## Network Security Considerations

      Security is paramount in network infrastructure:

      - Implement proper firewall rules
      - Use VPNs for secure remote access
      - Regularly update and patch systems
      - Monitor network traffic for unusual patterns
      - Implement proper access controls

      ## Cloud vs On-Premise Infrastructure

      Modern applications often use a hybrid approach:

      | Aspect | Cloud | On-Premise |
      |--------|-------|------------|
      | Cost | OpEx model | CapEx model |
      | Scalability | Highly scalable | Limited by hardware |
      | Maintenance | Provider managed | Self-managed |
      | Security | Shared responsibility | Full control |

      Understanding these fundamentals helps in making informed decisions about your application's infrastructure needs.
    `,
  },
  {
    id: 3,
    title: 'Optimizing Backend Performance',
    slug: 'optimizing-backend-performance',
    date: '2023-09-05',
    author: 'Untara Eka Saputra',
    readTime: '6 min read',
    excerpt:
      'Tips and techniques to improve the performance of your backend applications.',
    tags: ['Backend', 'Performance', 'Optimization'],
    thumbnail: '/images/blog/performance.jpg',
    content: `
      # Optimizing Backend Performance

      Performance is critical for modern applications. Sluggish backends lead to poor user experiences and can impact business metrics significantly.

      ## Database Optimization Techniques

      The database is often the bottleneck in web applications:

      * **Indexing** - Properly index tables based on query patterns
      * **Query Optimization** - Rewrite inefficient queries
      * **Connection Pooling** - Reuse database connections
      * **Caching** - Implement result caching for frequent queries
      * **Denormalization** - When appropriate, denormalize for read performance

      ## Caching Strategies

      Caching dramatically improves performance:

      1. **Application Cache** - Cache computed results
      2. **Database Query Cache** - Cache query results
      3. **Object Cache** - Cache frequently used objects
      4. **CDN** - Cache static assets at edge locations
      5. **Distributed Cache** - Use Redis or Memcached for scaling

      ## Code Level Optimization

      Optimize your code for better performance:

      \`\`\`javascript
      // Instead of this
      const result = array.filter(item => item.active).map(item => item.name);

      // Do this (single iteration)
      const result = array.reduce((names, item) => {
        if (item.active) names.push(item.name);
        return names;
      }, []);
      \`\`\`

      ## Load Testing and Benchmarking

      Regular performance testing is essential:

      - Establish performance baselines
      - Test with realistic loads
      - Identify bottlenecks systematically
      - Monitor key metrics (response time, throughput, error rate)
      - Automate performance regression testing

      By implementing these strategies, you can significantly improve your backend's performance, leading to better user experiences and potentially lower infrastructure costs.
    `,
  },
];

// Function to extract headings from content
const extractHeadings = (content: string) => {
  const headings: { level: number; text: string; id: string }[] = [];
  const lines = content.split('\n');

  lines.forEach((line) => {
    const trimmedLine = line.trim();
    // Match h2 headings (##)
    if (trimmedLine.startsWith('## ')) {
      headings.push({
        level: 2,
        text: trimmedLine.substring(3),
        id: trimmedLine
          .substring(3)
          .toLowerCase()
          .replace(/[^\w\s]/gi, '')
          .replace(/\s+/g, '-'),
      });
    }
    // Match h3 headings (###)
    else if (trimmedLine.startsWith('### ')) {
      headings.push({
        level: 3,
        text: trimmedLine.substring(4),
        id: trimmedLine
          .substring(4)
          .toLowerCase()
          .replace(/[^\w\s]/gi, '')
          .replace(/\s+/g, '-'),
      });
    }
  });

  return headings;
};

// Function to generate content with anchors for headings
const generateContentWithAnchors = (content: string) => {
  const lines = content.split('\n');
  let newContent: string[] = [];

  lines.forEach((line) => {
    const trimmedLine = line.trim();
    // Add id attribute to h2 headings
    if (trimmedLine.startsWith('## ')) {
      const headingText = trimmedLine.substring(3);
      const headingId = headingText
        .toLowerCase()
        .replace(/[^\w\s]/gi, '')
        .replace(/\s+/g, '-');
      newContent.push(
        `<h2 id="${headingId}" class="text-2xl font-bold mt-8 mb-4 pt-2">${headingText}</h2>`
      );
    }
    // Add id attribute to h3 headings
    else if (trimmedLine.startsWith('### ')) {
      const headingText = trimmedLine.substring(4);
      const headingId = headingText
        .toLowerCase()
        .replace(/[^\w\s]/gi, '')
        .replace(/\s+/g, '-');
      newContent.push(
        `<h3 id="${headingId}" class="text-xl font-bold mt-6 mb-3 pt-2">${headingText}</h3>`
      );
    }
    // Format h1 heading
    else if (trimmedLine.startsWith('# ')) {
      const headingText = trimmedLine.substring(2);
      newContent.push(
        `<h1 class="text-3xl font-bold mt-10 mb-5">${headingText}</h1>`
      );
    }
    // Format unordered list item
    else if (trimmedLine.startsWith('* ')) {
      newContent.push(
        `<li class="ml-6 list-disc my-1">${trimmedLine.substring(2)}</li>`
      );
    }
    // Format numbered list item
    else if (trimmedLine.match(/^\d+\.\s/)) {
      newContent.push(
        `<li class="ml-6 list-decimal my-1">${trimmedLine.substring(
          trimmedLine.indexOf(' ') + 1
        )}</li>`
      );
    }
    // Format code block
    else if (trimmedLine.startsWith('```') && trimmedLine.length > 3) {
      const language = trimmedLine.substring(3);
      newContent.push(
        `<pre class="bg-gray-50 rounded-md p-4 my-4 font-mono text-sm overflow-x-auto"><code class="language-${language}">// ${language} code block</code></pre>`
      );
    }
    // End of code block
    else if (trimmedLine === '```') {
      newContent.push('</pre>');
    }
    // Format paragraph
    else if (trimmedLine) {
      newContent.push(
        `<p class="my-3 text-gray-700 leading-relaxed">${trimmedLine}</p>`
      );
    }
  });

  return newContent.join('');
};

export default function BlogPostPage() {
  const params = useParams();
  const slug = params?.slug as string;

  // Find the blog post that matches the slug
  const post = blogPosts.find((post) => post.slug === slug);

  // If no matching post is found, return 404
  if (!post) {
    notFound();
  }

  // Extract headings for Table of Contents
  const headings = extractHeadings(post.content);

  // Generate content with anchor IDs
  const contentWithAnchors = generateContentWithAnchors(post.content);

  // State for active heading in TOC
  const [activeHeading, setActiveHeading] = useState('');
  // State for mobile TOC visibility
  const [showTocMobile, setShowTocMobile] = useState(false);

  // Refs for section headings
  const headingRefs = useRef<{ [key: string]: HTMLElement }>({});

  // Track if we should highlight parent when child is active
  const [activeParent, setActiveParent] = useState('');

  useEffect(() => {
    // Find parent heading for current active heading (if it's an h3)
    const findParentHeading = () => {
      if (!activeHeading) return;

      const activeHeadingObj = headings.find((h) => h.id === activeHeading);
      if (activeHeadingObj && activeHeadingObj.level === 3) {
        // Find the most recent h2 before this h3
        const activeIndex = headings.findIndex((h) => h.id === activeHeading);
        for (let i = activeIndex - 1; i >= 0; i--) {
          if (headings[i].level === 2) {
            setActiveParent(headings[i].id);
            return;
          }
        }
      } else if (activeHeadingObj && activeHeadingObj.level === 2) {
        setActiveParent(activeHeading);
      }
    };

    findParentHeading();
  }, [activeHeading, headings]);

  useEffect(() => {
    // Register intersection observer for all headings with improved behavior
    const observer = new IntersectionObserver(
      (entries) => {
        // Store all currently intersecting headings
        const intersectingHeadings = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => entry.target.id);

        if (intersectingHeadings.length > 0) {
          // Find the first heading in the document order from the ones that are intersecting
          const orderedHeadings = headings
            .filter((heading) => intersectingHeadings.includes(heading.id))
            .sort((a, b) => {
              const aElement = document.getElementById(a.id);
              const bElement = document.getElementById(b.id);
              if (!aElement || !bElement) return 0;
              return (
                aElement.getBoundingClientRect().top -
                bElement.getBoundingClientRect().top
              );
            });

          if (orderedHeadings.length > 0) {
            setActiveHeading(orderedHeadings[0].id);
          }
        } else if (entries.length === 1 && !entries[0].isIntersecting) {
          // If a single heading just left view, see if we should activate previous
          const exitingId = entries[0].target.id;
          const exitingIndex = headings.findIndex((h) => h.id === exitingId);

          // If scrolling up and heading exits the top, activate it
          if (exitingIndex > 0 && entries[0].boundingClientRect.top > 0) {
            setActiveHeading(exitingId);
          }
        }
      },
      {
        rootMargin: '-80px 0px -80% 0px',
        threshold: [0, 0.1, 0.5, 1],
      }
    );

    // Get all heading elements and observe them
    const headingElements = document.querySelectorAll('h2[id], h3[id]');
    headingElements.forEach((element) => {
      observer.observe(element);
      headingRefs.current[element.id] = element as HTMLElement;
    });

    // Cleanup observer on component unmount
    return () => {
      headingElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, [post.slug, headings]);

  // Scroll to heading when TOC item is clicked
  const scrollToHeading = (headingId: string) => {
    const element = document.getElementById(headingId);
    if (element) {
      // Close mobile TOC if open
      setShowTocMobile(false);

      // Smooth scroll to element
      window.scrollTo({
        top: element.offsetTop - 100, // Offset for header
        behavior: 'smooth',
      });

      // Set active heading
      setActiveHeading(headingId);
    }
  };

  // Group headings by their parent headings for better hierarchy display
  const groupedHeadings = headings.reduce((acc, heading) => {
    if (heading.level === 2) {
      acc.push({
        ...heading,
        children: [],
      });
    } else if (heading.level === 3 && acc.length > 0) {
      acc[acc.length - 1].children.push(heading);
    }
    return acc;
  }, [] as any[]);

  return (
    <div className='min-h-screen bg-white text-gray-800 font-sans'>
      {/* Navigation - Same as main blog page */}
      <header className='sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-sm shadow-sm transition-all duration-300'>
        {/* ...existing code... */}
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
                className='text-sm font-medium text-gray-600 hover:text-red-600 transition-all duration-200 relative'
              >
                About
              </Link>
              <Link
                href='/#skills'
                className='text-sm font-medium text-gray-600 hover:text-red-600 transition-all duration-200 relative'
              >
                Skills
              </Link>
              <Link
                href='/#projects'
                className='text-sm font-medium text-gray-600 hover:text-red-600 transition-all duration-200 relative'
              >
                Projects
              </Link>
              <Link
                href='/#experience'
                className='text-sm font-medium text-gray-600 hover:text-red-600 transition-all duration-200 relative'
              >
                Experience
              </Link>
              <Link
                href='/#certifications'
                className='text-sm font-medium text-gray-600 hover:text-red-600 transition-all duration-200 relative'
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
                className='text-sm font-medium text-gray-600 hover:text-red-600 transition-all duration-200 relative'
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

      {/* Back to Blog */}
      <div className='bg-gray-50 py-4'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href='/blog'
              className='inline-flex items-center text-gray-600 hover:text-red-600 transition-colors'
            >
              <ArrowLeft className='h-4 w-4 mr-2' />
              Back to all articles
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Blog Header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className='relative h-[40vh] md:h-[60vh] w-full'>
          <Image
            src={post.thumbnail}
            alt={post.title}
            fill
            quality={100}
            priority
            className='object-cover'
            onError={(e) => {
              e.currentTarget.src =
                'https://via.placeholder.com/1920x1080?text=Blog+Header+Image';
            }}
          />
          <div className='absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/50'></div>
        </div>
      </motion.div>

      {/* Mobile TOC Toggle Button - Laravel Style */}
      <div className='lg:hidden sticky top-16 z-40 bg-white border-b border-gray-200'>
        <button
          onClick={() => setShowTocMobile(!showTocMobile)}
          className='w-full flex items-center justify-between p-4 text-gray-700 hover:text-red-600 transition-colors'
        >
          <span className='font-medium'>On this page</span>
          {showTocMobile ? (
            <ChevronDown className='h-5 w-5' />
          ) : (
            <ChevronRight className='h-5 w-5' />
          )}
        </button>

        <AnimatePresence>
          {showTocMobile && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className='overflow-hidden bg-gray-50'
            >
              <nav className='p-4'>
                {headings.map((heading) => (
                  <button
                    key={heading.id}
                    onClick={() => scrollToHeading(heading.id)}
                    className={`block w-full text-left py-2 px-3 ${
                      heading.level === 3 ? 'pl-8' : ''
                    } ${
                      activeHeading === heading.id
                        ? 'text-red-600 font-medium border-l-2 border-red-600 pl-[calc(1rem-2px)]'
                        : 'text-gray-600 hover:text-red-600 pl-4'
                    } ${
                      heading.level === 3 &&
                      activeParent ===
                        heading.id.split('-').slice(0, -1).join('-')
                        ? 'pl-8 text-gray-900'
                        : heading.level === 3
                        ? 'pl-8 text-gray-600'
                        : ''
                    }
                    text-sm transition-all`}
                  >
                    {heading.text}
                  </button>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Article Content with Right Sidebar TOC - Laravel Style */}
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-8'>
          {/* Main Content */}
          <motion.article
            className='max-w-3xl'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Article Meta */}
            <div className='flex flex-wrap gap-3 items-center mb-6 text-gray-500 text-sm'>
              <div className='flex items-center'>
                <Calendar className='h-4 w-4 mr-1' />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>
              <div className='flex items-center'>
                <Clock className='h-4 w-4 mr-1' />
                <span>{post.readTime}</span>
              </div>
              <span>By {post.author}</span>
            </div>

            {/* Article Title */}
            <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
              {post.title}
            </h1>

            {/* Tags */}
            <div className='flex flex-wrap gap-2 mb-10'>
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

            {/* Article Content with HTML */}
            <div
              className='prose prose-lg max-w-none'
              dangerouslySetInnerHTML={{ __html: contentWithAnchors }}
            />
          </motion.article>

          {/* Laravel Style TOC - Right Sidebar for Desktop - Improved Version */}
          <aside className='hidden lg:block'>
            <div className='sticky top-28'>
              <h3 className='text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4 pl-4'>
                ON THIS PAGE
              </h3>
              <nav className='overflow-auto max-h-[calc(100vh-200px)]'>
                <div className="space-y-1.5">
                  {groupedHeadings.map((heading) => (
                    <div key={heading.id} className='relative'>
                      {/* Parent heading (h2) */}
                      <div className="relative">
                        {activeHeading === heading.id || activeParent === heading.id ? (
                          <div className="absolute top-0 left-0 h-full w-0.5 bg-red-600"></div>
                        ) : null}
                        <a 
                          href={`#${heading.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToHeading(heading.id);
                          }}
                          className={`block py-1.5 px-4 rounded-r-md transition-colors ${
                            activeHeading === heading.id || activeParent === heading.id
                              ? 'bg-red-50 text-red-600 font-medium'
                              : 'hover:bg-gray-50 text-gray-600 hover:text-red-600'
                          }`}
                        >
                          {heading.text}
                        </a>
                      </div>

                      {/* Child headings (h3) */}
                      {heading.children && heading.children.length > 0 && (
                        <div className="mt-1 mb-3">
                          {heading.children.map((childHeading: any) => (
                            <div key={childHeading.id} className="relative">
                              {activeHeading === childHeading.id ? (
                                <div className="absolute top-0 left-0 h-full w-0.5 bg-red-600"></div>
                              ) : null}
                              <a
                                href={`#${childHeading.id}`}
                                onClick={(e) => {
                                  e.preventDefault();
                                  scrollToHeading(childHeading.id);
                                }}
                                className={`block py-1 px-7 text-sm transition-colors rounded-r-md ${
                                  activeHeading === childHeading.id
                                    ? 'bg-red-50 text-red-600 font-medium'
                                    : 'hover:bg-gray-50 text-gray-500 hover:text-red-600'
                                }`}
                              >
                                {childHeading.text}
                              </a>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </nav>
            </div>
          </aside>
        </div>
      </div>

      {/* Mobile TOC - New Style with Better Left Alignment */}
      <div className='lg:hidden sticky top-16 z-40 bg-white border-b border-gray-200'>
        <button
          onClick={() => setShowTocMobile(!showTocMobile)}
          className='w-full flex items-center justify-between p-4 text-gray-700 hover:text-red-600 transition-colors'
        >
          <span className='font-medium'>On this page</span>
          {showTocMobile ? (
            <ChevronDown className='h-5 w-5' />
          ) : (
            <ChevronRight className='h-5 w-5' />
          )}
        </button>

        <AnimatePresence>
          {showTocMobile && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className='overflow-hidden bg-gray-50'
            >
              <nav className='p-4'>
                <div className="space-y-1.5">
                  {groupedHeadings.map((heading) => (
                    <div key={heading.id} className="relative">
                      {/* Parent heading (h2) */}
                      <div className="relative">
                        {activeHeading === heading.id || activeParent === heading.id ? (
                          <div className="absolute top-0 left-0 h-full w-0.5 bg-red-600"></div>
                        ) : null}
                        <button
                          onClick={() => scrollToHeading(heading.id)}
                          className={`block w-full text-left py-2 px-4 rounded-r-md ${
                            activeHeading === heading.id || activeParent === heading.id
                              ? 'bg-red-50 text-red-600 font-medium'
                              : 'text-gray-600 hover:text-red-600'
                          }`}
                        >
                          {heading.text}
                        </button>
                      </div>

                      {/* Child headings (h3) */}
                      {heading.children && heading.children.length > 0 && heading.children.map((childHeading: any) => (
                        <div key={childHeading.id} className="relative">
                          {activeHeading === childHeading.id ? (
                            <div className="absolute top-0 left-0 h-full w-0.5 bg-red-600"></div>
                          ) : null}
                          <button
                            onClick={() => scrollToHeading(childHeading.id)}
                            className={`block w-full text-left py-2 px-7 text-sm rounded-r-md ${
                              activeHeading === childHeading.id
                                ? 'bg-red-50 text-red-600 font-medium'
                                : 'text-gray-500 hover:text-red-600'
                            }`}
                          >
                            {childHeading.text}
                          </button>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Author Section */}
      <section className='bg-gray-50 py-12 mt-10'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='max-w-4xl mx-auto'>
            <div className='flex items-center gap-4'>
              <div className='h-16 w-16 rounded-full bg-gray-200 overflow-hidden'>
                <Image
                  src='/assets/logo.png'
                  alt='Author'
                  width={64}
                  height={64}
                  className='object-cover'
                />
              </div>
              <div>
                <h3 className='font-bold text-lg'>{post.author}</h3>
                <p className='text-gray-600'>Web Developer & Tech Enthusiast</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Articles */}
      <section className='py-16'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='max-w-4xl mx-auto'>
            <h2 className='text-2xl font-bold mb-6'>More Articles</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              {blogPosts
                .filter((p) => p.slug !== post.slug)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Link href={`/blog/${relatedPost.slug}`} key={relatedPost.id}>
                    <div className='flex gap-4 group'>
                      <div className='relative h-24 w-24 flex-shrink-0'>
                        <Image
                          src={relatedPost.thumbnail}
                          alt={relatedPost.title}
                          fill
                          className='object-cover rounded-md'
                        />
                      </div>
                      <div>
                        <h3 className='font-medium text-gray-900 group-hover:text-red-600 transition-colors'>
                          {relatedPost.title}
                        </h3>
                        <p className='text-sm text-gray-500 line-clamp-2'>
                          {relatedPost.excerpt}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
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
