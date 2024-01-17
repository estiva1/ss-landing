import React from "react";
import { Link } from "react-router-dom";

import CustomButton from "../UI/button/button.component";
import EastRoundedIcon from "@mui/icons-material/EastRounded";

import TextDipserse from "../../utils/framer-animations/text-disperse/text-disperse.component";
import TextTypingAnimation from "../../utils/framer-animations/text-typing-animation/text-typing-animation.componen";

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
  CaptionSecondary,
  CaptionSecondaryBorderBox,
  ColumnContainer,
  Columns,
  Heading,
  MobileButtonBox,
  Paragraph,
  UniqueBenefitsContainer,
} from "./unique-benefits.styles";

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
      captionPrimary: "QUICK STRATEGY",
      captionSecondary: "ADJUSTMENTS",
      paragraph: "Set default rules and competitor's rule",
    },
    {
      image: benefit5,
      captionPrimary: "DATA-DRIVEN",
      captionSecondary: "FORECASTING",
      paragraph: "Predict best outcome based on historical data",
    },
    {
      image: benefit6,
      captionPrimary: "AUTO-PRICING",
      captionSecondary: "CONTROL",
      paragraph: "Automatically set the minimum and maximum prices",
    },
  ];

  return (
    <UniqueBenefitsContainer>
      <Heading>
        <TextTypingAnimation text={heading} />
      </Heading>

      <Columns>
        {benefits.map((benefit, index) => (
          <ColumnContainer key={index}>
            <BenefitContainer index={index}>
              <BenefitImageBox>
                <BenefitImage src={benefit.image} loading="lazy" />
              </BenefitImageBox>

              <BenefitCaptionBox>
                <TextDipserse>
                  <p style={{ margin: 0 }}>{benefit.captionPrimary}</p>
                </TextDipserse>
                <CaptionSecondaryBorderBox>
                  <CaptionSecondary>{benefit.captionSecondary}</CaptionSecondary>
                </CaptionSecondaryBorderBox>
              </BenefitCaptionBox>

              <Paragraph>{benefit.paragraph}</Paragraph>
            </BenefitContainer>
          </ColumnContainer>
        ))}
      </Columns>

      <MobileButtonBox>
        <Link to="/registration">
          <CustomButton variant="contained" endIcon={<EastRoundedIcon />}>
            Try for FREE
          </CustomButton>
        </Link>
      </MobileButtonBox>
    </UniqueBenefitsContainer>
  );
};

export default UniqueBenefits;
