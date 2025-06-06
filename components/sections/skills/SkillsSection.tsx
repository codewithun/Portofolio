'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

type Skill = {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'database' | 'tools';
};

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: index * 0.03,
        ease: 'easeOut',
      }}
      viewport={{ once: true }}
      className='group'
    >
      <div className='bg-white/80 backdrop-blur-sm rounded-lg p-4 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-red-200'>
        <div className='flex flex-col items-center justify-center gap-3 text-center'>
          <div className='w-12 h-12 flex items-center justify-center relative bg-gray-50/70 rounded-full p-2.5'>
            <Image
              src={skill.icon}
              alt={`${skill.name} icon`}
              width={30}
              height={30}
              unoptimized
              className='object-contain transition-transform group-hover:scale-110'
            />
          </div>
          <h3 className='text-sm font-medium text-gray-800 group-hover:text-red-600 transition-colors'>
            {skill.name}
          </h3>
        </div>
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const skills: Skill[] = [
    // Frontend
    {
      name: 'React',
      icon: '/assets/icon/react.png',
      category: 'frontend',
    },
    {
      name: 'Next.js',
      icon: '/assets/icon/next-js.svg',
      category: 'frontend',
    },
    {
      name: 'HTML5',
      icon: '/assets/icon/html.png',
      category: 'frontend',
    },
    {
      name: 'CSS3',
      icon: '/assets/icon/css.svg',
      category: 'frontend',
    },
    {
      name: 'Tailwind CSS',
      icon: '/assets/icon/tailwind-css.svg',
      category: 'frontend',
    },
    {
      name: 'JavaScript',
      icon: '/assets/icon/javascript-js.svg',
      category: 'frontend',
    },

    // Backend
    {
      name: 'Laravel',
      icon: '/assets/icon/laravel.svg',
      category: 'backend',
    },
    {
      name: 'PHP',
      icon: '/assets/icon/php.png',
      category: 'backend',
    },
    {
      name: 'Python',
      icon: '/assets/icon/python.svg',
      category: 'backend',
    },

    // Database
    {
      name: 'MySQL',
      icon: '/assets/icon/mysql.svg',
      category: 'database',
    },
    {
      name: 'Firebase',
      icon: '/assets/icon/file-type-firebase.svg',
      category: 'database',
    },

    // Tools & Others
    {
      name: 'Git',
      icon: '/assets/icon/git.svg',
      category: 'tools',
    },
    {
      name: 'GitHub',
      icon: '/assets/icon/github.svg',
      category: 'tools',
    },
    {
      name: 'VS Code',
      icon: '/assets/icon/vscode.svg',
      category: 'tools',
    },
    {
      name: 'Docker',
      icon: '/assets/icon/docker.svg',
      category: 'tools',
    },
    {
      name: 'Postman',
      icon: '/assets/icon/postman.svg',
      category: 'tools',
    },
  ];
  const filters = [
    { id: 'all', label: 'All', count: skills.length },
    {
      id: 'frontend',
      label: 'Frontend',
      count: skills.filter((s) => s.category === 'frontend').length,
    },
    {
      id: 'backend',
      label: 'Backend',
      count: skills.filter((s) => s.category === 'backend').length,
    },
    {
      id: 'database',
      label: 'Database',
      count: skills.filter((s) => s.category === 'database').length,
    },
    {
      id: 'tools',
      label: 'Tools',
      count: skills.filter((s) => s.category === 'tools').length,
    },
  ];

  const filteredSkills =
    activeFilter === 'all'
      ? skills
      : skills.filter((skill) => skill.category === activeFilter);
  return (
    <section
      id='skills'
      className='py-20 scroll-mt-20 bg-gradient-to-b from-white to-gray-50/80 relative overflow-hidden'
    >
      {/* Simple divider */}
      <div className='absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent' />
      {/* Background elements */}
      <div className='absolute -right-10 top-40 w-40 h-40 bg-red-100 rounded-full opacity-20 blur-3xl' />
      <div className='absolute -left-10 bottom-20 w-60 h-60 bg-red-50 rounded-full opacity-30 blur-3xl' />

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='text-center mb-12'
        >
          <h2 className='text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent'>
            Technical Skills
          </h2>
          <p className='text-base text-gray-600 max-w-xl mx-auto'>
            Technologies and tools I use to bring{' '}
            <span className='font-medium text-red-600'>ideas to life</span>
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
          className='flex justify-center mb-12'
        >
          <div className='flex flex-wrap justify-center gap-3 mx-auto backdrop-blur-sm bg-white/30 p-2 rounded-full border border-gray-100 shadow-sm'>
            {filters.map((filter) => (
              <Button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                variant='ghost'
                className={`px-5 py-1.5 text-sm transition-all duration-300 rounded-full ${
                  activeFilter === filter.id
                    ? 'bg-white text-red-600 shadow-sm ring-1 ring-red-100'
                    : 'text-gray-500 hover:text-red-500 hover:bg-white/80'
                }`}
              >
                {filter.label}
                {filter.count > 0 && (
                  <span
                    className={`ml-1.5 text-xs ${
                      activeFilter === filter.id
                        ? 'text-red-500'
                        : 'text-gray-400'
                    }`}
                  >
                    {filter.count}
                  </span>
                )}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          layout
          className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-5xl mx-auto'
        >
          {filteredSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </motion.div>

        {/* Footer decoration */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
          className='mt-12 flex justify-center'
        ></motion.div>
      </div>
    </section>
  );
}
