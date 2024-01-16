import React from "react";
import TextTypingAnimation from "../../utils/framer-animations/text-typing-animation/text-typing-animation.componen";

import {
  BasicSubscription,
  CheckMark,
  ColumnContainer,
  Columns,
  Heading,
  MobileButtonBox,
  Option,
  OptionText,
  Options,
  PremiumSubscription,
  Price,
  PriceVariantsHeading,
  PricingContainer,
  PricingVariantsBox,
  SubscriptionHeadline,
} from "./pricing.styles";
import { Stack } from "@mui/material";
import FramerMagnetic from "../../utils/framer-animations/framer-magnetic/framer-magnetic.component";
import { Link } from "react-router-dom";
import CustomButton from "../UI/button/button.component";

const Pricing = () => {
  const heading = "Unlock the price for our all-in-one Repricing solution";
  const basicSubscriptionOptions = ["Catalog Analyzer", "Purchase Order History", "Vendor CRM", "Removals", "Invoices"];
  const premiumPlanOptions = [
    "Catalog Analyzer",
    "Inventory View",
    "Suggested Reorders",
    "Inbound Flow",
    "Purchase Order History",
    "Repricer",
    "Sale Profit",
    "Vendor CRM",
    "Removals",
  ];

  return (
    <PricingContainer>
      <Heading>
        <TextTypingAnimation text={heading} />
      </Heading>

      <PricingVariantsBox>
        <BasicSubscription>
          <SubscriptionHeadline>
            <PriceVariantsHeading>Basic Subscription</PriceVariantsHeading>
            <Price>
              Use for&nbsp;<PriceVariantsHeading $enlarged>$0</PriceVariantsHeading>
            </Price>
          </SubscriptionHeadline>

          <Options>
            {basicSubscriptionOptions.map((option, index) => (
              <Option key={index}>
                <CheckMark />
                <OptionText>{option}</OptionText>
              </Option>
            ))}
          </Options>
        </BasicSubscription>

        <PremiumSubscription>
          <SubscriptionHeadline>
            <PriceVariantsHeading $inverted>Premium Plan</PriceVariantsHeading>
            <Price $inverted>
              <PriceVariantsHeading $inverted $enlarged>
                $99&nbsp;
              </PriceVariantsHeading>
              /per month
            </Price>
          </SubscriptionHeadline>

          <Columns>
            {premiumPlanOptions.map((option, index) => (
              <ColumnContainer key={index}>
                <Option key={index}>
                  <CheckMark />
                  <OptionText $inverted>{option}</OptionText>
                </Option>
              </ColumnContainer>
            ))}
          </Columns>

          <Stack spacing="12px" alignItems="center">
            <OptionText $inverted>See for yourself with our 3 month trial</OptionText>
            <MobileButtonBox>
              <FramerMagnetic>
                <Link to="/registration">
                  <CustomButton variant="contained">Try it For Free</CustomButton>
                </Link>
              </FramerMagnetic>
            </MobileButtonBox>
          </Stack>
        </PremiumSubscription>
      </PricingVariantsBox>
    </PricingContainer>
  );
};

export default Pricing;
