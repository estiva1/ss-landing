import { motion } from "framer-motion";
import styled from "styled-components";

export const MotionProgressBar = styled(motion.div)`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: #0057d3;
  transform-origin: 0%;
  backdrop-filter: blur(20px);
  z-index: 999;
`;
