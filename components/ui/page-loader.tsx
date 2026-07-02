"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Wait for the window load event or a safety timeout of 1.2s to showcase loader beautifully
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 800);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.6, ease: "easeInOut" }
          }}
          className="fixed inset-0 z-[99999] bg-dark flex flex-col items-center justify-center pointer-events-auto"
        >
          <div className="relative flex flex-col items-center">
            {/* Pulsing ring outer */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.15, 0.4, 0.15],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute w-24 h-24 rounded-full border border-gold"
            />
            {/* Brand Logo text with gradient */}
            <motion.h1
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-heading font-bold tracking-tighter text-white"
            >
              Zar<span className="text-gold">.</span>
            </motion.h1>
            
            {/* Animated gold line below logo */}
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="h-[2px] bg-gradient-to-r from-gold to-premium mt-3 rounded-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
