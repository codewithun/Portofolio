'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';

type Project = {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  imageSrc: string;
  sourceCodeUrl?: string;
  liveDemoUrl?: string;
};

const projects: Project[] = [
  {
    title: 'GeoSiaga',
    subtitle: 'Pantau dan Tanggapi Bencana Secara Real-Time',
    description:
      'Platform digital untuk monitoring, pelaporan, dan koordinasi tanggap bencana. Wujudkan Indonesia yang lebih siap dan tanggap terhadap bencana.',
    tags: ['Laravel', 'MySQL', 'React'],
    imageSrc: '/assets/project/geosiaga.png',
    sourceCodeUrl: 'https://github.com/codewithun/GeoSiaga',
    liveDemoUrl: 'https://geosiaga.web.id',
  },
  {
    title: 'Flexy POS',
    subtitle: 'Point of Sale System for Retail Businesses',
    description:
      'Sistem kasir digital dengan fitur lengkap seperti pembayaran, penjualan, dan inventory management.',
    tags: ['Flutter', 'Laravel', 'MySQL'],
    imageSrc: '/assets/project/flexy.png',
    sourceCodeUrl: 'https://github.com/codewithun/Flexy',
    liveDemoUrl: 'https://flexy.my.id',
  },
  {
    title: 'Mitra Karya Dashboard',
    subtitle: 'Recruitment Monitoring & Management',
    description:
      'Sistem dashboard untuk memonitoring dan mengelola pekerjaan, psikotes, dan pengumuman pekerjaan di Mitra Karya Group yang dibuat secara kolaborasi.',
    tags: ['PHP', 'MySQL', 'Laravel', 'React'],
    imageSrc: '/assets/project/mitrakarya.png',
    sourceCodeUrl: 'https://github.com/codewithwan/eRecruitment-Laravel',
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className='group'
    >
      <div className='bg-[#141415] border border-zinc-800/80 hover:border-zinc-700 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-black/20'>
        {/* Project Image */}
        <div className='relative h-48 sm:h-52 overflow-hidden'>
          <Image
            src={project.imageSrc}
            alt={`${project.title} screenshot`}
            fill
            sizes='(max-width: 768px) 100vw, 50vw'
            className='object-cover group-hover:scale-[1.03] transition-transform duration-500'
          />
          {/* Gradient overlay */}
          <div className='absolute inset-0 bg-gradient-to-t from-[#141415] via-transparent to-transparent' />

          {/* Links overlay - visible on hover */}
          <div className='absolute top-3 right-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            {project.sourceCodeUrl && (
              <a
                href={project.sourceCodeUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='p-2 rounded-lg bg-black/60 backdrop-blur-sm border border-white/10 text-white hover:bg-black/80 transition-all'
                aria-label='Source code'
              >
                <Github className='h-3.5 w-3.5' />
              </a>
            )}
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='p-2 rounded-lg bg-black/60 backdrop-blur-sm border border-white/10 text-white hover:bg-black/80 transition-all'
                aria-label='Live demo'
              >
                <ExternalLink className='h-3.5 w-3.5' />
              </a>
            )}
          </div>
        </div>

        {/* Content */}
        <div className='p-5'>
          <div className='flex items-start justify-between gap-2 mb-2'>
            <div>
              <h3 className='text-base font-semibold text-zinc-200 group-hover:text-zinc-50 transition-colors'>
                {project.title}
              </h3>
              <p className='text-xs text-zinc-500 mt-0.5'>
                {project.subtitle}
              </p>
            </div>
            <ArrowUpRight className='h-4 w-4 text-zinc-600 group-hover:text-zinc-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 flex-shrink-0 mt-1' />
          </div>

          <p className='text-sm text-zinc-500 mb-4 line-clamp-2 leading-relaxed'>
            {project.description}
          </p>

          {/* Tags */}
          <div className='flex flex-wrap gap-1.5'>
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className='px-2 py-0.5 rounded-md text-[11px] font-medium bg-zinc-800/80 text-zinc-400 border border-zinc-700/40'
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section id='projects' className='scroll-mt-20'>
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
              className='mb-10'
            >
              <h2 className='font-semibold tracking-tight text-[30px] text-zinc-100 mb-3'>
                projects
              </h2>
              <p className='text-sm text-zinc-500'>
                Selected works showcasing my approach to problem solving.
              </p>
            </motion.div>

            {/* Projects Grid */}
            <div className='grid gap-4 sm:grid-cols-2'>
              {projects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>

            {/* View More */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className='text-center mt-8'
            >
              <a
                href='https://github.com/codewithun'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm text-zinc-400 hover:text-zinc-200 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all duration-300'
              >
                <Github className='h-3.5 w-3.5' />
                View more on GitHub
                <ArrowUpRight className='h-3 w-3' />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
