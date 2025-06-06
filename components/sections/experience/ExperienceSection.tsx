'use client';

import { useState, useEffect, useRef } from 'react';
import { GraduationCap, Users, Calendar, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function ExperienceSection() {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState([false, false]);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const cardsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Stagger card animations
          setTimeout(() => setCardsVisible((prev) => [true, prev[1]]), 0);
          setTimeout(() => setCardsVisible((prev) => [prev[0], true]), 200);
        }
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      headerObserver.observe(headerRef.current);
    }
    if (cardsRef.current) {
      cardsObserver.observe(cardsRef.current);
    }

    return () => {
      headerObserver.disconnect();
      cardsObserver.disconnect();
    };
  }, []);

  return (
    <section id='experience' className='py-16 scroll-mt-16 bg-white relative'>
      {/* Simple divider */}
      <div className='absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent' />

      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-700 ease-out ${
            headerVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className='text-3xl font-semibold mb-4 text-red-600'>
            Experience
          </h2>
          <p className='text-base text-gray-600 max-w-2xl mx-auto mb-8'>
            My journey through education and organizations that have shaped my
            expertise
          </p>
        </div>

        {/* Experience Grid */}
        <div className='max-w-4xl mx-auto' ref={cardsRef}>
          <div className='grid md:grid-cols-2 gap-6'>
            {/* Education Card */}
            <div
              className={`group transition-all duration-700 ease-out ${
                cardsVisible[0]
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className='bg-white border border-gray-100 hover:border-red-100 shadow-sm hover:shadow-md transition-all duration-300 rounded-lg p-6 h-full'>
                <div className='relative z-10'>
                  {/* Icon and Badge in one line */}
                  <div className='flex items-center mb-4'>
                    <div className='w-10 h-10 bg-gray-50 rounded-md flex items-center justify-center mr-3'>
                      <GraduationCap className='h-5 w-5 text-red-500' />
                    </div>
                    <Badge className='bg-gray-50 text-gray-600 hover:bg-gray-100 px-2 py-1 text-xs'>
                      Education
                    </Badge>
                  </div>

                  {/* Content */}
                  <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                    Politeknik Negeri Semarang
                  </h3>

                  <p className='text-gray-700 font-medium mb-3'>
                    Teknik Informatika
                  </p>

                  <div className='flex items-center text-gray-500 mb-2 text-sm'>
                    <Calendar className='h-3.5 w-3.5 mr-2' />
                    <span>2019 - 2023</span>
                  </div>

                  <div className='flex items-center text-gray-500 mb-4 text-sm'>
                    <MapPin className='h-3.5 w-3.5 mr-2' />
                    <span>Semarang, Central Java</span>
                  </div>

                  <p className='text-gray-500 text-sm'>
                    Berfokus pada teknologi terapan dan pengembangan perangkat
                    lunak, dengan pengalaman langsung menggunakan bahasa
                    pemrograman dan kerangka kerja modern.
                  </p>
                </div>
              </div>
            </div>

            {/* Organization Card */}
            <div
              className={`group transition-all duration-700 ease-out ${
                cardsVisible[1]
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className='bg-white border border-gray-100 hover:border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 rounded-lg p-6 h-full'>
                <div className='relative z-10'>
                  {/* Icon and Badge in one line */}
                  <div className='flex items-center mb-4'>
                    <div className='w-10 h-10 bg-gray-50 rounded-md flex items-center justify-center mr-3'>
                      <Users className='h-5 w-5 text-blue-500' />
                    </div>
                    <Badge className='bg-gray-50 text-gray-600 hover:bg-gray-100 px-2 py-1 text-xs'>
                      Organization
                    </Badge>
                  </div>

                  {/* Content */}
                  <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                    Himpunan Mahasiswa Elektro
                  </h3>

                  <p className='text-gray-700 font-medium mb-3'>
                    Staff Bidang Kaderisasi
                  </p>

                  <div className='flex items-center text-gray-500 mb-2 text-sm'>
                    <Calendar className='h-3.5 w-3.5 mr-2' />
                    <span>2020 - 2022</span>
                  </div>

                  <div className='flex items-center text-gray-500 mb-4 text-sm'>
                    <MapPin className='h-3.5 w-3.5 mr-2' />
                    <span>Politeknik Negeri Semarang</span>
                  </div>

                  <p className='text-gray-500 text-sm'>
                    Anggota aktif dalam organisasi mahasiswa, bertanggung jawab
                    atas pengembangan anggota dan program pelatihan untuk
                    mahasiswa teknik elektro
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
