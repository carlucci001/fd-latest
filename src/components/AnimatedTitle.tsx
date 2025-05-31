import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedTitleProps {
  children: string;
  className?: string;
  delay?: number;
}

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ children, className = '', delay = 0 }) => {
  const words = children.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.08,
        delayChildren: delay * 0.1,
        ease: "easeOut"
      },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 80,
        duration: 0.8,
        ease: "easeOut"
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 80,
        duration: 0.8,
        ease: "easeOut"
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className={`flex flex-wrap justify-center items-center w-full ${className}`}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          key={index}
          className="mx-2 inline-block"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedTitle;
