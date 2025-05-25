import { motion } from 'framer-motion';

const quickInfo = [
  { label: 'Age', value: '25' },
  { label: 'Location', value: 'New York, USA' },
  { label: 'Experience', value: '5+ Years' },
  { label: 'Availability', value: 'Freelance' },
];

export const About = () => {
  return (
    <section id="about" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
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
                  className="text-lg font-mono text-gray-300"
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
                  className="bg-white/5 p-4 rounded-lg backdrop-blur-sm"
                >
                  <p className="text-sm font-mono text-gray-400">{info.label}</p>
                  <p className="text-lg font-grotesk font-bold">{info.value}</p>
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
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl overflow-hidden">
              <div className="absolute inset-0 backdrop-blur-3xl" />
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute inset-0 p-8">
                <div className="h-full w-full border-2 border-white/20 rounded-xl" />
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="text-9xl font-bold font-grotesk"
              >
                SK
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 