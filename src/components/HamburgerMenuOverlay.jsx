import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import MenuItems from './MenuItems';
import MenuFooter from './MenuFooter';
import logo from '@/assets/gradient.png';

export default function HamburgerMenuOverlay({
  isMenuOpen,
  onMenuClose,
  menuItems,
  socialLinks,
}) {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleLetsTalkClick = () => {
    // Close the menu first
    onMenuClose();

    // Small delay to allow menu animation to start, then scroll
    setTimeout(() => {
      const contactSection = document.querySelector('#contact');
      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
      }
    }, 100);
  };

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-gray-950 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="h-full flex flex-col overflow-hidden"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            {/* Menu Header */}
            <motion.div
              className="flex items-center justify-between mb-8 px-6 py-6 flex-shrink-0"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              <div className="flex items-center justify-between cursor-default">
                <img src={logo} alt="James Logo" className="h-8 w-auto" />
                james.
              </div>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  className="border-gray-700 bg-transparent text-white hover:bg-gray-800 hover:text-white rounded-full px-6"
                  onClick={handleLetsTalkClick}
                >
                  Let's Talk
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onMenuClose}
                  className="rounded-full border border-gray-700 hover:bg-gray-800 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </motion.div>{' '}
            {/* Menu Content - Scrollable */}
            <motion.div
              className="flex-1 overflow-y-auto overflow-x-hidden px-6 pb-6"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <MenuItems menuItems={menuItems} onMenuClose={onMenuClose} />
              <MenuFooter socialLinks={socialLinks} />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
