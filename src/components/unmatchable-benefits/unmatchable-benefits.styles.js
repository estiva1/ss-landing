import styled from "styled-components";
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
  height: max-content;
  padding-inline: 10px;
  padding-bottom: 20px;

  @media ${device.xs} {
    width: 100%;
  }
`;

export const UBenefitContainer = styled.div`
  display: flex;
  width: 100%;
  height: 300px;
  padding: 30px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  border-radius: 20px;
  background: #1565d8;
  box-shadow: 4px 4px 25px 0px rgba(111, 213, 246, 0.25);
`;
