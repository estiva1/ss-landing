import styled from "styled-components";
import { device } from "../../breakpoints.styles";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  padding: 24px 130px;
  overflow-x: clip;
  cursor: none;

  @media ${device.xl} {
    padding: 24px 80px;
  }

  @media ${device.xs} {
    padding: 15px;
  }
`;

export const HeaderLogo = styled.img`
  height: 32px;
  min-height: 32px;
  font-style: italic;
  cursor: pointer;
`;

export const StyledLink = styled(Link)`
  display: block;

  @media ${device.xs} {
    display: none;
  }
`;
