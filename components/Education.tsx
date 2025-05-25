import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@heroui/react';

const education = [
  {
    degree: 'Master of Computer Science',
    school: 'Stanford University',
    period: '2018 - 2020',
    description: 'Specialized in Artificial Intelligence and Machine Learning',
    skills: ['AI/ML', 'Data Science', 'Computer Vision']
  },
  {
    degree: 'Bachelor of Engineering',
    school: 'MIT',
    period: '2014 - 2018',
    description: 'Major in Computer Science and Engineering',
    skills: ['Algorithms', 'Software Engineering', 'Web Development']
  }
];

const experience = [
  {
    role: 'Senior Full Stack Developer',
    company: 'Google',
    period: '2020 - Present',
    description: 'Leading development of cloud-based enterprise solutions',
    skills: ['React', 'Node.js', 'AWS', 'TypeScript']
  },
  {
    role: 'Software Engineer',
    company: 'Microsoft',
    period: '2018 - 2020',
    description: 'Developed scalable web applications and microservices',
    skills: ['Angular', 'Azure', 'Docker', 'Kubernetes']
  },
  {
    role: 'Frontend Developer',
    company: 'Apple',
    period: '2016 - 2018',
    description: 'Created responsive and accessible user interfaces',
    skills: ['HTML/CSS', 'JavaScript', 'UI/UX', 'Accessibility']
  }
];

export const Education = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Education Section */}
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold font-grotesk mb-12"
          >
            Education
          </motion.h2>
          <div className="grid gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold font-grotesk">{edu.degree}</h3>
                        <p className="text-muted-foreground font-mono">{edu.school}</p>
                      </div>
                      <Badge variant="flat" className="bg-secondary/50 text-foreground border border-border">
                        {edu.period}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">{edu.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.skills.map(skill => (
                        <Badge key={skill} variant="flat" className="bg-primary/10 text-primary border border-primary/20">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold font-grotesk mb-12"
          >
            Experience
          </motion.h2>
          <div className="grid gap-8">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold font-grotesk">{exp.role}</h3>
                        <p className="text-muted-foreground font-mono">{exp.company}</p>
                      </div>
                      <Badge variant="flat" className="bg-secondary/50 text-foreground border border-border">
                        {exp.period}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map(skill => (
                        <Badge key={skill} variant="flat" className="bg-primary/10 text-primary border border-primary/20">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}; 