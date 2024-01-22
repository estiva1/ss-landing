import styled, { keyframes } from "styled-components";

const comeInOut = keyframes`
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
`;

export const Wrapper = styled.span`
  display: inline-block;
  position: relative;
`;

export const SparkleWrapper = styled.span`
  position: absolute;
  display: block;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${comeInOut} 1700ms forwards;
  }
`;

export const SparkleSvg = styled.svg`
  display: block;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${spin} 2000ms linear;
  }
`;

export const ChildWrapper = styled.strong`
  position: relative;
  font-weight: bold;
  z-index: 1;
`;
