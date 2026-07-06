import { Clock, MapPin, Award, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  const values = [
    {
      icon: <Award className="text-burgundy" size={24} />,
      title: 'Premium Quality',
      description: 'Hand-selected premium ingredients for everything we bake and cook.'
    },
    {
      icon: <Clock className="text-burgundy" size={24} />,
      title: 'Baked Daily',
      description: 'Ovens are fired up at 4:00 AM every single day to ensure absolute freshness.'
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-cream border-t border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Images Grid Block (Left for large screens) */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="col-span-2 relative h-[250px] sm:h-[320px] rounded-2xl overflow-hidden shadow-lg border border-gold/15"
            >
              <img
                src="/src/assets/images/bakery_display_about_1783352305407.jpg"
                alt="Our exquisite Bakery Display Case"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] uppercase tracking-widest text-gold font-bold bg-dark-brown/85 px-2.5 py-1 rounded-md">
                  Fresh Counter
                </span>
                <p className="text-cream text-sm font-semibold mt-1">Our Gourmet Bakery Cabinet</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[160px] sm:h-[200px] rounded-2xl overflow-hidden shadow-lg border border-gold/15"
            >
              <img
                src="/src/assets/images/dining_area_gallery_1783352319522.jpg"
                alt="Spacious Premium Family Seating Area"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/40 to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative h-[160px] sm:h-[200px] rounded-2xl overflow-hidden shadow-lg border border-gold/15"
            >
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=400"
                alt="Our Skilled Chefs Preparing Meals"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/40 to-transparent" />
            </motion.div>
          </div>

          {/* About Content Block (Right for large screens) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-burgundy/5 border border-burgundy/20 rounded-full self-start mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-burgundy animate-pulse" />
              <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-burgundy">
                Crafting Memorable Experiences
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-dark-brown leading-tight mb-6">
              Welcome to <br />
              <span className="italic text-burgundy font-medium">The Bakery Cafe</span>
            </h2>

            <div className="h-0.5 w-16 bg-gold mb-6" />

            <p className="text-dark-brown/80 text-sm sm:text-base leading-relaxed mb-6">
              The Bakery Cafe is a modern bakery and restaurant dedicated to providing exceptional food, fresh bakery products, delicious meals, premium coffee, and outstanding customer service. Our goal is to create memorable dining experiences for families, friends, and food lovers in Mardan.
            </p>

            <p className="text-dark-brown/80 text-sm sm:text-base leading-relaxed mb-8">
              We seamlessly combine the warm, comforting scent of fresh-baked artisan breads and celebratory pastries with the bold, savory excellence of sizzling steaks, flame-grilled burgers, and stone-baked pizzas. Whether you are hosting a family gathering or dropping in for an afternoon espresso, we serve with passion.
            </p>

            {/* Core Values Rows */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 border-t border-b border-gold/15 py-6">
              {values.map((val, idx) => (
                <div key={idx} className="flex space-x-3">
                  <div className="bg-burgundy/5 p-2.5 rounded-lg border border-burgundy/10 h-11 w-11 flex items-center justify-center shrink-0">
                    {val.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-dark-brown tracking-wide mb-1">
                      {val.title}
                    </h4>
                    <p className="text-xs text-dark-brown/70 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Location highlight badge */}
            <div className="flex items-start space-x-2.5 bg-dark-brown text-cream-light p-4 rounded-xl shadow-md border border-gold/10">
              <MapPin className="text-gold mt-0.5 shrink-0" size={18} />
              <div>
                <p className="text-xs text-gold uppercase tracking-widest font-bold">Find Us In Mardan</p>
                <p className="text-xs text-cream/90 mt-0.5 font-medium">
                  Nowshera Mardan Road, Adjacent to Mardan Mega Mart, Mardan, Pakistan
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
