import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TextMaskAnimation = ({ phrases, delay = 0.075 }) => {
  const animation = {
    initial: { y: "100%" },
    enter: (i) => ({ y: "0", transition: { duration: 1.25, ease: [0.33, 1, 0.68, 1], delay: delay } }),
  };

  const { ref, inView, entry } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });

  return (
    <div ref={ref}>
      {phrases.map((phrase, index) => {
        return (
          <div key={index} style={{ overflow: "hidden" }}>
            <motion.p
              style={{ margin: 0, marginBottom: "4px" }}
              custom={index}
              variants={animation}
              initial="initial"
              animate={inView ? "enter" : ""}
            >
              {phrase}
            </motion.p>
          </div>
        );
      })}
    </div>
  );
};

export default TextMaskAnimation;
