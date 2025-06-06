import { motion } from 'framer-motion';
import thumbsup from '@/assets/thumbsup.png';
import circle from '@/assets/circle.png';
import fire from '@/assets/fire.png';
import heart from '@/assets/heart.png';

export default function FloatingElements() {
  const floatingVariants = {
    initial: { y: 0, rotate: 0 },
    animate: {
      y: [-20, 20, -20],
      rotate: [0, 10, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const pulseVariants = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const rotateVariants = {
    initial: { rotate: 0 },
    animate: {
      rotate: 360,
      transition: {
        duration: 12,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  };
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {' '}
      {/* Thumbs Up - Bottom Left */}
      <motion.div
        className="absolute bottom-64 left-15 md:bottom-80 md:left-3/4 lg:left-3/4 hidden md:block"
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        style={{ zIndex: 1 }}
      >
        <motion.img
          src={thumbsup}
          alt="Thumbs up"
          className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 opacity-80"
          variants={pulseVariants}
          whileHover={{ scale: 1.2, rotate: 15 }}
        />
      </motion.div>{' '}
      {/* Fire - Bottom Left Lower */}
      <motion.div
        className="absolute bottom-30 left-25 md:bottom-16 md:left-1/3 lg:left-1/3 hidden md:block"
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 1 }}
        style={{ zIndex: 1 }}
      >
        <motion.img
          src={fire}
          alt="Fire"
          className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 opacity-70"
          variants={pulseVariants}
          whileHover={{ scale: 1.25, rotate: -10 }}
        />
      </motion.div>{' '}
      {/* Bottom Right Side - 2 elements */} {/* Circle - Bottom Right */}
      <motion.div
        className="absolute bottom-64 right-18 md:bottom-80 md:right-3/4 lg:right-3/4 hidden md:block"
        variants={rotateVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 2 }}
        style={{ zIndex: 1 }}
      >
        <motion.img
          src={circle}
          alt="Circle"
          className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 opacity-60"
          variants={floatingVariants}
          whileHover={{ scale: 1.3 }}
        />
      </motion.div>{' '}
      {/* Heart - Bottom Right Lower */}
      <motion.div
        className="absolute bottom-30 right-25 md:bottom-16 md:right-1/3 lg:right-1/3 hidden md:block"
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 3 }}
        style={{ zIndex: 1 }}
      >
        <motion.img
          src={heart}
          alt="Heart"
          className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 opacity-70"
          variants={pulseVariants}
          whileHover={{ scale: 1.3, rotate: 10 }}
        />
      </motion.div>
    </div>
  );
}
