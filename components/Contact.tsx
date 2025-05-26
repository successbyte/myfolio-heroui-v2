'use client';

import { motion } from 'framer-motion';
import { Input, Textarea, Select, SelectItem } from '@heroui/react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from '@/components/ui/card';

const services = [
  { label: 'Web Development', value: 'web-development' },
  { label: 'Mobile App Development', value: 'mobile-app-development' },
  { label: 'UI/UX Design', value: 'ui-ux-design' },
  { label: 'Consulting', value: 'consulting' },
  { label: 'Code Review', value: 'code-review' },
  { label: 'Other', value: 'other' }
];

const budgetRanges = [
  { label: 'Less than $5,000', value: 'less-than-5000' },
  { label: '$5,000 - $10,000', value: '5000-10000' },
  { label: '$10,000 - $20,000', value: '10000-20000' },
  { label: '$20,000 - $50,000', value: '20000-50000' },
  { label: 'More than $50,000', value: 'more-than-50000' }
];

export const Contact = () => {
  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.white/[0.05])_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.white/[0.05])_1px,transparent_1px)] bg-[size:4rem_4rem] dark:opacity-20 opacity-10" />
      </div>

      <div className="container">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-grotesk mb-4">Let&apos;s Work Together</h2>
            <p className="text-muted-foreground font-mono max-w-2xl mx-auto">
              Have a project in mind? Fill out the form below and I&apos;ll get back to you within 24-48 hours.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Contact Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="p-3 rounded-xl bg-secondary">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-mono text-muted-foreground">Email</h3>
                      <p className="font-grotesk">hello@example.com</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="p-3 rounded-xl bg-secondary">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-mono text-muted-foreground">Location</h3>
                      <p className="font-grotesk">New York, USA</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Project Details</CardTitle>
                  <CardDescription>Tell me about your project and requirements</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      type="text"
                      label="Name"
                      placeholder="Your name"
                      variant="bordered"
                      radius="lg"
                      classNames={{
                        input: 'bg-background dark:bg-background',
                        label: 'text-foreground dark:text-foreground',
                        inputWrapper: 'border-border',
                      }}
                    />
                    <Input
                      type="email"
                      label="Email"
                      placeholder="your@email.com"
                      variant="bordered"
                      radius="lg"
                      classNames={{
                        input: 'bg-background dark:bg-background',
                        label: 'text-foreground dark:text-foreground',
                        inputWrapper: 'border-border',
                      }}
                    />
                  </div>

                  <Input
                    type="text"
                    label="Company"
                    placeholder="Your company name (optional)"
                    variant="bordered"
                    radius="lg"
                    classNames={{
                      input: 'bg-background dark:bg-background',
                      label: 'text-foreground dark:text-foreground',
                      inputWrapper: 'border-border',
                    }}
                  />

                  <Select 
                    label="Service Type"
                    placeholder="Select a service"
                    variant="bordered"
                    radius="lg"
                    classNames={{
                      trigger: 'bg-background dark:bg-background border-border',
                      label: 'text-foreground dark:text-foreground',
                      value: 'text-foreground dark:text-foreground',
                    }}
                  >
                    {services.map((service) => (
                      <SelectItem key={service.value}>
                        {service.label}
                      </SelectItem>
                    ))}
                  </Select>

                  <Select
                    label="Budget Range"
                    placeholder="Select your budget"
                    variant="bordered"
                    radius="lg"
                    classNames={{
                      trigger: 'bg-background dark:bg-background border-border',
                      label: 'text-foreground dark:text-foreground',
                      value: 'text-foreground dark:text-foreground',
                    }}
                  >
                    {budgetRanges.map((range) => (
                      <SelectItem key={range.value}>
                        {range.label}
                      </SelectItem>
                    ))}
                  </Select>

                  <Input
                    type="text"
                    label="Timeline"
                    placeholder="Expected project timeline"
                    variant="bordered"
                    radius="lg"
                    classNames={{
                      input: 'bg-background dark:bg-background',
                      label: 'text-foreground dark:text-foreground',
                      inputWrapper: 'border-border',
                    }}
                  />

                  <Textarea
                    label="Project Description"
                    placeholder="Tell me about your project, goals, and any specific requirements"
                    variant="bordered"
                    radius="lg"
                    minRows={4}
                    classNames={{
                      input: 'bg-background dark:bg-background',
                      label: 'text-foreground dark:text-foreground',
                      inputWrapper: 'border-border',
                    }}
                  />
                </CardContent>
                <CardFooter>
                  <Button variant="primary" size="lg" className="w-full">
                    Send Message
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Map and Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="relative h-[600px] rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305935303!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1621831369095!5m2!1sen!2sin"
                  className="absolute inset-0 w-full h-full border-0 filter grayscale contrast-125"
                  allowFullScreen
                  loading="lazy"
                  title="Location"
                />
              </div>

              {/* Social Links Below Map */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-grotesk font-bold mb-4">Let&apos;s Connect</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-secondary border border-border transition-colors group"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                      </svg>
                      <span className="font-mono text-sm group-hover:text-foreground">GitHub</span>
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-secondary border border-border transition-colors group"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      <span className="font-mono text-sm group-hover:text-foreground">LinkedIn</span>
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-secondary border border-border transition-colors group"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                      <span className="font-mono text-sm group-hover:text-foreground">Twitter</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}; 