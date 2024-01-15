import React from "react";
import { Link } from "react-router-dom";

import CustomButton from "../UI/button/button.component";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import FramerMagnetic from "../../utils/framer-animations/framer-magnetic/framer-magnetic.component";

import benefit1 from "../../assets/benefit-1.png";
import benefit2 from "../../assets/benefit-2.png";
import benefit3 from "../../assets/benefit-3.png";
import benefit4 from "../../assets/benefit-4.png";
import benefit5 from "../../assets/benefit-5.png";
import benefit6 from "../../assets/benefit-6.png";

import {
  BenefitCaptionBox,
  BenefitContainer,
  BenefitImage,
  BenefitImageBox,
  CaptionPrimary,
  CaptionSecondary,
  CaptionSecondaryBorderBox,
  ColumnContainer,
  Columns,
  Heading,
  MobileButtonBox,
  Paragraph,
  UniqueBenefitsContainer,
} from "./unique-benefits.styles";
import DelayedScrollReveal from "../../utils/framer-animations/scroll-reveal/delayed-scroll-reveal/delayed-scroll-reveal.component";
import TextTypingAnimation from "../../utils/framer-animations/text-typing-animation/text-typing-animation.componen";

const UniqueBenefits = () => {
  const heading = "Embrace the unique benefits that elevate your experience";
  const benefits = [
    {
      image: benefit1,
      captionPrimary: "INTUITIVE",
      captionSecondary: "DASHBOARD",
      paragraph: "Adjust to competitor price changes rapidly to keep your products competitive",
    },
    {
      image: benefit2,
      captionPrimary: "FULL CONTROL",
      captionSecondary: "OVER SHIPMENTS",
      paragraph: "Overview inventory control dashboard",
    },
    {
      image: benefit3,
      captionPrimary: "EASY PRODUCT",
      captionSecondary: "MANAGEMENT",
      paragraph: "Get Insight into competitors' behavior",
    },
    {
      image: benefit4,
      captionPrimary: "INTUITIVE",
      captionSecondary: "DASHBOARD",
      paragraph: "Adjust to competitor price changes rapidly to keep your products competitive",
    },
    {
      image: benefit5,
      captionPrimary: "INTUITIVE",
      captionSecondary: "DASHBOARD",
      paragraph: "Adjust to competitor price changes rapidly to keep your products competitive",
    },
    {
      image: benefit6,
      captionPrimary: "INTUITIVE",
      captionSecondary: "DASHBOARD",
      paragraph: "Adjust to competitor price changes rapidly to keep your products competitive",
    },
  ];
  return (
    <UniqueBenefitsContainer>
      <Heading>
        <TextTypingAnimation text={heading} />
      </Heading>
      
      <Columns>
        {benefits.map((benefit, index) => (
          //   <DelayedScrollReveal key={`profit-amount-box-${index}`} index={index} speed={20}>
          <ColumnContainer key={index}>
            <BenefitContainer>
              <BenefitImageBox>
                <BenefitImage src={benefit.image} />
              </BenefitImageBox>

              <BenefitCaptionBox>
                <CaptionPrimary>{benefit.captionPrimary}</CaptionPrimary>
                <CaptionSecondaryBorderBox>
                  <CaptionSecondary>{benefit.captionSecondary}</CaptionSecondary>
                </CaptionSecondaryBorderBox>
              </BenefitCaptionBox>

              <Paragraph>{benefit.paragraph}</Paragraph>
            </BenefitContainer>
          </ColumnContainer>
          //   </DelayedScrollReveal>
        ))}
      </Columns>

      <MobileButtonBox>
        <FramerMagnetic>
          <Link to="/registration">
            <CustomButton variant="contained" endIcon={<EastRoundedIcon />}>
              Try for FREE
            </CustomButton>
          </Link>
        </FramerMagnetic>
      </MobileButtonBox>
    </UniqueBenefitsContainer>
  );
};

export default UniqueBenefits;
