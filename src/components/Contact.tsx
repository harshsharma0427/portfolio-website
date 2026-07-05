import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Linkedin, Phone, Copy, Check } from 'lucide-react';
import ThreeDCard from './ThreeDCard';
import scanMeImg from '../assets/images/Scan Me.jpg.png';

export default function Contact() {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const contactInfo = [
    { type: 'email', value: 'harshaharma41@gmail.com', label: 'Primary Email', icon: <Mail size={14} /> },
    { type: 'linkedin', value: 'https://linkedin.com/in/harshsharma', label: 'Linkdin', icon: <Linkedin size={14} />, displayValue: 'Linkdin' },
    { type: 'phone', value: '+91 7015864011', label: 'Primary Phone', icon: <Phone size={14} /> },
    { type: 'email', value: 'harshsharma2004111@gmail.com', label: 'Secondary Email', icon: <Mail size={14} /> },
    { type: 'phone', value: '+91 7678280306', label: 'Secondary Phone', icon: <Phone size={14} /> },
  ];

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <section
      id="contact"
      className="py-24 relative bg-[#030303] overflow-hidden border-t border-neutral-900/40"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Contact Container Card */}
        <div className="bg-neutral-950/40 border border-neutral-900/80 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.6)]" id="contact-outer-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" id="contact-grid">
            
            {/* Left Column: Heading, text and details list */}
            <div className="lg:col-span-7 flex flex-col justify-center" id="contact-left-col">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-3"
                id="contact-tagline"
              >
                <span className="text-cyan-400 font-display text-sm font-bold uppercase tracking-[0.25em]">
                  Contact
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight mb-4"
                id="contact-heading"
              >
                Let's create something useful together.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-neutral-400 font-sans text-base sm:text-lg mb-10 max-w-lg"
                id="contact-sub"
              >
                Available for UI/UX Jobs, freelance projects and junior design opportunities.
              </motion.p>

              {/* Contact Pills Grid matching the photo */}
              <div className="flex flex-wrap gap-3.5" id="contact-pills-list">
                {contactInfo.map((info, idx) => {
                  const isCopied = copiedText === info.label;
                  return (
                    <motion.button
                      key={idx}
                      id={`contact-pill-${idx}`}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      onClick={() => handleCopy(info.value, info.label)}
                      className={`px-5 py-3 rounded-full text-xs font-display font-medium tracking-wide flex items-center space-x-2 border transition-all duration-300 ${
                        isCopied
                          ? 'bg-cyan-950/40 border-cyan-500 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.15)]'
                          : 'bg-black/60 border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-500 hover:bg-neutral-900/50'
                      }`}
                    >
                      <span>{info.icon}</span>
                      <span>{info.displayValue || info.value}</span>
                      <span className="opacity-40 group-hover:opacity-100 transition-opacity">
                        {isCopied ? <Check size={12} className="text-cyan-400 animate-scale-up" /> : <Copy size={12} />}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Right Column: QR Code Container */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end" id="contact-right-col">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-[280px]"
                id="qr-card-motion"
              >
                <ThreeDCard className="bg-neutral-950/60 border border-neutral-800 rounded-2xl p-6 shadow-[0_15px_35px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center relative overflow-hidden group">
                  {/* Glowing backlight */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  {/* Decorative corner lines for high-tech aesthetic */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-cyan-500/20" />
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-cyan-500/20" />

                  {/* QR Image Frame */}
                  <div className="bg-white p-3 rounded-xl shadow-inner relative z-10 transition-transform duration-500 group-hover:scale-[1.03]">
                    <img
                      id="contact-qr-image"
                      src={scanMeImg}
                      alt="Contact QR Code"
                      referrerPolicy="no-referrer"
                      className="w-full h-auto max-w-[180px] object-contain rounded-md"
                    />
                  </div>

                  <p className="text-[10px] text-cyan-400 font-mono uppercase tracking-[0.2em] mt-4 relative z-10 text-center">
                    Scan for digital VCard
                  </p>
                </ThreeDCard>
              </motion.div>
            </div>

          </div>
        </div>

        {/* Footer text (styled like the screenshot) */}
        <div className="mt-20 border-t border-neutral-900/60 pt-8 text-center" id="footer-section">
          <p className="text-xs font-sans text-neutral-500 tracking-wide">
            &copy; 2026 Harsh Sharma. Designed and developed with focus on simplicity.
          </p>
        </div>

      </div>

      {/* Copy notification overlay helper */}
      <AnimatePresence>
        {copiedText && (
          <motion.div
            id="toast-notification"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-neutral-950 border border-cyan-500/50 text-white px-6 py-3 rounded-full text-xs font-display font-medium tracking-wider shadow-[0_10px_30px_rgba(34,211,238,0.2)] flex items-center space-x-2"
          >
            <Check size={14} className="text-cyan-400" />
            <span>Copied {copiedText} to clipboard!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
