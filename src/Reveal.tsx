import { motion } from 'framer-motion';
import { ReactNode } from 'react';

/* Cinematic scroll-triggered reveal wrapper */
export default function Reveal({ children, delay = 0, y = 44 }: { children: ReactNode; delay?: number; y?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ willChange: 'transform' }}
    >
      {children}
    </motion.div>
  );
}
