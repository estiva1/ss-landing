import styled, { css } from "styled-components";
import { device } from "../../breakpoints.styles";

export const UnmatchableBenefitsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 130px;
  background: #0b2447;
  gap: 50px;
  overflow: hidden;

  @media ${device.xl} {
    padding: 100px 80px;
  }
  @media ${device.xs} {
    padding: 60px 15px;
    gap: 40px;
  }
`;

export const Heading = styled.h2`
  color: #fff;
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
  margin-inline: -10px;
  align-self: stretch;

  > *:nth-last-child(-n + 2) {
    margin-bottom: -20px;
  }

  @media ${device.xs} {
    > *:nth-last-child(-n + 2) {
      margin-bottom: 0;
    }

    > *:nth-last-child(-n + 1) {
      margin-bottom: -20px;
    }
  }
`;

export const ColumnContainer = styled.div`
  width: 50%;
  padding-inline: 10px;
  padding-bottom: 20px;

  @media ${device.xs} {
    width: 100%;
  }
`;

export const UBenefitContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px;
  gap: 16px;
  border-radius: 20px;
  background: #1565d8;
  box-shadow: 4px 4px 25px 0px rgba(111, 213, 246, 0.25);

  @media ${device.xs} {
    padding: 20px;
    gap: 8px;
  }
`;

export const Headline = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  align-self: stretch;

  @media ${device.xs} {
    gap: 10px;
  }
`;

export const FlippingTextContainer = styled.div`
  position: relative;
  transition: transform 0.4s;
  transform-style: preserve-3d;

  &:hover {
    transform: rotateX(90deg);
  }
`;

const applyFlippingTextStyles = () => {
  return css`
    font-family: Titillium Web;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    margin: 0;
    transition: all 0.4s;
  `;
};

export const Label = styled.h3`
  color: #fff;
  ${applyFlippingTextStyles};

  ${FlippingTextContainer}:hover & {
    transform: translateY(-100%);
    opacity: 0;
  }

  @media ${device.xs} {
    font-size: 1.25rem;
    line-height: 156%;
  }
`;

export const LabelFlipped = styled.h3`
  color: #f0e996;
  ${applyFlippingTextStyles};

  transform: rotateX(-90deg) translateY(50%);
  transform-origin: bottom center;
  position: absolute;
  top: 0;
  opacity: 0;

  ${FlippingTextContainer}:hover & {
    opacity: 1;
  }

  @media ${device.xs} {
    font-size: 1.25rem;
    line-height: 156%;
  }
`;

export const Summary = styled.p`
  color: #fff;
  font-family: Titillium Web;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
  margin: 0;

  @media ${device.xs} {
    line-height: 140%;
  }
`;

const applyIconStyles = () => {
  return css`
    min-width: 80px;
    min-height: 80px;
    width: 80px;
    height: 80px;
    background-size: cover;
    background-repeat: no-repeat;
  `;
};
export const BoostSalesIcon = styled.span`
  ${applyIconStyles};
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' fill='none'%3e%3cpath fill='%23F0E996' fill-rule='evenodd' d='M10.03 52.1h6.48c.86 0 1.56.7 1.56 1.57v15.29c0 .86-.7 1.56-1.56 1.56h-6.48c-.86 0-1.56-.7-1.56-1.56v-15.3c0-.85.7-1.55 1.56-1.55Zm24.3-9.64h-6.48c-.86 0-1.56.7-1.56 1.56v24.94c0 .86.7 1.56 1.56 1.56h6.48c.86 0 1.56-.7 1.56-1.56V44.02c0-.86-.7-1.56-1.56-1.56Zm17.82-10.07h-6.48c-.86 0-1.56.7-1.56 1.56v35c0 .87.7 1.57 1.56 1.57h6.48c.86 0 1.56-.7 1.56-1.56V33.95c0-.86-.7-1.56-1.56-1.56Zm11.34-9.06h6.48c.86 0 1.56.7 1.56 1.56v44.07c0 .86-.7 1.56-1.56 1.56h-6.48c-.86 0-1.56-.7-1.56-1.56V24.89c0-.86.7-1.56 1.56-1.56Zm.43-16.57a1.25 1.25 0 0 1-.13-2.49l7.68-.42a1.25 1.25 0 0 1 1.3 1.42l-1.11 7.61a1.25 1.25 0 1 1-2.47-.35l.6-4.16A173.07 173.07 0 0 1 40.2 29.6 193.92 193.92 0 0 1 7.86 44.19a1.25 1.25 0 1 1-.82-2.35 191.48 191.48 0 0 0 31.9-14.4A170.53 170.53 0 0 0 68.1 6.54l-4.18.22ZM7.07 75.3h65.86c.86 0 1.56.7 1.56 1.56v.5c0 .86-.7 1.57-1.56 1.57H7.07c-.86 0-1.56-.7-1.56-1.57v-.5c0-.86.7-1.56 1.56-1.56ZM21.81 1.1a13.67 13.67 0 1 0 0 27.34 13.67 13.67 0 0 0 0-27.35Zm-1.25 5v.83A5.5 5.5 0 0 0 18.26 8a4.24 4.24 0 0 0-1.62 3.59 3.95 3.95 0 0 0 1.9 3.25c.92.6 2.05.91 3.08 1.09.82.13 1.68.34 2.34.73a1.88 1.88 0 0 1 .99 1.63c.01.52-.24.92-.62 1.21-.49.37-1.18.6-1.87.68l-.5.04a3.93 3.93 0 0 1-2.26-.6 2.5 2.5 0 0 1-1.06-1.5 1.25 1.25 0 0 0-2.43.6 4.96 4.96 0 0 0 2.11 2.98c.67.44 1.44.74 2.24.89v.8a1.25 1.25 0 0 0 2.5 0v-.78a6.34 6.34 0 0 0 2.78-1.13 3.83 3.83 0 0 0 1.57-3.68 4.27 4.27 0 0 0-2.16-3.27 9.14 9.14 0 0 0-3.23-1.07 5.7 5.7 0 0 1-2.12-.7 1.57 1.57 0 0 1-.77-1.3 1.8 1.8 0 0 1 .7-1.53c.35-.29.8-.49 1.3-.59.51-.1 1.06-.1 1.58.04.83.2 1.58.75 1.97 1.7a1.25 1.25 0 1 0 2.3-.97 5.3 5.3 0 0 0-3.92-3.21v-.8a1.25 1.25 0 1 0-2.5 0Z' clip-rule='evenodd'/%3e%3c/svg%3e");
`;
export const ExpirationDatesIcon = styled.span`
  ${applyIconStyles};
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' fill='none'%3e%3cg clip-path='url(%23a)'%3e%3cmask id='b' width='80' height='80' x='0' y='0' maskUnits='userSpaceOnUse' style='mask-type:luminance'%3e%3cpath fill='%23fff' d='M80 0H0v80h80V0Z'/%3e%3c/mask%3e%3cg mask='url(%23b)'%3e%3cmask id='c' width='80' height='80' x='0' y='0' maskUnits='userSpaceOnUse' style='mask-type:luminance'%3e%3cpath fill='%23fff' d='M0 0h80v80H0V0Z'/%3e%3c/mask%3e%3cg stroke='%23F0E996' stroke-linejoin='round' stroke-miterlimit='10' stroke-width='4.688' mask='url(%23c)'%3e%3cpath d='M36.873 31.088c0-9.305-7.544-16.848-16.849-16.848S3.176 21.783 3.176 31.088c0 5.333 2.48 10.084 6.348 13.172v9.049h21v-9.05c3.868-3.087 6.349-7.838 6.349-13.17Z'/%3e%3cpath d='M9.523 53.309h21.001v1.952c0 5.8-4.7 10.5-10.5 10.5s-10.5-4.7-10.5-10.5V53.31Zm10.5 0V37.28'/%3e%3cpath stroke-linecap='round' d='m25.957 31.348-5.933 5.933h0l-5.932-5.933m62.73 18.047c0 9.039-7.328 16.367-16.367 16.367-9.04 0-16.367-7.328-16.367-16.367 0-9.04 7.328-16.368 16.367-16.368 9.04 0 16.367 7.328 16.367 16.367Z'/%3e%3cpath stroke-linecap='round' d='M60.453 42.132v7.262l3.689 3.688'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='%23fff' d='M0 0h80v80H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
`;
export const CostIcon = styled.span`
  ${applyIconStyles};
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' fill='none'%3e%3cpath fill='%23F0E996' d='M2.5 74c0-.8.7-1.5 1.6-1.5h71.8c.9 0 1.6.7 1.6 1.6v1.8c0 .9-.7 1.6-1.6 1.6H4.1c-.9 0-1.6-.7-1.6-1.6v-1.8Zm11.3-44a3.8 3.8 0 0 0-3.8 3.8v33.7h15V33.7a3.8 3.8 0 0 0-3.8-3.7h-7.4Zm22.5 20a3.8 3.8 0 0 0-3.8 3.8v13.7h15V53.7a3.7 3.7 0 0 0-3.8-3.7h-7.5Zm22.5 7.5a3.7 3.7 0 0 0-3.8 3.8v6.2h15v-6.3a3.7 3.7 0 0 0-3.8-3.7h-7.5ZM33.3 35.2A17.3 17.3 0 0 0 50 47.5 17.5 17.5 0 0 0 67.5 30a2.5 2.5 0 0 0-2.5-2.5h-8.7a3.8 3.8 0 0 1-3.8-3.8V15a2.5 2.5 0 0 0-2.5-2.5 17.5 17.5 0 0 0-16.7 22.7Z'/%3e%3cpath fill='%23F0E996' d='M60 22.5h15a2.5 2.5 0 0 0 2.5-2.5A17.5 17.5 0 0 0 60 2.5 2.5 2.5 0 0 0 57.5 5v13.8c0 2.6 1.1 3.7 2.5 3.7ZM2.5 4c0-.8.7-1.5 1.6-1.5h31.8c.9 0 1.6.7 1.6 1.6v1.8c0 .9-.7 1.6-1.6 1.6H4.1c-.9 0-1.6-.7-1.6-1.6V4.1Zm0 10c0-.8.7-1.5 1.6-1.5h19.3c.9 0 1.6.7 1.6 1.6v1.8c0 .9-.7 1.6-1.6 1.6H4.1c-.9 0-1.6-.7-1.6-1.6v-1.8Z'/%3e%3c/svg%3e");
`;
export const IgniteIcon = styled.span`
  ${applyIconStyles};
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' fill='none'%3e%3cpath fill='%23F0E996' d='M69.87 48.58 53.23 65.52a3.82 3.82 0 0 1-2.6 1.15h-24a6.7 6.7 0 0 0-5.33 2.66l-5.6 7.47a1.33 1.33 0 0 1-1.07.53H4A1.33 1.33 0 0 1 2.67 76v-7.1c0-.3.09-.58.26-.8 3.69-4.9 8.38-10.9 9.98-12.49a19.86 19.86 0 0 1 15.06-6.28 7.87 7.87 0 0 1 5.06 1.82c.7.56 1.57.86 2.47.85h13.58a2.89 2.89 0 0 1 2.85 2.2l.04.33a2.67 2.67 0 0 1-2.67 2.8H34.63a1.33 1.33 0 1 0 0 2.66H49.3a5.33 5.33 0 0 0 5.33-5.6v-.06l11.6-9.71a2.64 2.64 0 0 1 1.96-.62 2.67 2.67 0 0 1 2.44 2.8c-.03.66-.3 1.3-.76 1.78Zm-4.8-37.91h-12.8l6.4-7.31 6.4 7.3ZM40 38.09l-7.53-24.76h15.06L40 38.1Zm0-34.73 6.4 7.3H33.6l6.4-7.3Zm-9.33 6.62-6.4-7.31h12.8l-6.4 7.3Zm12.27-7.31h12.8l-6.4 7.3-6.4-7.3Zm-21.6.69 6.4 7.3h-12.8l6.4-7.3Zm-6.4 9.97h14.74l7.87 25.84-22.61-25.84Zm27.52 25.84 7.86-25.84h14.75l-22.6 25.84ZM12 36a1.33 1.33 0 0 1-1.33-1.33V32a1.33 1.33 0 1 1 2.66 0v2.67A1.33 1.33 0 0 1 12 36Zm0 8a1.33 1.33 0 0 1-1.33-1.33V40a1.33 1.33 0 1 1 2.66 0v2.67A1.33 1.33 0 0 1 12 44Zm-2.66-5.33H6.67a1.33 1.33 0 0 1 0-2.67h2.67a1.33 1.33 0 0 1 0 2.67Zm8 0h-2.67a1.33 1.33 0 1 1 0-2.67h2.67a1.33 1.33 0 1 1 0 2.67ZM72 24a1.33 1.33 0 0 1-1.33-1.33V20a1.33 1.33 0 1 1 2.66 0v2.67A1.33 1.33 0 0 1 72 24Zm0 8a1.33 1.33 0 0 1-1.33-1.33V28a1.33 1.33 0 1 1 2.66 0v2.67A1.33 1.33 0 0 1 72 32Zm-2.66-5.33h-2.67a1.33 1.33 0 1 1 0-2.67h2.67a1.33 1.33 0 1 1 0 2.67Zm8 0h-2.67a1.33 1.33 0 1 1 0-2.67h2.67a1.33 1.33 0 1 1 0 2.67Z'/%3e%3c/svg%3e");
`;
