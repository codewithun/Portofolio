'use client';

export default function FooterSection() {
  return (
    <footer className='bg-transparent py-8'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3'>
          <p className='text-xs text-zinc-600'>
            © {new Date().getFullYear()} Untara Eka Saputra
          </p>
          <p className='text-xs text-zinc-700'>
            Built with{' '}
            <span className='text-zinc-500'>Next.js</span>
            {' · '}
            <span className='text-zinc-500'>Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
