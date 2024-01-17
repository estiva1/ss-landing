import React from "react";
import { motion } from "framer-motion";

const DelayedScrollReveal = ({ index, children, speed = 2, ...props }) => {
  return (
    <motion.div
      {...props}
      initial={{
        opacity: 0,
        scale: 0.5,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: {
          duration: 1,
          delay: (index * 0.25) / speed,
        },
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default DelayedScrollReveal;
