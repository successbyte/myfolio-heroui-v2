'use client';

import { Navbar } from '@/components/navbar';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { CustomCursor } from '@/components/CustomCursor';
import { LoaderScreen } from '@/components/LoaderScreen';
import { ChatBot } from '@/components/ChatBot';
import { ChatButton } from '@/components/ChatButton';
export default function ClientWrapper() {
  return (
    <>
      <CustomCursor />
      <LoaderScreen />
      <Navbar />
      <ChatBot />
    </>
  );
} 