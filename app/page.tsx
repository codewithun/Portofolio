'use client';

import { motion } from 'framer-motion';
import Dots from '@/components/ui/Dots';
import Header from '@/components/sections/header/Header';
import ProfileSection from '@/components/sections/profile/ProfileSection';
import GithubSection from '@/components/sections/github/GithubSection';
import SkillsSection from '@/components/sections/skills/SkillsSection';
import ProjectsSection from '@/components/sections/projects/ProjectsSection';
import ExperienceSection from '@/components/sections/experience/ExperienceSection';
import CertificationsSection from '@/components/sections/certifications/CertificationsSection';
import ContactSection from '@/components/sections/contact/ContactSection';
import FooterSection from '@/components/sections/footer/FooterSection';

function SectionDivider() {
  return (
    <div className='flex justify-center'>
      <div className='w-full max-w-3xl mx-auto'>
        <div className='w-full h-[40px] border border-zinc-800/40 rounded-sm overflow-hidden'>
          <svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'>
            <defs>
              <pattern
                id='diagonalHatch'
                x='0'
                y='0'
                width='8'
                height='8'
                patternUnits='userSpaceOnUse'
                patternTransform='rotate(45)'
              >
                <line
                  x1='0' y1='0' x2='0' y2='8'
                  stroke='hsl(240 4% 20%)'
                  strokeWidth='1.5'
                />
              </pattern>
            </defs>
            <rect width='100%' height='100%' fill='url(#diagonalHatch)' />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className='min-h-screen bg-[#0a0a0b] text-zinc-100 font-sans relative overflow-hidden'>
      {/* Background Dots component covering the whole screen */}
      <div className='fixed inset-0 z-0 pointer-events-auto'>
        <Dots
          gridType="snake"
          backgroundColor="transparent"
          dotColor="#52525b"
          dotSize={2.5}
          spacing={36}
          proximityRadius={180}
          maxOpacity={1}
          backgroundOpacity={0.4}
          fadeDelay={250}
          dashArray="4 8"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Solid background for the middle column to hide the grid inside the lines */}
      <div className='fixed inset-0 z-0 pointer-events-none flex justify-center'>
        <div className='w-full max-w-3xl bg-[#0a0a0b] border-x border-zinc-800/40 h-full' />
      </div>

      {/* Fixed top blur overlay — content blurs as it scrolls behind this */}
      {/* Layer 1: Strong backdrop blur with fade mask */}
      <div
        className='fixed top-0 left-0 right-0 h-36 z-40 pointer-events-none'
        style={{
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 20%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, black 0%, black 20%, transparent 100%)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
        }}
      />
      {/* Layer 2: Solid color fade for cleaner transition */}
      <div
        className='fixed top-0 left-0 right-0 h-40 z-[39] pointer-events-none'
        style={{
          background: 'linear-gradient(to bottom, #0a0a0b 0%, #0a0a0be6 25%, #0a0a0b99 50%, #0a0a0b00 100%)',
        }}
      />

      <Header />

      <div className='relative z-10'>
        <main>
          <ProfileSection />

          <SectionDivider />
          <GithubSection />

          <SectionDivider />
          <ExperienceSection />

          <SectionDivider />
          <ProjectsSection />

          <SectionDivider />
          <SkillsSection />

          <SectionDivider />
          <CertificationsSection />

          <SectionDivider />
          <ContactSection />
        </main>

        <FooterSection />
      </div>
    </div>
  );
}
