import React from "react";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

import Hero from "../hero/hero.component";
import Footer from "../footer/footer.component";
import Header from "../header/header.component";
import Metrics from "../metrics/metrics.component";
import Pricing from "../pricing/pricing.component";
import Reasons from "../reasons/reasons.component";
import Products from "../products/products.component";
import CtaSection from "../cta-section/cta-section.component";
import Testimonials from "../testimonials/testimonials.component";
import ProgressBar from "../UI/progress-bar/progress-bar.component";
import ProfitSection from "../profit-section/profit-section.component";
import SetUpRepricer from "../set-up-repricer/set-up-repricer.component";
import UniqueBenefits from "../unique-benefits/unique-benefits.component";
import UnmatchableBenefits from "../unmatchable-benefits/unmatchable-benefits.component";
import StickyCursor from "../../utils/framer-animations/sticky-cursor/sticky-cursor.component";

import { HeaderHolder, RootContainer } from "./landing-page.style";

const LandingPage = () => {
  const lenis = useLenis(({ scroll }) => {
  });

  return (
    <>
      <StickyCursor />
      <HeaderHolder>
        <ProgressBar />
        <Header />
      </HeaderHolder>
      <ReactLenis root>
        <RootContainer>
          <Hero />
          {/* <ProfitSection />
          <SetUpRepricer />
          <UniqueBenefits />
          <Testimonials />
          <Pricing />
          <Products />
          <CtaSection />
          <Metrics />
          <UnmatchableBenefits />
          <Reasons />
          <SetUpRepricer invertColors /> */}
        </RootContainer>
      </ReactLenis>
      <Footer />
    </>
  );
};

export default LandingPage;
