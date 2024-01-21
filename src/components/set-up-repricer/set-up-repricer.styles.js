import styled, { css } from "styled-components";
import { device } from "../../breakpoints.styles";
import FramerMagnetic from "../../utils/framer-animations/framer-magnetic/framer-magnetic.component";

export const Wrapper = styled.section`
  position: relative;
  background: ${({ $invertedColors }) => ($invertedColors ? "#0B2447" : "#fff")};
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden; // for floating shapes
  z-index: 0; // to make Header's backdrop-filter working properly
`;

export const SetUpRepricerContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 130px;
  gap: 50px;

  @media ${device.xl} {
    padding: 100px 80px;
  }
  @media ${device.xs} {
    padding: 60px 15px;
    gap: 40px;
  }
`;

export const Headline = styled.div`
  //display: flex;
  align-items: baseline;
  gap: 7px;

  @media ${device.xs} {
    gap: 5px;
  }
`;

export const Heading = styled.h2`
  color: ${({ $invertColors }) => ($invertColors ? "#fff" : "#000")};
  text-align: center;
  font-family: Titillium Web;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  margin: 0;

  @media ${device.xs} {
    font-size: 1.5rem;
    //line-height: 132%;
  }
`;

export const HeadingHighlighted = styled(Heading)`
  color: #1565d8;
  font-size: 2.5rem;

  @media ${device.xs} {
    font-size: 1.5rem;
    //line-height: 132%;
  }
`;
export const Paragraph = styled.span`
  color: ${({ $invertColors }) => ($invertColors ? "#fff" : "#4e5969")};
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

export const DesktopCarousel = styled.div`
  align-self: stretch;

  @media ${device.xs} {
    display: none;
  }
`;

export const MobileCarousel = styled.div`
  align-self: stretch;
  display: none;

  @media ${device.xs} {
    display: block;
  }
`;

export const MobileImageBoxForCarousel = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 30px;
`;

export const MobileButtonBox = styled(FramerMagnetic)`
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
    //animation: scale-up-center 7s cubic-bezier(0.39, 0.575, 0.565, 1) infinite both;
    z-index: -5;
  `;
};

export const ShapeOne = styled.span`
  opacity: 90%;
  background-color: #6fd5f640;
  right: -100px;
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
  right: 100px;
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
  right: 250px;
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
