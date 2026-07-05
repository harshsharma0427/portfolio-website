import { motion } from 'motion/react';
import { ArrowUpRight, Download } from 'lucide-react';

interface HeroProps {
  onViewProjects: () => void;
}

export default function Hero({ onViewProjects }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-[#030303]"
    >
      {/* Background ambient light effects to emphasize the 3D aesthetic */}
      <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-blue-950/10 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '3s' }} />

      <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Left Column - Content */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left" id="hero-content">
          
          {/* Subtitle Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center space-x-2 mb-6"
            id="hero-subtitle-badge"
          >
            <span className="text-cyan-400 font-display text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em]">
              UI/UX DESIGNER | PRODUCT DESIGNER STUDENT
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.1] mb-8"
            id="hero-main-title"
          >
            Designing clean,<br className="hidden sm:inline" />
            useful and user-<br className="hidden sm:inline" />
            friendly digital<br />
            experiences.
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-neutral-400 font-sans text-base sm:text-lg font-normal leading-relaxed max-w-xl mb-10"
            id="hero-description"
          >
            I'm Harsh Sharma, a UI/UX Designer focused on user research, wireframing, prototyping and high-fidelity interface design for mobile apps and websites.
          </motion.p>

          {/* Action Buttons (Capsule style matching the screenshot) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4"
            id="hero-buttons-container"
          >
            <button
              id="btn-view-projects"
              onClick={onViewProjects}
              className="px-8 py-3.5 rounded-full text-xs font-display font-semibold uppercase tracking-widest bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-500 hover:bg-neutral-800 hover:shadow-[0_0_25px_rgba(255,255,255,0.05)] transition-all duration-300 flex items-center space-x-2 group"
            >
              <span>View Projects</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </button>

            <a
              id="btn-download-resume"
              href="#contact"
              className="px-8 py-3.5 rounded-full text-xs font-display font-semibold uppercase tracking-widest bg-transparent border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-500 hover:bg-neutral-900/40 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Download Resume</span>
              <Download size={14} />
            </a>
          </motion.div>
        </div>

        {/* Right Column - Portait (Blends perfectly on black) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end select-none" id="hero-portrait-col">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, delay: 0.3, ease: 'easeOut' }}
            className="relative max-w-sm sm:max-w-md lg:max-w-full w-full rounded-2xl overflow-hidden group"
            id="hero-portrait-wrapper"
          >
            <div className="relative w-full h-full">
              {/* Elegant lighting overlay around image to make it 3D */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent z-10 pointer-events-none" />
              
              {/* Main Portrait */}
              <img
                id="hero-portrait-image"
                src="/src/assets/images/harsh.png"
                alt="Harsh Sharma"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover relative z-0 transition-all duration-700 group-hover:scale-[1.03]"
              />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
