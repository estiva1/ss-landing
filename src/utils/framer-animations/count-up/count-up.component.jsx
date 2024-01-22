import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const FramerCounter = ({ startVal = 0, endVal = 0, duration = 1 }) => {
  const [ref, inView] = useInView({ triggerOnce: true });

  const from = useMotionValue(startVal);
  const to = useTransform(from, Math.round);

  useEffect(() => {
    if (inView) {
      const animation = animate(from, Math.abs(endVal), { duration });

      return animation.stop;
    }
  }, [inView]);

  return <motion.span ref={ref}>{to}</motion.span>;
};

export default FramerCounter;
