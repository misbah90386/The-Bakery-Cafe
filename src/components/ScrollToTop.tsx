import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 15 }}
          onClick={handleScrollTop}
          className="fixed bottom-6 right-6 p-3 bg-burgundy hover:bg-burgundy-dark text-gold rounded-full shadow-lg border border-gold/20 z-40 cursor-pointer hover:-translate-y-1 transition-all duration-300"
          aria-label="Scroll to top"
        >
          <ArrowUp size={18} className="stroke-3" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
