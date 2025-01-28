"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const scale = useMotionValue(1);

  // Smoother spring config for natural movement
  const springConfig = { damping: 35, stiffness: 450 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  const scaleSpring = useSpring(scale, { damping: 25, stiffness: 300 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Handle hovering over clickable elements
    const handleElementHover = () => {
      setIsHovering(true);
      scale.set(1.5);
    };

    const handleElementLeave = () => {
      setIsHovering(false);
      scale.set(1);
    };

    // Add hover detection for interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input, select, textarea'
    );

    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", handleElementHover);
      element.addEventListener("mouseleave", handleElementLeave);
    });

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Add click animation
    const handleMouseDown = () => scale.set(0.9);
    const handleMouseUp = () => scale.set(isHovering ? 1.5 : 1);

    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);

      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleElementHover);
        element.removeEventListener("mouseleave", handleElementLeave);
      });
    };
  }, [cursorX, cursorY, scale, isHovering]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-50 hidden select-none md:block"
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="absolute flex items-center justify-center"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        {/* Main cursor dot */}
        <motion.div
          className="h-4 w-4 rounded-full bg-white mix-blend-difference"
          style={{ scale: scaleSpring }}
        />
        {/* Subtle outer ring */}
        <motion.div
          className="absolute h-8 w-8 rounded-full border border-white/30 mix-blend-difference"
          style={{ scale: scaleSpring }}
        />
      </motion.div>
    </motion.div>
  );
}
