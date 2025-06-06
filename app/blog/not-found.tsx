import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center px-4 text-center'>
      <h1 className='text-6xl font-bold text-gray-900 mb-4'>404</h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        Blog Post Not Found
      </h2>
      <p className='text-gray-600 mb-8 max-w-md'>
        The blog post you're looking for doesn't seem to exist or has been
        moved.
      </p>
      <Link href='/blog'>
        <Button className='bg-red-600 hover:bg-red-700 text-white'>
          Return to Blog
        </Button>
      </Link>
    </div>
  );
}
