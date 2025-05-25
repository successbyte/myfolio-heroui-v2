'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  features: string[];
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    title: 'UI Component Library',
    description: 'A collection of reusable React components with modern design',
    price: 49,
    features: [
      'Over 50 components',
      'TypeScript support',
      'Tailwind CSS integration',
      'Dark mode included',
      'Regular updates'
    ],
    category: 'Development'
  },
  {
    id: 2,
    title: 'Portfolio Templates',
    description: 'Premium portfolio templates for developers and designers',
    price: 29,
    features: [
      'Multiple layouts',
      'Responsive design',
      'SEO optimized',
      'Easy customization',
      'Documentation included'
    ],
    category: 'Templates'
  },
  {
    id: 3,
    title: 'Development Course',
    description: 'Complete guide to modern web development',
    price: 99,
    features: [
      'Video tutorials',
      'Project files',
      'Certificate',
      'Lifetime access',
      'Community support'
    ],
    category: 'Education'
  }
];

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-background border border-border rounded-xl p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-xl opacity-0 group-hover:opacity-20 transition duration-300" />
        
        <div className="relative">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 rounded-full mb-4">
            {product.category}
          </span>
          
          <h3 className="text-xl font-bold mb-2">{product.title}</h3>
          <p className="text-muted-foreground mb-4">{product.description}</p>
          
          <div className="space-y-2 mb-6">
            {product.features.map((feature: string, index: number) => (
              <div key={index} className="flex items-center gap-2">
                <svg className="w-4 h-4 text-primary" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold">${product.price}</span>
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
              Purchase
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const Marketplace = () => {
  return (
    <section id="marketplace" className="py-20">
      <div className="container">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold"
            >
              Digital Products
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Browse through my collection of premium digital products, templates, and resources
            </motion.p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}; 