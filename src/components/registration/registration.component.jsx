import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Box, IconButton } from "@mui/material";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import WestRoundedIcon from "@mui/icons-material/WestRounded";

import companyLogo from "../../assets/logo.png";
import { StyledButton } from "../UI/button/button.styles";

import {
  CreatePasswordFrame,
  CreatePasswordFrameContent,
  FooterAgreement,
  Form,
  Heading,
  Headline,
  Hyperlink,
  InputBox,
  InputLabel,
  InputsContainer,
  RegistrationContainer,
  StyledTextField,
  Support,
} from "./registration.styles";

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
        alt="Sales.Support Logo"
        title="Sales.Support"
      />
      <CreatePasswordFrame>
        <Link to="/">
          <IconButton sx={{ position: "absolute", top: "15px", left: "15px", color: "#1565d8" }}>
            <WestRoundedIcon />
          </IconButton>
        </Link>

        <CreatePasswordFrameContent>
          <Headline>
            <Heading>Just create a password for easier access to your Repricer account</Heading>
            <Support>No credit card required, all features included.</Support>
          </Headline>

          <Form>
            <InputsContainer>
              <InputBox>
                <InputLabel>Email</InputLabel>
                <StyledTextField
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </InputBox>

              <InputBox>
                <InputLabel>Password</InputLabel>
                <StyledTextField
                  id="password"
                  name="password"
                  type="password"
                  placeholder="At least 6 characters"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </InputBox>
            </InputsContainer>
            <StyledButton sx={{ alignSelf: "stretch" }} type="submit" variant="contained" endIcon={<EastRoundedIcon />}>
              Start free trial
            </StyledButton>
          </Form>
        </CreatePasswordFrameContent>

        <FooterAgreement>
          By Signing Up you agree to&nbsp;
          <Hyperlink target="_blank" rel="noopener" href="https://sales.support/terms">
            Terms & Conditions
          </Hyperlink>
        </FooterAgreement>
      </CreatePasswordFrame>
    </RegistrationContainer>
  );
};

export default Registration;
