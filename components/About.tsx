import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const quickInfo = [
  { label: 'Age', value: '25' },
  { label: 'Location', value: 'New York, USA' },
  { label: 'Experience', value: '5+ Years' },
  { label: 'Availability', value: 'Freelance' },
];

export const About = () => {
  return (
    <section id="about" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-grotesk">
              About Me
            </h2>
            
            <div className="space-y-4">
              {[
                "I'm a passionate developer with a keen eye for design and a love for creating beautiful, functional websites.",
                "With expertise in modern web technologies and a deep understanding of user experience, I bring ideas to life through clean, efficient code.",
                "My approach combines technical excellence with creative problem-solving, ensuring each project exceeds expectations.",
              ].map((text, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-lg font-mono text-muted-foreground"
                >
                  {text}
                </motion.p>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              {quickInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-secondary/50 p-4 rounded-lg backdrop-blur-sm border border-border"
                >  
                  <p className="text-sm font-mono text-muted-foreground">{info.label}</p>
                  <p className="text-lg font-grotesk font-bold text-foreground">{info.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative aspect-square"
          >
            <Card className="w-full h-full overflow-hidden">
              <CardContent className="p-8 relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-background rounded-xl" />
                <div className="relative h-full w-full border-2 border-border rounded-xl overflow-hidden">
                  <Image
                    src="/images/avatar-1.png"
                    alt="Profile"
                    width={500}
                    height={500}
                    className="object-contain w-full h-full grayscale"
                    priority
                  />
                </div>
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-md px-6 py-3 rounded-full border border-border">
                  <h3 className="text-xl font-grotesk font-bold">Andrew Paulson</h3>
                  <p className="text-sm font-mono text-center text-muted-foreground">Full-Stack Developer</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};