import React from "react";
import logoWhite from "../../assets/logo-white.png";
import { FooterContainer, FooterLogo } from "./footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLogo src={logoWhite} alt="Sales.Support Logo" title="Sales.Support" loading="lazy" />
    </FooterContainer>
  );
};

export default Footer;
