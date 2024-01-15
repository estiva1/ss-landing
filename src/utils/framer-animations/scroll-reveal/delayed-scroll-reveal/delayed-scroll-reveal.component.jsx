import React from "react";
import { motion } from "framer-motion";

const DelayedScrollReveal = ({ index, children, speed = 2, ...props }) => {
  return (
    <motion.div
      {...props}
      initial={{
        opacity: 0,
        scale: 0,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.5,
          delay: index === 0 ? 0 : index / speed,
        },
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default DelayedScrollReveal;
