'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Users, Code, ChevronDown, X, Briefcase } from 'lucide-react';

type ExperienceItem = {
  id: string;
  companyLogo: React.ReactNode;
  company: string;
  location: string;
  roleIcon: React.ReactNode;
  role: string;
  type: string;
  period: string;
  duration: string;
  highlights: string[];
  skills: string[];
};

const experiences: ExperienceItem[] = [
  {
    id: 'techmedia-intern',
    companyLogo: <Briefcase className='h-4 w-4 text-zinc-200' />,
    company: 'Techmedia Indonesia',
    location: 'Yogyakarta',
    roleIcon: <Code className='h-4 w-4 text-zinc-400' />,
    role: 'Backend Developer Intern',
    type: 'Internship',
    period: '09.2025 - 11.2025',
    duration: '3 mos',
    highlights: [
      'Mengembangkan backend aplikasi Huehuy, sistem e-rekrutmen berbasis Laravel dengan fitur autentikasi, manajemen pengguna, dan pengelolaan data pelamar.',
      'Membangun REST API untuk menghubungkan backend Laravel dengan frontend React.',
      'Mengimplementasikan fitur unggah dokumen, pengelolaan status seleksi, serta pengumuman hasil rekrutmen.',
      'Mengelola database MySQL dan melakukan pengujian endpoint API menggunakan Postman.',
      'Berkolaborasi dengan tim pengembang menggunakan Git dalam pengembangan dan integrasi sistem.',
    ],
    skills: ['Laravel', 'React', 'REST API', 'MySQL', 'Postman', 'Git'],
  },
  {
    id: 'education',
    companyLogo: <GraduationCap className='h-4 w-4 text-zinc-200' />,
    company: 'Politeknik Negeri Semarang',
    location: 'Semarang, Central Java',
    roleIcon: <Code className='h-4 w-4 text-zinc-400' />,
    role: 'Teknik Informatika',
    type: 'Education',
    period: '08.2023 - 11.2026',
    duration: '3y 3m',
    highlights: [
      'Mempelajari bahasa pemrograman dan kerangka kerja modern.',
      'Pengembangan aplikasi berbasis web dan mobile.',
      'Jaringan komputer dan infrastruktur IT.',
      'Database design dan management.',
    ],
    skills: ['TypeScript', 'Next.js', 'Tailwind CSS', 'Laravel', 'MySQL'],
  },
  {
    id: 'organization',
    companyLogo: <Users className='h-4 w-4 text-zinc-200' />,
    company: 'Himpunan Mahasiswa Elektro',
    location: 'Politeknik Negeri Semarang',
    roleIcon: <Briefcase className='h-4 w-4 text-zinc-400' />,
    role: 'Staff Bidang Kaderisasi',
    type: 'Organization',
    period: '01.2024 - 12.2025',
    duration: '2y',
    highlights: [
      'Bertanggung jawab atas pengembangan anggota baru.',
      'Merancang dan mengelola program pelatihan.',
      'Koordinasi kegiatan kaderisasi organisasi.',
      'Mentoring dan pembinaan mahasiswa baru.',
    ],
    skills: ['Leadership', 'Management', 'Mentoring', 'Public Speaking'],
  },
];

function ExperienceCard({ item, isLast }: { item: ExperienceItem, isLast: boolean }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className='flex flex-col relative'>
      {/* Top Company Row */}
      <div className='flex items-center justify-between mb-2 group'>
        <div className='flex items-center gap-3 relative z-10'>
          {/* Company Logo Box */}
          <div className='w-8 h-8 rounded-md bg-zinc-800/80 border border-zinc-700/50 flex items-center justify-center'>
            {item.companyLogo}
          </div>
          <h3 className='text-[16px] font-medium text-zinc-100 group-hover:text-zinc-50 transition-colors'>
            {item.company}
          </h3>
        </div>
        <div className='flex items-center gap-2'>
          <span className='text-[13px] text-zinc-500 hidden sm:block'>{item.location}</span>
          <div className='w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]'></div>
        </div>
      </div>

      {/* Main Content with connecting vertical line */}
      <div className='relative ml-[15px]'>
        {/* The continuous vertical line with bottom curve */}
        <div className={`absolute top-0 left-0 w-6 border-l border-zinc-800/80 ${isOpen ? 'bottom-[22px] border-b rounded-bl-xl' : 'bottom-0'}`} />
        {/* If it's not the last item, we need the line to continue down to the next item */}
        {!isLast && <div className='absolute top-0 bottom-[-32px] left-0 w-[1px] bg-zinc-800/80' />}

        {/* Role Header */}
        <div className='relative pt-5 pb-2 pl-8'>
          <div className='flex items-center justify-between group cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
            <div className='flex items-center gap-3'>
              {/* Role Icon Box resting ON the vertical line */}
              <div className='absolute left-[-14px] w-7 h-7 rounded-md bg-[#0a0a0a] border border-zinc-800/80 flex items-center justify-center z-10 text-zinc-400 group-hover:text-zinc-200 transition-colors'>
                {item.roleIcon}
              </div>
              <h4 className='text-[15px] font-medium text-zinc-100 group-hover:text-zinc-50 transition-colors'>
                {item.role}
              </h4>
            </div>
            <button className='text-zinc-500 hover:text-zinc-300 transition-colors p-1'>
              {isOpen ? <X className='w-4 h-4' /> : <ChevronDown className='w-4 h-4' />}
            </button>
          </div>

          {/* Meta Data */}
          <div className='flex items-center gap-2 text-[13px] mt-2 font-mono'>
            <span className='text-zinc-500'>{item.type}</span>
            <span className='w-[1px] h-3 bg-zinc-800'></span>
            <span className='text-zinc-400'>{item.period}</span>
            <span className='w-[1px] h-3 bg-zinc-800'></span>
            <span className='text-zinc-500'>{item.duration}</span>
          </div>
        </div>

        {/* Expandable List & Skills */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className='overflow-hidden'
            >
              <div className='pl-8 pb-4 pt-4'>
                {/* Highlights List */}
                <ul className='space-y-3 mb-6'>
                  {item.highlights.map((highlight, i) => (
                    <li key={i} className='flex items-start gap-3 text-[14px] text-zinc-400'>
                      <span className='text-zinc-600 text-[10px] mt-[4px]'>•</span>
                      <span className='leading-relaxed'>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills/Tech Badges */}
                <div className='relative flex items-center gap-2 flex-wrap'>
                  {item.skills.map((skill, i) => (
                    <span
                      key={i}
                      className='px-3 py-1 rounded-full text-[12px] font-mono text-zinc-400 bg-zinc-900/40 border border-zinc-800/60 hover:bg-zinc-800/60 hover:text-zinc-300 transition-colors cursor-default'
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <section id='experience' className='scroll-mt-20'>
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
                experience
              </h2>
              <p className='text-[15px] text-zinc-500'>
                My journey through education and organizations.
              </p>
            </motion.div>

            {/* Experience Timeline */}
            <div className='space-y-8'>
              {experiences.map((item, index) => (
                <ExperienceCard key={item.id} item={item} isLast={index === experiences.length - 1} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
