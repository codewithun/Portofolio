'use client';

import { Github, Instagram, Linkedin } from 'lucide-react';

export default function FooterSection() {
  return (
    <footer className='bg-gray-50 py-12 border-t border-gray-100'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          {/* Logo and copyright */}
          <div className='mb-6 md:mb-0'>
            <div className='font-bold text-xl text-gray-800 mb-2'>
              Untara<span className='text-red-600'>.</span>
            </div>
            <p className='text-gray-500 text-sm'>
              © {new Date().getFullYear()} Untara Eka Saputra. All rights reserved.
            </p>
          </div>

          {/* Social links with better styling */}
          <div className='flex space-x-4'>
            <a
              href='https://github.com/codewithun'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-white p-2.5 rounded-full text-gray-600 hover:bg-red-50 hover:text-red-500 border border-gray-200 transition-all'
              aria-label='GitHub'
            >
              <Github className='h-5 w-5' />
            </a>
            <a
              href='https://www.instagram.com/untarasaputra/'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-white p-2.5 rounded-full text-gray-600 hover:bg-red-50 hover:text-red-500 border border-gray-200 transition-all'
              aria-label='Instagram'
            >
              <Instagram className='h-5 w-5' />
            </a>
            <a
              href='https://www.linkedin.com/in/untara-eka-saputra'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-white p-2.5 rounded-full text-gray-600 hover:bg-red-50 hover:text-red-500 border border-gray-200 transition-all'
              aria-label='LinkedIn'
            >
              <Linkedin className='h-5 w-5' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
