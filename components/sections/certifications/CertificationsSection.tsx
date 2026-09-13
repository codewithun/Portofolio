'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, ExternalLink } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

const certifications = [
  {
    id: 1,
    title: 'Dasar Cloud dan Gen AI di AWS',
    issuer: 'Dicoding Indonesia',
    date: '2021',
    image:
      '/assets/certificate/sertifikat_course_251_4507453_210525110309_page-0001.jpg',
  },
  {
    id: 2,
    title: 'Programming Logic 101',
    issuer: 'Dicoding Indonesia',
    date: '2024',
    image:
      '/assets/certificate/sertifikat_course_302_4507453_061224135236_page-0001.jpg',
  },
  {
    id: 3,
    title: 'CCNA Switching, Routing, and Wireless',
    issuer: 'Cisco Networking Academy',
    date: '2025',
    image: '/assets/certificate/CCNASRWEUpdate20250604-26-ottue7_page-0001.jpg',
  },
  {
    id: 4,
    title: 'Web Penetration Testing',
    issuer: 'Cyber Academy',
    date: '2024',
    image:
      '/assets/certificate/Certificate-of-Completion-Web-Penetration-Testing_page-0001.jpg',
  },
  {
    id: 5,
    title: 'Database Course - Basic Level',
    issuer: 'ITBox',
    date: '2025',
    image:
      '/assets/certificate/ITBox-Certificate_Database-Course-Level-Basic_Untara-Eka-Saputra_page-0001.jpg',
  },
  {
    id: 6,
    title: 'Deployment Course - Beginner',
    issuer: 'Dicoding Indonesia',
    date: '2025',
    image:
      '/assets/certificate/Sertifikat Deployment - Beginner - Untara Eka Saputra - 8PksNlJxsk_page-0001.jpg',
  },
];

function CertificationTicker() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPos = 0;
    const speed = 0.5;

    const scroll = () => {
      if (!isPaused && scrollContainer) {
        scrollPos += speed;
        const halfWidth = scrollContainer.scrollWidth / 2;
        if (scrollPos >= halfWidth) {
          scrollPos = 0;
        }
        scrollContainer.scrollLeft = scrollPos;
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  // Triple the certs for seamless loop
  const repeatedCerts = [...certifications, ...certifications, ...certifications];

  return (
    <div
      className='relative overflow-hidden'
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)'
      }}
    >
      <div
        ref={scrollRef}
        className='flex gap-4 overflow-hidden'
        style={{ scrollBehavior: 'auto' }}
      >
        {repeatedCerts.map((cert, index) => (
          <div
            key={`cert-${cert.id}-${index}`}
            className='relative flex-shrink-0 w-72 md:w-80 group p-1.5 border border-zinc-800/40 rounded-sm hover:border-zinc-700/50 transition-colors'
          >
            {/* Outer Frame Corner Accents */}
            <div className="absolute -top-[1px] -left-[1px] w-2 h-2 border-t-[1.5px] border-l-[1.5px] border-zinc-500 z-20 pointer-events-none" />
            <div className="absolute -top-[1px] -right-[1px] w-2 h-2 border-t-[1.5px] border-r-[1.5px] border-zinc-500 z-20 pointer-events-none" />
            <div className="absolute -bottom-[1px] -left-[1px] w-2 h-2 border-b-[1.5px] border-l-[1.5px] border-zinc-500 z-20 pointer-events-none" />
            <div className="absolute -bottom-[1px] -right-[1px] w-2 h-2 border-b-[1.5px] border-r-[1.5px] border-zinc-500 z-20 pointer-events-none" />

            <div className='bg-[#141415] border border-zinc-800/80 hover:border-zinc-700 rounded-xl overflow-hidden transition-all duration-300'>
              {/* Certificate Image */}
              <div className='relative h-44 overflow-hidden'>
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className='object-contain bg-white/5 p-2'
                  sizes='320px'
                  loading='lazy'
                />
              </div>

              {/* Info */}
              <div className='p-4'>
                <div className='flex items-center justify-between mb-1.5'>
                  <span className='text-[10px] uppercase tracking-wider text-zinc-600 font-medium'>
                    {cert.issuer}
                  </span>
                  <div className='flex items-center gap-1 text-zinc-600'>
                    <Calendar className='h-2.5 w-2.5' />
                    <span className='text-[10px]'>{cert.date}</span>
                  </div>
                </div>

                <h3 className='text-sm font-medium text-zinc-300 line-clamp-1 mb-2'>
                  {cert.title}
                </h3>

                <button
                  onClick={() => window.open(cert.image, '_blank')}
                  className='flex items-center gap-1.5 text-[11px] text-zinc-500 hover:text-zinc-300 transition-colors'
                >
                  <ExternalLink className='h-3 w-3' />
                  View Certificate
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CertificationsSection() {
  return (
    <section id='certifications' className='scroll-mt-20'>
      <div className='relative w-full max-w-3xl mx-auto'>
        {/* Corner Accents for the Section */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t-[1.5px] border-l-[1.5px] border-zinc-500 z-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-2 h-2 border-t-[1.5px] border-r-[1.5px] border-zinc-500 z-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b-[1.5px] border-l-[1.5px] border-zinc-500 z-20 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b-[1.5px] border-r-[1.5px] border-zinc-500 z-20 pointer-events-none" />

        <div className='p-4 overflow-hidden'>
          <div className='w-full mb-10'>
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <h2 className='font-semibold tracking-tight text-[30px] text-zinc-100 mb-3'>
                certifications
              </h2>
              <p className='text-sm text-zinc-500'>
                Professional certifications that validate my expertise.
              </p>

              {/* Stats */}
              <div className='flex items-center gap-6 mt-5'>
                <div>
                  <span className='text-lg font-semibold text-zinc-200'>6+</span>
                  <span className='text-xs text-zinc-600 ml-1.5'>Certificates</span>
                </div>
                <div className='w-px h-4 bg-zinc-800' />
                <div>
                  <span className='text-lg font-semibold text-zinc-200'>4+</span>
                  <span className='text-xs text-zinc-600 ml-1.5'>Specializations</span>
                </div>
                <div className='w-px h-4 bg-zinc-800' />
                <div>
                  <span className='text-lg font-semibold text-zinc-200'>2025</span>
                  <span className='text-xs text-zinc-600 ml-1.5'>Latest</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <CertificationTicker />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
