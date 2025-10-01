'use client';
import { motion } from 'framer-motion';

export default function AnimatedButton({ className = '', children, ...props }) {
  return (
    <motion.button
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      className={`btn ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
