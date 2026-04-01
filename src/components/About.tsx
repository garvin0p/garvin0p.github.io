import { motion } from 'motion/react';
import { SKILLS } from '../constants';
import { Download, Star } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section-spacing bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 relative">
            <img 
              src="https://picsum.photos/seed/portrait/800/1000" 
              alt="Profile" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight-charcoal to-transparent opacity-60" />
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="absolute -bottom-10 -right-10 glass-card bg-sunset-orange p-6 text-white border-none"
          >
            <div className="flex items-center gap-2 mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="white" />)}
            </div>
            <p className="font-bold">5 Star Client Rating</p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="p3 uppercase tracking-[0.3em] font-extrabold text-sunset-orange mb-4 block">About Me</span>
          <h2 className="mb-8">Design-Driven Developer</h2>
          
          <div className="space-y-6 text-eggshell-grey/80 mb-10">
            <p className="p1">
              I bridge the gap between stunning design and powerful functionality. From early-stage startups to established brands, I craft digital products that not only look great but perform exceptionally well.
            </p>
            <p className="p1">
              Based in Ahmedabad, India, I specialise in React, Node.js, and modern UI/UX design. I am obsessed with every pixel and every millisecond of load time.
            </p>
          </div>

          <div className="mb-12">
            <h4 className="mb-6 text-white">My Toolkit</h4>
            <div className="flex flex-wrap gap-3">
              {SKILLS.map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-eggshell-grey p2 font-semibold hover:border-hatch-yellow/50 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <button className="btn-primary flex items-center gap-2">
            Download CV <Download size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
