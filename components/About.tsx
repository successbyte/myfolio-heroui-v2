import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowDownToLine, ExternalLink } from "lucide-react";
import Link from "next/link";

const quickInfo = [
  { label: "Age", value: "25" },
  { label: "Location", value: "New York, USA" },
  { label: "Experience", value: "5+ Years" },
  { label: "Availability", value: "Freelance" },
];

export const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.white/[0.03])_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.white/[0.03])_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block text-sm font-mono text-primary/80 bg-primary/5 border border-primary/10 px-3 py-1 rounded-full"
              >
                About Me
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold font-grotesk bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/80"
              >
                Passionate Developer & Designer
              </motion.h2>
            </div>

            <div className="space-y-4">
              {[
                "Hey, I'm Ehsanullah Haidary, a full-stack developer with a keen eye for design and a love for creating beautiful, functional websites.",
                "With expertise in modern web technologies and a deep understanding of user experience, I bring ideas to life through clean, efficient code.",
              ].map((text, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-lg font-mono text-white/70 leading-relaxed"
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
                  className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-lg hover:border-primary/50 transition-all duration-300"
                >
                  <p className="text-sm font-mono text-primary/80">
                    {info.label}
                  </p>
                  <p className="text-lg font-grotesk font-bold text-white/90">
                    {info.value}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 transition-all duration-300 group"
              >
                Download CV
                <ArrowDownToLine className="ml-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform duration-300" />
              </Button>
              <Button
                as={Link}
                href="/projects"
                variant="secondary"
                size="lg"
                className="bg-transparent border border-white/10 hover:bg-white/5 transition-all duration-300 group"
              >
                View Portfolio
                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform duration-300" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Card className="bg-black/50 backdrop-blur-xl border-white/10 overflow-hidden group">
              <CardContent className="p-8">
                <div className="relative aspect-square rounded-xl overflow-hidden">
                  <Image
                    src="/images/avatar-1.png"
                    alt="Profile"
                    width={500}
                    height={500}
                    className="object-cover w-full h-full filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                    priority
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
