import React from "react";

import ProfitAmountBox from "../UI/profit-amount-box/profit-amount-box.component";
import DelayedScrollReveal from "../../utils/framer-animations/scroll-reveal/delayed-scroll-reveal/delayed-scroll-reveal.component";

import { ProfitSectionContainer, Wrapper } from "./profit-section.styles";

const ProfitSection = () => {
  const profitSectionData = [
    { profit: 64, profitIn: "Buy Box" },
    { profit: 30, profitIn: "Sales" },
    { profit: 25, profitIn: "Margin" },
  ];

  return (
    <Wrapper>
      <ProfitSectionContainer>
        {profitSectionData.map((box, index) => (
          <DelayedScrollReveal key={`profit-amount-box-${index}`} index={index} speed={2}>
            <ProfitAmountBox profit={box.profit} profitIn={box.profitIn} />
          </DelayedScrollReveal>
        ))}
      </ProfitSectionContainer>
    </Wrapper>
  );
};

export default ProfitSection;
