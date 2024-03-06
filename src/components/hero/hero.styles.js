import styled, { css } from "styled-components";
import { motion } from "framer-motion";

import { Stack } from "@mui/material";
import { device } from "../../breakpoints.styles";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 90px;
  overflow-x: clip;

  @media ${device.xs} {
    margin-top: 62px;
  }
`;

export const HeroContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  //gap: 100px;
  padding: 40px 130px 100px 130px;
  isolation: isolate;

  @media ${device.xl} {
    padding: 30px 80px 60px 80px;
  }
  @media ${device.lg} {
    padding: 20px 60px 40px 60px;
  }
  @media ${device.smd} {
    padding: 20px 50px 40px 50px;
    flex-direction: column;
    row-gap: 40px;
  }
  @media ${device.sm} {
    padding: 20px 30px 40px 30px;
  }
  @media ${device.xs} {
    padding: 60px 15px;
  }
`;

export const HeroContent = styled.div`
  max-width: 680px;
  padding-top: 60px;

  @media ${device.xl} {
    max-width: 620px;
  }
  @media ${device.lg} {
    max-width: 440px;
    padding-top: 30px;
  }
  @media ${device.md} {
    max-width: 410px;
    padding-top: 0;
  }
  /* @media ${device.smd} {
    max-width: 450px;
  } */
  @media ${device.smd} {
    max-width: 100%;
  }
`;

export const Headline = styled.div`
  margin-bottom: 32px;

  @media ${device.smd} {
    margin-bottom: 24px;
  }
  @media ${device.xs} {
    margin-bottom: 16px;
  }
`;

export const SubHeadline = styled.div`
  margin-bottom: 56px;

  @media ${device.smd} {
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

  @media ${device.lg} {
    font-size: 2.5rem;
    line-height: 2.8rem;
  }
  @media ${device.xs} {
    font-size: 1.875rem;
    line-height: 2.175rem;
    ${({ $highlighted }) => $highlighted && `background-size: 100% 20%`}
  }
`;

export const Supporting = styled.span`
  color: #4e5969;
  font-family: Titillium Web;
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: 170%;
  margin: 0;
  transition: all 0.25s ease-in;

  @media ${device.lg} {
    font-size: 1.4rem;
    line-height: 160%;
  }
  @media ${device.xs} {
    font-size: 1.375rem;
    line-height: 154%;
  }
`;

export const SupportingHighlighted = styled.strong`
  position: relative;
  color: #000;
  font-family: Titillium Web;
  font-size: 2.375rem;
  font-style: normal;
  font-weight: 700;
  line-height: 170%;

  &::after {
    content: "";
    position: absolute;
    top: 5%;
    left: 0;
    width: 100%;
    height: 90%;
    background: #f0e996;
    transform: skew(-0.03turn);
    z-index: -1;
  }

  @media ${device.lg} {
    font-size: 1.875rem;
    line-height: 160%;
  }

  @media ${device.xs} {
    font-size: 1.625rem;
    line-height: 154%;
    background-image: linear-gradient(#f0e996 0%, #f0e996 100%);
    background-repeat: no-repeat;
    background-size: 100% 90%;

    &::after {
      all: unset;
    }
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

  @media ${device.lg} {
    width: 350px;
  }
  @media ${device.md} {
    width: 228px;
  }
  @media ${device.smd} {
    width: 450px;
  }
  @media ${device.sm} {
    width: 350px;
  }

  .big-gear {
    ${applyBaseStyleForSvgPath};
    animation: rotateBigGear 7s linear infinite;
  }
  @keyframes rotateBigGear {
    to {
      transform: rotate(360deg) translateZ(0);
    }
  }

  .small-gear {
    ${applyBaseStyleForSvgPath};
    animation: rotateSmallGear 5s linear infinite;
  }
  @keyframes rotateSmallGear {
    to {
      transform: rotate(-360deg) translateZ(0);
    }
  }

  .particles {
    ${applyBaseStyleForSvgPath};
    animation: moveParticles 3s ease-in-out infinite;
  }
  @keyframes moveParticles {
    0% {
      transform: rotate(0deg) translateZ(0);
    }
    50% {
      transform: rotate(5deg) scale(1.03) translateZ(0);
    }
    100% {
      transform: rotate(0deg) translateZ(0);
    }
  }

  .sparkle {
    ${applyBaseStyleForSvgPath};
    animation: pulsSparkle 2.5s linear infinite;
  }
  @keyframes pulsSparkle {
    0% {
      transform: scale(0.3) translateZ(0);
    }
    50% {
      transform: scale(2) translateZ(0);
    }
    100% {
      transform: scale(0.3) translateZ(0);
    }
  }

  .dollar-contour-inner {
    ${applyBaseStyleForSvgPath};
    animation: dollarContourInner 2.5s ease-in-out infinite;
  }
  @keyframes dollarContourInner {
    to {
      transform: rotate(360deg) translateZ(0);
    }
  }

  .robot-face-shield,
  .robot-eyes {
    ${applyBaseStyleForSvgPath};
    animation: robotFaceShieldMove 5s ease infinite;
  }
  @keyframes robotFaceShieldMove {
    0% {
      transform: translateX(0) translateZ(0);
    }
    33% {
      transform: translateX(-20px) translateZ(0);
    }
    66% {
      transform: translateX(3px) translateZ(0);
    }
    100% {
      transform: translateX(0px) translateZ(0);
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
      transform: translateY(-2px) translateZ(0);
    }
    50% {
      transform: translateY(10px) translateZ(0);
    }
    100% {
      transform: translateY(-2px) translateZ(0);
    }
  }

  @media ${device.xs} {
    width: 100%;
  }
`;
