'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Github, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

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
  index,
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
  index?: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, (index || 0) * 150);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={`group transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <Card className='overflow-hidden border border-gray-100 hover:border-red-100 shadow-sm hover:shadow-md transition-all duration-300 rounded-lg h-full bg-white'>
        <div
          className={`relative ${
            imageSrc ? 'h-52 sm:h-56' : 'h-24'
          } overflow-hidden`}
        >
          {/* Minimal overlay */}
          <div className='absolute inset-0 z-10 p-5 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent'>
            <div className={`${textColor}`}>
              <h3 className='text-xl font-semibold mb-1'>{title}</h3>
              {subtitle && <p className='text-sm opacity-90'>{subtitle}</p>}
            </div>
          </div>

          {/* Project image */}
          {imageSrc && (
            <Image
              src={imageSrc}
              alt={`${title} screenshot`}
              fill
              sizes='(max-width: 768px) 100vw, 33vw'
              priority={false}
              className='object-cover group-hover:scale-105 transition-transform duration-500'
            />
          )}
        </div>

        <CardContent className='pt-5 px-5 relative'>
          <p className='text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3'>
            {description}
          </p>

          <div className='flex flex-wrap gap-1.5 mb-4'>
            {tags.map((tag, i) => (
              <Badge
                key={i}
                variant='secondary'
                className='bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-0.5 text-xs font-normal'
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter className='border-t border-gray-100 flex justify-between gap-3 px-5 py-3'>
          {sourceCodeUrl && (
            <Button
              variant='ghost'
              size='sm'
              className='text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-md text-xs'
              onClick={() => window.open(sourceCodeUrl, '_blank')}
            >
              <Github className='h-3.5 w-3.5 mr-1.5' />
              Source
            </Button>
          )}
          {liveDemoUrl && (
            <Button
              variant='ghost'
              size='sm'
              className='text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-md text-xs'
              onClick={() => window.open(liveDemoUrl, '_blank')}
            >
              <Globe className='h-3.5 w-3.5 mr-1.5' />
              Demo
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}

export default function ProjectsSection() {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const buttonObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setButtonVisible(true);
          }, 600);
        }
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      headerObserver.observe(headerRef.current);
    }
    if (buttonRef.current) {
      buttonObserver.observe(buttonRef.current);
    }

    return () => {
      headerObserver.disconnect();
      buttonObserver.disconnect();
    };
  }, []);

  return (
    <section
      id='projects'
      className='py-16 scroll-mt-16 bg-white relative overflow-hidden'
    >
      {/* Simple divider */}
      <div className='absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent' />

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-700 ease-out ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className='text-3xl font-semibold mb-4 text-red-600'>Projects</h2>
          <p className='text-base text-gray-600 max-w-2xl mx-auto mb-8'>
            Selected works showcasing my technical approach to solving
            real-world problems
          </p>
        </div>

        <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-5 max-w-6xl mx-auto'>
          {' '}
          <ProjectCard
            title='Pantau dan Tanggapi Bencana'
            subtitle='Secara Real-Time'
            description='Platform digital untuk monitoring, pelaporan, dan koordinasi tanggap bencana. Wujudkan Indonesia yang lebih siap dan tanggap terhadap bencana.'
            tags={['Laravel', 'MySQL', 'React']}
            imageSrc='/assets/project/geosiaga.png'
            bgColor='bg-blue-700'
            textColor='text-white'
            sourceCodeUrl='https://github.com/codewithun/GeoSiaga'
            liveDemoUrl='https://geosiaga.web.id'
            index={0}
          />
          <ProjectCard
            title='Point of Sale System'
            subtitle='For Retail Businesses'
            description='Sistem kasir digital dengan fitur lengkap seperti pembayaran, penjualan, dan inventory management.'
            tags={['Flutter', 'Laravel', 'MySQL']}
            imageSrc='/assets/project/flexy.png'
            bgColor='bg-green-600'
            textColor='text-white'
            sourceCodeUrl='https://github.com/codewithun/Flexy'
            liveDemoUrl='https://flexy.my.id'
            index={1}
          />
          <ProjectCard
            title='Dashboard Recruitment Mitra Karya Group'
            subtitle='Monitoring and Management'
            description='Sistem dashboard untuk memonitoring dan mengelola pekerjaan, psikotes, dan pengumuman pekerjaan di Mitra Karya Group yang dibuat secara kolaborasi.'
            tags={['PHP', 'MySQL', 'Laravel', 'React']}
            imageSrc='/assets/project/mitrakarya.png'
            bgColor='bg-purple-600'
            textColor='text-white'
            sourceCodeUrl='https://github.com/codewithwan/eRecruitment-Laravel'
            index={2}
          />{' '}
        </div>

        {/* View More Projects Button - simplified */}
        <div
          ref={buttonRef}
          className={`text-center mt-10 transition-all duration-700 ease-out ${
            buttonVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Button
            variant='outline'
            className='px-5 py-2 border-gray-200 hover:border-red-200 text-gray-600 hover:text-red-600 text-sm rounded-md transition-colors'
            onClick={() => window.open('https://github.com/codewithun', '_blank')}
          >
            <Github className='h-3.5 w-3.5 mr-1.5' />
            More Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
