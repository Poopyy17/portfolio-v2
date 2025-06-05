import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when user has scrolled past the first section
      // Assuming first section is roughly 100vh, we'll check for 80vh to be safe
      const scrolled = window.scrollY;
      const viewportHeight = window.innerHeight;

      if (scrolled > viewportHeight * 0.8) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', toggleVisibility);

    // Check on mount
    toggleVisibility();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 right-6 z-40"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{
            duration: 0.3,
            ease: 'easeOut',
          }}
        >
          <Button
            onClick={scrollToTop}
            size="icon"
            className="h-12 w-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-500/20"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-5 h-5" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
