import React, { useRef, useState } from "react";
import { Fragment } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { Box, Grid, Grow, Stack } from "@mui/material";

import {
  BenefitBoldText,
  BenefitContainer,
  BenefitThinText,
  BlueTile,
  DescriptionExtraSmall,
  DescriptionLarge,
  DescriptionMedium,
  DescriptionSmall,
  DescriptionStandart,
  HeroSpanText,
  HeroText,
  ImageRoundContainer,
  MutableContentBox,
  ProfitValue,
  ReasonContainer,
  RootContainer,
  SectionHeaderText,
  SectionHeaderTextHighlighted,
  SectionWrapper,
  ShapeOne,
  ShapeThree,
  ShapeTwo,
  StyledBlueButton,
  StyledTab,
  StyledTextField,
  SubtitleText,
  SubtitleTextMedium,
  SubtitleTextSmall,
  ThinTextBox,
} from "./landing-page.style";

import EastRoundedIcon from "@mui/icons-material/EastRounded";

import { Link } from "react-router-dom";
import Header from "../header/header.component";
import Hero from "../hero/hero.component";
import StickyCursor from "../../utils/framer-animations/sticky-cursor/sticky-cursor.component";
import ProfitSection from "../profit-section/profit-section.component";
import SetUpRepricer from "../set-up-repricer/set-up-repricer.component";
import UniqueBenefits from "../unique-benefits/unique-benefits.component";
import Testimonials from "../testimonials/testimonials.component";
import Pricing from "../pricing/pricing.component";
import ProgressBar from "../UI/progress-bar/progress-bar.component";

const LandingPage = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const stickyElement = useRef(null);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setError(null);

    if (isValidEmail(email)) {
      console.log("The email is valid");
    } else {
      console.log("Email is invalid");
    }
  };

  return (
    <RootContainer>
      <StickyCursor />
      <ProgressBar />
      <Header />
      <Hero />
      <ProfitSection />
      <SetUpRepricer />
      <UniqueBenefits />
      <Testimonials />
      <Pricing />
    </RootContainer>
  );
};

export default LandingPage;
