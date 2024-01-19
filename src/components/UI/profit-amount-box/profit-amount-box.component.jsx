import React, { useRef } from "react";
import { Stack } from "@mui/material";
import FramerCounter from "../../../utils/framer-animations/count-up/count-up.component";

import {
  BottomSection,
  ProfitAmount,
  ProfitAmountBoxContainer,
  ProfitAmountLabel,
  ProfitIn,
  TopSection,
  FlippingTextContainer,
  ProfitAmountFlipped,
} from "./profit-amount-box.styles";

const ProfitAmountBox = ({ profit, profitIn }) => {
  const plane = useRef(null);
  const maxRotate = 60;

  const manageMouseMove = (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    const perspective = window.innerWidth * 4;
    const rotateX = maxRotate * x - maxRotate / 2;
    const rotateY = (maxRotate * y - maxRotate / 2) * -1;
    plane.current.style.transform = `perspective(${perspective}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg)`;
  };

  const manageMouseLeave = () => {
    plane.current.style.transform = `perspective(0px) rotateX(0deg) rotateY(0deg)`;
  };

  const FlippingText = () => {
    const text1 = useRef(null);
    const text2 = useRef(null);

    return (
      <FlippingTextContainer>
        <ProfitAmount ref={text1}>
          +<FramerCounter endVal={profit} duration={3} />%
        </ProfitAmount>
        <ProfitAmountFlipped ref={text2}>
          +<FramerCounter endVal={profit} duration={3} />%
        </ProfitAmountFlipped>
      </FlippingTextContainer>
    );
  };

  return (
    <ProfitAmountBoxContainer
      onMouseMove={(e) => {
        manageMouseMove(e);
      }}
      onMouseLeave={() => {
        manageMouseLeave();
      }}
    >
      <Stack alignItems="center">
        <TopSection>
          <div ref={plane}>
            <FlippingText />
          </div>
          <Stack>
            <ProfitAmountLabel>Increase in</ProfitAmountLabel>
            <ProfitIn $mobile>{profitIn}</ProfitIn>
          </Stack>
        </TopSection>

        <BottomSection>
          <ProfitIn>{profitIn}</ProfitIn>
        </BottomSection>
      </Stack>
    </ProfitAmountBoxContainer>
  );
};

export default ProfitAmountBox;
