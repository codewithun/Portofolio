'use client';

import Header from '@/components/sections/header/Header';
import ProfileSection from '@/components/sections/profile/ProfileSection';
import SkillsSection from '@/components/sections/skills/SkillsSection';
import ProjectsSection from '@/components/sections/projects/ProjectsSection';
import ExperienceSection from '@/components/sections/experience/ExperienceSection';
import CertificationsSection from '@/components/sections/certifications/CertificationsSection';
import ContactSection from '@/components/sections/contact/ContactSection';
import FooterSection from '@/components/sections/footer/FooterSection';

export default function Home() {
  return (
    <div className='min-h-screen bg-white text-gray-800 font-sans'>
      <Header />
      
      <main className='mx-auto'>
        <ProfileSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <CertificationsSection />
        <ContactSection />
      </main>

      <FooterSection />
    </div>
  );
}
