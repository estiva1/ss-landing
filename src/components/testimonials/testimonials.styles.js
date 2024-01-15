import styled, { css } from "styled-components";
import { device } from "../../breakpoints.styles";
import DelayedScrollReveal from "../../utils/framer-animations/scroll-reveal/delayed-scroll-reveal/delayed-scroll-reveal.component";

export const TestimonialsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 130px;
  background: #fff;
  gap: 50px;
  cursor: none;
  z-index: 0;

  @media ${device.xl} {
    padding: 100px 80px;
  }
  @media ${device.xs} {
    padding: 60px 15px;
    gap: 40px;
  }
`;

export const MotionHeading = styled.h2`
  color: #000;
  text-align: center;
  font-family: Titillium Web;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  margin: 0;

  @media ${device.xs} {
    font-size: 1.5rem;
    line-height: 132%;
  }
`;

export const Paragraph = styled.p`
  color: #4e5969;
  text-align: center;
  font-family: Titillium Web;
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.375rem;
  margin: 0;
  margin-top: 8px;

  @media ${device.xs} {
    font-size: 1rem;
  }
`;

export const Columns = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-inline: -16px;
  //background-color: red;
  > *:nth-last-child(-n + 3) {
    margin-bottom: -40px;
  }

  @media ${device.xs} {
    > *:nth-last-child(-n + 3) {
      margin-bottom: 0;
    }

    > *:nth-last-child(-n + 1) {
      margin-bottom: -30px;
    }
  }
`;

export const ColumnContainer = styled(DelayedScrollReveal)`
  width: 33.3%;
  height: max-content;
  padding-inline: 16px;
  padding-bottom: 40px;
  //background-color: rebeccapurple;

  @media ${device.xs} {
    width: 100%;
    padding-bottom: 30px;
  }
`;

export const TestimonialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;

  @media ${device.xs} {
    gap: 8px;
  }
`;

export const MobileButtonBox = styled.div`
  @media ${device.xs} {
    align-self: stretch;
  }
`;

const applyBaseShapeStyles = () => {
  return css`
    position: absolute;
    border-radius: 50%;
    width: 500px;
    height: 500px;
    mix-blend-mode: multiply;
    filter: blur(40px);
    animation: scale-up-center 7s cubic-bezier(0.39, 0.575, 0.565, 1) infinite both;
    z-index: -5;
  `;
};

export const ShapeOne = styled.span`
  opacity: 90%;
  background-color: #6fd5f640;
  left: -100px;
  bottom: 50px;
  ${applyBaseShapeStyles}

  @media ${device.xs} {
    width: 300px;
    height: 300px;
  }

  @keyframes scale-up-center {
    0% {
      transform: translate(0px, 0px) scale(1);
    }
    33% {
      transform: translate(100px, -50px) scale(1.25);
    }
    66% {
      transform: translate(-20px, 200px) scale(0.9);
    }
    100% {
      transform: translate(0px, 0px) scale(1);
    }
  }
`;

export const ShapeTwo = styled.span`
  position: absolute;
  opacity: 100%;
  background-color: #f0e99654;
  left: 100px;
  bottom: 200px;
  animation-delay: 2s;
  ${applyBaseShapeStyles}

  @media ${device.xs} {
    width: 300px;
    height: 300px;
  }

  @keyframes scale-up-center {
    0% {
      transform: translate(0px, 0px) scale(1);
    }
    33% {
      transform: translate(300px, -80px) scale(1.15);
    }
    66% {
      transform: translate(-100px, 50px) scale(0.85);
    }
    100% {
      transform: translate(0px, 0px) scale(1);
    }
  }
`;

export const ShapeThree = styled.span`
  position: absolute;
  background-color: #1565d840;
  left: 250px;
  bottom: 0px;
  animation-delay: 4s;
  ${applyBaseShapeStyles}

  @media ${device.xs} {
    width: 300px;
    height: 300px;
  }

  @keyframes scale-up-center {
    0% {
      transform: translate(0px, 0px) scale(1);
    }
    33% {
      transform: translate(200px, -50px) scale(1.15);
    }
    66% {
      transform: translate(-20px, 20px) scale(0.85);
    }
    100% {
      transform: translate(0px, 0px) scale(1);
    }
  }
`;
