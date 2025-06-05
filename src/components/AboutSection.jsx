import { motion } from 'framer-motion';

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
  return (
    <section id="about" className="pt-8 pb-32 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent tracking-tight text-center"
            variants={titleVariants}
          >
            ABOUT ME
          </motion.h2>
          <div className="max-w-4xl mx-auto text-center">
            <motion.p
              className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8"
              variants={itemVariants}
            >
              I'm a full-stack developer with real-world experience building
              scalable web applications. I led development on a
              subscription-based veterinary clinic system with role-based
              authentication, appointment booking, and e-commerce. I also
              deliver custom solutions through commissioned projects.
            </motion.p>
            <motion.p
              className="text-xl md:text-2xl text-gray-300 leading-relaxed"
              variants={itemVariants}
            >
              I thrive on translating complex requirements into seamless,
              scalable systems that solve real problems.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
