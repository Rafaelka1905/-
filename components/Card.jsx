'use client';
import { motion } from 'framer-motion';

export default function Card({ className='', children, ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      whileHover={{ y: -2, boxShadow: '0 14px 38px rgba(0,0,0,.07)' }}
      className={`card ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
