"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, Chip, Progress, CardBody, CardHeader } from "@heroui/react";
import { Button } from "@/components/ui/button";
import { GridBackground } from "./ui/grid-background";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  // Add state to track if we should start animations
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    // Wait for loader timeout (3.7 seconds) before allowing animations
    const timer = setTimeout(() => {
      setShouldAnimate(true);
    }, 3700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <GridBackground>
      <section
        ref={ref}
        className="relative min-h-screen flex items-start py-10 justify-center overflow-hidden"
      >
        <div className="container z-50">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView && shouldAnimate ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <Chip
                variant="flat"
                color="default"
                startContent={
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                }
                className="py-2 px-4"
              >
                Available for Work
              </Chip>
            </motion.div>

            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView && shouldAnimate ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <h1 className="text-5xl md:text-7xl font-bold font-grotesk">
                Crafting Digital
                <br />
                <span className="text-primary">Experiences</span>
                <br />
                with Code
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-mono">
                Full Stack Developer specializing in building exceptional
                digital experiences
              </p>
            </motion.div>

            {/* Project Status Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView && shouldAnimate ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
            >
              <Card>
                <CardBody className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-secondary">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-mono text-sm text-muted-foreground">
                        Project Status
                      </h3>
                      <p className="font-grotesk">Available</p>
                    </div>
                  </div>
                  <Progress value={100} className="h-2" />
                </CardBody>
              </Card>

              <Card>
                <CardBody className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-secondary">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-mono text-sm text-muted-foreground">
                        Response Time
                      </h3>
                      <p className="font-grotesk">&lt; 24 hours</p>
                    </div>
                  </div>
                  <Progress value={75} className="h-2" />
                </CardBody>
              </Card>

              <Card>
                <CardBody className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-secondary">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-mono text-sm text-muted-foreground">
                        Success Rate
                      </h3>
                      <p className="font-grotesk">98%</p>
                    </div>
                  </div>
                  <Progress value={98} className="h-2" />
                </CardBody>
              </Card>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView && shouldAnimate ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4 mt-8"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View Projects
              </Button>
              <Button
                variant="ghost"
                size="lg"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Contact Me
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </GridBackground>
  );
};
