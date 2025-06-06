import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Github, ExternalLink } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import project1 from '@/assets/project-1.png';
import project2 from '@/assets/project-2.png';
import project3 from '@/assets/project-3.png';
import project4 from '@/assets/project-4.png';
import project5 from '@/assets/project-5.png';
import project6 from '@/assets/project-6.png';

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Dummy project data
  const projects = [
    {
      title: 'Vet Assist',
      description:
        'SaaS platform for veterinary clinics featuring multi-tenant architecture, integrated e-commerce, and HR/customer management.',
      image: project1,
      hasCode: false,
      hasLive: true,
      codeLink: null,
      liveLink: 'https://demo.vetassist.app',
    },
    {
      title: 'Multi-Tenant E-commerce',
      description:
        'Scalable e-commerce platform supporting multiple vendors with isolated data, payment processing, and customizable storefronts.',
      image: project2,
      hasCode: true,
      hasLive: false,
      codeLink: 'https://github.com/Poopyy17/ERP',
      liveLink: null,
    },
    {
      title: 'Tax Transferral App',
      description:
        'Application for managing tax document transfers with secure file handling, automated processing, and compliance tracking.',
      image: project3,
      hasCode: true,
      hasLive: false,
      codeLink: 'https://github.com/Poopyy17/taxtransfer1',
      liveLink: null,
    },
    {
      title: 'Rotary Club Las Piñas',
      description:
        'Professional branding and contact website showcasing the mission and activities of the Rotary Club Las Piñas chapter.',
      image: project4,
      hasCode: true,
      hasLive: true,
      codeLink: 'https://github.com/Poopyy17/rotary',
      liveLink: 'https://rotaryclublaspinas.com',
    },
    {
      title: 'Interactive Game Material',
      description:
        'Educational platform for teachers to create quarterly lessons with multimedia content and interactive games.',
      image: project5,
      hasCode: true,
      hasLive: true,
      codeLink: 'https://github.com/Poopyy17/interactive',
      liveLink: 'https://interactive-frontend-taupe.vercel.app',
    },
    {
      title: 'Unli-wings Kiosk App',
      description:
        'Self-service kiosk application for restaurant ordering with intuitive touch interface and streamlined payment processing.',
      image: project6,
      hasCode: true,
      hasLive: false,
      codeLink: 'https://github.com/Poopyy17/UnliWIngs',
      liveLink: null,
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
          className="text-center mb-12 md:mb-10"
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
          <motion.p
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            variants={titleVariants}
          >
            A showcase of my recent work spanning full-stack development, SaaS
            platforms, and interactive applications.
          </motion.p>
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
                    className="w-full h-full object-fit group-hover:scale-105 transition-transform duration-300"
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
                    {project.hasCode && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-sm text-white bg-transparent border-gray-600 hover:border-blue-400 hover:bg-blue-400/10 hover:text-blue-400 transition-all duration-300"
                        onClick={() => window.open(project.codeLink, '_blank')}
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </Button>
                    )}
                    {project.hasLive && (
                      <Button
                        size="sm"
                        className="text-sm bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 transition-all duration-300 hover:scale-105"
                        onClick={() => window.open(project.liveLink, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Visit Live
                      </Button>
                    )}
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
