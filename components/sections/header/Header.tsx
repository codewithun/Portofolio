'use client';

import Image from 'next/image';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
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
  );
}
