import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const DelayedScrollReveal = ({ index, children, speed = 2, ...props }) => {
  const animation = {
    initial: { opacity: 0, scale: 0.5 },
    enter: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        delay: (index * 0.25) / speed,
      },
    }),
  };

  const { ref, inView, entry } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });

  return (
    <motion.div
      {...props}
      ref={ref}
      variants={animation}
      initial="initial"
      animate={inView ? "enter" : ""}
    >
      {children}
    </motion.div>
  );
};

export default DelayedScrollReveal;
