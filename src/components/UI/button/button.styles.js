import styled from "styled-components";
import { Button } from "@mui/material";
import { device } from "../../../breakpoints.styles";

export const StyledButton = styled(Button)`
  &.MuiButton-contained {
    height: 58px;
    padding-inline: 40px;
    border-radius: 29px;
    font-family: Titillium Web;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.5rem;
    text-transform: none;
    color: #fff;
    background-color: #0057d3;
    white-space: nowrap;

    ${(props) =>
      props.white &&
      `
      color: #1565D8;
      background-color: #fff;

      &:hover {
        //color: #fff;
        background-color: #EBFBFF;
      }
  `}

    @media ${device.xs} {
      width: 100%;
      height: 48px;
      font-size: 1rem;
      line-height: 1.36rem;
    }
  }
  &.MuiButton-contained {
    .MuiButton-endIcon {
      transition: 0.15s;
    }
    &:hover {
      .MuiButton-endIcon {
        transition: 0.15s;
        transform: translateX(10px);
      }
    }
  }
`;
