import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';

export default function App() {
  const [activeSection, setActiveSection] = useState('about');

  // Interactive 3D Background Mouse Tracking coordinates
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 100, mass: 1 };
  const bgOrb1X = useSpring(mouseX, springConfig);
  const bgOrb1Y = useSpring(mouseY, springConfig);
  
  // Inverse direction and slightly offset for secondary parallax layer
  const bgOrb2X = useSpring(useTransform(mouseX, (v) => -v * 1.2), springConfig);
  const bgOrb2Y = useSpring(useTransform(mouseY, (v) => -v * 1.2), springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Offset values relative to the screen center
      const x = (e.clientX - window.innerWidth / 2) / 8;
      const y = (e.clientY - window.innerHeight / 2) / 8;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const sections = ['about', 'projects', 'experiences', 'skills', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for header height and triggering early
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-[#030303] min-h-screen text-white relative font-sans selection:bg-cyan-500/20 selection:text-cyan-400 overflow-x-hidden" id="portfolio-app-root">
      
      {/* Dynamic 3D Interactive Background Orbs & Parallax Layers */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Ambient Orb 1 - Cyan, responds smoothly to mouse coordinates */}
        <motion.div
          style={{ x: bgOrb1X, y: bgOrb1Y }}
          className="absolute -top-[15%] -left-[10%] w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] rounded-full bg-cyan-950/15 blur-[130px] opacity-70"
        />
        {/* Ambient Orb 2 - Blue, shifts in inverse coordinate directions */}
        <motion.div
          style={{ x: bgOrb2X, y: bgOrb2Y }}
          className="absolute -bottom-[15%] -right-[10%] w-[70vw] h-[70vw] max-w-[700px] max-h-[700px] rounded-full bg-blue-950/20 blur-[150px] opacity-60"
        />
        {/* Geometric High-Tech Grid with 3D Depth Mask */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.004)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.004)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)] opacity-40 z-0" />
      </div>

      {/* Persistent Navigation Header */}
      <Header activeSection={activeSection} />

      {/* Sections Wrapper */}
      <main className="relative z-10" id="main-content">
        <Hero onViewProjects={handleScrollToProjects} />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
