'use client';

import Image from 'next/image';
import {
  Mail,
  Github,
  ChevronDown,
  Instagram,
  Linkedin,
  Menu,
  Code2,
  Server,
  Database,
  Network,
  Globe,
  FileCode,
  MonitorSmartphone,
  Router,
  Layers,
  Share2,
  Download,
  BookOpen,
  MapPin,
  Quote,
  GraduationCap,
  Users,
  Calendar,
  Award,
  Briefcase,
  GitBranch,
  Container,
  FileText,
  Send,
  Target,
  Terminal,
  Package,
  Music,
  Feather,
  Settings,
  Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Home() {
  const [isQuoteVisible, setIsQuoteVisible] = useState(false);

  return (
    <div className='min-h-screen bg-white text-gray-800 font-sans'>
      {/* Navigation - Enhanced Visual Style */}
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
              <div className='font-bold text-red-600 text-xl tracking-tight group-hover:text-red-700 transition-all duration-300'>
                Codewithun
              </div>
            </div>
            <nav className='hidden md:flex items-center space-x-8'>
              <a
                href='#profile'
                className='text-sm font-medium text-gray-600 hover:text-red-600 transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-red-500 after:transition-all after:duration-300'
              >
                About
              </a>
              <a
                href='#skills'
                className='text-sm font-medium text-gray-600 hover:text-red-600 transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-red-500 after:transition-all after:duration-300'
              >
                Skills
              </a>
              <a
                href='#projects'
                className='text-sm font-medium text-gray-600 hover:text-red-600 transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-red-500 after:transition-all after:duration-300'
              >
                Projects
              </a>
              <a
                href='#experience'
                className='text-sm font-medium text-gray-600 hover:text-red-600 transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-red-500 after:transition-all after:duration-300'
              >
                Experience
              </a>
              <a
                href='/blog'
                className='text-sm font-medium text-gray-600 hover:text-red-600 transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-red-500 after:transition-all after:duration-300'
              >
                Blog
              </a>
              <a
                href='#certifications'
                className='text-sm font-medium text-gray-600 hover:text-red-600 transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-red-500 after:transition-all after:duration-300'
              >
                Certifications
              </a>
              <a
                href='#contact'
                className='text-sm font-medium text-gray-600 hover:text-red-600 transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-red-500 after:transition-all after:duration-300'
              >
                Contact
              </a>
              {/* Social media icons in navbar have been removed */}
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

      <main className='mx-auto'>
        {/* Profile Section - Fixed Layout & Responsive Design */}
        <section
          id='profile'
          className='py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 scroll-mt-20 overflow-hidden'
        >
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className='max-w-6xl mx-auto'
            >
              <Card className='overflow-visible border-0 bg-transparent shadow-none'>
                <CardContent className='p-0'>
                  <div className='flex flex-col lg:flex-row gap-8 lg:gap-12'>
                    {/* Left Column - Profile Image & Social Links */}
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className='flex flex-col items-center lg:max-w-xs xl:max-w-sm'
                    >
                      <div className='relative mx-auto mb-6'>
                        {/* Profile Image */}
                        <div className='w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-lg relative z-10'>
                          <Image
                            src='/assets/profile.jpg'
                            alt='Untara Eka Saputra'
                            width={256}
                            height={256}
                            className='object-cover w-full h-full transition-all duration-500 hover:scale-105'
                            priority
                          />
                        </div>
                      </div>

                      {/* Social Links */}
                      <div className='flex justify-center space-x-4 mb-8'>
                        <motion.a
                          whileHover={{ y: -3 }}
                          transition={{ type: 'spring', stiffness: 400 }}
                          href='https://github.com/codewithun'
                          target='_blank'
                          rel='noopener noreferrer'
                          className='w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all border border-gray-100'
                        >
                          <Github className='h-5 w-5 text-gray-700' />
                        </motion.a>
                        <motion.a
                          whileHover={{ y: -3 }}
                          transition={{ type: 'spring', stiffness: 400 }}
                          href='https://linkedin.com'
                          target='_blank'
                          rel='noopener noreferrer'
                          className='w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all border border-gray-100'
                        >
                          <Linkedin className='h-5 w-5 text-gray-700' />
                        </motion.a>
                        <motion.a
                          whileHover={{ y: -3 }}
                          transition={{ type: 'spring', stiffness: 400 }}
                          href='https://instagram.com'
                          target='_blank'
                          rel='noopener noreferrer'
                          className='w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all border border-gray-100'
                        >
                          <Instagram className='h-5 w-5 text-gray-700' />
                        </motion.a>
                        <motion.a
                          whileHover={{ y: -3 }}
                          transition={{ type: 'spring', stiffness: 400 }}
                          href='mailto:untara337@gmail.com'
                          className='w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all border border-gray-100'
                        >
                          <Mail className='h-5 w-5 text-gray-700' />
                        </motion.a>
                      </div>

                      {/* Mobile-only Call to Action */}
                      <div className='flex flex-wrap gap-3 justify-center mb-6 lg:hidden'>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 }}
                        >
                          <Button className='bg-red-600 hover:bg-red-700 text-white rounded px-6 py-2 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-2'>
                            <Mail className='h-4 w-4' /> Hubungi Saya
                          </Button>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.7 }}
                        >
                          <Button
                            variant='outline'
                            className='rounded px-6 py-2 border-gray-200 hover:border-red-300 hover:bg-red-50 text-gray-700 transition-all duration-300 flex items-center gap-2'
                          >
                            <Download className='h-4 w-4' /> Download CV
                          </Button>
                        </motion.div>
                      </div>
                    </motion.div>

                    {/* Right Column - Profile Info */}
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className='flex-1 text-center lg:text-left'
                    >
                      {/* Name & Title */}
                      <div className='mb-5'>
                        <div className='flex flex-col lg:flex-row lg:items-center gap-3 justify-center lg:justify-start'>
                          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900'>
                            Untara Eka Saputra
                          </h1>
                        </div>
                        <div className='flex gap-2 mt-3 justify-center lg:justify-start flex-wrap'>
                          <Badge className='bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 px-3 py-1'>
                            Backend Developer
                          </Badge>
                          <Badge className='bg-blue-50 hover:bg-blue-100 text-blue-600 border border-blue-200 px-3 py-1'>
                            Network Engineer
                          </Badge>
                        </div>
                      </div>

                      {/* Decorative Divider */}
                      <div className='flex items-center mb-5'>
                        <div className='h-px flex-1 bg-gradient-to-r from-transparent to-gray-200'></div>
                        <div className='mx-2 text-red-500'>
                          <GraduationCap className='h-4 w-4' />
                        </div>
                        <div className='h-px flex-1 bg-gradient-to-l from-transparent to-gray-200'></div>
                      </div>

                      {/* About & Education */}
                      <div className='mb-6 space-y-4'>
                        <p className='text-lg sm:text-xl text-gray-700 leading-relaxed'>
                          Antusias IT yang berfokus pada pengembangan backend
                          dan infrastruktur jaringan, dengan passion untuk
                          menciptakan solusi teknologi yang efisien dan
                          skalabel.
                        </p>

                        {/* Education & Contact Info Cards with Enhanced Hover Effects */}
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                          {/* Education Card with Hover Animation */}
                          <motion.div
                            className='group bg-white p-4 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 transform perspective-1000'
                            whileHover={{
                              scale: 1.03,
                              boxShadow:
                                '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
                            }}
                            transition={{
                              type: 'tween',
                              ease: 'easeOut',
                              duration: 0.2,
                            }}
                          >
                            <div className='flex items-start'>
                              <div className='w-10 h-10 rounded-full bg-red-50 flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-red-100 transition-colors duration-300'>
                                <BookOpen className='h-5 w-5 text-red-500 group-hover:text-red-600 transition-colors duration-300' />
                              </div>
                              <div>
                                <h3 className='font-medium text-gray-900 group-hover:text-red-600 transition-colors duration-300'>
                                  Pendidikan
                                </h3>
                                <p className='text-gray-600 group-hover:text-gray-800 transition-colors duration-300'>
                                  Politeknik Negeri Semarang
                                </p>
                                <p className='text-gray-500 text-sm'>
                                  Teknik Informatika
                                </p>
                              </div>
                            </div>
                          </motion.div>

                          {/* Email Card with Hover Animation */}
                          <motion.div
                            className='group bg-white p-4 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 transform perspective-1000'
                            whileHover={{
                              scale: 1.03,
                              boxShadow:
                                '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
                            }}
                            transition={{
                              type: 'tween',
                              ease: 'easeOut',
                              duration: 0.2,
                            }}
                          >
                            <div className='flex items-start'>
                              <div className='w-10 h-10 rounded-full bg-red-50 flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-red-100 transition-colors duration-300'>
                                <Mail className='h-5 w-5 text-red-500 group-hover:text-red-600 transition-colors duration-300' />
                              </div>
                              <div>
                                <h3 className='font-medium text-gray-900 group-hover:text-red-600 transition-colors duration-300'>
                                  Email
                                </h3>
                                <p className='text-gray-600 break-all group-hover:text-gray-800 transition-colors duration-300'>
                                  untara337@gmail.com
                                </p>
                                <p className='text-gray-500 text-sm'>
                                  Respon cepat dalam 24 jam
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        </div>
                      </div>

                      {/* Personal Quote with Toggle */}
                      <div className='mb-8'>
                        <button
                          onClick={() => setIsQuoteVisible(!isQuoteVisible)}
                          className='flex items-center gap-2 text-gray-500 hover:text-red-600 transition-all text-sm mx-auto lg:mx-0'
                        >
                          <Quote className='h-4 w-4' />
                          {isQuoteVisible
                            ? 'Sembunyikan Motto'
                            : 'Lihat Motto Pribadi'}
                          <ChevronDown
                            className={`h-4 w-4 transition-transform ${
                              isQuoteVisible ? 'rotate-180' : ''
                            }`}
                          />
                        </button>

                        {isQuoteVisible && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className='bg-gray-50 border-l-2 border-red-400 pl-4 py-3 mt-3 italic text-gray-600'
                          >
                            "Pembaharuan teknologi adalah hal yang pasti, tetapi
                            prinsip-prinsip dasar dan pengetahuan yang kuat akan
                            selalu menjadi fondasi yang tak tergantikan."
                          </motion.div>
                        )}
                      </div>

                      {/* Desktop Call to Action - Hidden on Mobile */}
                      <div className='hidden lg:flex flex-wrap gap-3'>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 }}
                        >
                          <Button className='bg-red-600 hover:bg-red-700 text-white rounded px-6 py-2 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-2'>
                            <Mail className='h-4 w-4' /> Hubungi Saya
                          </Button>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.7 }}
                        >
                          <Button
                            variant='outline'
                            className='rounded px-6 py-2 border-gray-200 hover:border-red-300 hover:bg-red-50 text-gray-700 transition-all duration-300 flex items-center gap-2'
                          >
                            <Download className='h-4 w-4' /> Download CV
                          </Button>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Skills Section - Enhanced Modern Design with Logos */}
        <section
          id='skills'
          className='py-20 scroll-mt-20 bg-gradient-to-br from-gray-50 via-white to-gray-50'
        >
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='text-center mb-16'
            >
              <h2 className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-red-600 to-gray-900 bg-clip-text text-transparent'>
                Technical Skills
              </h2>
              <p className='text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed'>
                Crafting digital solutions with modern technologies and best
                practices
              </p>

              {/* Decorative Line */}
              <div className='flex items-center justify-center mt-8'>
                <div className='h-px w-16 bg-gradient-to-r from-transparent to-red-400'></div>
                <div className='mx-4 w-2 h-2 rounded-full bg-red-500'></div>
                <div className='h-px w-16 bg-gradient-to-l from-transparent to-red-400'></div>
              </div>
            </motion.div>

            {/* Interactive Skills Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className='flex justify-center mb-16'
            >
              <div className='bg-white rounded-full p-2 shadow-lg border border-gray-100'>
                <div className='flex flex-wrap gap-1'>
                  {['All', 'Frontend', 'Backend', 'Database', 'Network'].map(
                    (filter, index) => (
                      <Button
                        key={filter}
                        variant={index === 0 ? 'default' : 'ghost'}
                        className={`rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 ${
                          index === 0
                            ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-md hover:shadow-lg'
                            : 'text-gray-600 hover:text-red-600 hover:bg-red-50'
                        }`}
                      >
                        {filter}
                      </Button>
                    )
                  )}
                </div>
              </div>
            </motion.div>

            {/* Skills Grid */}
            <div className='max-w-7xl mx-auto'>
              <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8'>
                {/* Frontend Skills */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <EnhancedSkillCategory
                    title='Frontend Development'
                    description='Building responsive and interactive user interfaces'
                    skills={[
                      {
                        name: 'React',
                        logo: '/assets/icon/react.png',
                        proficiency: 85,
                        color: 'from-blue-400 to-cyan-400',
                      },
                      {
                        name: 'Next.js',
                        logo: '/assets/icon/next-js.svg',
                        proficiency: 80,
                        color: 'from-gray-800 to-gray-600',
                      },
                      {
                        name: 'HTML5',
                        logo: '/assets/icon/html.png',
                        proficiency: 95,
                        color: 'from-orange-400 to-red-400',
                      },
                      {
                        name: 'CSS3',
                        logo: '/assets/icon/css.svg',
                        proficiency: 90,
                        color: 'from-blue-500 to-blue-600',
                      },
                      {
                        name: 'Tailwind',
                        logo: '/assets/icon/tailwind-css.svg',
                        proficiency: 88,
                        color: 'from-teal-400 to-cyan-500',
                      },
                    ]}
                    gradientFrom='from-blue-500'
                    gradientTo='to-purple-600'
                    icon='🎨'
                  />
                </motion.div>

                {/* Backend Skills */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <EnhancedSkillCategory
                    title='Backend Development'
                    description='Server-side logic and API development'
                    skills={[
                      {
                        name: 'Laravel',
                        logo: '/assets/icon/laravel.svg',
                        proficiency: 92,
                        color: 'from-red-500 to-red-600',
                      },
                      {
                        name: 'PHP',
                        logo: '/assets/icon/php.png',
                        proficiency: 90,
                        color: 'from-purple-500 to-indigo-600',
                      },
                      {
                        name: 'JavaScript',
                        logo: '/assets/icon/javascript-js.svg',
                        proficiency: 75,
                        color: 'from-yellow-500 to-yellow-600',
                      },
                      {
                        name: 'REST API',
                        logo: '🔗',
                        proficiency: 88,
                        color: 'from-blue-400 to-blue-600',
                      },
                    ]}
                    gradientFrom='from-red-500'
                    gradientTo='to-pink-600'
                    icon='⚙️'
                  />
                </motion.div>

                {/* Database Skills */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <EnhancedSkillCategory
                    title='Database Management'
                    description='Data storage and optimization solutions'
                    skills={[
                      {
                        name: 'MySQL',
                        logo: '/assets/icon/mysql.svg',
                        proficiency: 90,
                        color: 'from-blue-600 to-blue-700',
                      },
                      {
                        name: 'PostgreSQL',
                        logo: '🐘',
                        proficiency: 75,
                        color: 'from-blue-800 to-indigo-800',
                      },
                      {
                        name: 'MongoDB',
                        logo: '🍃',
                        proficiency: 70,
                        color: 'from-green-600 to-green-700',
                      },
                      {
                        name: 'Redis',
                        logo: '💎',
                        proficiency: 65,
                        color: 'from-red-600 to-red-700',
                      },
                    ]}
                    gradientFrom='from-green-500'
                    gradientTo='to-teal-600'
                    icon='💾'
                  />
                </motion.div>

                {/* Networking Skills */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <EnhancedSkillCategory
                    title='Network Infrastructure'
                    description='Network design and administration'
                    skills={[
                      {
                        name: 'VLAN Config',
                        logo: '/assets/icon/vlan.png',
                        proficiency: 85,
                        color: 'from-purple-500 to-purple-600',
                      },
                      {
                        name: 'Subnetting',
                        logo: '/assets/icon/subnetting.png',
                        proficiency: 88,
                        color: 'from-indigo-500 to-indigo-600',
                      },
                      {
                        name: 'Routing',
                        logo: '/assets/icon/routing.png',
                        proficiency: 82,
                        color: 'from-blue-500 to-blue-600',
                      },
                      {
                        name: 'Firewall',
                        logo: '🛡️',
                        proficiency: 78,
                        color: 'from-orange-500 to-red-500',
                      },
                    ]}
                    gradientFrom='from-purple-500'
                    gradientTo='to-indigo-600'
                    icon='🔧'
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section - Enhanced Design */}
        <section id='projects' className='py-20 scroll-mt-20 bg-white'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            {/* Enhanced Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='text-center mb-16'
            >
              <h2 className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-red-600 to-gray-900 bg-clip-text text-transparent'>
                Featured Projects
              </h2>
              <p className='text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed'>
                Showcase of my recent work and ongoing development projects that
                demonstrate technical expertise and creative problem-solving
              </p>

              {/* Decorative element */}
              <div className='flex items-center justify-center mt-8'>
                <div className='w-12 h-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full'></div>
                <div className='w-3 h-3 bg-red-500 rounded-full mx-4'></div>
                <div className='w-12 h-1 bg-gradient-to-r from-pink-500 to-red-500 rounded-full'></div>
              </div>
            </motion.div>
            <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto'>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <ProjectCard
                  title='Pantau dan Tanggapi Bencana'
                  subtitle='Secara Real-Time'
                  description='Platform digital untuk monitoring, pelaporan, dan koordinasi tanggap bencana. Wujudkan Indonesia yang lebih siap dan tanggap terhadap bencana.'
                  tags={['Laravel', 'MySQL', 'Bootstrap']}
                  imageSrc='/assets/project/geosiaga.png'
                  bgColor='bg-blue-700'
                  textColor='text-white'
                  sourceCodeUrl='https://github.com/codewithun/GeoSiaga'
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectCard
                  title='E-Commerce Platform'
                  subtitle='Modern Shopping Experience'
                  description='Full-stack e-commerce solution dengan fitur lengkap seperti payment gateway, inventory management, dan real-time notifications.'
                  tags={['React', 'Node.js', 'MongoDB']}
                  imageSrc='/assets/project/ecommerce.png'
                  bgColor='bg-green-600'
                  textColor='text-white'
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <ProjectCard
                  title='Network Monitoring System'
                  subtitle='Real-time Infrastructure'
                  description='Sistem monitoring jaringan dengan dashboard real-time untuk memantau performa, uptime, dan security status infrastruktur IT.'
                  tags={['PHP', 'SNMP', 'Chart.js']}
                  imageSrc='/assets/project/network-monitor.png'
                  bgColor='bg-purple-600'
                  textColor='text-white'
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <ProjectCard
                  title='School Management System'
                  subtitle='Digital Education Platform'
                  description='Sistem informasi sekolah terintegrasi dengan fitur manajemen siswa, guru, jadwal, nilai, dan komunikasi orang tua.'
                  tags={['Laravel', 'Vue.js', 'MySQL']}
                  imageSrc='/assets/project/school-system.png'
                  bgColor='bg-indigo-600'
                  textColor='text-white'
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <ProjectCard
                  title='Task Management App'
                  subtitle='Productivity Booster'
                  description='Aplikasi manajemen tugas dengan fitur kolaborasi tim, deadline tracking, dan integrasi dengan berbagai tools produktivitas.'
                  tags={['React', 'Firebase', 'Material-UI']}
                  imageSrc='/assets/project/task-app.png'
                  bgColor='bg-orange-600'
                  textColor='text-white'
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <ProjectCard
                  title='IoT Weather Station'
                  subtitle='Smart Environmental Monitoring'
                  description='Stasiun cuaca IoT dengan sensor suhu, kelembaban, dan kualitas udara. Data real-time dengan notifikasi alert dan historical analytics.'
                  tags={['Arduino', 'PHP', 'MySQL']}
                  imageSrc='/assets/project/weather-station.png'
                  bgColor='bg-teal-600'
                  textColor='text-white'
                />
              </motion.div>
            </div>

            {/* View More Projects Button */}
            <div className='text-center mt-12'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Button
                  variant='outline'
                  className='px-8 py-3 border-gray-300 hover:border-red-400 hover:bg-red-50 text-gray-700 hover:text-red-600 transition-all duration-300 rounded-lg'
                  onClick={() => window.open('/projects', '_blank')}
                >
                  <Github className='h-4 w-4 mr-2' />
                  View All Projects on GitHub
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Experience Section - Modern Timeline Design */}
        <section
          id='experience'
          className='py-20 scroll-mt-20 bg-gradient-to-br from-gray-50 via-white to-gray-50'
        >
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            {/* Enhanced Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='text-center mb-16'
            >
              <h2 className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-red-600 to-gray-900 bg-clip-text text-transparent'>
                Experience
              </h2>
              <p className='text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed'>
                My journey through various roles and projects that have shaped
                my expertise in technology and development
              </p>

              {/* Decorative element */}
              <div className='flex items-center justify-center mt-8'>
                <div className='w-12 h-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full'></div>
                <div className='w-3 h-3 bg-red-500 rounded-full mx-4'></div>
                <div className='w-12 h-1 bg-gradient-to-r from-pink-500 to-red-500 rounded-full'></div>
              </div>
            </motion.div>

            <div className='max-w-4xl mx-auto relative'>
              {/* Continuous Timeline Line */}
              <div className='absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 top-2 bottom-10 w-0.5 bg-gradient-to-b from-red-300 to-pink-300 z-0'></div>

              <div className='space-y-12'>
                {/* Experience Item 1 */}
                <motion.div
                  className='relative'
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  viewport={{ once: true, margin: '-100px' }}
                >
                  {/* Timeline Dot/Icon */}
                  <motion.div
                    className='absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 -translate-y-1 z-10'
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      className='w-8 h-8 rounded-full bg-white border-2 border-red-500 flex items-center justify-center'
                      whileHover={{ scale: 1.1 }}
                      animate={{
                        boxShadow: [
                          '0 0 0 0 rgba(239, 68, 68, 0.4)',
                          '0 0 0 8px rgba(239, 68, 68, 0)',
                          '0 0 0 0 rgba(239, 68, 68, 0)',
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: 'loop',
                      }}
                    >
                      <GraduationCap className='h-4 w-4 text-red-500' />
                    </motion.div>
                  </motion.div>

                  {/* Content Card - Right aligned on desktop, full width on mobile */}
                  <div className='pl-16 lg:pl-0 lg:ml-auto lg:w-5/12 lg:pr-16'>
                    <motion.div
                      className='bg-white p-6 rounded-lg shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300'
                      whileHover={{
                        y: -5,
                        boxShadow: '0 15px 30px -10px rgba(0, 0, 0, 0.1)',
                      }}
                    >
                      <div className='flex items-center mb-3'>
                        <Badge className='mr-3 bg-red-50 text-red-600 border-red-100'>
                          Education
                        </Badge>
                        <span className='text-sm text-gray-500 flex items-center'>
                          <Calendar className='h-3.5 w-3.5 mr-1' />
                          2019 - 2023
                        </span>
                      </div>

                      <h3 className='font-bold text-lg text-gray-900 mb-2'>
                        Politeknik Negeri Semarang
                      </h3>
                      <p className='text-gray-600 mb-3'>Teknik Informatika</p>

                      <div className='text-sm text-gray-500 italic'>
                        Institution of higher learning focused on applied
                        technology
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Experience Item 2 */}
                <motion.div
                  className='relative'
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
                  viewport={{ once: true, margin: '-100px' }}
                >
                  {/* Timeline Dot/Icon */}
                  <motion.div
                    className='absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 -translate-y-1 z-10'
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      className='w-8 h-8 rounded-full bg-white border-2 border-red-500 flex items-center justify-center'
                      whileHover={{ scale: 1.1 }}
                      animate={{
                        boxShadow: [
                          '0 0 0 0 rgba(239, 68, 68, 0.4)',
                          '0 0 0 8px rgba(239, 68, 68, 0)',
                          '0 0 0 0 rgba(239, 68, 68, 0)',
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: 'loop',
                        delay: 1,
                      }}
                    >
                      <Users className='h-4 w-4 text-red-500' />
                    </motion.div>
                  </motion.div>

                  {/* Content Card - Left aligned on desktop, full width on mobile */}
                  <div className='pl-16 lg:pl-16 lg:w-5/12'>
                    <motion.div
                      className='bg-white p-6 rounded-lg shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300'
                      whileHover={{
                        y: -5,
                        boxShadow: '0 15px 30px -10px rgba(0, 0, 0, 0.1)',
                      }}
                    >
                      <div className='flex items-center mb-3'>
                        <Badge className='mr-3 bg-blue-50 text-blue-600 border-blue-100'>
                          Organization
                        </Badge>
                        <span className='text-sm text-gray-500 flex items-center'>
                          <Calendar className='h-3.5 w-3.5 mr-1' />
                          2020 - 2022
                        </span>
                      </div>

                      <h3 className='font-bold text-lg text-gray-900 mb-2'>
                        Himpunan Mahasiswa Elektro
                      </h3>
                      <p className='text-gray-600 mb-3'>
                        Staff Bidang Kaderisasi
                      </p>

                      <div className='text-sm text-gray-500 italic'>
                        Student organization for electrical engineering
                        department
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              {/* Timeline End */}
              <motion.div
                className='absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 bottom-0 z-10'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                <div className='w-8 h-8 rounded-full bg-white p-1'>
                  <div className='w-full h-full rounded-full bg-gradient-to-r from-red-400 to-pink-400'></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Certifications Section - Enhanced Design */}
        <section id='certifications' className='py-20 scroll-mt-20 bg-white'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            {/* Enhanced Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='text-center mb-16'
            >
              <h2 className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-red-600 to-gray-900 bg-clip-text text-transparent'>
                Certifications & Achievements
              </h2>
              <p className='text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed'>
                Professional certifications and achievements that validate my
                technical expertise and commitment to continuous learning
              </p>

              {/* Decorative element */}
              <div className='flex items-center justify-center mt-8'>
                <div className='w-12 h-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full'></div>
                <div className='w-3 h-3 bg-red-500 rounded-full mx-4'></div>
                <div className='w-12 h-1 bg-gradient-to-r from-pink-500 to-red-500 rounded-full'></div>
              </div>
            </motion.div>

            <div className='grid md:grid-cols-3 gap-6 max-w-5xl mx-auto'>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <CertificationCard
                  title='Certification 1'
                  issuer='Issuing Organization'
                  date='2023'
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <CertificationCard
                  title='Certification 2'
                  issuer='Issuing Organization'
                  date='2022'
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <CertificationCard
                  title='Certification 3'
                  issuer='Issuing Organization'
                  date='2021'
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section - Enhanced Design */}
        <section
          id='contact'
          className='py-24 scroll-mt-20 bg-gradient-to-br from-gray-50 via-white to-gray-50'
        >
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            {/* Enhanced Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='text-center mb-16'
            >
              <h2 className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-red-600 to-gray-900 bg-clip-text text-transparent'>
                Get In Touch
              </h2>
              <p className='text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed'>
                Have a question or want to work together? Feel free to reach out
                and let's discuss how we can collaborate on your next project
              </p>

              {/* Decorative element */}
              <div className='flex items-center justify-center mt-8'>
                <div className='w-12 h-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full'></div>
                <div className='w-3 h-3 bg-red-500 rounded-full mx-4'></div>
                <div className='w-12 h-1 bg-gradient-to-r from-pink-500 to-red-500 rounded-full'></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className='max-w-6xl mx-auto bg-white rounded-xl shadow-md overflow-hidden'
            >
              <div className='grid md:grid-cols-2'>
                {/* Left Column - Illustration */}
                <div className='bg-gradient-to-br from-red-600 to-red-500 p-8 md:p-12 hidden md:flex flex-col justify-between relative overflow-hidden'>
                  {/* Content */}
                  <div className='relative z-10'>
                    <h3 className='text-white text-2xl font-bold mb-4'>
                      Ready for collaboration
                    </h3>
                    <p className='text-white/90 leading-relaxed'>
                      Whether you have a project in mind or just want to chat
                      about technology, I'm always open to new opportunities and
                      connections.
                    </p>

                    {/* Contact Options */}
                    <div className='mt-8 space-y-4'>
                      <div className='flex items-center gap-3 text-white/90'>
                        <Mail className='h-5 w-5 text-white' />
                        <p>untara337@gmail.com</p>
                      </div>
                      <div className='flex items-center gap-3 text-white/90'>
                        <MapPin className='h-5 w-5 text-white' />
                        <p>Semarang, Indonesia</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Contact Form */}
                <div className='p-6 sm:p-10'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2'>
                    <Mail className='h-5 w-5 text-red-500' />
                    Send me a message
                  </h3>

                  <form className='space-y-6'>
                    {/* Name Field */}
                    <div className='space-y-2'>
                      <label
                        htmlFor='fullName'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Full Name
                      </label>
                      <div className='relative'>
                        <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                          <svg
                            className='h-5 w-5 text-gray-400'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                            />
                          </svg>
                        </div>
                        <input
                          type='text'
                          id='fullName'
                          name='fullName'
                          className='pl-10 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors'
                          placeholder='Your name'
                          required
                        />
                      </div>
                    </div>

                    {/* Email Address */}
                    <div className='space-y-2'>
                      <label
                        htmlFor='email'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Email Address
                      </label>
                      <div className='relative'>
                        <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                          <svg
                            className='h-5 w-5 text-gray-400'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                            />
                          </svg>
                        </div>
                        <input
                          type='email'
                          id='email'
                          name='email'
                          className='pl-10 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors'
                          placeholder='your.email@example.com'
                          required
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div className='space-y-2'>
                      <label
                        htmlFor='subject'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Subject
                      </label>
                      <div className='relative'>
                        <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                          <svg
                            className='h-5 w-5 text-gray-400'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M7 20l4-16m2 16l4-16M6 9h14M4 15h14'
                            />
                          </svg>
                        </div>
                        <input
                          type='text'
                          id='subject'
                          name='subject'
                          className='pl-10 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors'
                          placeholder='What is this regarding?'
                        />
                      </div>
                    </div>

                    {/* Message with Character Count */}
                    <div className='space-y-2'>
                      <label
                        htmlFor='message'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Message
                      </label>
                      <div className='relative'>
                        <textarea
                          id='message'
                          name='message'
                          rows={5}
                          maxLength={300}
                          className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors'
                          placeholder='Your message here...'
                          required
                        ></textarea>
                        <div className='absolute bottom-2 right-2 text-xs text-gray-400'>
                          <span id='charCount'>0</span>/300
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div>
                      <button
                        type='submit'
                        className='w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all'
                      >
                        Send Message
                        <svg
                          className='ml-2 -mr-1 h-5 w-5'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M14 5l7 7m0 0l-7 7m7-7H3'
                          />
                        </svg>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className='bg-white py-12 border-t border-gray-100'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <div className='flex justify-center space-x-6 mb-6'>
            <a
              href='https://github.com/codewithun'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-400 hover:text-red-600 transition-all'
            >
              <Github className='h-5 w-5' />
            </a>
            <a
              href='https://instagram.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-400 hover:text-red-600 transition-all'
            >
              <Instagram className='h-5 w-5' />
            </a>
            <a
              href='https://linkedin.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-400 hover:text-red-600 transition-all'
            >
              <Linkedin className='h-5 w-5' />
            </a>
          </div>
          <p className='text-gray-500'>
            © {new Date().getFullYear()} Untara Eka Saputra. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

type Skill = {
  name: string;
  icon: React.ReactNode;
};

function SkillCategory({
  title,
  icon,
  skills,
}: {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}) {
  return (
    <Card className='h-full overflow-hidden border border-gray-200 hover:border-red-200 transition-all duration-300 hover:shadow-md'>
      <CardHeader className='pb-2 flex flex-row items-center space-x-2 bg-gradient-to-r from-gray-50 to-white'>
        <div className='w-8 h-8 rounded-md bg-red-50 flex items-center justify-center'>
          {icon}
        </div>
        <CardTitle className='text-lg text-gray-900'>{title}</CardTitle>
      </CardHeader>
      <CardContent className='pt-4'>
        <div className='space-y-3'>
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * i }}
              className='group'
            >
              <div className='flex items-center p-2 rounded-md hover:bg-red-50 transition-all duration-200 transform hover:translate-x-1'>
                <div className='w-7 h-7 rounded-md bg-white border border-gray-100 shadow-sm flex items-center justify-center mr-3 group-hover:border-red-200 transition-all duration-200'>
                  <div className='text-gray-600 group-hover:text-red-500 transition-colors'>
                    {skill.icon}
                  </div>
                </div>
                <span className='text-gray-700 group-hover:text-gray-900 transition-colors'>
                  {skill.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function SkillBadge({ name }: { name: string }) {
  // Keep the original function for compatibility
  return (
    <Badge className='py-2 px-4 bg-white hover:bg-red-50 text-gray-700 border border-gray-200 rounded-md text-sm font-medium transition-all duration-300 shadow-sm'>
      {name}
    </Badge>
  );
}

function ProjectCard({
  title,
  subtitle,
  description,
  tags,
  imageSrc,
  bgColor = 'bg-white',
  textColor = 'text-gray-900',
  sourceCodeUrl,
  liveDemoUrl,
}: {
  title: string;
  subtitle?: string;
  description: string;
  tags: string[];
  imageSrc?: string;
  bgColor?: string;
  textColor?: string;
  sourceCodeUrl?: string;
  liveDemoUrl?: string;
}) {
  return (
    <Card className='overflow-hidden border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-xl rounded-xl h-full'>
      <div
        className={`relative ${
          imageSrc ? 'h-64 sm:h-72' : 'h-32'
        } overflow-hidden ${bgColor}`}
      >
        {/* Project card header with overlay text */}
        <div className='absolute inset-0 z-10 p-6 sm:p-8 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent'>
          <div className={`${textColor}`}>
            <div className='inline-block px-3 py-1 text-xs font-medium bg-white/20 backdrop-blur-sm rounded-full text-white mb-2'>
              Sistem Informasi Tanggap Bencana
            </div>
            <h3 className='text-2xl sm:text-3xl font-bold mb-1'>{title}</h3>
            {subtitle && (
              <p className='text-lg sm:text-xl opacity-90'>{subtitle}</p>
            )}
          </div>
        </div>

        {/* Background image */}
        {imageSrc && (
          <Image
            src={imageSrc}
            alt={`${title} screenshot`}
            fill
            sizes='(max-width: 768px) 100vw, 50vw'
            priority={false}
            className='object-cover opacity-90 hover:scale-105 transition-transform duration-500'
          />
        )}
      </div>

      <CardContent className='pt-6 px-6 sm:px-8'>
        <p className='text-gray-700 mb-5 leading-relaxed'>{description}</p>

        <div className='flex flex-wrap gap-2 mb-5'>
          {tags.map((tag, i) => (
            <Badge
              key={i}
              variant='secondary'
              className='bg-gray-100/80 hover:bg-gray-200 text-gray-700 transition-all px-3 py-1 rounded-md'
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className='border-t bg-gray-50 flex justify-between gap-2 px-6 sm:px-8 py-4'>
        <Button
          variant='outline'
          size='sm'
          className='text-gray-700 border-gray-300 hover:bg-gray-100 hover:text-gray-900'
          onClick={() => window.open(sourceCodeUrl || '#', '_blank')}
        >
          <Github className='h-4 w-4 mr-2' />
          Source Code
        </Button>
        <Button
          size='sm'
          className='bg-blue-600 hover:bg-blue-700 text-white'
          onClick={() => window.open(liveDemoUrl || '#', '_blank')}
        >
          <Globe className='h-4 w-4 mr-2' />
          Live Demo
        </Button>
      </CardFooter>
    </Card>
  );
}

function EnhancedExperienceCard({
  title,
  subtitle,
  type,
  delay = 0,
}: {
  title: string;
  subtitle: string;
  type: string;
  delay?: number;
}) {
  return (
    <motion.div
      className='flex gap-4 group bg-gradient-to-r from-white to-white p-3 rounded-lg hover:shadow-md transition-all duration-300'
      whileHover={{
        scale: 1.01,
        boxShadow:
          '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
      }}
      transition={{ type: 'tween', ease: 'easeOut', duration: 0.2 }}
    >
      <div className='w-24 flex-shrink-0'>
        <Badge
          variant='outline'
          className='bg-white text-gray-700 border-gray-200 group-hover:bg-red-50 group-hover:border-red-200 transition-all duration-300'
        >
          {type}
        </Badge>
      </div>
      <div className='flex-1 border-l-2 border-gray-200 pl-6 pb-6 pr-2 relative group-hover:border-red-300 transition-all duration-300'>
        {/* Animated Bullet Point */}
        <motion.div
          className='absolute w-3 h-3 bg-red-500 rounded-full -left-[7px] top-1.5'
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 2,
            delay: delay,
            ease: 'easeInOut',
            repeatDelay: 1,
          }}
        />

        {/* Content */}
        <div className='space-y-2'>
          <h3 className='font-semibold text-lg text-gray-900 group-hover:text-red-600 transition-colors duration-300'>
            {title}
          </h3>
          <p className='text-gray-600 group-hover:text-gray-800 transition-colors duration-300'>
            {subtitle}
          </p>

          {/* Additional Info that appears on hover */}
          <div className='overflow-hidden transition-all duration-300 max-h-0 group-hover:max-h-20 opacity-0 group-hover:opacity-100'>
            <div className='flex items-center text-sm text-gray-500 pt-2'>
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: type === 'Education' ? 0 : 360 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className='mr-2 text-red-500'
              >
                {type === 'Education' ? (
                  <GraduationCap className='h-4 w-4' />
                ) : (
                  <Users className='h-4 w-4' />
                )}
              </motion.div>
              <span>
                {type === 'Education'
                  ? 'Institution of higher learning'
                  : 'Student organization'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ExperienceCard({
  title,
  subtitle,
  type,
}: {
  title: string;
  subtitle: string;
  type: string;
}) {
  // Keep original function for compatibility
  return (
    <div className='flex gap-4 group'>
      <div className='w-24 flex-shrink-0'>
        <Badge
          variant='outline'
          className='bg-white text-gray-700 border-gray-200 group-hover:bg-red-50 transition-all duration-300'
        >
          {type}
        </Badge>
      </div>
      <div className='flex-1 border-l-2 border-gray-200 pl-6 pb-8 relative group-hover:border-red-300 transition-all duration-300'>
        <div className='absolute w-3 h-3 bg-red-500 rounded-full -left-[7px] top-1.5 group-hover:scale-110 transition-all duration-300'></div>
        <h3 className='font-semibold text-lg text-gray-900'>{title}</h3>
        <p className='text-gray-600'>{subtitle}</p>
      </div>
    </div>
  );
}

function CertificationCard({
  title,
  issuer,
  date,
}: {
  title: string;
  issuer: string;
  date: string;
}) {
  return (
    <Card className='border border-gray-200 hover:border-red-200 transition-all duration-300 hover:shadow-md rounded-md overflow-hidden'>
      <CardHeader>
        <CardTitle className='text-lg text-gray-900'>{title}</CardTitle>
        <CardDescription className='text-gray-600'>{issuer}</CardDescription>
      </CardHeader>
      <CardFooter className='border-t bg-gray-50 text-gray-500 text-sm'>
        <p>{date}</p>
      </CardFooter>
    </Card>
  );
}

type EnhancedSkill = {
  name: string;
  logo: string;
  proficiency: number;
  color: string;
};

function EnhancedSkillCategory({
  title,
  description,
  skills,
  gradientFrom,
  gradientTo,
  icon,
}: {
  title: string;
  description: string;
  skills: EnhancedSkill[];
  gradientFrom: string;
  gradientTo: string;
  icon: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className='group h-full'
    >
      <Card className='h-full overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white relative'>
        {/* Gradient Header */}
        <div
          className={`h-32 bg-gradient-to-br ${gradientFrom} ${gradientTo} relative overflow-hidden`}
        >
          <div className='absolute inset-0 bg-black/10'></div>
          <div className='absolute top-4 right-4 text-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-300'>
            {icon}
          </div>
          <div className='relative z-10 p-6 text-white'>
            <div className='text-3xl mb-2'>{icon}</div>
            <h3 className='text-xl font-bold'>{title}</h3>
          </div>
        </div>

        <CardContent className='p-6'>
          <p className='text-gray-600 text-sm mb-6 leading-relaxed'>
            {description}
          </p>

          <div className='space-y-4'>
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className='group/skill'
              >
                <div className='flex items-center gap-3'>
                  <div
                    className={`w-8 h-8 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center text-white font-bold shadow-md group-hover/skill:scale-110 transition-transform duration-200`}
                  >
                    {skill.logo.startsWith('/') ? (
                      <Image
                        src={skill.logo}
                        alt={`${skill.name} icon`}
                        width={20}
                        height={20}
                        className='object-contain'
                      />
                    ) : (
                      skill.logo
                    )}
                  </div>
                  <span className='font-medium text-gray-800 group-hover/skill:text-gray-900'>
                    {skill.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
