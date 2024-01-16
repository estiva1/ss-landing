import React from "react";
import { motion } from "framer-motion";

const ScrollReveal = ({ index, children, ...props }) => {
  return (
    <motion.div
      {...props}
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? 100 : -100,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 1.5,
          ease: [0.33, 1, 0.68, 1],
        },
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
