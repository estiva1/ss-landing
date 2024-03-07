import React from "react";
import { StyledButton } from "./button.styles";

const CustomButton = ({ children, inverted, ...props }) => {
  return (
    <StyledButton $inverted={inverted} {...props}>
      {children}
    </StyledButton>
  );
};

export default CustomButton;
