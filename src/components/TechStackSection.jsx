import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import digitalocean from '@/assets/digitalocean.png';
import github from '@/assets/github.png';
import js from '@/assets/js.png';
import jwt from '@/assets/jwt.png';
import neondb from '@/assets/neondb.png';
import nodecache from '@/assets/nodecache.png';
import oAuth from '@/assets/oAuth.png';
import postgresql from '@/assets/postgresql.png';
import react from '@/assets/react.png';
import shadcn from '@/assets/shadcn.png';
import smtp2GO from '@/assets/smtp2GO.jpg';
import tanstack from '@/assets/tanstack.png';
import vercel from '@/assets/vercel.png';
import vite from '@/assets/vite.png';
import express from '@/assets/express.png';
import nodejs from '@/assets/nodejs.png';
import figma from '@/assets/figma.png';
import maya from '@/assets/maya.png';
import mongodb from '@/assets/mongodb.png';
import paypal from '@/assets/paypal.png';
import tailwind from '@/assets/tailwind.png';
import aws from '@/assets/aws.png';

export default function TechStackSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Categorized tech stack
  const techCategories = {
    frontend: {
      title: 'Frontend',
      color: 'from-cyan-400 to-blue-500',
      technologies: [
        { name: 'React', color: 'from-cyan-400 to-blue-500', image: react },
        {
          name: 'Javascript',
          color: 'from-yellow-400 to-orange-500',
          image: js,
        },
        {
          name: 'Tanstack Query/Table',
          color: 'from-red-600 to-pink-600',
          image: tanstack,
        },
        {
          name: 'TailwindCSS',
          color: 'from-teal-400 to-cyan-500',
          image: tailwind,
        },
        {
          name: 'Shadcn UI',
          color: 'from-slate-600 to-slate-800',
          image: shadcn,
        },
        { name: 'Vite', color: 'from-purple-600 to-blue-600', image: vite },
      ],
    },
    backend: {
      title: 'Backend',
      color: 'from-green-400 to-emerald-500',
      technologies: [
        { name: 'NodeJS', color: 'from-green-400 to-green-600', image: nodejs },
        {
          name: 'ExpressJS',
          color: 'from-gray-600 to-gray-800',
          image: express,
        },
        {
          name: 'PostgreSQL',
          color: 'from-blue-600 to-indigo-600',
          image: postgresql,
        },
        {
          name: 'MongoDB',
          color: 'from-green-500 to-green-700',
          image: mongodb,
        },
        { name: 'Neon DB', color: 'from-green-400 to-teal-500', image: neondb },
        { name: 'JWT', color: 'from-purple-500 to-pink-500', image: jwt },
        {
          name: 'Node Cache',
          color: 'from-green-600 to-emerald-500',
          image: nodecache,
        },
        {
          name: 'oAuth 2.0',
          color: 'from-red-500 to-orange-500',
          image: oAuth,
        },
        {
          name: 'Event Emitter 2',
          color: 'from-indigo-500 to-purple-600',
          image: nodejs,
        },
      ],
    },
    devops: {
      title: 'DevOps & Cloud',
      color: 'from-orange-400 to-red-500',
      technologies: [
        {
          name: 'Digital Ocean',
          color: 'from-blue-500 to-cyan-400',
          image: digitalocean,
        },
        {
          name: 'AWS S3 Bucket',
          color: 'from-orange-400 to-orange-600',
          image: aws,
        },
        { name: 'Vercel', color: 'from-gray-800 to-black', image: vercel },
        { name: 'Github', color: 'from-gray-700 to-gray-900', image: github },
      ],
    },
    tools: {
      title: 'Tools & Services',
      color: 'from-purple-400 to-pink-500',
      technologies: [
        { name: 'Figma', color: 'from-purple-400 to-pink-500', image: figma },
        { name: 'Maya', color: 'from-orange-500 to-yellow-500', image: maya },
        {
          name: 'Paypal',
          color: 'from-indigo-500 to-purple-600',
          image: paypal,
        },
        {
          name: 'SMTP2GO',
          color: 'from-blue-400 to-purple-500',
          image: smtp2GO,
        },
      ],
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <section id="tech" className="py-16 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8 md:mb-16">
          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
          >
            TECH STACK
          </motion.h2>
          <motion.p
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Technologies I work with to bring ideas to life
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          className="max-w-7xl mx-auto space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {Object.entries(techCategories).map(([key, category]) => (
            <motion.div
              key={key}
              variants={categoryVariants}
              className="space-y-6"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`}
                />
                <h3 className="text-2xl font-semibold text-white">
                  {category.title}
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-gray-700 to-transparent" />
              </div>

              {/* Technologies Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
                {category.technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group relative h-24 md:h-28"
                  >
                    <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 h-full flex flex-col items-center justify-center overflow-hidden hover:border-gray-600/50 transition-all duration-300 hover:scale-105">
                      {/* Background gradient */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-5 group-hover:opacity-10 transition-opacity`}
                      />

                      {/* Content */}
                      <div className="relative z-10 text-center">
                        {/* Icon container */}
                        <div className="w-10 h-10 bg-gray-800/70 border border-gray-600 rounded-lg flex items-center justify-center mb-3 mx-auto group-hover:border-gray-500 transition-colors">
                          <img
                            src={tech.image}
                            alt={tech.name}
                            className="w-6 h-6 object-contain"
                          />
                        </div>
                        <h4 className="text-sm font-medium text-white group-hover:text-gray-200 transition-colors">
                          {tech.name}
                        </h4>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
