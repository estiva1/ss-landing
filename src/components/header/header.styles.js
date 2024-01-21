import styled from "styled-components";
import { device } from "../../breakpoints.styles";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  //max-width: 1440px;
  background-color: #ffffffbf; //bf === 75% of transparency
  > * {
    padding: 16px 130px;
  }

  @media ${device.xl} {
    > * {
      padding: 16px 80px;
    }
  }

  @media ${device.xs} {
    > * {
      padding: 15px;
    }
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
