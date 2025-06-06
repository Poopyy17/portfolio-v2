import { motion } from 'framer-motion';
import { Code2, Users, Lightbulb, Trophy } from 'lucide-react';

export default function AboutSection() {
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

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const highlights = [
    {
      icon: Code2,
      title: 'Full-Stack Development',
      description:
        'Building scalable web applications from frontend to backend',
    },
    {
      icon: Users,
      title: 'Real-World Experience',
      description:
        'Led development on subscription-based veterinary clinic systems',
    },
    {
      icon: Lightbulb,
      title: 'Problem Solver',
      description: 'Translating complex requirements into seamless solutions',
    },
    {
      icon: Trophy,
      title: 'Custom Solutions',
      description: 'Delivering tailored projects through commissioned work',
    },
  ];

  return (
    <section
      id="about"
      className="pt-8 pb-32 md:py-32 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent tracking-tight text-center"
            variants={titleVariants}
          >
            ABOUT ME
          </motion.h2>

          {/* Introduction */}
          <div className="max-w-4xl mx-auto text-center mb-14">
            <motion.div
              className="inline-block p-4 bg-gray-900/30 rounded-2xl border border-gray-800/50 mb-8"
              variants={itemVariants}
            >
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                I'm a{' '}
                <span className="text-blue-400 font-semibold">
                  full-stack developer
                </span>{' '}
                with real-world experience building scalable web applications. I
                led development on a
                <span className="text-purple-400 font-semibold">
                  {' '}
                  subscription-based veterinary clinic system
                </span>{' '}
                with role-based authentication, appointment booking, and
                e-commerce.
              </p>
            </motion.div>

            <motion.p
              className="text-lg text-gray-400 leading-relaxed italic mt-2"
              variants={itemVariants}
            >
              "I thrive on translating complex requirements into seamless,
              scalable systems that solve real problems."
            </motion.p>
          </div>

          {/* Highlight Cards */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={itemVariants}
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 hover:border-gray-700/50 transition-all duration-300"
              >
                {/* Card background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <highlight.icon className="w-6 h-6 text-blue-400" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {highlight.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
