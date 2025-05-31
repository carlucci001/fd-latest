import React from 'react';
import { motion } from 'framer-motion';

interface FadeInSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up'
}) => {
  const directions = {
    up: { y: 50 },
    down: { y: -50 },
    left: { x: 50 },
    right: { x: -50 }
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0,
        ...directions[direction]
      }}
      whileInView={{ 
        opacity: 1,
        x: 0,
        y: 0
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: delay * 0.1,
        ease: [0.43, 0.13, 0.23, 0.96]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
