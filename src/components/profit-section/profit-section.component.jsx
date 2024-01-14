import React from "react";
import { ProfitSectionContainer } from "./profit-section.styles";
import ProfitAmountBox from "../UI/profit-amount-box/profit-amount-box.component";
import DelayedScrollReveal from "../../utils/framer-animations/scroll-reveal/delayed-scroll-reveal/delayed-scroll-reveal.component";

const ProfitSection = () => {
  const profitSectionData = [
    { profit: 64, profitIn: "Buy Box" },
    { profit: 30, profitIn: "Sales" },
    { profit: 25, profitIn: "Margin" },
  ];

  return (
    <ProfitSectionContainer>
      {profitSectionData.map((box, index) => (
        <DelayedScrollReveal style={{ width: "100%" }} key={`profit-amount-box-${index}`} index={index}>
          <ProfitAmountBox profit={box.profit} profitIn={box.profitIn} />
        </DelayedScrollReveal>
      ))}
    </ProfitSectionContainer>
  );
};

export default ProfitSection;
