import React, { useState, useMemo } from 'react';
import { Search, Plus, Sparkles, Filter, ChevronRight, X } from 'lucide-react';
import { MenuItem } from '../types';
import { MENU_ITEMS } from '../data';
import { motion, AnimatePresence } from 'motion/react';

interface MenuProps {
  onAddToCart: (item: MenuItem, notes?: string) => void;
}

const CATEGORIES = [
  { id: 'all', label: 'All Delights' },
  { id: 'bakery', label: 'Bakery' },
  { id: 'breakfast', label: 'Breakfast' },
  { id: 'pizza', label: 'Pizza & Flatbreads' },
  { id: 'main-course', label: 'Main Courses' },
  { id: 'desserts', label: 'Gourmet Desserts' },
  { id: 'beverages', label: 'Coffee & Beverages' },
];

export default function Menu({ onAddToCart }: MenuProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeItemNotesId, setActiveItemNotesId] = useState<string | null>(null);
  const [notesText, setNotesText] = useState('');

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags?.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleOpenNotes = (id: string) => {
    setActiveItemNotesId(id);
    setNotesText('');
  };

  const handleConfirmAdd = (item: MenuItem) => {
    onAddToCart(item, notesText.trim() ? notesText.trim() : undefined);
    setActiveItemNotesId(null);
    setNotesText('');
  };

  return (
    <section id="menu" className="py-20 lg:py-28 bg-cream-light scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-gold/10 border border-gold/20 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-gold">
              Savor the Masterpieces
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-dark-brown mb-4 leading-tight">
            Explore Our <span className="italic text-burgundy font-medium">Exquisite Menu</span>
          </h2>
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="h-0.5 w-12 bg-gold/50" />
            <Sparkles className="text-gold" size={16} />
            <div className="h-0.5 w-12 bg-gold/50" />
          </div>
          <p className="text-sm sm:text-base text-dark-brown/75 max-w-2xl mx-auto leading-relaxed">
            Every item is baked fresh or cooked to order by our professional bakers and award-winning chefs using premium handpicked ingredients. Filter by category or search your cravings.
          </p>
        </div>

        {/* Search and Filters Controller Block */}
        <div className="bg-cream p-4 sm:p-6 rounded-2xl border border-gold/15 shadow-sm mb-12 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-dark-brown/40" size={18} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search pizzas, steaks, cakes, coffees..."
                className="w-full bg-cream-light pl-11 pr-10 py-3 rounded-xl border border-gold/20 text-sm text-dark-brown placeholder:text-dark-brown/45 focus:outline-none focus:ring-2 focus:ring-burgundy focus:border-transparent transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-dark-brown/40 hover:text-dark-brown"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Total count badge */}
            <div className="flex items-center space-x-2 text-xs font-semibold text-dark-brown/60 bg-cream-light px-4 py-2 rounded-xl border border-gold/10">
              <Filter size={14} className="text-gold" />
              <span>Showing {filteredItems.length} delicacies</span>
            </div>
          </div>

          {/* Horizontal Scroll Categories */}
          <div className="flex overflow-x-auto py-2 mt-4 gap-2 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs sm:text-sm font-medium tracking-wide transition-all duration-200 border cursor-pointer shrink-0 ${
                  selectedCategory === cat.id
                    ? 'bg-burgundy text-gold border-burgundy shadow-md scale-102'
                    : 'bg-cream-light text-dark-brown/80 border-gold/15 hover:bg-cream hover:text-burgundy hover:border-burgundy/30'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="bg-cream rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-gold/15 flex flex-col h-full group relative"
                >
                  {/* Product Image Container */}
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/50 to-transparent" />
                    
                    {/* Floating Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
                      {item.isBestSeller && (
                        <span className="bg-gold text-dark-brown text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-md shadow-md flex items-center gap-1">
                          <Sparkles size={10} className="fill-dark-brown" />
                          Best Seller
                        </span>
                      )}
                      {item.price > 1000 && (
                        <span className="bg-burgundy text-gold text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-md shadow-md">
                          Premium
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-4 sm:p-5 flex flex-col flex-grow">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-2.5">
                      {item.tags?.map((tag, i) => (
                        <span key={i} className="text-[10px] font-medium text-burgundy bg-burgundy/5 px-2 py-0.5 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="font-serif text-base sm:text-lg font-bold text-dark-brown line-clamp-1 mb-1.5 group-hover:text-burgundy transition-colors duration-200">
                      {item.name}
                    </h3>
                    
                    <p className="text-xs text-dark-brown/70 line-clamp-2 sm:line-clamp-3 mb-4 leading-relaxed flex-grow">
                      {item.description}
                    </p>

                    {/* Pricing & Button Area */}
                    <div className="flex items-center justify-between pt-4 border-t border-gold/10 mt-auto shrink-0">
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase text-dark-brown/50 tracking-wider font-semibold">Price</span>
                        <span className="font-mono text-base sm:text-lg font-bold text-dark-brown">
                          Rs. {item.price.toLocaleString()}
                        </span>
                      </div>
                      
                      {activeItemNotesId === item.id ? (
                        <button
                          onClick={() => handleConfirmAdd(item)}
                          className="bg-burgundy hover:bg-burgundy-dark text-gold p-2 rounded-xl flex items-center justify-center transition-all duration-300 shadow-md h-10 w-28 text-xs font-bold"
                        >
                          Confirm Add
                        </button>
                      ) : (
                        <button
                          onClick={() => handleOpenNotes(item.id)}
                          className="bg-burgundy hover:bg-burgundy-dark text-gold p-2.5 rounded-xl flex items-center justify-center transition-all duration-300 shadow-md hover:scale-105"
                          aria-label={`Add ${item.name} to cart`}
                        >
                          <Plus size={18} className="stroke-3" />
                          <span className="text-xs font-bold ml-1.5 pr-1">Add</span>
                        </button>
                      )}
                    </div>

                    {/* Inline notes text field when active */}
                    <AnimatePresence>
                      {activeItemNotesId === item.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-3 pt-3 border-t border-gold/10 flex flex-col gap-2"
                        >
                          <input
                            type="text"
                            value={notesText}
                            onChange={(e) => setNotesText(e.target.value)}
                            placeholder="Add customization (e.g. no onions, extra spicy)..."
                            className="w-full bg-cream-light px-3 py-1.5 rounded-lg border border-gold/25 text-xs text-dark-brown placeholder:text-dark-brown/40 focus:outline-none focus:ring-1 focus:ring-burgundy"
                          />
                          <button
                            onClick={() => setActiveItemNotesId(null)}
                            className="text-[10px] text-dark-brown/50 hover:text-burgundy text-right font-medium self-end"
                          >
                            Cancel Notes
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="text-center py-16 bg-cream rounded-3xl border border-gold/15 max-w-lg mx-auto shadow-sm">
            <span className="text-4xl">🍽️</span>
            <h3 className="font-serif text-lg font-bold text-dark-brown mt-4">No delicacies found</h3>
            <p className="text-xs text-dark-brown/65 mt-2 max-w-sm mx-auto px-4 leading-relaxed">
              We couldn't find any menu items matching your search. Try resetting your search query or selecting a different category.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-5 text-xs font-bold text-burgundy hover:text-gold uppercase tracking-widest bg-burgundy/5 px-4 py-2 rounded-xl border border-burgundy/15 transition-colors"
            >
              Reset Search
            </button>
          </div>
        )}

        {/* Special Menu Accent banner */}
        <div className="mt-16 bg-gradient-to-r from-burgundy to-burgundy-dark rounded-3xl p-6 sm:p-10 shadow-xl border border-gold/20 flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">
          <div className="text-center md:text-left">
            <span className="text-[10px] uppercase font-bold tracking-widest text-gold bg-cream/10 px-3 py-1 rounded-full border border-gold/15">
              Custom Celebration Cakes
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-cream mt-3">
              Planning a Birthday or Wedding in Mardan?
            </h3>
            <p className="text-xs sm:text-sm text-cream-light/80 mt-2 max-w-xl leading-relaxed">
              Our skilled chefs design and bake magnificent custom-themed celebration cakes. Contact us via WhatsApp or visit adjacent to Mardan Mega Mart to order.
            </p>
          </div>
          <a
            href="https://wa.me/923339071074?text=Hi%20The%20Bakery%20Cafe%2C%20I%20would%20like%20to%20inquire%20about%20ordering%20a%20custom%20celebration%20cake!"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold hover:bg-gold-dark text-dark-brown font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl transition-all duration-300 shrink-0 shadow-md text-center w-full md:w-auto"
          >
            Custom Cake Inquiry
          </a>
        </div>

      </div>
    </section>
  );
}
