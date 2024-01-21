import { styled } from "styled-components";

export const RootContainer = styled.main`
  box-sizing: border-box;
  display: block;
  width: 100%;
  scroll-behavior: smooth;
`;

export const HeaderHolder = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0px;
  left: 0;
  right: 0;
  width: 100%;
  margin: 0 auto;
  backdrop-filter: blur(10px);
  z-index: 5;
`;
