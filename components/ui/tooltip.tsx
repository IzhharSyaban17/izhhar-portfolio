"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Tooltip({ text, children }: { text: string; children: React.ReactNode }) {
  const [visible, setVisible] = useState(false);

  return (
    <div 
      className="relative inline-flex items-center justify-center"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      {children}
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute bottom-full mb-2.5 bg-dark/95 border border-gold/20 text-gold text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md shadow-[0_4px_12px_rgba(0,0,0,0.5)] pointer-events-none whitespace-nowrap z-50"
          >
            {text}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-x-4 border-x-transparent border-t-4 border-t-dark" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
