import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TextTypingAnimation = ({ text }) => {
  const animation = {
    initial: { y: "100%" },
    enter: (i) => ({ y: "0", transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1] } }),
  };

  const { ref, inView, entry } = useInView({
    threshold: 0.9,
    triggerOnce: true,
  });

  const words = text.split(" ");
  return (
    <div ref={ref}>
      {words.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          variants={animation}
          animate={inView ? { opacity: 1 } : ""}
          transition={{
            duration: 0.75,
            delay: i / 5,
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))}
    </div>
  );
};

export default TextTypingAnimation;
