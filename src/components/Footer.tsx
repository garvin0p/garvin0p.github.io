import { motion } from 'motion/react';
import { NAV_LINKS } from '../constants';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <a href="#" className="font-display text-3xl text-white">
            AK<span className="text-sunset-orange">.</span>
          </a>

          <div className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="p2 font-semibold text-eggshell-grey/60 hover:text-hatch-yellow transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {[Github, Twitter, Linkedin, Instagram].map((Icon, i) => (
              <a 
                key={i} 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-eggshell-grey/60 hover:bg-sunset-orange hover:text-white transition-all duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="text-center border-t border-white/5 pt-8">
          <p className="p3 text-eggshell-grey/40">
            © 2026 AK Portfolio. Built with love in Ahmedabad.
          </p>
        </div>
      </div>
    </footer>
  );
}
