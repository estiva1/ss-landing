import React, { useState } from "react";

import Hero from "../hero/hero.component";
import Header from "../header/header.component";
import Metrics from "../metrics/metrics.component";
import Pricing from "../pricing/pricing.component";
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
import Footer from "../footer/footer.component";

const LandingPage = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setError(null);

    if (isValidEmail(email)) {
      console.log("The email is valid");
    } else {
      console.log("Email is invalid");
    }
  };

  return (
    <RootContainer>
      <StickyCursor />
      <HeaderHolder>
        <ProgressBar />
        <Header />
      </HeaderHolder>
      <main>
        <Hero />
        <ProfitSection />
        <SetUpRepricer />
        <UniqueBenefits />
        <Testimonials />
        <Pricing />
        <Products />
        <CtaSection />
        <Metrics />
        <UnmatchableBenefits />
        <SetUpRepricer invertColors />
      </main>
      <Footer />
    </RootContainer>
  );
};

export default LandingPage;
