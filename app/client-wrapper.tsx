'use client';

import { Navbar } from '@/components/navbar';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { CustomCursor } from '@/components/CustomCursor';
import { LoaderScreen } from '@/components/LoaderScreen';
import { ChatBot } from '@/components/ChatBot';

export default function ClientWrapper() {
  return (
    <>
      <CustomCursor />
      <LoaderScreen />
      <Navbar />
      <ThemeSwitcher />
      <ChatBot />
    </>
  );
} 