import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

interface ThreeDCardProps {
  children: React.ReactNode;
  className?: string;
  tiltActive?: boolean;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export default function ThreeDCard({ children, className = "", tiltActive = true, onClick }: ThreeDCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  
  // High-performance spring animation configuration
  const springConfig = { damping: 25, stiffness: 220, mass: 0.6 };
  
  // Transform coordinates into degrees of rotation (-12deg to 12deg)
  const rotateX = useSpring(useTransform(y, [0, 1], [12, -12]), springConfig);
  const rotateY = useSpring(useTransform(x, [0, 1], [-12, 12]), springConfig);
  
  // Transform coordinates for subtle translation of inner contents (depth effect)
  const childTranslateX = useSpring(useTransform(x, [0, 1], [-10, 10]), springConfig);
  const childTranslateY = useSpring(useTransform(y, [0, 1], [-10, 10]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tiltActive || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate normalized relative position (0 to 1)
    const relativeX = (e.clientX - rect.left) / width;
    const relativeY = (e.clientY - rect.top) / height;
    
    x.set(relativeX);
    y.set(relativeY);
  };
  
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0.5);
    y.set(0.5);
  };
  
  return (
    <div className="w-full h-full" style={{ perspective: "1000px" }}>
      <motion.div
        id="3d-card-container"
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        style={{
          rotateX: tiltActive ? rotateX : 0,
          rotateY: tiltActive ? rotateY : 0,
          transformStyle: "preserve-3d",
        }}
        className={`w-full h-full transition-shadow duration-300 ${onClick ? 'cursor-pointer' : ''} ${
          isHovered ? 'shadow-[0_20px_50px_rgba(8,112,184,0.15)] border-neutral-700' : 'border-neutral-800'
        } ${className}`}
      >
        <motion.div
          style={{
            x: tiltActive ? childTranslateX : 0,
            y: tiltActive ? childTranslateY : 0,
            transformStyle: "preserve-3d",
          }}
          className="w-full h-full"
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}
