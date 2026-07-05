import { motion } from 'motion/react';
import ThreeDCard from './ThreeDCard';

export default function About() {
  return (
    <section
      id="about"
      className="py-24 relative bg-[#030303] overflow-hidden border-t border-neutral-900/40"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Subheading: "ABOUT ME" */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-3"
          id="about-subheading-wrap"
        >
          <span className="text-cyan-400 font-display text-sm font-bold uppercase tracking-[0.25em]">
            ABOUT ME
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-14"
          id="about-headline-wrap"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Turning ideas into interactive<br />digital products.
          </h2>
        </motion.div>

        {/* Grid: Description & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" id="about-content-grid">
          
          {/* Left: About Paragraph in a beautiful glowing card */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="h-full"
              id="about-card-motion"
            >
              <ThreeDCard className="h-full bg-neutral-950/60 border border-neutral-800/80 rounded-2xl p-8 sm:p-10 flex flex-col justify-center relative shadow-[0_10px_30px_rgba(0,0,0,0.4)] overflow-hidden group">
                {/* Accent glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <p className="text-neutral-300 font-sans text-base sm:text-lg leading-relaxed font-normal relative z-10">
                  I'm Harsh Sharma, a UI/UX Designer and Product Design student passionate about creating simple, intuitive, and user-centered digital interfaces. I enjoy transforming complex problems into clean and functional interfaces through user research, wireframing, prototyping, and visual design. My goal is to build products that are not only visually appealing but also meaningful and easy to use.
                </p>
                
                {/* Decorative designer metrics tag */}
                <div className="mt-8 flex items-center space-x-2 text-cyan-400 font-mono text-xs uppercase tracking-widest relative z-10">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span>Interactive Thinker</span>
                  <span className="text-neutral-700">•</span>
                  <span>User-Centered Practitioner</span>
                </div>
              </ThreeDCard>
            </motion.div>
          </div>

          {/* Right: Stats Panel */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="h-full"
              id="about-stats-motion"
            >
              <ThreeDCard className="h-full bg-neutral-950/60 border border-neutral-800/80 rounded-2xl flex flex-col justify-around p-8 sm:p-10 relative shadow-[0_10px_30px_rgba(0,0,0,0.4)] overflow-hidden group">
                
                {/* Subtle backlight glow */}
                <div className="absolute -right-20 -bottom-20 w-48 h-48 rounded-full bg-cyan-500/5 blur-[50px] pointer-events-none group-hover:bg-cyan-500/10 transition-colors duration-500" />

                {/* Stat 1 */}
                <div className="flex flex-col items-center justify-center text-center py-6 group/stat" id="stat-years">
                  <span className="text-4xl sm:text-5xl font-display font-extrabold text-cyan-400 tracking-tight mb-2 group-hover/stat:scale-105 transition-transform duration-300">
                    1.5+
                  </span>
                  <span className="text-sm sm:text-base font-display font-medium text-neutral-300 uppercase tracking-widest">
                    Years of Experience
                  </span>
                </div>

                {/* Separator */}
                <div className="w-full h-[1px] bg-neutral-800/60" />

                {/* Stat 2 */}
                <div className="flex flex-col items-center justify-center text-center py-6 group/stat" id="stat-projects">
                  <span className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-2 group-hover/stat:scale-105 transition-transform duration-300">
                    07+
                  </span>
                  <span className="text-sm sm:text-base font-display font-medium text-neutral-300 uppercase tracking-widest">
                    Projects Completed
                  </span>
                </div>

                {/* Separator */}
                <div className="w-full h-[1px] bg-neutral-800/60" />

                {/* Stat 3 */}
                <div className="flex flex-col items-center justify-center text-center py-6 group/stat" id="stat-clients">
                  <span className="text-4xl sm:text-5xl font-display font-extrabold text-cyan-400 tracking-tight mb-2 group-hover/stat:scale-105 transition-transform duration-300">
                    05+
                  </span>
                  <span className="text-sm sm:text-base font-display font-medium text-neutral-300 uppercase tracking-widest">
                    Clients Served
                  </span>
                </div>

              </ThreeDCard>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
