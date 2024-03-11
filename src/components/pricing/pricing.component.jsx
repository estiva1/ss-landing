import React from "react";
import { Link } from "react-router-dom";

import { Stack } from "@mui/material";
import CustomButton from "../UI/button/button.component";
import Sparkles from "../UI/sparkles/sparkles.component";

import FramerMagnetic from "../../utils/framer-animations/framer-magnetic/framer-magnetic.component";
import TextTypingAnimation from "../../utils/framer-animations/text-typing-animation/text-typing-animation.componen";

import {
  BasicSubscription,
  CheckMark,
  ColumnContainer,
  ColumnContainerBasic,
  Columns,
  ColumnsBasic,
  Heading,
  Option,
  OptionText,
  Options,
  PremiumSubscription,
  Price,
  PriceVariantsHeading,
  PricingContainer,
  PricingVariantsBox,
  SubscriptionHeadline,
  Wrapper,
} from "./pricing.styles";

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
    <Wrapper>
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

            <Columns>
              {basicSubscriptionOptions.map((option, index) => (
                <ColumnContainerBasic>
                  <Option key={index} index={index}>
                    <CheckMark />
                    <OptionText>{option}</OptionText>
                  </Option>
                </ColumnContainerBasic>
              ))}
            </Columns>
          </BasicSubscription>

          <PremiumSubscription>
            <SubscriptionHeadline>
              <Sparkles>
                <PriceVariantsHeading $inverted>Premium Plan</PriceVariantsHeading>
              </Sparkles>
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
                  <Option index={index}>
                    <CheckMark />
                    <OptionText $inverted>{option}</OptionText>
                  </Option>
                </ColumnContainer>
              ))}
            </Columns>

            <Stack spacing="12px" alignItems="center">
              <OptionText $inverted>See for yourself with our 3 month trial</OptionText>

              <FramerMagnetic>
                <Sparkles>
                  <Link to="/registration">
                    <CustomButton variant="contained">Try it For Free</CustomButton>
                  </Link>
                </Sparkles>
              </FramerMagnetic>
            </Stack>
          </PremiumSubscription>
        </PricingVariantsBox>
      </PricingContainer>
    </Wrapper>
  );
};

export default Pricing;
