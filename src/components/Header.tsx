import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu as MenuIcon, X, UtensilsCrossed, Phone } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onCartToggle: () => void;
  activeSection: string;
}

export default function Header({ cartCount, onCartToggle, activeSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Menu', href: '#menu' },
    { label: 'Best Sellers', href: '#best-sellers' },
    { label: 'Special Offers', href: '#special-offers' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of sticky header
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
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-md py-3 border-b border-gold/10'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center space-x-2 group"
          >
            <div className="bg-burgundy text-gold p-2 rounded-lg transition-transform duration-300 group-hover:rotate-12">
              <UtensilsCrossed size={22} />
            </div>
            <div className="flex flex-col">
              <span className="font-serif italic text-xl sm:text-2xl font-bold tracking-tight text-burgundy leading-none">
                The Bakery Cafe
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-gold font-bold leading-none mt-1.5">
                Mardan • Est. 2026
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gold after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left ${
                  activeSection === item.href.slice(1)
                    ? 'text-burgundy font-semibold after:scale-x-100'
                    : 'text-dark-brown/85 hover:text-burgundy'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center space-x-4">
            {/* Direct Phone Call */}
            <a
              href="tel:+923339071074"
              className="hidden sm:flex items-center space-x-1.5 text-xs font-semibold text-burgundy hover:text-gold transition-colors duration-200 bg-burgundy/5 px-3 py-1.5 rounded-full border border-burgundy/10"
            >
              <Phone size={13} />
              <span>+92 333 9071074</span>
            </a>

            {/* Shopping Cart Trigger */}
            <button
              id="cart-btn"
              onClick={onCartToggle}
              className="relative p-2.5 text-dark-brown hover:text-burgundy transition-colors duration-200 bg-cream-light hover:bg-cream border border-gold/25 rounded-full shadow-sm"
              aria-label="Shopping Cart"
            >
              <ShoppingBag size={20} className="stroke-2" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-burgundy text-gold text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full animate-pulse border border-cream">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-dark-brown hover:text-burgundy transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-cream border-t border-gold/10 px-4 pt-4 pb-6 shadow-xl absolute top-full left-0 w-full transition-all duration-300">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-base font-medium py-2 px-3 rounded-lg transition-colors duration-200 ${
                  activeSection === item.href.slice(1)
                    ? 'bg-burgundy text-gold font-semibold'
                    : 'text-dark-brown hover:bg-cream-light hover:text-burgundy'
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-gold/15 flex flex-col space-y-3">
              <a
                href="tel:+923339071074"
                className="flex items-center justify-center space-x-2 w-full bg-burgundy/5 text-burgundy py-2.5 rounded-lg border border-burgundy/10 text-sm font-semibold"
              >
                <Phone size={15} />
                <span>Call +92 333 9071074</span>
              </a>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full bg-burgundy text-gold py-2.5 rounded-lg text-sm font-semibold text-center hover:bg-burgundy-dark transition-all duration-300"
              >
                Reserve a Table
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
