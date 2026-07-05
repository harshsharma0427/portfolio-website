import { motion } from 'motion/react';
import ThreeDCard from './ThreeDCard';

export default function Experience() {
  const experiences = [
    {
      role: 'UI/UX Intern',
      company: 'PTWO Technologies Pvt. Ltd.',
      description: 'Worked on user research, competitor analysis, wireframes and high-fidelity interfaces using Figma. Collaborated with the team to improve usability and maintain clean design systems.',
    },
    {
      role: 'Product Design Intern',
      company: "Arttd'inox, Jindal Stainless",
      description: 'Assisted in product concept development, sketching and design exploration for premium stainless steel products while understanding material, form and manufacturing details.',
    },
  ];

  return (
    <section
      id="experiences"
      className="py-24 relative bg-[#030303] overflow-hidden border-t border-neutral-900/40"
    >
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-3"
            id="experience-subheading"
          >
            <span className="text-cyan-400 font-display text-sm font-bold uppercase tracking-[0.25em]">
              Experience
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight"
            id="experience-title"
          >
            Internship & Design Experience
          </motion.h2>
        </div>

        {/* Experience List (with vertical glowing blue accents) */}
        <div className="flex flex-col space-y-10" id="experience-list-container">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="relative pl-6 group"
              id={`experience-item-${index}`}
            >
              {/* Highlight blue vertical border matching the photo */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-cyan-400 opacity-80 group-hover:bg-cyan-300 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all duration-300 rounded-full" />
              
              <ThreeDCard className="bg-neutral-950/40 border border-neutral-900/60 p-8 rounded-2xl hover:bg-neutral-950/80 hover:border-neutral-800 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
                {/* Header info */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {exp.role} — {exp.company}
                  </h3>
                </div>

                {/* Paragraph */}
                <p className="text-neutral-300 font-sans text-base leading-relaxed font-normal">
                  {exp.description}
                </p>
              </ThreeDCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
