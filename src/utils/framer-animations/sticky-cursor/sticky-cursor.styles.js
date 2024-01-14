import styled from "styled-components";
import { motion } from "framer-motion";
import { device } from "../../../breakpoints.styles";

export const StyledMotionDiv = styled(motion.div)`
  position: fixed;
  width: 15px;
  height: 15px;
  background-color: #1565D8;
  border-radius: 50%;
  pointer-events: none;
  z-index: 11;

  @media ${device.xs} {
    display: none;
  }
`;
