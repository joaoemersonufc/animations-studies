"use client";

import { motion, useSpring } from "framer-motion";
import './styles.css';

const SPRING = {
  mass: 0.1,
  damping: 16,
  stiffness: 71,
};

export default function MotionValueBasics() {
  const x = useSpring(0, SPRING);
  const y = useSpring(0, SPRING);
  const opacity = useSpring(0);

  return (
    <div className="w-full h-[400px]">
      <div
        onPointerMove={(e) => {
          const bounds = e.currentTarget.getBoundingClientRect();
          x.set(e.clientX - bounds.left - 24);
          y.set(e.clientY - bounds.top - 24);
        }}
        onPointerEnter={() => opacity.set(1)}
        onPointerLeave={() => opacity.set(0)}
        className="wrapper"
      >
        <motion.div style={{ x, y, opacity }} className="element" />
      </div>
    </div>
  );
}
