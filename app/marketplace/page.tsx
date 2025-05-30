'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CustomCursor } from '@/components/CustomCursor';
import { PaymentModal } from '@/components/PaymentModal';
import Image from 'next/image';
import { 
  Star, 
  Check,
  Code,
  Palette,
  Zap,
  Shield,
  X,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ShoppingBag
} from 'lucide-react';
import {  Chip } from '@heroui/react';

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  features: string[];
  techStack: string[];
  rating: number;
  sales: number;
  author: {
    name: string;
    image: string;
    role: string;
  };
  demoUrl: string;
  previewImages: string[];
}

const products: Product[] = [
  {
    id: 'modern-portfolio',
    title: 'Modern Portfolio Template',
    description: 'A sleek and responsive portfolio template built with Next.js 13, Tailwind CSS, and Framer Motion. Perfect for developers and designers who want to showcase their work with style.',
    price: 49,
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000',
    category: 'Template',
    features: [
      'Responsive Design',
      'Dark/Light Mode',
      'Blog Section',
      'Project Showcase',
      'Contact Form',
      'SEO Optimized',
      'Performance Optimized',
      'Easy Customization'
    ],
    techStack: [
      'Next.js 13',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'MDX',
      'Hero UI'
    ],
    rating: 4.9,
    sales: 234,
    author: {
      name: 'Andrew Paulson',
      image: '/images/avatar-1.png',
      role: 'Senior Developer'
    },
    demoUrl: 'https://modern-portfolio.demo.com',
    previewImages: [
      'https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1000',
      'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1000',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000'
    ]
  },
  {
    id: 'ui-component-library',
    title: 'Premium UI Component Library',
    description: 'A comprehensive collection of beautiful and reusable React components with animations, TypeScript support, and modern design patterns.',
    price: 79,
    image: 'https://images.unsplash.com/photo-1481487196290-c152efe083f5?q=80&w=1000',
    category: 'Components',
    features: [
      '100+ Components',
      'TypeScript Support',
      'Animation Library',
      'Theme Customization',
      'Accessibility Ready',
      'Documentation',
      'Regular Updates',
      'Premium Support'
    ],
    techStack: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Storybook',
      'Jest'
    ],
    rating: 4.8,
    sales: 567,
    author: {
      name: 'Andrew Paulson',
      image: '/images/avatar-1.png',
      role: 'Senior Developer'
    },
    demoUrl: 'https://ui-components.demo.com',
    previewImages: [
      'https://images.unsplash.com/photo-1545235617-7a424c1a60cc?q=80&w=1000',
      'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&w=1000',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000'
    ]
  },
  {
    id: 'saas-starter',
    title: 'SaaS Starter Template',
    description: 'Launch your SaaS product faster with this complete starter template. Includes authentication, billing, user management, and more.',
    price: 149,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000',
    category: 'Template',
    features: [
      'Authentication System',
      'Stripe Integration',
      'User Dashboard',
      'Admin Panel',
      'Email Templates',
      'API Documentation',
      'Analytics Integration',
      'CI/CD Setup'
    ],
    techStack: [
      'Next.js 13',
      'TypeScript',
      'Prisma',
      'tRPC',
      'NextAuth.js',
      'Stripe'
    ],
    rating: 4.9,
    sales: 189,
    author: {
      name: 'Andrew Paulson',
      image: '/images/avatar-1.png',
      role: 'Senior Developer'
    },
    demoUrl: 'https://saas-starter.demo.com',
    previewImages: [
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1000',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1000',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000'
    ]
  },
  {
    id: 'ecommerce-template',
    title: 'Modern E-commerce Template',
    description: 'A full-featured e-commerce template with product management, cart functionality, and seamless checkout experience.',
    price: 129,
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000',
    category: 'Template',
    features: [
      'Product Management',
      'Shopping Cart',
      'Stripe Checkout',
      'Order Management',
      'Search & Filters',
      'Wishlist',
      'Reviews System',
      'Analytics'
    ],
    techStack: [
      'Next.js 13',
      'TypeScript',
      'Tailwind CSS',
      'Prisma',
      'Stripe',
      'Redis'
    ],
    rating: 4.7,
    sales: 312,
    author: {
      name: 'Andrew Paulson',
      image: '/images/avatar-1.png',
      role: 'Senior Developer'
    },
    demoUrl: 'https://ecommerce.demo.com',
    previewImages: [
      'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000',
      'https://images.unsplash.com/photo-1472393365320-db77a5abbecc?q=80&w=1000',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000'
    ]
  }
];

interface PreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
  onPurchase: (product: Product) => void;
}

const PreviewModal = ({ isOpen, onClose, product, onPurchase }: PreviewModalProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    } else {
      const timer = setTimeout(() => setIsMounted(false), 300); // Match exit animation duration
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen || !product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[1000] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-black/90 rounded-xl w-full max-w-5xl max-h-[90vh] overflow-y-auto border border-white/10 relative"
          >
            <div className="sticky top-0 bg-black/90 backdrop-blur-sm z-10 flex justify-between items-center p-6 border-b border-white/10">
              <div className="flex items-center gap-4">
                <div>
                  <h3 className="text-2xl font-bold">{product.title}</h3>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="px-3 py-1 text-sm font-medium bg-primary text-black rounded-full">
                      {product.category}
                    </span>
                    <div className="flex items-center gap-2 text-white/60">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="font-medium">{product.rating}</span>
                      <span>({product.sales} sales)</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button 
                  onClick={onClose} 
                  className="p-2 text-white/60 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="aspect-video rounded-xl overflow-hidden border border-white/10">
                    <Image
                      src={product.previewImages[0]}
                      alt={product.title}
                      width={800}
                      height={450}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {product.previewImages.slice(1).map((img, idx) => (
                      <div key={idx} className="aspect-video rounded-xl overflow-hidden border border-white/10">
                        <Image
                          src={img}
                          alt={`${product.title} preview ${idx + 2}`}
                          width={300}
                          height={169}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                    <Image
                      src={product.author.image}
                      alt={product.author.name}
                      width={48}
                      height={48}
                      className="rounded-full ring-2 ring-white/10"
                    />
                    <div>
                      <div className="font-medium text-white">
                        {product.author.name}
                      </div>
                      <div className="text-sm text-white/60">
                        {product.author.role}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-4">About This Template</h4>
                    <p className="text-white/70 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.techStack.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-3 py-1.5 text-sm font-medium bg-white/5 text-white/70 rounded-full border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Features</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {product.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                          <Check className="w-5 h-5 text-primary" />
                          <span className="text-white/90">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 bg-primary/10 rounded-xl border border-primary/20">
                    <h4 className="text-lg font-semibold mb-2 text-primary">Get Started Today</h4>
                    <p className="text-white/70 mb-4">
                      Purchase this template now and start building your amazing project with our well-documented and easy-to-customize code.
                    </p>
                    <button
                      className="w-full px-6 py-3 bg-primary text-black font-medium rounded-lg hover:bg-primary/90 transition-colors"
                      onClick={() => {
                        onClose();
                        onPurchase(product);
                      }}
                    >
                      Purchase for ${product.price}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

interface OrderSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
}

const OrderSuccessModal = ({ isOpen, onClose, product }: OrderSuccessModalProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    } else {
      const timer = setTimeout(() => setIsMounted(false), 300); // Match exit animation duration
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen || !product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[1000] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-black/90 rounded-xl w-full max-w-lg p-8 border border-primary/20 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-50" />
            
            <div className="relative z-10">
              <div className="flex flex-col items-center text-center mb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Order Successful!</h3>
                <p className="text-white/60">
                  Thank you for purchasing {product.title}
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-16 w-16 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                      <ShoppingBag className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white/80">{product.title}</h4>
                      <p className="text-sm text-white/40">{product.category}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/60">Order ID</span>
                      <span className="font-mono">#{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/60">Date</span>
                      <span>{new Date().toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/60">Amount</span>
                      <span className="font-bold text-lg">${product.price}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/10 rounded-lg p-6 border border-primary/20">
                  <h4 className="font-medium text-primary mb-2">What's Next?</h4>
                  <p className="text-sm text-white/60 mb-4">
                    You'll receive an email with download instructions and access to your purchase shortly.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-white/40">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Instant access to files</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <button
                    onClick={onClose}
                    className="flex-1 px-6 py-3 bg-primary text-black font-medium rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                  >
                    Continue Shopping
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function MarketplacePage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
  const [isOrderSuccessOpen, setIsOrderSuccessOpen] = useState(false);

  const handlePurchase = (product: Product) => {
    setSelectedProduct(product);
    setIsPaymentModalOpen(true);
  };

  const handlePaymentSuccess = () => {
    setIsPaymentModalOpen(false);
    setIsOrderSuccessOpen(true);
  };

  return (
    <main className="min-h-screen bg-black text-white relative">
      <CustomCursor />
      
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.white/[0.03])_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.white/[0.03])_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <OrderSuccessModal
        isOpen={isOrderSuccessOpen}
        onClose={() => setIsOrderSuccessOpen(false)}
        product={selectedProduct}
      />

      {/* Preview Modal */}
      <PreviewModal
        isOpen={isPreviewModalOpen}
        onClose={() => setIsPreviewModalOpen(false)}
        product={selectedProduct}
        onPurchase={handlePurchase}
      />

      {/* Payment Modal */}
      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        productTitle={selectedProduct?.title || ''}
        price={selectedProduct?.price || 0}
        onSuccess={handlePaymentSuccess}
      />

      {/* Header */}
      <header className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Premium Quality Digital Products</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-primary"
            >
              Build Faster & Better
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/70 max-w-2xl mx-auto"
            >
              Discover our collection of premium templates, components, and resources designed to accelerate your development workflow.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center justify-center gap-4"
            >
              <div className="flex -space-x-2">
                {[
                  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
                  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
                  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330'
                ].map((avatar, i) => (
                  <div key={i} className="relative w-8 h-8 rounded-full border-2 border-black overflow-hidden">
                    <Image
                      src={avatar}
                      alt={`User ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <span className="text-white/60">
                Trusted by <span className="text-white font-medium">2,000+</span> developers
              </span>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
                <div className="relative bg-black/50 backdrop-blur-xl border border-white/10 hover:border-primary/20 rounded-xl overflow-hidden transition-all duration-300">
                  <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.title}
                      width={800}
                      height={450}
                      className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={() => {
                          setSelectedProduct(product);
                          setIsPreviewModalOpen(true);
                        }}
                        className="px-6 py-3 bg-primary text-black font-medium rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2"
                      >
                        Preview Template
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                    </div>

                  <div className="p-6 space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <Chip variant="flat" color="primary" className="bg-primary/10 text-primary">
                          {product.category}
                        </Chip>
                        <div className="flex items-center gap-2 text-white/60">
                          <Star className="w-4 h-4 text-yellow-500" />
                          <span className="font-medium">{product.rating}</span>
                          <span>({product.sales} sales)</span>
                        </div>
                      </div>
                      <h2 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {product.title}
                      </h2>
                      <p className="text-white/70">
                        {product.description}
                      </p>
                    </div>

                    <div>
                      <h3 className="font-medium text-sm text-white/60 mb-3">Tech Stack</h3>
                      <div className="flex flex-wrap gap-2">
                        {product.techStack.map(tech => (
                          <Chip
                            key={tech}
                            variant="flat"
                            className="bg-white/5 text-white/70 border border-white/10"
                          >
                            {tech}
                          </Chip>
                        ))}
                      </div>
                      </div>

                    <div>
                      <h3 className="font-medium text-sm text-white/60 mb-3">Key Features</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {product.features.slice(0, 4).map(feature => (
                          <div
                            key={feature}
                            className="flex items-center gap-2 text-sm text-white/70"
                          >
                            <Check className="w-4 h-4 text-primary" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      </div>

                      <div className="flex items-center justify-between pt-6 border-t border-white/10">
                        <div className="flex items-center gap-3">
                          <Image
                            src={product.author.image}
                            alt={product.author.name}
                            width={40}
                            height={40}
                          className="rounded-full ring-2 ring-white/10"
                          />
                          <div>
                          <div className="font-medium text-white">
                              {product.author.name}
                            </div>
                          <div className="text-sm text-white/60">
                              {product.author.role}
                          </div>
                          </div>
                        </div>

                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <div className="text-sm text-white/60">Price</div>
                          <div className="text-2xl font-bold text-white">${product.price}</div>
                        </div>
                        <button
                          className="px-6 py-2 bg-primary text-black font-medium rounded-lg hover:bg-primary/90 transition-colors"
                          onClick={() => handlePurchase(product)}
                        >
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4"
              >
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Why Choose Us</span>
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl font-bold mb-4"
              >
                Built for Modern Developers
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-white/70 max-w-2xl mx-auto"
              >
                Our products are crafted with the latest technologies and best practices to help you build better applications faster.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Code className="w-6 h-6" />,
                  title: 'Clean Code',
                  description: 'Well-structured and documented code following best practices'
                },
                {
                  icon: <Palette className="w-6 h-6" />,
                  title: 'Modern Design',
                  description: 'Beautiful and responsive designs that work on all devices'
                },
                {
                  icon: <Zap className="w-6 h-6" />,
                  title: 'Performance',
                  description: 'Optimized for speed and excellent user experience'
                },
                {
                  icon: <Shield className="w-6 h-6" />,
                  title: 'Support',
                  description: 'Dedicated support and regular updates'
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="h-full p-6 bg-black/50 backdrop-blur-xl border border-white/10 rounded-xl transition-colors hover:border-primary/20">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-white/70 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 