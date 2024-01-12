import styled from "styled-components";
import { device } from "../../../breakpoints.styles";

export const StyledTextField = styled.input`
  width: 340px;
  height: 58px;
  padding-inline: 25px;
  align-items: center;
  border: none;
  border-radius: 29px;
  box-shadow: inset 0px 0px 0px 1px #1565d8;
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

  @media ${device.xs} {
    width: 100%;
    height: 48px;
  }
`;