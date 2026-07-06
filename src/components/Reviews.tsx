import React, { useState, useEffect, useRef } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, PenTool, CheckCircle } from 'lucide-react';
import { Review } from '../types';
import { REVIEWS } from '../data';
import { motion, AnimatePresence } from 'motion/react';

export default function Reviews() {
  const [reviewsList, setReviewsList] = useState<Review[]>(REVIEWS);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  
  // Review form state
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [reviewText, setReviewText] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev === reviewsList.length - 1 ? 0 : prev + 1));
    }, 7000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [activeIndex, reviewsList]);

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? reviewsList.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === reviewsList.length - 1 ? 0 : prev + 1));
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !reviewText.trim()) return;

    const newReview: Review = {
      id: `custom-rev-${Date.now()}`,
      name: name.trim(),
      rating,
      text: reviewText.trim(),
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      })
    };

    setReviewsList([newReview, ...reviewsList]);
    setActiveIndex(0);
    setFormSubmitted(true);
    
    // reset form fields
    setName('');
    setRating(5);
    setReviewText('');

    setTimeout(() => {
      setFormSubmitted(false);
      setShowForm(false);
    }, 3000);
  };

  const activeReview = reviewsList[activeIndex];

  const slideVariants = {
    enter: (dir: number) => ({
      opacity: 0,
      scale: 0.95,
      y: dir > 0 ? 15 : -15
    }),
    center: {
      opacity: 1,
      scale: 1,
      y: 0
    },
    exit: (dir: number) => ({
      opacity: 0,
      scale: 0.95,
      y: dir < 0 ? 15 : -15
    })
  };

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-cream-light scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-gold/10 border border-gold/20 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-gold">
              What Our Patrons Say
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-dark-brown mb-4 leading-tight">
            Loved By <span className="italic text-burgundy font-medium">Families & Patrons</span>
          </h2>
          <div className="h-0.5 w-16 bg-gold/50 mx-auto mb-6" />
          <p className="text-sm sm:text-base text-dark-brown/75 leading-relaxed">
            Real feedback from local residents and travelers in Mardan who dine with us or order fresh products daily.
          </p>
        </div>

        {/* Dynamic Reviews Slider Container */}
        <div className="max-w-4xl mx-auto relative mb-12">
          
          <div className="bg-cream rounded-3xl p-8 sm:p-12 shadow-md border border-gold/15 min-h-[300px] flex items-center justify-center relative">
            {/* Big quote icon accent */}
            <Quote className="absolute top-6 left-6 text-gold/15 h-16 w-16 pointer-events-none" />
            
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4 }}
                className="text-center w-full"
              >
                {/* Stars */}
                <div className="flex items-center justify-center space-x-1 mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={`${
                        i < activeReview.rating ? 'fill-gold text-gold' : 'text-gold/25'
                      }`}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="font-serif text-lg sm:text-xl md:text-2xl text-dark-brown italic leading-relaxed max-w-2xl mx-auto mb-6 px-4">
                  "{activeReview.text}"
                </p>

                {/* Author Info */}
                <div className="flex flex-col items-center">
                  <span className="font-sans text-sm font-bold text-dark-brown tracking-wide">
                    {activeReview.name}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-burgundy font-semibold mt-1">
                    Verified Customer — {activeReview.date}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Nav buttons floating left & right of slider */}
          <div className="absolute top-1/2 -translate-y-1/2 left-[-18px] sm:left-[-25px] z-10">
            <button
              onClick={handlePrev}
              className="p-3 bg-burgundy hover:bg-burgundy-dark text-gold rounded-full shadow-lg border border-gold/15 hover:scale-105 transition-all cursor-pointer"
              aria-label="Previous Review"
            >
              <ChevronLeft size={18} className="stroke-3" />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-[-18px] sm:right-[-25px] z-10">
            <button
              onClick={handleNext}
              className="p-3 bg-burgundy hover:bg-burgundy-dark text-gold rounded-full shadow-lg border border-gold/15 hover:scale-105 transition-all cursor-pointer"
              aria-label="Next Review"
            >
              <ChevronRight size={18} className="stroke-3" />
            </button>
          </div>
        </div>

        {/* Dynamic sliding indicators */}
        <div className="flex justify-center space-x-2.5 mb-16">
          {reviewsList.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > activeIndex ? 1 : -1);
                setActiveIndex(idx);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === idx ? 'bg-burgundy w-6' : 'bg-dark-brown/15 w-1.5'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Simulate Adding Review Section */}
        <div className="max-w-xl mx-auto text-center">
          {!showForm ? (
            <button
              onClick={() => setShowForm(true)}
              className="bg-transparent hover:bg-burgundy/5 text-burgundy hover:text-burgundy-dark border border-burgundy/25 font-bold text-xs uppercase tracking-widest py-3 px-6 rounded-xl transition-all duration-300 inline-flex items-center space-x-2"
            >
              <PenTool size={14} />
              <span>Write a review</span>
            </button>
          ) : (
            <div className="bg-cream rounded-3xl p-6 sm:p-8 shadow-lg border border-gold/20 text-left">
              <h3 className="font-serif text-lg font-bold text-dark-brown mb-4 flex items-center space-x-2">
                <PenTool size={18} className="text-burgundy" />
                <span>Share Your Experience</span>
              </h3>

              {formSubmitted ? (
                <div className="py-8 text-center flex flex-col items-center">
                  <CheckCircle size={44} className="text-green-600 animate-bounce mb-3" />
                  <h4 className="font-serif text-base font-bold text-dark-brown">Thank you for your feedback!</h4>
                  <p className="text-xs text-dark-brown/65 mt-1 leading-relaxed">
                    Your beautiful words have been added. They are now visible in the testimonials slider!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmitReview} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="rev-name" className="text-xs font-bold text-dark-brown/70 block mb-1.5 uppercase tracking-wide">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="rev-name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="E.g. Muhammad Khan"
                        className="w-full bg-cream-light border border-gold/20 rounded-xl py-2 px-3.5 text-xs text-dark-brown focus:outline-none focus:ring-1 focus:ring-burgundy focus:border-transparent transition"
                      />
                    </div>
                    {/* Rating select */}
                    <div>
                      <label htmlFor="rev-rating" className="text-xs font-bold text-dark-brown/70 block mb-1.5 uppercase tracking-wide">
                        Star Rating
                      </label>
                      <select
                        id="rev-rating"
                        value={rating}
                        onChange={(e) => setRating(Number(e.target.value))}
                        className="w-full bg-cream-light border border-gold/20 rounded-xl py-2 px-3 text-xs text-dark-brown focus:outline-none focus:ring-1 focus:ring-burgundy focus:border-transparent transition"
                      >
                        <option value={5}>⭐⭐⭐⭐⭐ (5 Stars)</option>
                        <option value={4}>⭐⭐⭐⭐ (4 Stars)</option>
                        <option value={3}>⭐⭐⭐ (3 Stars)</option>
                        <option value={2}>⭐⭐ (2 Stars)</option>
                        <option value={1}>⭐ (1 Star)</option>
                      </select>
                    </div>
                  </div>

                  {/* Review Textarea */}
                  <div>
                    <label htmlFor="rev-text" className="text-xs font-bold text-dark-brown/70 block mb-1.5 uppercase tracking-wide">
                      Your Review
                    </label>
                    <textarea
                      id="rev-text"
                      required
                      value={reviewText}
                      onChange={(e) => setReviewText(e.target.value)}
                      placeholder="Write your experience at The Bakery Cafe..."
                      rows={3}
                      className="w-full bg-cream-light border border-gold/20 rounded-xl py-2 px-3.5 text-xs text-dark-brown focus:outline-none focus:ring-1 focus:ring-burgundy focus:border-transparent transition"
                    />
                  </div>

                  {/* Form Actions */}
                  <div className="flex justify-end space-x-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="px-4 py-2.5 rounded-xl text-xs font-bold text-dark-brown/60 hover:text-dark-brown uppercase tracking-wider"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-burgundy hover:bg-burgundy-dark text-gold font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl shadow transition"
                    >
                      Submit Review
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
