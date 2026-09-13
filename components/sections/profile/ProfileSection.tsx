'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check, Github, Linkedin, Instagram, ArrowDown, Volume2 } from 'lucide-react';
import { useState, useRef } from 'react';

type SocialHoverCard = {
  platform: string;
  username: string;
  displayName: string;
  bio?: string;
  avatar: string;
  url: string;
  contributions?: string;
  isGithub?: boolean;
};

const socialCards: SocialHoverCard[] = [
  {
    platform: 'github',
    username: 'codewithun',
    displayName: 'Untara Eka Saputra',
    avatar: 'https://github.com/codewithun.png',
    url: 'https://github.com/codewithun',
    contributions: '124 contributions in the last year',
    isGithub: true,
  },
  {
    platform: 'linkedin',
    username: 'untara-eka-saputra',
    displayName: 'Untara Eka Saputra',
    bio: 'Teknik Informatika · Politeknik Negeri Semarang',
    avatar: 'https://ui-avatars.com/api/?name=Untara+Eka&background=0A66C2&color=fff&size=128',
    url: 'https://www.linkedin.com/in/untara-eka-saputra',
  },
  {
    platform: 'x',
    username: 'untarasaputra',
    displayName: 'Untara Saputra',
    bio: '📍 Semarang, Indonesia',
    avatar: 'https://ui-avatars.com/api/?name=Untara+Saputra&background=18181b&color=fff&size=128',
    url: 'https://www.instagram.com/untarasaputra/',
  },
];

// Helper to render the GitHub contribution graph
function GithubGraph() {
  const cols = 28;
  const rows = 7;
  return (
    <div className='flex gap-[2px] mt-4'>
      {Array.from({ length: cols }).map((_, c) => (
        <div key={c} className='flex flex-col gap-[2px]'>
          {Array.from({ length: rows }).map((_, r) => {
            // Generate some random "commits" for realism, mostly empty
            const rand = Math.random();
            let bg = 'bg-zinc-800/80';
            if (rand > 0.95) bg = 'bg-emerald-400';
            else if (rand > 0.85) bg = 'bg-emerald-600';
            else if (rand > 0.75) bg = 'bg-emerald-800';
            else if (rand > 0.6) bg = 'bg-emerald-950';

            return (
              <div
                key={r}
                className={`w-[7px] h-[7px] rounded-[1px] ${bg}`}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}

function SocialIcon({ card }: { card: SocialHoverCard }) {
  const [hovered, setHovered] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHovered(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setHovered(false), 200);
  };

  const renderIcon = () => {
    switch (card.platform) {
      case 'github':
        return (
          <svg viewBox='0 0 24 24' className='w-[19px] h-[19px]' fill='currentColor'>
            <path d='M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z' />
          </svg>
        );
      case 'linkedin':
        return (
          <svg viewBox='0 0 24 24' className='w-[19px] h-[19px]' fill='currentColor'>
            <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
          </svg>
        );
      case 'x':
      default:
        return (
          <svg viewBox='0 0 24 24' className='w-[17px] h-[17px]' fill='currentColor'>
            <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
          </svg>
        );
    }
  };

  const platformColor =
    card.platform === 'github'
      ? 'border-zinc-700'
      : card.platform === 'linkedin'
        ? 'border-zinc-700'
        : 'border-zinc-700';

  return (
    <div className='relative' onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <a
        href={card.url}
        target='_blank'
        rel='noopener noreferrer'
        className='inline-flex items-center justify-center w-9 h-9 rounded-full text-zinc-400 hover:text-zinc-300 hover:bg-zinc-800/50 transition-all duration-200'
        aria-label={card.platform}
      >
        {renderIcon()}
      </a>

      {/* Hover Card */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-[280px] bg-[#141415] border border-zinc-800 rounded-xl shadow-2xl p-4 z-50`}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
          >
            {card.isGithub ? (
              // GitHub specific hover card layout
              <div>
                <div className='flex items-center gap-3'>
                  <div className='w-12 h-12 rounded-full bg-zinc-800 overflow-hidden flex-shrink-0'>
                    <img
                      src={card.avatar}
                      alt={card.username}
                      className='w-full h-full object-cover'
                    />
                  </div>
                  <div className='min-w-0'>
                    <p className='text-sm font-medium text-zinc-100 truncate'>
                      {card.username}
                    </p>
                    <p className='text-[11px] text-zinc-500 truncate'>
                      {card.contributions}
                    </p>
                  </div>
                </div>
                <GithubGraph />
              </div>
            ) : (
              // Standard hover card layout
              <div>
                <div className='flex items-center gap-3 mb-3'>
                  <div className='w-10 h-10 rounded-full bg-zinc-800 overflow-hidden flex-shrink-0'>
                    <img
                      src={card.avatar}
                      alt={card.displayName}
                      className='w-full h-full object-cover'
                    />
                  </div>
                  <div className='min-w-0'>
                    <p className='text-sm font-medium text-zinc-100 truncate'>
                      {card.displayName}
                    </p>
                    <p className='text-xs text-zinc-500 truncate'>
                      @{card.username}
                    </p>
                  </div>
                </div>
                {card.bio && (
                  <p className='text-xs text-zinc-400 leading-relaxed'>
                    {card.bio}
                  </p>
                )}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ProfileSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('untara337@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id='profile'>
      <div className='relative w-full max-w-3xl mx-auto'>
        {/* Corner Accents for the Section */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t-[1.5px] border-l-[1.5px] border-zinc-500 z-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-2 h-2 border-t-[1.5px] border-r-[1.5px] border-zinc-500 z-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b-[1.5px] border-l-[1.5px] border-zinc-500 z-20 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b-[1.5px] border-r-[1.5px] border-zinc-500 z-20 pointer-events-none" />

        <div className='pt-32 pb-4 px-4'>

          {/* Name — bold, large, with pronunciation sound */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='flex items-center gap-3 mb-12'
          >
            <h1 className='font-bold text-[32px] text-white tracking-tight'>
              Untara Eka Saputra
            </h1>
            <button
              onClick={() => {
                const utterance = new SpeechSynthesisUtterance('Untara Eka Saputra');
                utterance.lang = 'id-ID';
                utterance.rate = 0.9;
                utterance.pitch = 1;
                window.speechSynthesis.speak(utterance);
              }}
              className='group flex items-center justify-center h-8 w-8 rounded-full bg-zinc-800/60 hover:bg-zinc-700/60 border border-zinc-700/50 hover:border-zinc-600 text-zinc-500 hover:text-zinc-200 transition-all duration-200 cursor-pointer flex-shrink-0'
              title='Pronounce name'
              aria-label='Pronounce name'
            >
              <Volume2 className='h-4 w-4 group-hover:scale-110 transition-transform duration-150' />
            </button>
          </motion.div>

          {/* Bio - exactly matching reference style */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className='mb-12 space-y-6 max-w-3xl'
          >
            <p className='text-[17px] text-zinc-400 leading-[1.6]'>
              Hi! I’m an <span className='text-zinc-200 font-medium'>Informatics Engineering student</span> with a strong interest in <span className='text-zinc-200 font-medium'>backend development, network engineering, and data engineering</span>.
            </p>

            <p className='text-[17px] text-zinc-400 leading-[1.6]'>
              I enjoy building <span className='text-zinc-200 font-medium'>efficient, scalable, and reliable technology solutions</span>, from designing backend systems and RESTful APIs to working with databases, network infrastructure, and data pipelines.
            </p>

            <p className='text-[17px] text-zinc-400 leading-[1.6]'>
              I’m passionate about turning ideas into <span className='text-zinc-200 font-medium'>functional and well-structured systems</span>, while continuously improving my technical skills through academic projects, personal projects, and hands-on experience.
            </p>

            <p className='text-[17px] text-zinc-400 leading-[1.6]'>
              Currently, I’m focused on expanding my expertise in <span className='text-zinc-200 font-medium'>backend architecture, networking, data engineering, and system development</span>.
            </p>
          </motion.div>

          {/* Copy Email Button + Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className='flex items-center gap-4'
          >
            {/* Copy Email Button */}
            <button
              onClick={handleCopyEmail}
              className={`group flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${copied
                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                : 'bg-zinc-100 text-zinc-900 hover:bg-white hover:shadow-lg hover:shadow-white/10'
                }`}
            >
              {copied ? (
                <>
                  <Check className='h-4 w-4' />
                  Copied!
                </>
              ) : (
                'Copy my email'
              )}
            </button>

            {/* Social Icons with hover cards */}
            <div className='flex items-center gap-2 ml-2'>
              {socialCards.map((card) => (
                <SocialIcon key={card.platform} card={card} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
