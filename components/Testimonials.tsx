import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar } from '@heroui/react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Product Manager at Google',
    image: '/images/testimonials/avatar1.png',
    content: 'Working with Soorya was an absolute pleasure. Their technical expertise and attention to detail resulted in a product that exceeded our expectations.',
  },
  {
    name: 'Michael Chen',
    role: 'CTO at Startup.io',
    image: '/images/testimonials/avatar2.png',
    content: 'Soorya brought both technical excellence and creative problem-solving to our project. They were able to tackle complex challenges while maintaining clear communication throughout.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Design Director at Adobe',
    image: '/images/testimonials/avatar3.png',
    content: 'The combination of technical skill and design sensibility is rare to find. Soorya possesses both, making them an invaluable asset to any project.',
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold font-grotesk mb-4">
            Client Testimonials
          </h2>
          <p className="text-muted-foreground font-mono max-w-2xl mx-auto">
            Here's what some of my clients have to say about their experience working with me.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full">
                <CardContent className="p-6 space-y-6">
                  <div className="relative">
                    <div className="absolute -top-2 -left-2 text-4xl text-primary/20">"</div>
                    <p className="text-muted-foreground relative z-10 pt-4">
                      {testimonial.content}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 pt-4">
                    <Avatar
                      src={testimonial.image}
                      name={testimonial.name}
                      className="w-12 h-12 border-2 border-border"
                    />
                    <div>
                      <h3 className="font-grotesk font-bold">{testimonial.name}</h3>
                      <p className="text-sm font-mono text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 