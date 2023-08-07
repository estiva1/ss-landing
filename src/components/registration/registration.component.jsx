import React, { useState } from "react";
import { Box } from "@mui/material";

import {
  CreatePasswordFrame,
  CreatePasswordFrameContent,
  CreatePasswordFrameContentBottom,
  CreatePasswordFrameContentTop,
  InputItem,
  InputNameText,
  InputsContainer,
  PasswordFrameHeadingText,
  PasswordFrameSubHeadingText,
  RegistrationContainer,
  SpanText,
  StyledTextField,
} from "./registration.styles";
import { StyledBlueButton } from "../landing-page/landing-page.style";

import EastRoundedIcon from "@mui/icons-material/EastRounded";
import WestRoundedIcon from "@mui/icons-material/WestRounded";

import companyLogo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <RegistrationContainer>
      <Box
        sx={{
          minHeight: "32px",
          height: "32px",
        }}
        component="img"
        src={companyLogo}
        alt="Company Logo"
      />
      <CreatePasswordFrame>
        <CreatePasswordFrameContent>
          <CreatePasswordFrameContentTop>
            <PasswordFrameHeadingText>
              Just create a password for easier access to your Repricer account
            </PasswordFrameHeadingText>
            <PasswordFrameSubHeadingText>No credit card required, all features included.</PasswordFrameSubHeadingText>
          </CreatePasswordFrameContentTop>

          <CreatePasswordFrameContentBottom>
            <InputsContainer>
              <InputItem>
                <InputNameText>Email</InputNameText>
                <StyledTextField
                  id="email"
                  name="email"
                  placeholder="johndoe@gmail.com"
                  value={email}
                  onChange={handleEmailChange}
                />
              </InputItem>

              <InputItem>
                <InputNameText>Password</InputNameText>
                <StyledTextField
                  id="password"
                  name="password"
                  type="password"
                  placeholder="At least 6 characters"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </InputItem>
            </InputsContainer>
            <StyledBlueButton sx={{ minWidth: "100%" }} type="submit" variant="contained" endIcon={<EastRoundedIcon />}>
              Start free trial
            </StyledBlueButton>
          </CreatePasswordFrameContentBottom>
        </CreatePasswordFrameContent>

        <SpanText>By Signing Up you agree to Terms & Conditions</SpanText>

        <Link to="/">
          <WestRoundedIcon
            sx={{ position: "absolute", top: "15px", left: "15px", width: "20px", color: "#1565d8", cursor: "pointer" }}
          />
        </Link>
      </CreatePasswordFrame>
    </RegistrationContainer>
  );
};

export default Registration;
