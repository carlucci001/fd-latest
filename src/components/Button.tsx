import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ButtonProps {
  to?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  to,
  onClick,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-gradient-to-r from-primary to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 focus:ring-primary-500",
    secondary: "bg-gradient-to-r from-secondary to-secondary-600 text-white hover:from-secondary-600 hover:to-secondary-700 focus:ring-secondary-500",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary-500"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const buttonStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const buttonMotion = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    transition: { type: "spring", stiffness: 400, damping: 17 }
  };

  // Always link to contact page for secondary variant buttons
  const linkTo = variant === 'secondary' ? '/contact' : to;

  if (linkTo) {
    return (
      <motion.div {...buttonMotion}>
        <Link to={linkTo} className={buttonStyles}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={buttonStyles}
      {...buttonMotion}
    >
      {children}
    </motion.button>
  );
};

export default Button;
