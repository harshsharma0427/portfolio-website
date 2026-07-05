import { motion } from 'motion/react';
import ThreeDCard from './ThreeDCard';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Core Skill',
      skills: ['UI/UX Design', 'web Design', 'Mobile App Design', 'User Flow', 'Prototyping', 'Usability Testing'],
    },
    {
      title: 'Design Tools',
      skills: ['Figma', 'Framer', 'Photoshop', 'Adobe XD', 'Adobe InDesign', 'Adobe illustrator', 'Canva'],
    },
    {
      title: 'AI Tools',
      skills: ['Web Design', 'Video Generation', 'Image Generation', 'AI Coding', 'Web Building', 'Website Redesign'],
    },
    {
      title: 'Coming Soon',
      skills: ['HTML', 'CSS', 'Java', 'AI App Building', 'AI Automation', 'AI Agent Building', 'Development'],
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="skills"
      className="py-24 relative bg-[#030303] overflow-hidden border-t border-neutral-900/40"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-3"
            id="skills-subheading"
          >
            <span className="text-cyan-400 font-display text-sm font-bold uppercase tracking-[0.25em]">
              Skills
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight"
            id="skills-title"
          >
            My Expertise
          </motion.h2>
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          id="skills-cards-grid"
        >
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              variants={itemVariants}
              className="h-full"
              id={`skill-category-motion-${catIndex}`}
            >
              <ThreeDCard className="bg-neutral-950/75 border border-neutral-800/80 rounded-2xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.3)] h-full flex flex-col group hover:border-neutral-700 transition-colors duration-300">
                {/* Title */}
                <h3 className="text-lg sm:text-xl font-display font-bold text-white mb-6 border-b border-neutral-900 pb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {category.title}
                </h3>

                {/* Pill Grid */}
                <div className="flex flex-wrap gap-2.5" id={`skill-pills-wrap-${catIndex}`}>
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      id={`skill-pill-${catIndex}-${skillIndex}`}
                      className="px-3.5 py-1.5 rounded-lg text-xs font-medium tracking-wide bg-[#080808] border border-neutral-900 text-neutral-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-neutral-950 hover:shadow-[0_0_15px_rgba(34,211,238,0.08)] transition-all duration-300 select-none cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </ThreeDCard>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
