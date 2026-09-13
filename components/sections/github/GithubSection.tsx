'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GitHubCalendar } from 'react-github-calendar';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

export default function GithubSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Use explicit themes to match dark mode
  const explicitTheme = {
    light: ['#18181b', '#3f3f46', '#71717a', '#a1a1aa', '#d4d4d4'],
    dark: ['#18181b', '#3f3f46', '#71717a', '#a1a1aa', '#d4d4d4'],
  };

  if (!mounted) {
    return (
      <section id='github' className='scroll-mt-20'>
        <div className='relative w-full max-w-3xl mx-auto'>
          <div className='p-4'>
            <div className='w-full min-h-[150px]'></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id='github' className='scroll-mt-20'>
      <div className='relative w-full max-w-3xl mx-auto'>
        {/* Corner Accents for the Section */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t-[1.5px] border-l-[1.5px] border-zinc-500 z-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-2 h-2 border-t-[1.5px] border-r-[1.5px] border-zinc-500 z-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b-[1.5px] border-l-[1.5px] border-zinc-500 z-20 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b-[1.5px] border-r-[1.5px] border-zinc-500 z-20 pointer-events-none" />

        <div className='p-4'>
          <div className='w-full'>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className='w-full'
            >
              <div className='w-full [&_svg]:w-full [&_svg]:h-auto [&_svg]:max-w-full relative'>
                  <GitHubCalendar
                    username="codewithun"
                    theme={explicitTheme}
                    colorScheme='dark'
                    blockSize={14}
                    blockMargin={1.5}
                    blockRadius={1}
                    fontSize={12}
                    // @ts-ignore
                    hideTotalCount={true}
                    renderBlock={(block, activity) => {
                      const [year, month, day] = activity.date.split('-');
                      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                      const formattedDate = `${parseInt(day, 10)} ${months[parseInt(month, 10) - 1]} ${year}`;
                      const tooltipText = activity.count === 0 
                        ? `No contributions on ${formattedDate}` 
                        : `${activity.count} contributions on ${formattedDate}`;

                      return React.cloneElement(block as React.ReactElement<any>, {
                        'data-tooltip-id': 'github-tooltip',
                        'data-tooltip-content': tooltipText,
                      });
                    }}
                  />
                <ReactTooltip 
                  id="github-tooltip" 
                  className="!bg-zinc-800 !border !border-zinc-700 !text-zinc-100 !text-xs !rounded-md" 
                  style={{ padding: '6px 12px', zIndex: 50, opacity: 1 }}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className='mt-4 text-xs text-zinc-500 font-mono'
            >
              Fig. 2. Contributions from GitHub. Source: <a href='https://github.com/codewithun' target='_blank' rel='noreferrer' className='border-b border-zinc-500 hover:text-zinc-300'>GitHub</a>.
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
