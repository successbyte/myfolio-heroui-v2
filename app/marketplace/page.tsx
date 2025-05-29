'use client';

import { motion } from 'framer-motion';
import { Button } from '@heroui/button';
import { CustomCursor } from '@/components/CustomCursor';

const products = [
  {
    id: 1,
    title: 'Modern Portfolio Template',
    description: 'A sleek and responsive portfolio template built with Next.js and Tailwind CSS.',
    price: 49,
    category: 'Template',
    features: ['Responsive Design', 'SEO Optimized', 'Easy Customization', 'Documentation'],
    image: '/product1.jpg',
  },
  {
    id: 2,
    title: 'UI Component Library',
    description: 'A collection of beautiful and reusable React components with animations.',
    price: 79,
    category: 'Components',
    features: ['100+ Components', 'TypeScript Support', 'Framer Motion', 'Regular Updates'],
    image: '/product2.jpg',
  },
  {
    id: 3,
    title: 'Design System Kit',
    description: 'Complete design system with components, icons, and documentation.',
    price: 99,
    category: 'Design',
    features: ['Figma Files', 'Code Components', 'Style Guide', 'Icon Pack'],
    image: '/product3.jpg',
  },
];

const ProductCard = ({ product, index }: { product: typeof products[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white/5 rounded-xl overflow-hidden border border-white/10"
    >
      <div className="absolute  inset-0 bg-gradient-to-b from-transparent via-black/50 to-black opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="p-6 space-y-4 relative z-10">
        <div className="flex items-center justify-between">
          <span className="px-3 py-1 bg-white/10 rounded-full text-sm font-mono">
            {product.category}
          </span>
          <span className="text-2xl font-bold font-grotesk">${product.price}</span>
        </div>

        <h3 className="text-2xl font-grotesk font-bold group-hover:text-white transition-colors">
          {product.title}
        </h3>

        <p className="text-gray-400 font-mono text-sm">
          {product.description}
        </p>

        <ul className="space-y-2">
          {product.features.map((feature) => (
            <li key={feature} className="flex items-center text-sm font-mono text-gray-400">
              <svg
                className="w-4 h-4 mr-2 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>

        <div className="pt-4">
          <Button
            className="w-full magnetic-button bg-white text-black hover:bg-gray-200 font-mono text-sm group relative overflow-hidden"
            variant="solid"
          >
            <span className="relative z-10">Purchase Now</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white via-gray-200 to-white"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.5 }}
            />
          </Button>
        </div>
      </div>

      <motion.div
        className="absolute -bottom-2 -right-2 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"
        initial={{ scale: 0.8 }}
        whileHover={{ scale: 1.2 }}
      />
    </motion.div>
  );
};

const MarketplacePage = () => {
  return (
    <main className="bg-black container mx-auto text-white min-h-screen relative">
      <CustomCursor />

      {/* Animated background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute w-full h-full">
          <motion.div
            className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-white/10 to-transparent rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-white/10 to-transparent rounded-full blur-3xl"
            animate={{
              x: [0, -100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold font-grotesk mb-6 relative inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Digital Products
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1 bg-white"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </motion.h1>
            <motion.p
              className="text-xl text-gray-400 font-mono max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Premium digital products to enhance your development workflow.
            </motion.p>
          </motion.div>

          {/* Products grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default MarketplacePage; 