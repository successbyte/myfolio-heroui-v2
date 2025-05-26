import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardBody, Avatar, Button, Tabs, Tab, Chip } from '@heroui/react';

const testimonials = [
  {
    id: 1,
    name: "Sophia Chen",
    role: "CEO, Vertex Innovations",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
    logo: "/companies/vertex.svg",
    content: "Johan delivered an exceptional website that perfectly captures our brand identity. His attention to detail and ability to translate our vision into a seamless digital experience exceeded our expectations. The site has significantly increased our conversion rates and user engagement.",
    rating: 5,
    tags: ["Web Development", "UI/UX", "Branding"],
    project: "Corporate Website Redesign",
    stats: {
      conversion: "+45%",
      engagement: "+60%",
      performance: "98/100"
    }
  },
  {
    id: 2,
    name: "Marcus Reynolds",
    role: "Product Director, Pulse Analytics",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
    logo: "/companies/pulse.svg",
    content: "Working with Johan was a game-changer for our product. His technical expertise combined with an exceptional eye for design resulted in an interface that our users love. The new dashboard has received overwhelming positive feedback.",
    rating: 5,
    tags: ["Product Design", "Analytics", "Dashboard"],
    project: "Analytics Dashboard",
    stats: {
      usability: "+75%",
      retention: "+40%",
      satisfaction: "9.5/10"
    }
  },
  {
    id: 3,
    name: "Elena Kowalski",
    role: "Marketing Director, Nexus Media",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1890&auto=format&fit=crop",
    logo: "/companies/nexus.svg",
    content: "Johan's work on our e-commerce platform was transformative. He created a shopping experience that not only looks beautiful but converts at a much higher rate. His understanding of user behavior and conversion optimization is exceptional.",
    rating: 5,
    tags: ["E-commerce", "Optimization", "UX Design"],
    project: "E-commerce Platform",
    stats: {
      sales: "+85%",
      cart: "+50%",
      bounce: "-35%"
    }
  }
];

export const Testimonials = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.white/[0.03])_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.white/[0.03])_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-transparent" />
      </div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-mono text-primary/80 bg-primary/5 border border-primary/10 px-3 py-1 rounded-full mb-4"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-grotesk mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80"
          >
            Client Success Stories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground/80 font-mono max-w-2xl mx-auto"
          >
            Real feedback from clients who've experienced the impact of my work firsthand
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-[#111111] border border-white/5 hover:border-primary/20 transition-all duration-300 group">
                {/* Hover Effect Strip */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 group-hover:duration-200" />
                
                <CardBody className="p-6 relative">
                  {/* Client Info */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative">
                      <Avatar
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 border-2 border-white/10 rounded-full overflow-hidden filter grayscale hover:grayscale-0 transition-all duration-500"
                      />
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary rounded-full border-2 border-background" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold font-grotesk text-white truncate">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-primary/80 truncate">
                        {testimonial.role}
                      </p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-primary/60"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  {/* Project Type */}
                  <div className="mb-4">
                    <Chip
                      variant="flat"
                      className="bg-white/5 text-white/70 text-xs"
                    >
                      {testimonial.project}
                    </Chip>
                  </div>

                  {/* Testimonial Content */}
                  <div className="relative">
                    <div className="absolute -top-2 -left-2 text-4xl text-primary/20">"</div>
                    <p className="text-white/70 text-sm leading-relaxed mb-4 line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                      {testimonial.content}
                    </p>
                    <div className="absolute -bottom-2 -right-2 text-4xl text-primary/20">"</div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-2 mt-6 pt-4 border-t border-white/5">
                    {Object.entries(testimonial.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-primary/80 text-lg font-bold font-grotesk">
                          {value}
                        </div>
                        <div className="text-white/40 text-xs font-mono capitalize">
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {testimonial.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-mono rounded-full bg-white/5 text-white/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};