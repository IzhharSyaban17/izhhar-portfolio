"use client";
import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

export function CountUp({ value, duration = 1500 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    if (start === end) {
      setCount(end);
      return;
    }

    const startTime = performance.now();

    const animateCount = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      
      setCount(Math.floor(easeProgress * end));

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animateCount);
  }, [value, duration, isInView]);

  return <span ref={ref}>{count}</span>;
}
