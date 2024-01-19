import styled, { css } from "styled-components";
import { motion } from "framer-motion";

import { Stack } from "@mui/material";
import { device } from "../../breakpoints.styles";

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  //gap: 100px;
  padding: 40px 130px 100px 130px;
  overflow-x: clip;

  @media ${device.xl} {
    padding: 30px 80px 60px 80px;
  }
  @media ${device.xs} {
    padding: 60px 15px;
    flex-direction: column;
    row-gap: 40px;
  }
`;

export const HeroContent = styled.div`
  width: 680px;
  padding-top: 60px;

  @media ${device.xl} {
    width: 620px;
  }
  @media ${device.xs} {
    width: 100%;
    padding-top: 0;
  }
`;

export const Headline = styled.div`
  margin-bottom: 32px;

  @media ${device.xs} {
    margin-bottom: 16px;
  }
`;

export const SubHeadline = styled.div`
  margin-bottom: 56px;

  @media ${device.xs} {
    margin-bottom: 50px;
  }
`;

export const HeroText = styled(motion.span)`
  color: #000;
  font-size: 3.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 3.8675rem;
  //white-space: pre-wrap;
  margin: 0;
  transition: all 0.25s ease-in;
  ${({ $highlighted }) =>
    $highlighted &&
    `
      display: block;
      width: max-content;
      background-image: linear-gradient(315deg, #045de9 0%, #09c6f9 74%);
      background-repeat: no-repeat;
      background-size: 100% 20%;
      background-position: 0 90%;
      transition: all 0.25s ease-in;

      &:hover {
        color: #fff;
        -webkit-text-stroke: 1px black;
        background-size: 100% 90%;
        transition: all 0.25s ease-in;
      }
  `}

  @media ${device.xs} {
    font-size: 1.875rem;
    line-height: 2.175rem;
    ${({ $highlighted }) => $highlighted && `background-size: 100% 20%`}
  }
`;

export const HeroParagraph = styled.p`
  color: #4e5969;
  font-family: Titillium Web;
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: 170%;
  margin: 0;
  transition: all 0.25s ease-in;

  @media ${device.xs} {
    font-size: 1.375rem;
    line-height: 154%;
  }
`;

export const HeroParagraphHighlighted = styled.strong`
  color: #000;
  font-family: Titillium Web;
  font-size: 2.375rem;
  font-style: normal;
  font-weight: 700;
  line-height: 170%;
  background-image: linear-gradient(#f0e996 0%, #f0e996 100%);
  background-repeat: no-repeat;
  background-size: 100% 90%;

  @media ${device.xs} {
    font-size: 1.625rem;
    line-height: 154%;
  }
`;

export const FormBox = styled.div`
  @media ${device.xs} {
    text-align: center;
  }
`;

export const ResponsiveStack = styled(Stack)`
  @media ${device.xs} {
    flex-direction: column !important;
    column-gap: 14px;
  }
`;
export const InfoTopBox = styled.div`
  margin-left: 84px;
  margin-bottom: 14px;

  @media ${device.xs} {
    margin-left: 0;
  }
`;
export const InfoTop = styled.span`
  display: inline-block;
  color: #000;
  font-family: Titillium Web;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5rem;
`;

export const InfoBottomGroup = styled(Stack)`
  margin-left: 100px;
  margin-top: 14px;

  @media ${device.xs} {
    margin-left: 0;
    justify-content: center;
  }
`;

export const InfoBottom = styled.span`
  display: inline-block;
  color: #4e5969;
  font-family: Titillium Web;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

export const LockLogo = styled.span`
  min-width: 10px;
  min-height: 10px;
  width: 10px;
  height: 10px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' fill='none'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='%234E5969' d='M7.9193 3.3333v-.4166a2.9167 2.9167 0 1 0-5.8334 0v.4166H.836V8.75A1.25 1.25 0 0 0 2.086 10h5.8334a1.25 1.25 0 0 0 1.25-1.25V3.3333h-1.25ZM5.4193 7.5h-.8334V5.8333h.8334V7.5Zm1.6666-4.1667H2.9193v-.4166a2.0833 2.0833 0 1 1 4.1666 0v.4166Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='%23fff' d='M0 0h10v10H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
`;

const applyBaseStyleForSvgPath = () => {
  return css`
    transform-origin: 50% 50%;
    transform-box: fill-box;
  `;
};

export const StyledHeroSvg = styled.svg`
  width: 400px;

  .big-gear {
    ${applyBaseStyleForSvgPath};
    animation: rotateBigGear 7s linear infinite;
  }
  @keyframes rotateBigGear {
    to {
      transform: rotate(360deg);
    }
  }

  .small-gear {
    ${applyBaseStyleForSvgPath};
    animation: rotateSmallGear 5s linear infinite;
  }
  @keyframes rotateSmallGear {
    to {
      transform: rotate(-360deg);
    }
  }

  .particles {
    ${applyBaseStyleForSvgPath};
    animation: moveParticles 3s ease-in-out infinite;
  }
  @keyframes moveParticles {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(5deg) scale(1.03);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  .sparkle {
    ${applyBaseStyleForSvgPath};
    animation: pulsSparkle 2.5s linear infinite;
  }
  @keyframes pulsSparkle {
    0% {
      transform: scale(0.3);
    }
    50% {
      transform: scale(2);
    }
    100% {
      transform: scale(0.3);
    }
  }

  .dollar-contour-inner {
    ${applyBaseStyleForSvgPath};
    animation: dollarContourInner 2.5s ease-in-out infinite;
  }
  @keyframes dollarContourInner {
    to {
      transform: rotate(360deg);
    }
  }

  .robot-face-shield,
  .robot-eyes {
    ${applyBaseStyleForSvgPath};
    animation: robotFaceShieldMove 5s ease infinite;
  }
  @keyframes robotFaceShieldMove {
    0% {
      transform: translateX(0);
    }
    33% {
      transform: translateX(-20px);
    }
    66% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0px);
    }
  }

  .robot-face-shield {
    animation-delay: 150ms;
  }

  .robot-body {
    ${applyBaseStyleForSvgPath};
    animation: robotBodyMove 5s ease infinite;
  }
  @keyframes robotBodyMove {
    0% {
      transform: translateY(-2px);
    }
    50% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(-2px);
    }
  }

  @media ${device.xs} {
    width: 100%;
  }
`;
