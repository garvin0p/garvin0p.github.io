import { motion } from 'motion/react';
import { PROJECTS } from '../constants';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  return (
    <section id="work" className="section-spacing">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p3 uppercase tracking-[0.3em] font-extrabold text-sunset-orange mb-4 block"
          >
            Portfolio
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Selected Work
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-card group flex flex-col h-full"
            >
              <div className="aspect-video rounded-xl overflow-hidden mb-6 bg-white/5 relative">
                <img 
                  src={`https://picsum.photos/seed/${project.name}/600/400`} 
                  alt={project.name}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-midnight-charcoal/80 backdrop-blur-sm border border-white/10 p3 font-bold text-hatch-yellow uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
              </div>

              <h4 className="mb-3 group-hover:text-hatch-yellow transition-colors">{project.name}</h4>
              <p className="p2 text-eggshell-grey/70 mb-6 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map(t => (
                  <span key={t} className="p3 font-bold text-eggshell-grey/40 uppercase tracking-tighter">
                    #{t.replace(/\s+/g, '')}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                <a href="#" className="p3 font-extrabold uppercase tracking-widest flex items-center gap-1 hover:text-sunset-orange transition-colors">
                  Case Study <ExternalLink size={14} />
                </a>
                <a href="#" className="p3 font-extrabold uppercase tracking-widest flex items-center gap-1 hover:text-sunset-orange transition-colors">
                  Github <Github size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
