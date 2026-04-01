import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { STATS } from '../constants';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-sunset-orange/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-hatch-yellow/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <Sparkles size={16} className="text-hatch-yellow" />
            <span className="p3 font-bold uppercase tracking-wider text-hatch-yellow">Available for freelance work</span>
          </div>
          
          <h1 className="mb-6">
            Crafting Digital Experiences that <span className="gradient-text">Captivate</span>
          </h1>
          
          <p className="p1 text-eggshell-grey/80 mb-10 max-w-xl">
            I am a full-stack developer and UI/UX designer who turns bold ideas into fast, beautiful, and intuitive products. Let's build something extraordinary together.
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            <button className="btn-primary flex items-center gap-2">
              View My Work <ArrowRight size={18} />
            </button>
            <button className="btn-outline">
              Let's Talk
            </button>
          </div>

          <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
            {STATS.map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                <h3 className="text-white mb-1">{stat.value}</h3>
                <p className="p3 uppercase tracking-widest text-eggshell-grey/50 font-bold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 aspect-square bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center">
             {/* Abstract visual or placeholder */}
             <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/tech/800/800')] opacity-40 mix-blend-overlay grayscale" />
             <div className="relative z-20 text-[120px] font-display text-white/10 select-none">AK.</div>
          </div>
          {/* Floating elements */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 glass-card py-3 px-6 flex items-center gap-3"
          >
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
            <span className="p3 font-bold">Live Projects</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
