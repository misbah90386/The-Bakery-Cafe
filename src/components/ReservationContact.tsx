import React, { useState, useEffect } from 'react';
import { MapPin, Phone, MessageSquare, Clock, Calendar, Users, Mail, User, ShieldCheck, Heart, Send, CheckCircle, Trash2 } from 'lucide-react';
import { Reservation, ContactMessage } from '../types';
import { motion, AnimatePresence } from 'motion/react';

export default function ReservationContact() {
  const [activeFormTab, setActiveFormTab] = useState<'reserve' | 'contact'>('reserve');
  
  // Reservation state
  const [resName, setResName] = useState('');
  const [resPhone, setResPhone] = useState('');
  const [resEmail, setResEmail] = useState('');
  const [resGuests, setResGuests] = useState(2);
  const [resDate, setResDate] = useState('');
  const [resTime, setResTime] = useState('');
  const [resMessage, setResMessage] = useState('');
  const [resSuccess, setResSuccess] = useState(false);
  const [myReservations, setMyReservations] = useState<Reservation[]>([]);

  // Contact state
  const [contName, setContName] = useState('');
  const [contEmail, setContEmail] = useState('');
  const [contPhone, setContPhone] = useState('');
  const [contMessage, setContMessage] = useState('');
  const [contSuccess, setContSuccess] = useState(false);

  // Load existing reservations from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('tb_cafe_reservations');
    if (saved) {
      try {
        setMyReservations(JSON.parse(saved));
      } catch (err) {
        console.error('Error loading reservations', err);
      }
    }
  }, []);

  const handleBookTable = (e: React.FormEvent) => {
    e.preventDefault();
    if (!resName.trim() || !resPhone.trim() || !resDate || !resTime) return;

    const booking: Reservation = {
      name: resName.trim(),
      phone: resPhone.trim(),
      email: resEmail.trim(),
      guests: Number(resGuests),
      date: resDate,
      time: resTime,
      message: resMessage.trim() || undefined
    };

    const updated = [booking, ...myReservations];
    setMyReservations(updated);
    localStorage.setItem('tb_cafe_reservations', JSON.stringify(updated));

    setResSuccess(true);
    
    // Reset inputs
    setResName('');
    setResPhone('');
    setResEmail('');
    setResGuests(2);
    setResDate('');
    setResTime('');
    setResMessage('');

    setTimeout(() => {
      setResSuccess(false);
    }, 4000);
  };

  const handleCancelBooking = (index: number) => {
    const updated = myReservations.filter((_, i) => i !== index);
    setMyReservations(updated);
    localStorage.setItem('tb_cafe_reservations', JSON.stringify(updated));
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contName.trim() || !contEmail.trim() || !contMessage.trim()) return;

    // Simulate sending message
    setContSuccess(true);
    setContName('');
    setContEmail('');
    setContPhone('');
    setContMessage('');

    setTimeout(() => {
      setContSuccess(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-cream scroll-mt-10 border-t border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Column 1: Info block & Map (5 cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-gold/10 border border-gold/20 rounded-full mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-gold">
                  Dine In or Drop Us a Line
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-dark-brown leading-tight">
                Reservation & <span className="italic text-burgundy font-medium">Contact Details</span>
              </h2>
              <div className="h-0.5 w-16 bg-gold mt-4 mb-6" />
              <p className="text-sm text-dark-brown/75 leading-relaxed">
                Enjoy KPK's signature culinary experience. Gather with your family, host business meetings, or celebrate birthdays in a luxurious setting.
              </p>
            </div>

            {/* Contacts Cards Grid */}
            <div className="space-y-4">
              
              {/* Address */}
              <div className="flex items-start space-x-4 bg-cream-light p-4 rounded-2xl border border-gold/15 shadow-sm">
                <div className="bg-burgundy/5 p-3 rounded-xl border border-burgundy/10 text-burgundy shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider text-dark-brown/50">Our Address</h4>
                  <p className="text-sm text-dark-brown font-semibold mt-1 leading-relaxed">
                    Nowshera Mardan Road, Adjacent to Mardan Mega Mart, Mardan, Pakistan
                  </p>
                </div>
              </div>

              {/* Call Hotline */}
              <div className="flex items-start space-x-4 bg-cream-light p-4 rounded-2xl border border-gold/15 shadow-sm">
                <div className="bg-burgundy/5 p-3 rounded-xl border border-burgundy/10 text-burgundy shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider text-dark-brown/50">Phone Hotline</h4>
                  <a href="tel:+923339071074" className="text-sm text-dark-brown font-bold mt-1 block hover:text-burgundy transition-colors">
                    +92 333 9071074
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start space-x-4 bg-cream-light p-4 rounded-2xl border border-gold/15 shadow-sm">
                <div className="bg-burgundy/5 p-3 rounded-xl border border-burgundy/10 text-burgundy shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider text-dark-brown/50">Business Hours</h4>
                  <p className="text-sm text-dark-brown font-semibold mt-1 leading-relaxed">
                    Daily: 8:00 AM — 12:00 AM (Midnight) <br />
                    <span className="text-xs text-burgundy font-normal">Breakfast: 8:00 AM - 12:00 PM</span>
                  </p>
                </div>
              </div>

            </div>

            {/* WhatsApp Integration Quick Button */}
            <a
              href="https://wa.me/923339071074?text=Hi%20The%20Bakery%20Cafe%2C%20I'd%20like%20to%20reserve%20a%20table%20or%20place%20an%20order!"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-cream-light py-4 px-6 rounded-2xl text-sm font-bold tracking-wider uppercase shadow-md flex items-center justify-center space-x-2.5 transition-all duration-300"
            >
              <MessageSquare size={18} className="fill-cream-light" />
              <span>Connect on WhatsApp</span>
            </a>

            {/* Google Map Iframe */}
            <div className="rounded-2xl overflow-hidden border border-gold/20 h-56 w-full shadow-md">
              <iframe
                title="The Bakery Cafe Map Location"
                src="https://maps.google.com/maps?q=Mardan%20Mega%20Mart,%20Mardan,%20Pakistan&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Column 2: Booking Card / Form Tab Selector (7 cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-6 w-full">
            <div className="bg-cream-light rounded-3xl p-6 sm:p-10 border border-gold/15 shadow-xl relative">
              
              {/* Tab Selector */}
              <div className="flex border-b border-gold/15 mb-8">
                <button
                  onClick={() => setActiveFormTab('reserve')}
                  className={`pb-4 px-4 font-serif text-lg font-bold border-b-2 transition-all cursor-pointer ${
                    activeFormTab === 'reserve'
                      ? 'border-burgundy text-burgundy'
                      : 'border-transparent text-dark-brown/40 hover:text-dark-brown/80'
                  }`}
                >
                  Reserve a Table
                </button>
                <button
                  onClick={() => setActiveFormTab('contact')}
                  className={`pb-4 px-4 font-serif text-lg font-bold border-b-2 transition-all cursor-pointer ${
                    activeFormTab === 'contact'
                      ? 'border-burgundy text-burgundy'
                      : 'border-transparent text-dark-brown/40 hover:text-dark-brown/80'
                  }`}
                >
                  Send a Message
                </button>
              </div>

              {/* Form Areas */}
              <AnimatePresence mode="wait">
                {activeFormTab === 'reserve' ? (
                  <motion.div
                    key="reserve-form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {resSuccess ? (
                      <div className="py-12 text-center flex flex-col items-center">
                        <CheckCircle size={56} className="text-green-600 animate-bounce mb-4" />
                        <h3 className="font-serif text-xl font-bold text-dark-brown">Table Booked Successfully!</h3>
                        <p className="text-xs sm:text-sm text-dark-brown/70 mt-2 max-w-sm mx-auto px-4 leading-relaxed">
                          Your reservation at The Bakery Cafe is recorded. Show your active booking card below on arrival. We are excited to serve you!
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleBookTable} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {/* Name */}
                          <div>
                            <label htmlFor="res-name" className="text-[11px] font-bold text-dark-brown/60 uppercase block mb-1.5 tracking-wider">
                              Your Name
                            </label>
                            <div className="relative">
                              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-dark-brown/40" size={15} />
                              <input
                                type="text"
                                id="res-name"
                                required
                                value={resName}
                                onChange={(e) => setResName(e.target.value)}
                                placeholder="E.g. Sardar Yusuf"
                                className="w-full bg-cream rounded-xl pl-10 pr-4 py-3 text-xs text-dark-brown border border-gold/15 focus:outline-none focus:ring-1 focus:ring-burgundy focus:border-transparent transition"
                              />
                            </div>
                          </div>

                          {/* Phone */}
                          <div>
                            <label htmlFor="res-phone" className="text-[11px] font-bold text-dark-brown/60 uppercase block mb-1.5 tracking-wider">
                              Phone Number
                            </label>
                            <div className="relative">
                              <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-dark-brown/40" size={15} />
                              <input
                                type="tel"
                                id="res-phone"
                                required
                                value={resPhone}
                                onChange={(e) => setResPhone(e.target.value)}
                                placeholder="E.g. +92 333 1234567"
                                className="w-full bg-cream rounded-xl pl-10 pr-4 py-3 text-xs text-dark-brown border border-gold/15 focus:outline-none focus:ring-1 focus:ring-burgundy focus:border-transparent transition"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          {/* Email */}
                          <div className="sm:col-span-1">
                            <label htmlFor="res-email" className="text-[11px] font-bold text-dark-brown/60 uppercase block mb-1.5 tracking-wider">
                              Email (Optional)
                            </label>
                            <div className="relative">
                              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-dark-brown/40" size={15} />
                              <input
                                type="email"
                                id="res-email"
                                value={resEmail}
                                onChange={(e) => setResEmail(e.target.value)}
                                placeholder="name@domain.com"
                                className="w-full bg-cream rounded-xl pl-10 pr-4 py-3 text-xs text-dark-brown border border-gold/15 focus:outline-none focus:ring-1 focus:ring-burgundy focus:border-transparent transition"
                              />
                            </div>
                          </div>

                          {/* Guests */}
                          <div className="sm:col-span-1">
                            <label htmlFor="res-guests" className="text-[11px] font-bold text-dark-brown/60 uppercase block mb-1.5 tracking-wider">
                              No. of Guests
                            </label>
                            <div className="relative">
                              <Users className="absolute left-3.5 top-1/2 -translate-y-1/2 text-dark-brown/40" size={15} />
                              <select
                                id="res-guests"
                                value={resGuests}
                                onChange={(e) => setResGuests(Number(e.target.value))}
                                className="w-full bg-cream rounded-xl pl-10 pr-4 py-3 text-xs text-dark-brown border border-gold/15 focus:outline-none focus:ring-1 focus:ring-burgundy focus:border-transparent transition"
                              >
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15].map((g) => (
                                  <option key={g} value={g}>{g} {g === 1 ? 'Guest' : 'Guests'}</option>
                                ))}
                              </select>
                            </div>
                          </div>

                          {/* Date */}
                          <div className="sm:col-span-1">
                            <label htmlFor="res-date" className="text-[11px] font-bold text-dark-brown/60 uppercase block mb-1.5 tracking-wider">
                              Preferred Date
                            </label>
                            <div className="relative">
                              <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 text-dark-brown/40" size={15} />
                              <input
                                type="date"
                                id="res-date"
                                required
                                value={resDate}
                                onChange={(e) => setResDate(e.target.value)}
                                className="w-full bg-cream rounded-xl pl-10 pr-4 py-3 text-xs text-dark-brown border border-gold/15 focus:outline-none focus:ring-1 focus:ring-burgundy focus:border-transparent transition"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Preferred Time */}
                        <div>
                          <label htmlFor="res-time" className="text-[11px] font-bold text-dark-brown/60 uppercase block mb-1.5 tracking-wider">
                            Arrival Time
                          </label>
                          <div className="relative">
                            <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-dark-brown/40" size={15} />
                            <select
                              id="res-time"
                              required
                              value={resTime}
                              onChange={(e) => setResTime(e.target.value)}
                              className="w-full bg-cream rounded-xl pl-10 pr-4 py-3 text-xs text-dark-brown border border-gold/15 focus:outline-none focus:ring-1 focus:ring-burgundy focus:border-transparent transition"
                            >
                              <option value="">-- Choose Time --</option>
                              <option value="12:00 PM">12:00 PM (Lunch)</option>
                              <option value="1:00 PM">1:00 PM</option>
                              <option value="2:00 PM">2:00 PM</option>
                              <option value="4:00 PM">4:00 PM (Hi-Tea)</option>
                              <option value="5:00 PM">5:00 PM</option>
                              <option value="6:00 PM">6:00 PM</option>
                              <option value="7:00 PM">7:00 PM (Dinner)</option>
                              <option value="8:00 PM">8:00 PM</option>
                              <option value="9:00 PM">9:00 PM</option>
                              <option value="10:00 PM">10:00 PM</option>
                              <option value="11:00 PM">11:00 PM</option>
                            </select>
                          </div>
                        </div>

                        {/* Special request Message */}
                        <div>
                          <label htmlFor="res-msg" className="text-[11px] font-bold text-dark-brown/60 uppercase block mb-1.5 tracking-wider">
                            Special Request (Optional)
                          </label>
                          <textarea
                            id="res-msg"
                            value={resMessage}
                            onChange={(e) => setResMessage(e.target.value)}
                            placeholder="Birthday setup request, wheelchair accessibility, allergic comments..."
                            rows={3}
                            className="w-full bg-cream rounded-xl px-4 py-3 text-xs text-dark-brown border border-gold/15 focus:outline-none focus:ring-1 focus:ring-burgundy focus:border-transparent transition"
                          />
                        </div>

                        <button
                          type="submit"
                          className="bg-burgundy hover:bg-burgundy-dark text-gold font-bold text-xs uppercase tracking-wider py-4 w-full rounded-xl transition shadow flex items-center justify-center space-x-2"
                        >
                          <Calendar size={15} />
                          <span>Reserve Table Now</span>
                        </button>
                      </form>
                    )}
                  </motion.div>
                ) : (
                  <motion.div
                    key="contact-form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {contSuccess ? (
                      <div className="py-12 text-center flex flex-col items-center">
                        <CheckCircle size={56} className="text-green-600 animate-bounce mb-4" />
                        <h3 className="font-serif text-xl font-bold text-dark-brown">Message Sent Successfully!</h3>
                        <p className="text-xs sm:text-sm text-dark-brown/70 mt-2 max-w-sm mx-auto px-4 leading-relaxed">
                          Thank you for reaching out to The Bakery Cafe. Our manager adjacent to Mardan Mega Mart will contact you via email or phone shortly!
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSendMessage} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {/* Name */}
                          <div>
                            <label htmlFor="cont-name" className="text-[11px] font-bold text-dark-brown/60 uppercase block mb-1.5 tracking-wider">
                              Full Name
                            </label>
                            <input
                              type="text"
                              id="cont-name"
                              required
                              value={contName}
                              onChange={(e) => setContName(e.target.value)}
                              placeholder="E.g. Sardar Yusuf"
                              className="w-full bg-cream rounded-xl px-4 py-3 text-xs text-dark-brown border border-gold/15 focus:outline-none focus:ring-1 focus:ring-burgundy focus:border-transparent transition"
                            />
                          </div>

                          {/* Email */}
                          <div>
                            <label htmlFor="cont-email" className="text-[11px] font-bold text-dark-brown/60 uppercase block mb-1.5 tracking-wider">
                              Email Address
                            </label>
                            <input
                              type="email"
                              id="cont-email"
                              required
                              value={contEmail}
                              onChange={(e) => setContEmail(e.target.value)}
                              placeholder="name@domain.com"
                              className="w-full bg-cream rounded-xl px-4 py-3 text-xs text-dark-brown border border-gold/15 focus:outline-none focus:ring-1 focus:ring-burgundy focus:border-transparent transition"
                            />
                          </div>
                        </div>

                        {/* Phone */}
                        <div>
                          <label htmlFor="cont-phone" className="text-[11px] font-bold text-dark-brown/60 uppercase block mb-1.5 tracking-wider">
                            Phone Number (Optional)
                          </label>
                          <input
                            type="tel"
                            id="cont-phone"
                            value={contPhone}
                            onChange={(e) => setContPhone(e.target.value)}
                            placeholder="E.g. +92 333 1234567"
                            className="w-full bg-cream rounded-xl px-4 py-3 text-xs text-dark-brown border border-gold/15 focus:outline-none focus:ring-1 focus:ring-burgundy focus:border-transparent transition"
                          />
                        </div>

                        {/* Message */}
                        <div>
                          <label htmlFor="cont-msg" className="text-[11px] font-bold text-dark-brown/60 uppercase block mb-1.5 tracking-wider">
                            Your Message
                          </label>
                          <textarea
                            id="cont-msg"
                            required
                            value={contMessage}
                            onChange={(e) => setContMessage(e.target.value)}
                            placeholder="What would you like to ask or share with us?"
                            rows={4}
                            className="w-full bg-cream rounded-xl px-4 py-3 text-xs text-dark-brown border border-gold/15 focus:outline-none focus:ring-1 focus:ring-burgundy focus:border-transparent transition"
                          />
                        </div>

                        <button
                          type="submit"
                          className="bg-burgundy hover:bg-burgundy-dark text-gold font-bold text-xs uppercase tracking-wider py-4 w-full rounded-xl transition shadow flex items-center justify-center space-x-2"
                        >
                          <Send size={15} />
                          <span>Send Message</span>
                        </button>
                      </form>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

            {/* My Active Reservations Card List */}
            {myReservations.length > 0 && (
              <div className="bg-cream-light rounded-3xl p-6 border border-gold/15 shadow-lg w-full">
                <div className="flex items-center space-x-2 mb-4 border-b border-gold/10 pb-3">
                  <ShieldCheck className="text-burgundy" size={18} />
                  <h4 className="font-serif text-sm font-bold text-dark-brown">My Active Reservations</h4>
                </div>

                <div className="space-y-3 max-h-[220px] overflow-y-auto pr-1">
                  {myReservations.map((res, index) => (
                    <div key={index} className="bg-cream rounded-xl p-3.5 border border-gold/10 flex items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs font-bold text-dark-brown leading-none">{res.name}</span>
                          <span className="text-[9px] uppercase font-bold tracking-wider text-burgundy bg-burgundy/5 px-2 py-0.5 rounded-full">
                            {res.guests} {res.guests === 1 ? 'Guest' : 'Guests'}
                          </span>
                        </div>
                        <div className="flex items-center space-x-3 mt-2 text-[11px] text-dark-brown/60 font-mono">
                          <span className="flex items-center gap-1"><Calendar size={11} className="text-gold" /> {res.date}</span>
                          <span className="flex items-center gap-1"><Clock size={11} className="text-gold" /> {res.time}</span>
                        </div>
                        {res.message && (
                          <p className="text-[10px] text-dark-brown/50 italic mt-1 line-clamp-1">"{res.message}"</p>
                        )}
                      </div>
                      <button
                        onClick={() => handleCancelBooking(index)}
                        className="text-dark-brown/30 hover:text-red-600 transition-colors cursor-pointer p-1.5"
                        title="Cancel reservation"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
