import styled, { css } from "styled-components";
import { device } from "../../breakpoints.styles";

export const Wrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  z-index: 0;
`;

export const MetricsContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

export const Heading = styled.h2`
  color: #000;
  text-align: center;
  font-family: Titillium Web;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  margin: 0;
  transition: all 0.25s ease-in;

  ${({ $highlighted }) =>
    $highlighted &&
    `
      display: inline-flex;
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
    font-size: 1.5rem;
    line-height: 132%;
  }
`;

export const Columns = styled.div`
  display: flex;
  flex-flow: row wrap;

  > * {
    &:not(:last-child) {
      margin-bottom: 50px;

      @media ${device.xs} {
        margin-bottom: 32px;
      }
    }
  }
`;

export const ColumnContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;

  &:last-child {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  @media ${device.xs} {
    width: 100%;
  }
`;

export const ItemBox = styled.div`
  display: flex;
  width: 480px;
  flex-direction: column;
  gap: 24px;

  @media ${device.xs} {
    width: 100%;
    gap: 12px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;

  @media ${device.xs} {
    gap: 8px;
  }
`;

export const ItemLabel = styled.span`
  color: #000;
  font-family: Titillium Web;
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
`;

export const ItemStatement = styled.span`
  color: #000;
  align-self: stretch;
  font-family: Titillium Web;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;

  @media ${device.xs} {
    font-size: 1.25rem;
    line-height: 156%;
  }
`;

export const ItemSummary = styled.span`
  color: #4e5969;
  align-self: stretch;
  font-family: Titillium Web;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;

  @media ${device.xs} {
    font-size: 1rem;
    line-height: 140%;
  }
`;

const applyIconStyles = () => {
  return css`
    min-width: 40px;
    min-height: 40px;
    width: 40px;
    height: 40px;
    background-size: cover;
    background-repeat: no-repeat;
  `;
};
export const SalesIcon = styled.span`
  ${applyIconStyles};
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' fill='none'%3e%3cpath fill='%231565D8' d='M3 20a17 17 0 1 1 34 0 17 17 0 0 1-34 0ZM20 0C8.954 0 0 8.954 0 20s8.954 20 20 20 20-8.954 20-20S31.046 0 20 0Zm-.014 9.296A1.5 1.5 0 0 0 17 9.5v12l.014.204A1.5 1.5 0 0 0 18.5 23h8l.204-.014A1.5 1.5 0 0 0 26.5 20H20V9.5l-.014-.204Z'/%3e%3c/svg%3e");
`;
export const MarginIcon = styled.span`
  ${applyIconStyles};
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' fill='none'%3e%3cpath fill='%231565D8' d='M20 40a9.15 9.15 0 0 1-7.01-3.27 8.77 8.77 0 0 1-7.13-2.59 9.16 9.16 0 0 1-2.65-7.27A8.78 8.78 0 0 1 0 20a9.14 9.14 0 0 1 3.27-7.01 8.78 8.78 0 0 1 2.59-7.13 9.12 9.12 0 0 1 7.27-2.65A8.79 8.79 0 0 1 20 0a9.15 9.15 0 0 1 7.01 3.27 8.78 8.78 0 0 1 7.13 2.59 9.16 9.16 0 0 1 2.65 7.27A8.78 8.78 0 0 1 40 20a9.14 9.14 0 0 1-3.27 7.01 8.78 8.78 0 0 1-2.59 7.13 9.17 9.17 0 0 1-7.27 2.65A8.79 8.79 0 0 1 20 40Zm-6.88-6.54c.94 0 1.8.4 2.42 1.13a5.83 5.83 0 0 0 8.93 0c.67-.8 1.64-1.2 2.69-1.12a5.83 5.83 0 0 0 6.31-6.31 3.13 3.13 0 0 1 1.12-2.7 5.83 5.83 0 0 0 0-8.93 3.13 3.13 0 0 1-1.12-2.69 5.82 5.82 0 0 0-6.31-6.31 3.12 3.12 0 0 1-2.7-1.12 5.83 5.83 0 0 0-8.93 0c-.67.8-1.65 1.2-2.69 1.12a5.8 5.8 0 0 0-6.31 6.31 3.13 3.13 0 0 1-1.12 2.7 5.83 5.83 0 0 0 0 8.92c.8.68 1.2 1.66 1.12 2.7a5.82 5.82 0 0 0 6.31 6.31l.28-.01Zm8.22-8.23 7.9-7.62a1.67 1.67 0 0 0-2.32-2.4L19 22.85c-.65.65-1.7.65-2.4-.05l-3.8-3.52a1.67 1.67 0 0 0-2.27 2.44l3.76 3.48a5 5 0 0 0 7.05.03Z'/%3e%3c/svg%3e");
`;
export const BuyBoxIcon = styled.span`
  ${applyIconStyles};
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' fill='none'%3e%3cpath fill='%231565D8' d='M6.82 9.28v17.84c0 9.71 7.7 17.58 17.18 17.58 9.49 0 17.18-7.87 17.18-17.58V9.29L23.9 3.47 6.82 9.27ZM23.9 0l20.5 6.9v20.22C44.4 38.65 35.27 48 24 48 12.74 48 3.6 38.65 3.6 27.12V6.9L23.9 0Zm10.6 15.56a1.58 1.58 0 0 0-2.27.14L21.87 27.63l-6.7-7.4a1.58 1.58 0 0 0-2.27-.1 1.67 1.67 0 0 0-.09 2.33l7.9 8.74a1.58 1.58 0 0 0 2.38-.03L34.63 17.9a1.68 1.68 0 0 0-.13-2.33Z'/%3e%3c/svg%3e");
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
