import { styled } from "styled-components";

import { Box, Button, Chip } from "@mui/material";

export const SectionWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledBlueButton = styled(Button)`
  display: flex;
  width: max-content !important;
  height: 48px !important;
  padding: 14px 40px !important;
  border-radius: 40px !important;
  gap: 10px;
  color: ${(props) => props.textColor || "#fff"} !important;
  background: ${(props) => props.backgroundColor || "#1565d8"} !important;

  font-family: "Titillium Web", sans-serif !important;
  font-size: 1rem !important;
  font-style: normal;
  font-weight: 600 !important;
  line-height: 1.25rem !important;
  text-transform: initial !important;
`;

export const HeroText = styled.h2`
  color: #000;
  font-size: 3.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 3.8675rem;
  white-space: pre-line;
  margin: 0;
  ${(props) =>
    props.highlighted &&
    `
      width: max-content;
      background-image: linear-gradient(315deg, #045de9 0%, #09c6f9 74%);
      background-repeat: no-repeat;
      background-size: 100% 0.8rem;
      background-position: 0 88%;
      transition: all 0.25s ease-in;

      &:hover {
        color: #fff;
        -webkit-text-stroke: 1px black;
        background-size: 100% 88%;
        transition: all 0.25s ease-in;
      }
  `}
`;

export const HeroSpanText = styled.p`
  color: #4e5969;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem;
`;

export const DescriptionLarge = styled.p`
  color: #4e5969;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.375rem;
  margin: 0;
`;

export const DescriptionStandart = styled.p`
  color: #4e5969;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
  margin: 0;
`;

export const DescriptionMedium = styled.p`
  color: #4e5969;
  margin: 8px 0px;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.375rem;
`;

export const DescriptionSmall = styled.p`
  color: #4e5969;
  font-size: 1rem;
  font-style: normal;
  font-weight: 300;
  line-height: 1.5rem;
  margin: 0;
  white-space: pre-line;
`;

export const DescriptionExtraSmall = styled.p`
  color: #4e5969;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem;
`;

export const StyledTextField = styled.input`
  width: 280px;
  height: 48px;
  padding: 12px 25px;
  align-items: center;
  gap: 10px;
  border-radius: 42px;
  box-shadow: inset 0px 0px 0px 1px #1565d8;
  border: none;
  transition: box-shadow 0.3s ease-in-out;
  color: #1565d8;
  font-family: "Titillium Web", sans-serif !important;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;

  &:focus {
    box-shadow: inset 0px 0px 0px 2px #1565d8;
    transition: box-shadow 0.3s ease-in-out;
    outline: none !important;
  }
`;

//--------------------------------------------------

export const ProfitValue = styled.h2`
  color: #f0e996;
  font-size: 3.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: 4.14375rem;
  margin: 0;
`;

export const SectionHeaderText = styled.h3`
  color: #000;
  text-align: center;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.4rem;
  margin: 0;
`;

export const SectionHeaderTextHighlighted = styled.span`
  color: #000;
  text-align: center;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.4rem;
  width: max-content;
  background-image: linear-gradient(315deg, #045de9 0%, #09c6f9 74%);
  background-repeat: no-repeat;
  background-size: 100% 0.4rem;
  background-position: 0 80%;
  transition: all 0.25s ease-in;

  &:hover {
    color: #fff;
    -webkit-text-stroke: 1px black;
    background-size: 100% 80%;
    transition: all 0.25s ease-in;
  }
`;

export const SubtitleText = styled.h4`
  color: #000;
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.1rem;
  margin: 0;
`;

export const SubtitleTextMedium = styled.h4`
  color: #000;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.95rem;
  margin: 0;
`;

export const SubtitleTextSmall = styled.h4`
  color: #000;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.8rem;
  margin: 0px 0px 4px 0px;
`;

export const ShapeOne = styled(Box)`
  position: absolute;
  opacity: 90%;
  background-color: #6fd5f640;
  border-radius: 50%;
  left: -100px;
  bottom: -100px;
  min-width: 500px;
  height: 500px;
  mix-blend-mode: multiply;
  filter: blur(40px);
  animation: scale-up-center 7s cubic-bezier(0.39, 0.575, 0.565, 1) infinite both;
  z-index: -5;

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

export const ShapeTwo = styled(Box)`
  position: absolute;
  opacity: 100%;
  background-color: #f0e99654;
  border-radius: 50%;
  left: 100px;
  bottom: 200px;
  min-width: 500px;
  height: 500px;
  mix-blend-mode: multiply;
  filter: blur(40px);
  animation: scale-up-center 7s cubic-bezier(0.39, 0.575, 0.565, 1) infinite both;
  animation-delay: 2s;
  z-index: -5;

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

export const ShapeThree = styled(Box)`
  position: absolute;
  opacity: 50%;
  background-color: #1565d840;
  border-radius: 50%;
  left: 300px;
  bottom: 0px;
  min-width: 500px;
  height: 500px;
  mix-blend-mode: multiply;
  filter: blur(40px);
  animation: scale-up-center 7s cubic-bezier(0.39, 0.575, 0.565, 1) infinite both;
  animation-delay: 4s;
  z-index: -5;

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

export const BlueTile = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border-radius: 20px;
  padding: 30px;
  background: #1565d8;
  box-shadow: 4px 4px 25px 0px rgba(111, 213, 246, 0.25);
`;

export const MutableContentBox = styled(Box)`
  display: ${(props) => (props.isActive ? "flex" : "none")};
`;

export const StyledTab = styled(Chip)`
  box-shadow: ${(props) => (props.isActive ? "inset 0px 0px 0px 1px #1565D8" : "none")} !important;
  border: none !important;
  border-radius: 30px !important;
  color: ${(props) => (props.isActive ? "#1565d8" : "#4e5969")} !important;
  background: ${(props) => (props.isActive ? "#E8F0FC" : "none")} !important;
  font-family: Titillium Web !important;
  font-size: 1.125rem !important;
  font-weight: 600 !important;
  line-height: 1.35rem !important;
  padding: 25px 80px !important;

  &:hover {
    color: #1565d8 !important;
    background: ${(props) => (!props.isActive ? "none" : "#E8F0FC")} !important;
  }
`;

export const ReasonContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 280px;
  max-width: 280px;
  align-items: center;
`;

export const ImageRoundContainer = styled(Box)`
  display: flex;
  width: 100px;
  height: 100px;
  margin-bottom: 24px;
  padding: 30px;
  border-radius: 50%;
  background: #fff;
  align-items: center;
  justify-content: center;
`;

export const BenefitContainer = styled(Box)`
  position: relative;
  width: 370px;
  height: 400px;
  margin-bottom: 20px;
  overflow: hidden;
  background: #fff;
  border-radius: 32px;
  border: 2px solid #00a3ff;
  box-shadow: 3px 3px 20px 0px rgba(111, 213, 246, 0.25);
`;

export const BenefitBoldText = styled.h2`
  color: #1565d8;
  background: #fff;
  font-family: Titillium Web;
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 3.285rem;
  letter-spacing: 0.02525rem;
  text-transform: uppercase;
  margin: 0;
`;

export const ThinTextBox = styled(Box)`
  background: #fff;
  width: max-content;
  border-radius: 32px;
  border: 2px solid #1565d8;
  padding: 4px 20px;
`;

export const BenefitThinText = styled.h2`
  color: #1565d8;
  font-family: Titillium Web;
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 3.285rem;
  letter-spacing: 0.02525rem;
  text-transform: uppercase;
  margin: 0;
`;
