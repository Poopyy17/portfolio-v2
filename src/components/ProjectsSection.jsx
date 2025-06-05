import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Github, ExternalLink } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import project1 from '@/assets/project-1.png';
import project3 from '@/assets/project-3.png';
import project4 from '@/assets/project-4.png';
import project5 from '@/assets/project-5.png';

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Dummy project data
  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication.',
      image: project1,
    },
    {
      title: 'Task Management App',
      description:
        'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: project3,
    },
    {
      title: 'Weather Dashboard',
      description:
        'Modern weather application with location-based forecasts, interactive maps, and detailed weather analytics using external APIs.',
      image: project4,
    },
    {
      title: 'Social Media Dashboard',
      description:
        'Analytics dashboard for social media management with data visualization, scheduling tools, and performance metrics.',
      image: project5,
    },
    {
      title: 'Portfolio Website',
      description:
        'Responsive portfolio website built with React and Framer Motion, featuring smooth animations and modern UI design.',
      image: project1,
    },
    {
      title: 'Chat Application',
      description:
        'Real-time chat application with WebSocket integration, file sharing, and group messaging capabilities.',
      image: project3,
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  const titleVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };
  return (
    <section id="projects" className="py-16 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12 md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent tracking-tight"
            variants={titleVariants}
          >
            FEATURED PROJECTS
          </motion.h2>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {' '}
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-gray-900/50 border-gray-800 overflow-hidden group hover:border-gray-700 transition-all duration-300 h-[480px] flex flex-col">
                {' '}
                <div className="h-48 bg-gray-800 relative overflow-hidden">
                  <img
                    src={project.image || '/placeholder.svg'}
                    alt={project.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-3 h-7 flex items-center text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-6 flex-1 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex gap-3 mt-auto">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-sm text-white"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-sm text-white"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
