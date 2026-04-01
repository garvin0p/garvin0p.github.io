import { motion } from 'motion/react';
import { Mail, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="section-spacing bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="p3 uppercase tracking-[0.3em] font-extrabold text-sunset-orange mb-4 block">Get In Touch</span>
            <h2 className="mb-8">Let's Build Something Great</h2>
            <p className="p1 text-eggshell-grey/80 mb-12 max-w-md">
              Have a project in mind? I am currently taking on new clients. Whether it is a full product build or a focused sprint, let's talk.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-sunset-orange transition-colors duration-300">
                  <Mail size={24} className="text-sunset-orange group-hover:text-white" />
                </div>
                <div>
                  <p className="p3 uppercase tracking-widest font-bold text-eggshell-grey/40 mb-1">Email</p>
                  <h5 className="text-white">hello@yourname.com</h5>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-sunset-orange transition-colors duration-300">
                  <MapPin size={24} className="text-sunset-orange group-hover:text-white" />
                </div>
                <div>
                  <p className="p3 uppercase tracking-widest font-bold text-eggshell-grey/40 mb-1">Location</p>
                  <h5 className="text-white">Ahmedabad, Gujarat, India</h5>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-sunset-orange transition-colors duration-300">
                  <Clock size={24} className="text-sunset-orange group-hover:text-white" />
                </div>
                <div>
                  <p className="p3 uppercase tracking-widest font-bold text-eggshell-grey/40 mb-1">Response Time</p>
                  <h5 className="text-white">Within 24 hours</h5>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card"
          >
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                  <Send size={40} className="text-green-500" />
                </div>
                <h3 className="mb-4">Message Sent!</h3>
                <p className="p2 text-eggshell-grey/70">I will be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="p3 uppercase tracking-widest font-bold text-eggshell-grey/40">First Name</label>
                    <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-sunset-orange focus:outline-none transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="p3 uppercase tracking-widest font-bold text-eggshell-grey/40">Last Name</label>
                    <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-sunset-orange focus:outline-none transition-colors" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="p3 uppercase tracking-widest font-bold text-eggshell-grey/40">Email Address</label>
                  <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-sunset-orange focus:outline-none transition-colors" />
                </div>

                <div className="space-y-2">
                  <label className="p3 uppercase tracking-widest font-bold text-eggshell-grey/40">Project Budget</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-sunset-orange focus:outline-none transition-colors appearance-none">
                    <option className="bg-midnight-charcoal">50,000 to 1,00,000</option>
                    <option className="bg-midnight-charcoal">1,00,000 to 3,00,000</option>
                    <option className="bg-midnight-charcoal">3,00,000 to 5,00,000</option>
                    <option className="bg-midnight-charcoal">5,00,000 and above</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="p3 uppercase tracking-widest font-bold text-eggshell-grey/40">Your Message</label>
                  <textarea required rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-sunset-orange focus:outline-none transition-colors resize-none" />
                </div>

                <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                  Send Message <Send size={18} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
