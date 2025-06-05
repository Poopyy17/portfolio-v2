import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function MenuItems({ menuItems, onMenuClose }) {
  const handleItemClick = (href) => {
    // Close the menu first
    onMenuClose();

    // Small delay to allow menu animation to start, then scroll
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
      }
    }, 100);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      x: -50,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      className="space-y-8 mb-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {menuItems.map((item, index) => (
        <motion.div
          key={index}
          className="flex items-center justify-between group cursor-pointer"
          variants={itemVariants}
          whileHover={{ x: 10 }}
          transition={{ type: 'spring', stiffness: 300 }}
          onClick={() => handleItemClick(item.href)}
        >
          <div className="flex items-baseline gap-4">
            <h2 className="text-6xl md:text-7xl font-bold tracking-tight group-hover:text-blue-400 transition-colors cursor-pointer">
              {item.name}
            </h2>
            <span className="text-gray-500 text-lg">({item.number})</span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full border border-gray-700 hover:bg-gray-800 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={(e) => {
              e.stopPropagation(); // Prevent double-clicking
              handleItemClick(item.href);
            }}
          >
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      ))}
    </motion.div>
  );
}
