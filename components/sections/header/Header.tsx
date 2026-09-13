'use client';

import Image from 'next/image';
import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  Briefcase,
  FolderOpen,
  Cpu,
  Award,
  Mail,
  Search,
  ArrowUp,
  X,
} from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Home', icon: Home, href: '#profile' },
  { id: 'experience', label: 'Experience', icon: Briefcase, href: '#experience' },
  { id: 'projects', label: 'Open-Source', icon: FolderOpen, href: '#projects' },
  { id: 'skills', label: 'Tech Stack', icon: Cpu, href: '#skills' },
  { id: 'certifications', label: 'Certifications', icon: Award, href: '#certifications' },
  { id: 'contact', label: 'Contact', icon: Mail, href: '#contact' },
];

export default function Header() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [showPalette, setShowPalette] = useState(false);
  const [search, setSearch] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const collapseTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Update time every second
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
          timeZone: 'Asia/Jakarta',
        }) + ' WIB'
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setShowPalette((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setShowPalette(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Focus input when palette opens
  useEffect(() => {
    if (showPalette && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [showPalette]);

  const handleNavigate = useCallback((href: string) => {
    setIsExpanded(false);
    setShowPalette(false);
    setSearch('');
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleMouseEnter = () => {
    if (collapseTimeout.current) {
      clearTimeout(collapseTimeout.current);
      collapseTimeout.current = null;
    }
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    collapseTimeout.current = setTimeout(() => {
      setIsExpanded(false);
      setHoveredItem(null);
    }, 200);
  };

  const filteredItems = navItems.filter((item) =>
    item.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* Expanding Navigation Pill */}
      <header className='fixed top-4 left-1/2 -translate-x-1/2 z-50'>
        <motion.div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          layout
          transition={{
            layout: { type: 'spring', stiffness: 400, damping: 30, mass: 0.8 },
          }}
          className={`relative overflow-hidden border backdrop-blur-xl ${scrolled
            ? 'bg-[#0a0a0b]/95 border-zinc-800 shadow-2xl shadow-black/30'
            : 'bg-[#141415]/90 border-zinc-800/60 shadow-lg shadow-black/20'
            } ${isExpanded ? 'rounded-2xl' : 'rounded-full'}`}
          style={{ willChange: 'width, height' }}
        >
          {/* Top Bar — always visible */}
          <motion.div layout="position" className='flex items-center gap-3 px-4 py-2.5'>
            {/* Avatar */}
            <div className='h-8 w-8 rounded-full overflow-hidden border border-zinc-700 flex-shrink-0'>
              <Image
                src='/assets/logo.png'
                alt='Untara'
                width={32}
                height={32}
                className='object-cover w-full h-full'
              />
            </div>

            {/* Name & Status */}
            <div className='flex-1 min-w-0 hidden sm:block'>
              <div className='text-sm font-semibold text-zinc-100 leading-tight'>
                Untara Eka Saputra
              </div>
              <AnimatePresence mode='wait'>
                {isExpanded ? (
                  <motion.div
                    key='expanded-sub'
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.15 }}
                    className='flex items-center gap-1.5 text-xs text-zinc-400'
                  >
                    <Mail className='h-3 w-3' />
                    <span>{currentTime}</span>
                  </motion.div>
                ) : (
                  <motion.div
                    key='collapsed-sub'
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15 }}
                    className='flex items-center gap-1.5 text-xs text-zinc-400'
                  >
                    <span className='relative flex h-2 w-2'>
                      <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75'></span>
                      <span className='relative inline-flex rounded-full h-2 w-2 bg-emerald-500'></span>
                    </span>
                    <span>Available for new work</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ⌘K Badge */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowPalette(true);
              }}
              className='px-2 py-1 text-[11px] bg-zinc-800/70 hover:bg-zinc-700/70 rounded-md border border-zinc-700/50 text-zinc-400 hover:text-zinc-200 font-mono transition-colors cursor-pointer flex-shrink-0'
            >
              ⌘K
            </button>
          </motion.div>

          {/* Expandable Sections — slides in */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{
                  height: { type: 'spring', stiffness: 400, damping: 30, mass: 0.8 },
                  opacity: { duration: 0.2 },
                }}
                className='overflow-hidden'
              >
                {/* Divider */}
                <div className='mx-3 border-t border-zinc-800/60' />

                {/* Label */}
                <div className='px-4 pt-3 pb-1.5'>
                  <span className='text-[10px] uppercase tracking-[0.15em] font-semibold text-zinc-500'>
                    Sections
                  </span>
                </div>

                {/* Nav Items */}
                <div
                  className='px-2 pb-3 flex flex-col gap-0.5'
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.03,
                        duration: 0.2,
                        ease: 'easeOut',
                      }}
                      onClick={() => handleNavigate(item.href)}
                      onMouseEnter={() => setHoveredItem(item.id)}
                      className='relative flex items-center gap-3 px-3 py-2 text-sm rounded-lg cursor-pointer group w-full text-left'
                    >
                      {/* Animated hover pill */}
                      {hoveredItem === item.id && (
                        <motion.div
                          layoutId='nav-hover-bg'
                          className='absolute inset-0 bg-zinc-800/50 rounded-lg'
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{
                            type: 'spring',
                            stiffness: 350,
                            damping: 25,
                            mass: 0.6,
                          }}
                        />
                      )}

                      <item.icon
                        className='w-4 h-4 z-10 text-zinc-500 group-hover:text-zinc-200 transition-colors duration-150'
                        strokeWidth={1.8}
                      />
                      <span className='z-10 text-zinc-400 group-hover:text-zinc-100 transition-colors duration-150 font-medium'>
                        {item.label}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </header>

      {/* Command Palette Modal */}
      {showPalette && (
        <div
          className='fixed inset-0 z-[100] command-overlay flex items-start justify-center pt-[20vh]'
          onClick={() => setShowPalette(false)}
        >
          <div
            className='w-full max-w-lg bg-[#141415] border border-zinc-800 rounded-xl shadow-2xl shadow-black/40 overflow-hidden'
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input */}
            <div className='flex items-center gap-3 px-4 py-3 border-b border-zinc-800'>
              <Search className='h-4 w-4 text-zinc-500 flex-shrink-0' />
              <input
                ref={inputRef}
                type='text'
                placeholder='Search sections...'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className='flex-1 bg-transparent text-zinc-200 text-sm outline-none placeholder:text-zinc-600'
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && filteredItems.length > 0) {
                    handleNavigate(filteredItems[0].href);
                  }
                }}
              />
              <button
                onClick={() => setShowPalette(false)}
                className='text-zinc-500 hover:text-zinc-300 transition-colors'
              >
                <X className='h-4 w-4' />
              </button>
            </div>

            {/* Results */}
            <div className='py-2 max-h-72 overflow-y-auto'>
              <div className='px-3 py-1.5'>
                <span className='text-[10px] uppercase tracking-widest text-zinc-600 font-medium'>
                  Sections
                </span>
              </div>
              {filteredItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavigate(item.href)}
                  className='w-full flex items-center gap-3 px-4 py-2.5 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 transition-all duration-150'
                >
                  <ArrowUp className='h-3.5 w-3.5 rotate-45' />
                  <span>{item.label}</span>
                </button>
              ))}
              {filteredItems.length === 0 && (
                <div className='px-4 py-6 text-center text-zinc-600 text-sm'>
                  No results found
                </div>
              )}

              {/* Divider */}
              <div className='mx-3 my-2 border-t border-zinc-800' />

              {/* Quick Actions */}
              <div className='px-3 py-1.5'>
                <span className='text-[10px] uppercase tracking-widest text-zinc-600 font-medium'>
                  Actions
                </span>
              </div>
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setShowPalette(false);
                }}
                className='w-full flex items-center gap-3 px-4 py-2.5 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 transition-all duration-150'
              >
                <ArrowUp className='h-3.5 w-3.5' />
                <span>Back to Top</span>
              </button>
            </div>

            {/* Footer */}
            <div className='flex items-center justify-between px-4 py-2.5 border-t border-zinc-800 text-[10px] text-zinc-600'>
              <span>Navigate with ↑↓ • Select with ↵</span>
              <span>ESC to close</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
