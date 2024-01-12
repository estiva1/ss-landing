import React from "react";
import { StyledTextField } from "./textfield.styles";

const CustomTextField = ({ ...props }) => {
  return <StyledTextField {...props} />;
};

export default CustomTextField;
