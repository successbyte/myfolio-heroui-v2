'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Message = {
  type: 'user' | 'bot';
  content: string;
};

const portfolioInfo = {
  about: "I'm a Full Stack Developer specializing in modern web technologies.",
  experience: "5+ years of experience in web development",
  skills: "React, Next.js, Node.js, TypeScript, and more",
  contact: "Available for freelance and full-time opportunities",
  location: "Available for remote work worldwide",
  status: "Currently available for new projects",
};

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { type: 'bot', content: 'Hi! I can help you learn more about my portfolio. What would you like to know?' },
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage = { type: 'user' as const, content: inputValue };
    setMessages(prev => [...prev, userMessage]);

    // Simple keyword matching
    const response = { type: 'bot' as const, content: getBotResponse(inputValue) };
    setTimeout(() => {
      setMessages(prev => [...prev, response]);
    }, 500);

    setInputValue('');
  };

  const getBotResponse = (input: string) => {
    const lowercaseInput = input.toLowerCase();
    
    if (lowercaseInput.includes('about')) return portfolioInfo.about;
    if (lowercaseInput.includes('experience')) return portfolioInfo.experience;
    if (lowercaseInput.includes('skills')) return portfolioInfo.skills;
    if (lowercaseInput.includes('contact')) return portfolioInfo.contact;
    if (lowercaseInput.includes('location')) return portfolioInfo.location;
    if (lowercaseInput.includes('status') || lowercaseInput.includes('available')) return portfolioInfo.status;
    
    return "I can tell you about my experience, skills, availability, or how to contact me. What would you like to know?";
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 left-8 p-4 rounded-full bg-white/5 dark:bg-white/10 backdrop-blur-lg border border-white/10 hover:bg-white/20 dark:hover:bg-white/20 transition-colors z-40"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 left-8 w-80 rounded-2xl bg-white/5 dark:bg-white/10 backdrop-blur-lg border border-white/10 overflow-hidden z-40"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 flex justify-between items-center">
              <h3 className="font-mono text-sm">Portfolio Assistant</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg hover:bg-white/10 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.type === 'user'
                        ? 'bg-white/10 dark:bg-white/20'
                        : 'bg-white/5 dark:bg-white/10'
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-white/5 dark:bg-white/10 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-white/20"
                />
                <button
                  onClick={handleSend}
                  className="p-2 rounded-xl bg-white/5 dark:bg-white/10 hover:bg-white/20 dark:hover:bg-white/20 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}; 