import { Leaf, Award, Users, Coffee, Zap, Truck, DollarSign, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <Leaf className="text-burgundy" size={24} />,
      title: 'Fresh Ingredients',
      desc: 'Sourcing fresh vegetables, premium dairy, and high-grade flour daily for pure, uncompromised flavors.'
    },
    {
      icon: <Award className="text-burgundy" size={24} />,
      title: 'Skilled Bakers & Chefs',
      desc: 'Our culinary team brings decades of combined experience from premium restaurants and luxury patisseries.'
    },
    {
      icon: <Users className="text-burgundy" size={24} />,
      title: 'Family-Friendly Environment',
      desc: 'A warm, safe, and comfortable dining space with spacious seating designed for Mardan families.'
    },
    {
      icon: <Coffee className="text-burgundy" size={24} />,
      title: 'Premium Coffee',
      desc: '100% organic Arabica beans roasted locally and brewed expertly to perfection by senior baristas.'
    },
    {
      icon: <Zap className="text-burgundy" size={24} />,
      title: 'Fast Service',
      desc: 'We respect your time. Enjoy quick, efficient service and fresh-baked orders prepared promptly.'
    },
    {
      icon: <Truck className="text-burgundy" size={24} />,
      title: 'Delivery Available',
      desc: 'Enjoy restaurant quality from the comfort of home. Rapid delivery throughout Mardan city limits.'
    },
    {
      icon: <DollarSign className="text-burgundy" size={24} />,
      title: 'Affordable Prices',
      desc: 'Premium dining made accessible. Competitive pricing across our extensive menu selection.'
    },
    {
      icon: <ShieldCheck className="text-burgundy" size={24} />,
      title: 'Quality Guaranteed',
      desc: 'Strict hygiene controls, organic cooking mediums, and zero shortcuts. Satisfaction guaranteed.'
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 lg:py-28 bg-cream border-t border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-gold/10 border border-gold/20 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-gold">
              Our Commitment to Excellence
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-dark-brown mb-4 leading-tight">
            Why Choose <span className="italic text-burgundy font-medium">The Bakery Cafe</span>
          </h2>
          <div className="h-0.5 w-16 bg-gold/50 mx-auto mb-6" />
          <p className="text-sm sm:text-base text-dark-brown/75 leading-relaxed">
            Since opening our doors adjacent to Mardan Mega Mart, we have dedicated ourselves to raising the standard of bakery products, meals, and customer care in KPK.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-cream-light p-6 rounded-2xl border border-gold/15 hover:border-burgundy/30 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Icon Wrap */}
                <div className="bg-burgundy/5 p-3 rounded-xl border border-burgundy/10 w-12 h-12 flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                
                <h3 className="text-base font-bold text-dark-brown tracking-wide mb-2.5">
                  {item.title}
                </h3>
                
                <p className="text-xs text-dark-brown/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
