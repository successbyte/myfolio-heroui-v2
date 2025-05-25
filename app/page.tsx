'use client';

import { CustomCursor } from '@/components/CustomCursor';
import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Contact } from '@/components/Contact';

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact /> 
      {/* Add other sections here as we create them */}
    </main>
  );
}
