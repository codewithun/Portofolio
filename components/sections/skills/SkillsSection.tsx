'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

type Skill = {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'database' | 'tools';
};

const skills: Skill[] = [
  // Frontend
  { name: 'React', icon: '/assets/icon/react.png', category: 'frontend' },
  { name: 'Next.js', icon: '/assets/icon/next-js.svg', category: 'frontend' },
  { name: 'HTML5', icon: '/assets/icon/html.png', category: 'frontend' },
  { name: 'CSS3', icon: '/assets/icon/css.svg', category: 'frontend' },
  { name: 'Tailwind CSS', icon: '/assets/icon/tailwind-css.svg', category: 'frontend' },
  { name: 'JavaScript', icon: '/assets/icon/javascript-js.svg', category: 'frontend' },
  // Backend
  { name: 'Laravel', icon: '/assets/icon/laravel.svg', category: 'backend' },
  { name: 'PHP', icon: '/assets/icon/php.png', category: 'backend' },
  { name: 'Python', icon: '/assets/icon/python.svg', category: 'backend' },
  // Database
  { name: 'MySQL', icon: '/assets/icon/mysql.svg', category: 'database' },
  { name: 'Firebase', icon: '/assets/icon/file-type-firebase.svg', category: 'database' },
  // Tools
  { name: 'Git', icon: '/assets/icon/git.svg', category: 'tools' },
  { name: 'GitHub', icon: '/assets/icon/github.svg', category: 'tools' },
  { name: 'VS Code', icon: '/assets/icon/vscode.svg', category: 'tools' },
  { name: 'Docker', icon: '/assets/icon/docker.svg', category: 'tools' },
  { name: 'Postman', icon: '/assets/icon/postman.svg', category: 'tools' },
];

const categories = [
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'database', label: 'Database' },
  { id: 'tools', label: 'Tools' },
];

function SkillIcon({ skill, index }: { skill: Skill; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      className='group flex flex-col items-center gap-2.5'
    >
      <div className='w-12 h-12 md:w-14 md:h-14 rounded-xl bg-zinc-800/50 border border-zinc-700/30 flex items-center justify-center group-hover:border-zinc-600 group-hover:bg-zinc-800 group-hover:scale-110 transition-all duration-300'>
        <Image
          src={skill.icon}
          alt={`${skill.name} icon`}
          width={28}
          height={28}
          unoptimized
          className='object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300'
        />
      </div>
      <span className='text-[11px] text-zinc-500 group-hover:text-zinc-300 transition-colors duration-300 text-center leading-tight'>
        {skill.name}
      </span>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section id='skills' className='scroll-mt-20'>
      <div className='relative w-full max-w-3xl mx-auto'>
        {/* Corner Accents for the Section */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t-[1.5px] border-l-[1.5px] border-zinc-500 z-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-2 h-2 border-t-[1.5px] border-r-[1.5px] border-zinc-500 z-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b-[1.5px] border-l-[1.5px] border-zinc-500 z-20 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b-[1.5px] border-r-[1.5px] border-zinc-500 z-20 pointer-events-none" />

        <div className='p-4'>
          <div className='w-full'>
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className='mb-12'
            >
              <h2 className='font-semibold tracking-tight text-[30px] text-zinc-100 mb-3'>
                tech stack
              </h2>
              <p className='text-sm text-zinc-500'>
                Technologies and tools I use to bring ideas to life.
              </p>
            </motion.div>

            {/* Skills by Category */}
            <div className='space-y-10'>
              {categories.map((category) => {
                const categorySkills = skills.filter(
                  (s) => s.category === category.id
                );
                return (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                  >
                    {/* Category Label */}
                    <div className='flex items-center gap-3 mb-5'>
                      <span className='text-[10px] uppercase tracking-[0.2em] text-zinc-600 font-medium'>
                        {category.label}
                      </span>
                      <div className='flex-1 h-px bg-zinc-800/80' />
                    </div>

                    {/* Icons Grid */}
                    <div className='grid grid-cols-4 sm:grid-cols-6 gap-6'>
                      {categorySkills.map((skill, index) => (
                        <SkillIcon key={skill.name} skill={skill} index={index} />
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
