import React from "react";
import { Stack } from "@mui/material";
import CustomButton from "../UI/button/button.component";
import FramerMagnetic from "../../utils/framer-animations/framer-magnetic/framer-magnetic.component";

import logo from "../../assets/logo.png";
import { HeaderContainer, HeaderLogo, StyledLink } from "./header.styles";

const Header = () => {
  return (
    <HeaderContainer>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <HeaderLogo src={logo} alt="Sales.Support Logo" title="Sales.Support" loading="lazy" />
        
        <FramerMagnetic>
          <StyledLink to="/registration">
            <CustomButton variant="contained">Start free trial</CustomButton>
          </StyledLink>
        </FramerMagnetic>
      </Stack>
    </HeaderContainer>
  );
};

export default Header;
