import { styled } from "styled-components";

export const RootContainer = styled.div`
  box-sizing: border-box;
  display: block;
  margin: 0 auto;
  max-width: 1440px;
  width: 100%;
  scroll-behavior: smooth;
`;

export const HeaderHolder = styled.div`
  position: fixed;
  top: 0px;
  left: 0;
  right: 0;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  backdrop-filter: blur(10px);
  z-index: 5;
`;
