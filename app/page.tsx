'use client';

import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // avoid hydration mismatch

  return (
    <div className="bg-white dark:bg-black min-h-screen flex flex-col items-center justify-center text-black dark:text-white transition-all duration-300">
      <h1 className="text-2xl font-bold mb-4">Next.js Dark Mode</h1>
      <button
        className="px-4 py-2 border rounded"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        Toggle Theme
      </button>
      <Button>Click me</Button>
    </div>
  );
}
