import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import { 
  Layout, 
  Code2, 
  Database, 
  Smartphone, 
  ShoppingBag, 
  Cloud 
} from 'lucide-react';

const ICONS = [Layout, Code2, Database, Smartphone, ShoppingBag, Cloud];

export default function Services() {
  return (
    <section id="services" className="section-spacing bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p3 uppercase tracking-[0.3em] font-extrabold text-sunset-orange mb-4 block"
          >
            What I Do
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Services I Offer
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass-card group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sunset-orange to-hatch-yellow flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform duration-500">
                  <Icon size={28} className="text-white" />
                </div>
                <h4 className="mb-4">{service.name}</h4>
                <p className="p2 text-eggshell-grey/70 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
