import React from "react";
import {
  ColumnContainer,
  Columns,
  Heading,
  UBenefitContainer,
  UnmatchableBenefitsContainer,
} from "./unmatchable-benefits.styles";
import ScrollReveal from "../../utils/framer-animations/scroll-reveal/simple-scroll-reveal/scroll-reveal.component";

const UnmatchableBenefits = () => {
  const uBenefits = [{}, {}, {}, {}];

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
            <UBenefitContainer index={index}>
              {/* <BenefitImageBox>
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

              <Paragraph>{benefit.paragraph}</Paragraph> */}
            </UBenefitContainer>
          </ColumnContainer>
        ))}
      </Columns>
    </UnmatchableBenefitsContainer>
  );
};

export default UnmatchableBenefits;
