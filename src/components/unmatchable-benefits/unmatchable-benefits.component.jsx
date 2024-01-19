import React, { useRef } from "react";
import ScrollReveal from "../../utils/framer-animations/scroll-reveal/simple-scroll-reveal/scroll-reveal.component";

import {
  BoostSalesIcon,
  ColumnContainer,
  Columns,
  CostIcon,
  Decal,
  ExpirationDatesIcon,
  FlippingTextContainer,
  Heading,
  Headline,
  IgniteIcon,
  Label,
  LabelFlipped,
  Summary,
  UBenefitContainer,
  UnmatchableBenefitsContainer,
} from "./unmatchable-benefits.styles";

const UnmatchableBenefits = () => {
  const uBenefits = [
    {
      icon: <BoostSalesIcon />,
      label: "Boost sales and attract customers",
      summary:
        "Take the hassle out of your repricing, improve your results with data-intensive pricing strategies, optimize sales, enhance customer experience and achieve better results with less work.",
    },
    {
      icon: <ExpirationDatesIcon />,
      label: "Expiration dates… a thing of the past",
      summary:
        "Your inventory expiration dates will automatically be recorded against shipment if you utilize just one out of our vast network of warehouses nationwide. In fact, Sales.Support will automatically reprice your products before they expire.",
    },
    {
      icon: <CostIcon />,
      label: "All your cost… in one place",
      summary:
        "You can now include your actual prep fees for each SKU. No more dealing with multiple 3PL parties and calculating costs per SKU to add to your P&L, which is always overwhelming. All your 3PL costs are automatically added to each SKU using Sales.Support Warehouses.",
    },
    {
      icon: <IgniteIcon />,
      label: "Ignite your product sales velocity",
      summary:
        "Slow-moving inventory costs you money. But do you know it can be avoided and even each sale can be the best one?. Sales.Support ensures your pricing fits the marketplace condition in real-time and earns you extra profit you never knew existed.",
    },
  ];

  const FlippingText = ({ text }) => {
    const text1 = useRef(null);
    const text2 = useRef(null);

    return (
      <FlippingTextContainer>
        <Label ref={text1}>{text}</Label>
        <LabelFlipped ref={text2}>{text}</LabelFlipped>
      </FlippingTextContainer>
    );
  };

  return (
    <UnmatchableBenefitsContainer>
      <ScrollReveal index={1}>
        <Heading>
          Try our&nbsp;
          <span>
            <Heading $highlighted>unmatchable benefits&nbsp;</Heading>
          </span>
        </Heading>
      </ScrollReveal>

      <Columns>
        {uBenefits.map((benefit, index) => (
          <ColumnContainer key={index}>
            <ScrollReveal style={{ height: "100%" }} index={index + 1}>
              <UBenefitContainer>
                <Headline>
                  {benefit.icon}
                  <div>
                    <FlippingText text={benefit.label} />
                  </div>
                </Headline>
                <Summary>{benefit.summary}</Summary>
              </UBenefitContainer>
            </ScrollReveal>
          </ColumnContainer>
        ))}
      </Columns>
      <Decal />
    </UnmatchableBenefitsContainer>
  );
};

export default UnmatchableBenefits;
