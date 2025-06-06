'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';

export default function ProfileSection() {
  // State to control when the glitch effect activates
  const [isGlitching, setIsGlitching] = useState(false);

  // Toggle the glitch effect on image hover
  const triggerGlitch = () => {
    setIsGlitching(true);
    // Reset the glitch after a short period
    setTimeout(() => setIsGlitching(false), 2000);
  };

  return (
    <section
      id='profile'
      className='py-16 md:py-24 bg-gradient-to-br from-white to-gray-50/80 scroll-mt-20 overflow-hidden'
    >
      {/* Decorative background elements */}
      <div className='absolute top-20 right-20 w-64 h-64 bg-red-50 rounded-full mix-blend-multiply blur-3xl opacity-70 animate-pulse'></div>
      <div className='absolute bottom-20 left-20 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply blur-3xl opacity-70 animate-pulse delay-1000'></div>

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className='max-w-5xl mx-auto'
        >
          <div className='flex flex-col lg:flex-row gap-10 lg:gap-16 items-center'>
            {/* Left Column - Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className='flex-shrink-0'
            >
              {/* Profile Image with glitch effect */}
              <div className='relative mx-auto'>
                <div
                  className='w-56 h-56 md:w-[280px] md:h-[280px] relative'
                  onMouseEnter={triggerGlitch}
                >
                  {/* Background decorative elements */}
                  <div className='absolute -top-3 -left-3 w-full h-full border-2 border-red-500/30 rounded-full'></div>
                  <div className='absolute -bottom-3 -right-3 w-full h-full border-2 border-blue-500/30 rounded-full'></div>

                  {/* Main image with clip path & glitch effect */}
                  <div className='absolute inset-0 bg-gradient-to-br from-red-100 to-blue-50 rounded-full p-1'>
                    <div
                      className={`glitch-container w-full h-full rounded-full overflow-hidden shadow-lg relative border-4 border-white ${
                        isGlitching ? 'glitching' : ''
                      }`}
                    >
                      {/* Main image */}
                      <Image
                        src='/assets/profile.jpg'
                        alt='Untara Eka Saputra'
                        width={280}
                        height={280}
                        className='glitch-image object-cover w-full h-full scale-105 hover:scale-110 transition-transform duration-500'
                        priority
                      />

                      {/* Glitch overlays */}
                      <div className='glitch-overlay-1'></div>
                      <div className='glitch-overlay-2'></div>

                      {/* Scan lines */}
                      <div className='scan-lines'></div>

                      {/* Glitch text overlay */}
                      {isGlitching && (
                        <div className='glitch-text absolute inset-0 flex items-center justify-center overflow-hidden opacity-70'>
                          <div className='flex flex-col items-center'>
                            <div className='text-red-500 font-mono text-xs'>
                              ERROR
                            </div>
                            <div className='text-red-500 font-mono text-[8px]'>
                              SYSTEM MALFUNCTION
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Subtle gradient overlay */}
                      <div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60'></div>
                    </div>
                  </div>

                  {/* Decorative accent */}
                  <div className='absolute -bottom-2 right-5 w-10 h-10 bg-red-500 rounded-full border-4 border-white shadow-lg'></div>
                </div>

                {/* Social Links - Floating with staggered animation */}
                <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-4'>
                  <motion.a
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                    href='https://github.com/codewithun'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg border border-white/20'
                    aria-label='GitHub'
                  >
                    <Github className='h-5 w-5 text-white' />
                  </motion.a>
                  <motion.a
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                    href='https://www.linkedin.com/in/untara-eka-saputra'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg border border-white/20'
                    aria-label='LinkedIn'
                  >
                    <Linkedin className='h-5 w-5 text-white' />
                  </motion.a>
                  <motion.a
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.4 }}
                    href='mailto:untara337@gmail.com'
                    className='w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg border border-white/20'
                    aria-label='Email'
                  >
                    <Mail className='h-5 w-5 text-white' />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Profile Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='flex-1 text-center lg:text-left'
            >
              {' '}
              {/* Name & Title with fancy styling */}
              <div className='mb-6'>
                <div className='relative'>
                  <div className='absolute -left-3 top-1/2 transform -translate-y-1/2 h-10 w-1 bg-gradient-to-b from-red-500 to-red-600 rounded-full hidden lg:block'></div>
                  <h1 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-4'>
                    Untara Eka Saputra
                  </h1>
                </div>

                <div className='flex gap-2 justify-center lg:justify-start flex-wrap'>
                  <Badge className='bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 px-3 py-1 shadow-sm'>
                    Backend Developer
                  </Badge>
                  <Badge className='bg-blue-50 hover:bg-blue-100 text-blue-600 border border-blue-200 px-3 py-1 shadow-sm'>
                    Network Engineer
                  </Badge>
                  <Badge className='bg-green-50 hover:bg-green-100 text-green-600 border border-green-200 px-3 py-1 shadow-sm'>
                    Database Enthusiast
                  </Badge>
                </div>
              </div>
              {/* Enhanced About Section */}
              <div className='relative mb-6'>
                <p className='text-lg text-gray-700 leading-relaxed mb-4'>
                  Antusias IT yang berfokus pada pengembangan backend dan
                  infrastruktur jaringan, dengan passion untuk menciptakan
                  solusi teknologi yang{' '}
                  <span className='text-red-600 font-medium'>efisien</span> dan{' '}
                  <span className='text-red-600 font-medium'>skalabel</span>.
                </p>

                <p className='text-gray-600'>
                  Mahasiswa aktif dengan ketertarikan besar pada pengembangan backend, database, dan infrastruktur jaringan.
                </p>
              </div>
              {/* Enhanced Info Section with Icons */}
              <div className='mb-8 space-y-2'>
                <div className='flex items-center gap-3 text-gray-700 justify-center lg:justify-start'>
                  <div className='w-8 h-8 bg-red-50 rounded-full flex items-center justify-center'>
                    <motion.div
                      animate={{ rotateY: [0, 360] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 5,
                      }}
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        className='text-red-500'
                      >
                        <path d='M22 10v6M2 10l10-5 10 5-10 5z' />
                        <path d='M6 12v5c3 3 9 3 12 0v-5' />
                      </svg>
                    </motion.div>
                  </div>
                  <div className='flex-1'>
                    <span className='font-medium text-gray-900'>
                      Pendidikan:
                    </span>{' '}
                    Politeknik Negeri Semarang, Teknik Informatika
                  </div>
                </div>

              </div>{' '}
              {/* Enhanced Multi-Purpose Button with subtle indication */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className='flex justify-center lg:justify-start'
              >
                <a
                  onClick={() =>
                    window.open(
                      '/assets/cv/Untara Eka Saputra Resume.pdf',
                      '_blank'
                    )
                  }
                  className='group relative bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-medium px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-3 cursor-pointer overflow-hidden'
                >
                  <span className='absolute inset-0 w-full h-full bg-gradient-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></span>
                  <span className='relative flex items-center'>
                    <span className='bg-white/20 rounded-full p-1.5 mr-2'>
                      <Download className='h-4 w-4' />
                    </span>
                    Download CV
                  </span>
                  <span className='relative ml-1 opacity-60 text-sm'>
                    • PDF
                  </span>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* CSS for glitch effect */}
      <style jsx>{`
        .glitch-container {
          position: relative;
        }

        .glitching .glitch-image {
          animation: glitch-shift 0.2s linear infinite;
        }

        .glitch-overlay-1,
        .glitch-overlay-2 {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: url('/assets/profile.jpg');
          background-position: center;
          background-size: cover;
          opacity: 0;
        }

        .glitching .glitch-overlay-1 {
          animation: glitch-overlay-1 0.4s linear infinite;
          left: 3px;
          top: 0;
          background-blend-mode: screen;
          opacity: 0.8;
          filter: hue-rotate(90deg);
        }

        .glitching .glitch-overlay-2 {
          animation: glitch-overlay-2 0.3s linear infinite;
          left: -3px;
          top: 0;
          background-blend-mode: multiply;
          opacity: 0.8;
          filter: hue-rotate(-90deg);
        }

        .scan-lines {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to bottom,
            transparent 50%,
            rgba(0, 0, 0, 0.05) 50%
          );
          background-size: 100% 4px;
          opacity: 0;
        }

        .glitching .scan-lines {
          opacity: 0.2;
        }

        /* Keyframes for glitch animations */
        @keyframes glitch-shift {
          0% {
            transform: translate(0, 0) scale(1.05);
          }
          20% {
            transform: translate(-5px, 2px) scale(1.06);
          }
          40% {
            transform: translate(3px, -1px) scale(1.05);
          }
          60% {
            transform: translate(0, 2px) scale(1.055);
          }
          80% {
            transform: translate(4px, -3px) scale(1.05);
          }
          100% {
            transform: translate(0, 0) scale(1.05);
          }
        }

        @keyframes glitch-overlay-1 {
          0% { opacity: 0; transform: translate(0, 0); }
          10% { opacity: 0.6; transform: translate(-2px, 2px); }
          20% { opacity: 0; transform: translate(0, 0); }
          30% { opacity: 0; transform: translate(0, 0); }
          40% { opacity: 0.4; transform: translate(2px, -2px); }
          50% { opacity: 0; transform: translate(0, 0); }
          60% { opacity: 0.7; transform: translate(-3px, 1px); }
          70% { opacity: 0; transform: translate(0, 0); }
          80% { opacity: 0.5; transform: translate(1px, -1px); }
          90% { opacity: 0; transform: translate(0, 0); }
          100% { opacity: 0; transform: translate(0, 0); }
        }

        @keyframes glitch-overlay-2 {
          0% { opacity: 0; transform: translate(0, 0); }
          15% { opacity: 0.5; transform: translate(3px, -1px); }
          25% { opacity: 0; transform: translate(0, 0); }
          35% { opacity: 0; transform: translate(0, 0); }
          45% { opacity: 0.4; transform: translate(-2px, 2px); }
          55% { opacity: 0; transform: translate(0, 0); }
          65% { opacity: 0.7; transform: translate(1px, -3px); }
          75% { opacity: 0; transform: translate(0, 0); }
          85% { opacity: 0.3; transform: translate(-1px, 2px); }
          95% { opacity: 0; transform: translate(0, 0); }
          100% { opacity: 0; transform: translate(0, 0); }
        }

        .glitch-text {
          animation: flicker 0.3s linear infinite;
          mix-blend-mode: difference;
        }

        @keyframes flicker {
          0% { opacity: 0.7; }
          50% { opacity: 0.3; }
          100% { opacity: 0.7; }
        }
      `}</style>
    </section>
  );
}
