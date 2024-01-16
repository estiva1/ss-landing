import styled from "styled-components";
import { device } from "../../../breakpoints.styles";

export const Introline = styled.div`
  display: flex;
  color: #000;
  font-family: Titillium Web;
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  letter-spacing: 0.0225rem;
  text-transform: uppercase;

  @media ${device.xs} {
    font-size: 1.875rem;
    letter-spacing: 0.01875rem;
  }

  &:nth-of-type(5),
  &:nth-of-type(6) {
    display: inline-flex;
  }

  &:nth-of-type(6) {
    right: -40px;
    position: relative;
  }
`;
