import styled from "styled-components";
import { motion } from "framer-motion";
import { device } from "../../../breakpoints.styles";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 10000;
  pointer-events: none;
  overflow: hidden;

  @media (hover: none) {
    display: none;
  }

  @media ${device.xs} {
    display: none;
  }
`;

export const StyledMotionDiv = styled(motion.div)`
  position: absolute;
  transform: translate(-50%, -50%);
  border-radius: 100%;
  border: 2px solid ${({ $white }) => ($white ? "#fff" : "#1565d8")};
  width: 40px;
  height: 40px;
  opacity: 0.75;
  transform: ${({ $pointer }) => ($pointer ? "translate(-50%, -50%) scale(0.5)" : "")};
  transition: transform 600ms cubic-bezier(0.19, 1, 0.22, 1);
  transition: border 600ms cubic-bezier(0.19, 1, 0.22, 1);

  @media ${device.xs} {
    display: none;
  }
`;
