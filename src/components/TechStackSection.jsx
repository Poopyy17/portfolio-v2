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
  const isInView = useInView(ref, { once: true, margin: '-100px' }); // Tech stack with bento grid sizing
  const techStack = [
    {
      name: 'React',
      color: 'from-cyan-400 to-blue-500',
      size: 'large',
      image: react,
    },

    {
      name: 'ExpressJS',
      color: 'from-gray-600 to-gray-800',
      size: 'medium',
      image: express,
    },
    {
      name: 'NodeJS',
      color: 'from-green-400 to-green-600',
      size: 'large',
      image: nodejs,
    },
    {
      name: 'PostgreSQL',
      color: 'from-blue-600 to-indigo-600',
      size: 'medium',
      image: postgresql,
    },
    {
      name: 'MongoDB',
      color: 'from-green-500 to-green-700',
      size: 'medium',
      image: mongodb,
    },
    {
      name: 'TailwindCSS',
      color: 'from-teal-400 to-cyan-500',
      size: 'medium',
      image: tailwind,
    },
    {
      name: 'Figma',
      color: 'from-purple-400 to-pink-500',
      size: 'medium',
      image: figma,
    },
    {
      name: 'SMTP2GO',
      color: 'from-blue-400 to-purple-500',
      size: 'small',
      image: smtp2GO,
    },
    {
      name: 'Github',
      color: 'from-gray-700 to-gray-900',
      size: 'small',
      image: github,
    },
    {
      name: 'Digital Ocean',
      color: 'from-blue-500 to-cyan-400',
      size: 'large',
      image: digitalocean,
    },

    {
      name: 'AWS S3 Bucket',
      color: 'from-orange-400 to-orange-600',
      size: 'medium',
      image: aws,
    },

    {
      name: 'JWT',
      color: 'from-purple-500 to-pink-500',
      size: 'small',
      image: jwt,
    },
    {
      name: 'Node Cache',
      color: 'from-green-600 to-emerald-500',
      size: 'small',
      image: nodecache,
    },
    {
      name: 'Javascript',
      color: 'from-yellow-400 to-orange-500',
      size: 'large',
      image: js,
    },
    {
      name: 'oAuth 2.0',
      color: 'from-red-500 to-orange-500',
      size: 'small',
      image: oAuth,
    },
    {
      name: 'Shadcn UI',
      color: 'from-slate-600 to-slate-800',
      size: 'small',
      image: shadcn,
    },
    {
      name: 'Tanstack Query/Table',
      color: 'from-red-600 to-pink-600',
      size: 'medium',
      image: tanstack,
    },
    {
      name: 'Vercel',
      color: 'from-gray-800 to-black',
      size: 'large',
      image: vercel,
    },
    {
      name: 'Vite',
      color: 'from-purple-600 to-blue-600',
      size: 'small',
      image: vite,
    },
    {
      name: 'Neon DB',
      color: 'from-green-400 to-teal-500',
      size: 'medium',
      image: neondb,
    },
    {
      name: 'Event Emitter 2',
      color: 'from-indigo-500 to-purple-600',
      size: 'small',
      image: nodejs,
    },
    {
      name: 'Maya',
      color: 'from-orange-500 to-yellow-500',
      size: 'medium',
      image: maya,
    },
    {
      name: 'Paypal',
      color: 'from-indigo-500 to-purple-600',
      size: 'medium',
      image: paypal,
    },
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };
  const getBentoSize = (size) => {
    switch (size) {
      case 'large':
        // Mobile: 1x1, Tablet: 2x1, Desktop: 2x2
        return 'col-span-1 row-span-1 sm:col-span-2 sm:row-span-1 lg:col-span-2 lg:row-span-2';
      case 'medium':
        // Mobile: 1x1, Tablet+: 2x1
        return 'col-span-1 row-span-1 sm:col-span-2 sm:row-span-1 lg:col-span-2 lg:row-span-1';
      case 'small':
      default:
        // Always 1x1
        return 'col-span-1 row-span-1';
    }
  };

  return (
    <section id="tech" className="py-16 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8 md:mb-16">
          {' '}
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
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {' '}
          {/* Bento Grid Layout */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 auto-rows-[100px] sm:auto-rows-[110px] md:auto-rows-[120px]">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`${getBentoSize(tech.size)} group relative`}
              >
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 h-full flex flex-col items-center justify-center overflow-hidden">
                  {/* Subtle background gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-5`}
                  />{' '}
                  {/* Content */}
                  <div className="relative z-10 text-center">
                    {/* Image container */}
                    <div className="w-10 h-10 bg-gray-800/70 border border-gray-600 rounded-lg flex items-center justify-center mb-3 mx-auto">
                      {/* Tech icon/image or gradient placeholder */}
                      {tech.image ? (
                        <img
                          src={tech.image}
                          alt={tech.name}
                          className="w-6 h-6 object-contain"
                        />
                      ) : (
                        <div
                          className={`w-6 h-6 bg-gradient-to-br ${tech.color} rounded opacity-80`}
                        />
                      )}
                    </div>

                    <h3 className="text-sm font-medium text-white">
                      {tech.name}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
