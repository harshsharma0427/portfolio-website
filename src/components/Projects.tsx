import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import ThreeDCard from './ThreeDCard';
import FigmaModal from './FigmaModal';

// Import project images
import solesearchImg from '../assets/images/solesearch_mockup_v2_1783249680570.jpg';
import flashspaceImg from '../assets/images/flash_space_mockup_v2_1783249693847.jpg';
import findostImg from '../assets/images/findost_mockup_v2_1783249665720.jpg';

export default function Projects() {
  const [selectedFigmaProject, setSelectedFigmaProject] = useState<{
    id: string;
    title: string;
    defaultFigmaUrl?: string;
  } | null>(null);

  const projectList = [
    {
      id: 'solesearch',
      title: 'SoleSearch',
      subtitle: 'Sneaker Discovery App',
      category: 'UI/UX Mobile Design',
      image: solesearchImg,
      link: 'https://sole-search-one.vercel.app',
    },
    {
      id: 'flashspace',
      title: 'Flash Space',
      subtitle: 'Website Redesign',
      category: 'Web Redesign & Development',
      image: flashspaceImg,
      link: 'https://flash-space.vercel.app',
    },
    {
      id: 'findost',
      title: 'FinDost',
      subtitle: 'Finance Management App',
      category: 'FinTech Mobile Application',
      image: findostImg,
      link: '#contact',
      defaultFigmaUrl: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F4uWDF8XWUZXTSWF4IisaiQ%2FSolesearch%3Fpage-id%3D125%253A53%26node-id%3D174-1908%26viewport%3D1153%252C-12115%252C0.34%26t%3DN51Ldpsf100O2cLd-1%26scaling%3Dscale-down%26content-scaling%3Dfixed',
    },
  ];

  return (
    <section
      id="projects"
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
            id="projects-subheading"
          >
            <span className="text-cyan-400 font-display text-sm font-bold uppercase tracking-[0.25em]">
              PROJECTS
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight"
            id="projects-title"
          >
            Selected Works
          </motion.h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="projects-grid">
          {projectList.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="flex flex-col h-full"
              id={`project-card-wrapper-${project.id}`}
            >
              <ThreeDCard
                onClick={() => {
                  if (project.link.startsWith('http')) {
                    window.open(project.link, '_blank', 'noopener,noreferrer');
                  } else if (project.link.startsWith('#')) {
                    const el = document.getElementById(project.link.substring(1));
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }}
                className="bg-neutral-950/80 border border-neutral-800/80 rounded-2xl overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.5)] group h-full flex flex-col justify-between"
              >
                
                {/* Image Container with fade out gradient overlay */}
                <div className="relative aspect-[4/3] w-full overflow-hidden" id={`project-img-container-${project.id}`}>
                  {/* Subtle hover zoom on image */}
                  <img
                    id={`project-img-${project.id}`}
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Seamless fade-out gradient overlay from photo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
                  
                  {/* Tech Tag */}
                  <span className="absolute top-4 left-4 bg-black/70 backdrop-blur-md border border-neutral-800 text-[10px] text-cyan-400 font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Info details */}
                <div className="p-6 flex flex-col justify-between flex-grow" id={`project-info-${project.id}`}>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-neutral-400 font-sans text-sm font-normal mb-6">
                      {project.subtitle}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-5 mt-auto">
                    {project.link !== '#contact' && (
                      <a
                        id={`project-link-${project.id}`}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center space-x-1 text-xs font-display font-bold uppercase tracking-widest text-cyan-400 hover:text-cyan-300 transition-colors duration-300 group/link"
                      >
                        <span>Live Web</span>
                        <ArrowUpRight size={13} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300" />
                      </a>
                    )}
                    
                    {project.defaultFigmaUrl && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedFigmaProject({
                            id: project.id,
                            title: project.title,
                            defaultFigmaUrl: project.defaultFigmaUrl
                          });
                        }}
                        className="inline-flex items-center space-x-1.5 text-xs font-display font-semibold uppercase tracking-widest text-neutral-300 hover:text-white transition-colors duration-300 group/figma cursor-pointer"
                      >
                        <span>Figma Design</span>
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 group-hover/figma:scale-125 transition-transform duration-300" />
                      </button>
                    )}
                  </div>
                </div>

              </ThreeDCard>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Figma Embed Dialog Modal */}
      {selectedFigmaProject && (
        <FigmaModal
          isOpen={!!selectedFigmaProject}
          onClose={() => setSelectedFigmaProject(null)}
          projectName={selectedFigmaProject.title}
          projectId={selectedFigmaProject.id}
          defaultFigmaUrl={selectedFigmaProject.defaultFigmaUrl}
        />
      )}
    </section>
  );
}
