import React, { useState } from 'react';
import { Facebook, Instagram, Youtube, Send, Mail, Shield, AlertTriangle, ArrowUpRight, UtensilsCrossed } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Footer() {
  const [newsEmail, setNewsEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [showPolicyModal, setShowPolicyModal] = useState<'privacy' | 'terms' | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsEmail.trim()) return;
    
    setSubscribed(true);
    setNewsEmail('');
    setTimeout(() => {
      setSubscribed(false);
    }, 4000);
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-dark-brown text-cream-light pt-16 pb-8 border-t border-gold/15 relative overflow-hidden">
      {/* Subtle gold lines */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-cream/10">
          
          {/* Logo & About Info (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center space-x-2 group">
              <div className="bg-burgundy text-gold p-2 rounded-lg">
                <UtensilsCrossed size={18} />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold tracking-wide text-cream leading-none">
                  THE BAKERY CAFE
                </span>
                <span className="text-[9px] uppercase tracking-widest text-gold font-bold leading-none mt-1">
                  Mardan, Pakistan
                </span>
              </div>
            </div>
            
            <p className="text-xs text-cream-light/70 leading-relaxed max-w-sm pt-2">
              Combining the warmth of an artisan boutique bakery with the culinary elegance of a gourmet restaurant. Creating beautiful dining memories adjacent to Mardan Mega Mart.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3.5 pt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-cream/5 hover:bg-gold hover:text-dark-brown text-gold rounded-full transition-all duration-300 border border-gold/10"
                aria-label="Facebook Link"
              >
                <Facebook size={15} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-cream/5 hover:bg-gold hover:text-dark-brown text-gold rounded-full transition-all duration-300 border border-gold/10"
                aria-label="Instagram Link"
              >
                <Instagram size={15} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-cream/5 hover:bg-gold hover:text-dark-brown text-gold rounded-full transition-all duration-300 border border-gold/10"
                aria-label="YouTube Link"
              >
                <Youtube size={15} />
              </a>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-serif text-sm font-bold tracking-wider uppercase text-gold">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleScrollTo(e, '#home')}
                  className="text-cream-light/75 hover:text-gold transition-colors flex items-center space-x-1"
                >
                  <ArrowUpRight size={12} className="text-gold" />
                  <span>Home Landing</span>
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleScrollTo(e, '#about')}
                  className="text-cream-light/75 hover:text-gold transition-colors flex items-center space-x-1"
                >
                  <ArrowUpRight size={12} className="text-gold" />
                  <span>About Business</span>
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  onClick={(e) => handleScrollTo(e, '#menu')}
                  className="text-cream-light/75 hover:text-gold transition-colors flex items-center space-x-1"
                >
                  <ArrowUpRight size={12} className="text-gold" />
                  <span>Interactive Menu</span>
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  onClick={(e) => handleScrollTo(e, '#gallery')}
                  className="text-cream-light/75 hover:text-gold transition-colors flex items-center space-x-1"
                >
                  <ArrowUpRight size={12} className="text-gold" />
                  <span>Photo Gallery</span>
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleScrollTo(e, '#contact')}
                  className="text-cream-light/75 hover:text-gold transition-colors flex items-center space-x-1"
                >
                  <ArrowUpRight size={12} className="text-gold" />
                  <span>Table Reservations</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter signup (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <h4 className="font-serif text-sm font-bold tracking-wider uppercase text-gold">
              Newsletter Subscription
            </h4>
            <p className="text-xs text-cream-light/70 leading-relaxed max-w-sm">
              Subscribe to receive updates on weekend specials, holiday desserts, and exclusive discount coupons directly in your inbox.
            </p>

            <AnimatePresence mode="wait">
              {subscribed ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-burgundy/40 border border-gold/35 p-3 rounded-xl flex items-center space-x-2 text-xs text-gold font-bold"
                >
                  <Shield size={14} className="text-gold shrink-0" />
                  <span>Subscribed Successfully! Check your inbox soon.</span>
                </motion.div>
              ) : (
                <form onSubmit={handleSubscribe} className="relative max-w-sm w-full">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-cream-light/45" size={14} />
                  <input
                    type="email"
                    required
                    value={newsEmail}
                    onChange={(e) => setNewsEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full bg-cream/5 border border-cream/20 hover:border-gold/30 rounded-xl pl-10 pr-12 py-3 text-xs text-cream-light placeholder:text-cream-light/40 focus:outline-none focus:ring-1 focus:ring-gold focus:border-transparent transition"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 p-2 bg-gold hover:bg-gold-dark text-dark-brown rounded-lg transition-all duration-200 cursor-pointer"
                    aria-label="Subscribe"
                  >
                    <Send size={13} />
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Bottom Bar policies and copyrights */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] sm:text-xs text-cream-light/50 font-medium">
          <p>© 2026 The Bakery Cafe. All Rights Reserved.</p>
          
          <div className="flex space-x-5">
            <button
              onClick={() => setShowPolicyModal('privacy')}
              className="hover:text-gold transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setShowPolicyModal('terms')}
              className="hover:text-gold transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
          </div>
        </div>

      </div>

      {/* Policies Lightbox Modals */}
      <AnimatePresence>
        {showPolicyModal !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-dark-brown/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="bg-cream border border-gold/15 max-w-lg w-full rounded-2xl p-6 relative max-h-[80vh] overflow-y-auto text-left text-dark-brown"
            >
              <h3 className="font-serif text-lg font-bold text-burgundy mb-4 capitalize">
                {showPolicyModal === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
              </h3>
              
              <div className="space-y-3.5 text-xs text-dark-brown/85 leading-relaxed pr-2">
                <p>
                  Welcome to <strong>The Bakery Cafe</strong> Mardan. This document governs usage of our local food delivery, reservation booking services, and interactive web page.
                </p>
                <p>
                  <strong>1. Data Collection:</strong> We do not store your table reservations or delivery orders on remote databases. All active table bookings, checkout notes, and customized details are preserved strictly locally in your browser cache (localStorage) for privacy.
                </p>
                <p>
                  <strong>2. WhatsApp Communication:</strong> When you choose to complete an order or inquire about celebration cakes, our system compiles pre-filled text packages that direct you to standard end-to-end encrypted WhatsApp messages. We do not inspect or read these messages.
                </p>
                <p>
                  <strong>3. Allergens:</strong> Our baked croissants, celebration cakes, and pizzas may contain traces of nuts, gluten, or dairy. Please use the special customization notes input field in the menu cards to specify dietary instructions or notify our service staff.
                </p>
                <p>
                  <strong>4. Contact Information:</strong> For support or table booking cancellations, please dial our direct phone line +92 333 9071074 or visit us in Mardan.
                </p>
              </div>

              <button
                onClick={() => setShowPolicyModal(null)}
                className="mt-6 bg-burgundy hover:bg-burgundy-dark text-gold font-bold text-xs uppercase tracking-widest py-2.5 w-full rounded-xl transition cursor-pointer"
              >
                Close Policy
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}
