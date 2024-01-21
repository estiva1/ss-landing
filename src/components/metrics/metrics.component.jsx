import React from "react";
import { Stack } from "@mui/material";
import ScrollReveal from "../../utils/framer-animations/scroll-reveal/simple-scroll-reveal/scroll-reveal.component";

import {
  BuyBoxIcon,
  ColumnContainer,
  Columns,
  Heading,
  Info,
  ItemBox,
  ItemLabel,
  ItemStatement,
  ItemSummary,
  MarginIcon,
  MetricsContainer,
  SalesIcon,
  ShapeOne,
  ShapeThree,
  ShapeTwo,
  Wrapper,
} from "./metrics.styles";

const Metrics = () => {
  const metrics = [
    {
      icon: <SalesIcon />,
      label: "Sales",
      statement: "Set prices too low - you're losing money, if it's too high - you're chasing customers away.",
      summary:
        "Our AI repricer supercharges your sales and automatically optimizes your pricing to beat competitors. Quickly reprice your listings to stay above competitors and increase sales even in slow months.",
    },
    {
      icon: <MarginIcon />,
      label: "Margin",
      statement: "Your prices determine your Margin.",
      summary:
        "With better profit management, you can boost your margin in no time. No wonder sellers that use our repricer maximize their profit even when sleeping. You can use our repricer to increase your margin and earn an EXTRA 30% profit on every sale.",
    },
    {
      icon: <BuyBoxIcon />,
      label: "Buy Box",
      statement: "Buy Box supercharges your sales.",
      summary:
        "By optimizing your pricing, you can dominate and conquer the Buy Box by at least 63% and boost your sales. It's no secret that Sales.Support clients always own the Buy Box.",
    },
  ];

  return (
    <Wrapper>
      <ShapeOne />
      <ShapeTwo />
      <ShapeThree />
      <MetricsContainer>
        <ScrollReveal index={2}>
          <Heading>
            Optimizing the metrics that&nbsp;
            <span>
              <Heading $highlighted>matter THE MOST&nbsp;</Heading>
            </span>
          </Heading>
        </ScrollReveal>

        <ScrollReveal index={1}>
          <Columns>
            {metrics.map((item, index) => (
              <ColumnContainer key={index}>
                <ItemBox>
                  <Stack direction="row" gap="10px" alignItems="center">
                    {item.icon}
                    <ItemLabel>{item.label}</ItemLabel>
                  </Stack>

                  <Info>
                    <ItemStatement>{item.statement}</ItemStatement>
                    <ItemSummary>{item.summary}</ItemSummary>
                  </Info>
                </ItemBox>
              </ColumnContainer>
            ))}
          </Columns>
        </ScrollReveal>
      </MetricsContainer>
    </Wrapper>
  );
};

export default Metrics;
