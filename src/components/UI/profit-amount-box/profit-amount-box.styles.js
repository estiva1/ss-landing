import styled, { css } from "styled-components";
import { device } from "../../../breakpoints.styles";

export const ProfitAmountBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 379px;
  padding: 16px 10px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background: #0b2447;

  @media ${device.xs} {
    flex-direction: row;
    width: 100%;
    gap: 16px;
    padding: 16px 12px;
  }
`;

export const TopSection = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 24px;

  @media ${device.xs} {
    align-items: center;
    gap: 16px;
  }
`;

export const BottomSection = styled.div`
  display: block;

  @media ${device.xs} {
    display: none;
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

export const ProfitAmount = styled.h2`
  color: #f0e996;
  text-align: center;
  font-family: Titillium Web;
  font-size: 5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 116%;
  margin: 0;
  transition: all 0.4s;

  ${FlippingTextContainer}:hover & {
    transform: translateY(-100%);
    opacity: 0;
  }

  @media ${device.xl} {
    font-size: 4.2rem;
  }
  @media ${device.xs} {
    font-size: 3.125rem;
  }
`;

export const ProfitAmountFlipped = styled.div`
  color: #1565d8;
  text-align: center;
  font-family: Titillium Web;
  font-size: 5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 116%;
  margin: 0;
  transition: all 0.4s;

  transform: rotateX(-90deg) translateY(2.5rem);
  transform-origin: bottom center;
  position: absolute;
  top: 0;
  opacity: 0;

  ${FlippingTextContainer}:hover & {
    opacity: 1;
  }

  @media ${device.xl} {
    font-size: 4.2rem;
    transform: rotateX(-90deg) translateY(2.1rem);
  }
  @media ${device.xs} {
    font-size: 3.125rem;
    transform: rotateX(-90deg) translateY(1.5625rem);
  }
`;

export const ProfitIn = styled.span`
  color: #01cb99;
  font-family: Titillium Web;
  font-size: 3.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;

  ${({ mobile }) =>
    mobile &&
    css`
      display: none;

      @media ${device.xs} {
        display: block;
      }
    `};

  @media ${device.xl} {
    font-size: 2.875rem;
  }
  @media ${device.xs} {
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

export const ProfitAmountLabel = styled.span`
  color: #fff;
  font-family: Titillium Web;
  font-size: 1.625rem;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  padding-bottom: 11px;

  @media ${device.xs} {
    font-size: 1.125rem;
    font-weight: 600;
    padding-bottom: 0;
  }
`;
