'use client';

import { motion } from 'framer-motion';
import { Cherry_Bomb_One } from 'next/font/google';

const cherryBomb = Cherry_Bomb_One({
  weight: '400',
  subsets: ['latin'],
});

export default function ContactSection() {

  return (
    <section id='contact' className='scroll-mt-20 '>
      <div className='relative w-full max-w-3xl mx-auto border border-zinc-800/40'>
        {/* Corner Accents for the Section */}
        <div className="absolute -top-px -left-px w-2 h-2 border-t-[1.5px] border-l-[1.5px] border-zinc-500 z-20 pointer-events-none" />
        <div className="absolute -top-px -right-px w-2 h-2 border-t-[1.5px] border-r-[1.5px] border-zinc-500 z-20 pointer-events-none" />
        <div className="absolute -bottom-px -left-px w-2 h-2 border-b-[1.5px] border-l-[1.5px] border-zinc-500 z-20 pointer-events-none" />
        <div className="absolute -bottom-px -right-px w-2 h-2 border-b-[1.5px] border-r-[1.5px] border-zinc-500 z-20 pointer-events-none" />

        <div className='p-4'>
          <div className='w-full text-center'>
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className='mb-10'
            >
              <div className='w-full max-w-[280px] mx-auto mb-6 opacity-80 hover:opacity-100 transition-opacity duration-500'>
                <h2 className={`${cherryBomb.className} text-[60px] md:text-[80px] text-transparent [-webkit-text-stroke:2px_theme(colors.zinc.500)] tracking-wider`}>
                  ウンタラ
                </h2>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
