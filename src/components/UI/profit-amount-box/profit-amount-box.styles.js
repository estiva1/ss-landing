import styled from "styled-components";
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
    width: 290px;
    gap: 16px;
    padding: 16px 12px;
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

  @media ${device.xs} {
    font-size: 3.125rem;
  }
`;

export const ProfitIn = styled.span`
  color: #01cb99;
  font-family: Titillium Web;
  font-size: 3.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;

  @media ${device.xs} {
    font-size: 1.125rem;
    font-weight: 600;
  }
`;

export const ProfitAmountLabel = styled.span`
  color: #fff;
  font-family: Titillium Web;
  font-size: 1.625rem;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;

  @media ${device.xs} {
    font-size: 1.5rem;
    font-weight: 700;
  }
`;
