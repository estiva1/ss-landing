import React from "react";
import { StyledButton } from "./button.styles";

const CustomButton = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default CustomButton;
