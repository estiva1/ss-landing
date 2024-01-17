import React from "react";
import { Link } from "react-router-dom";

import CustomButton from "../UI/button/button.component";
import Sparkles from "../UI/sparkles/sparkles.component";
import TextMaskAnimation from "../../utils/framer-animations/text-mask-animation/text-mask-animation.component";
import ScrollReveal from "../../utils/framer-animations/scroll-reveal/simple-scroll-reveal/scroll-reveal.component";

import "./alice-carousel-custom-styles.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import sticker from "../../assets/sticker.png";
import setUpRepricerDesktopFrame1 from "../../assets/set-up-repricer-desktop-frame-1.png";
import setUpRepricerDesktopFrame2 from "../../assets/set-up-repricer-desktop-frame-2.png";
import setUpRepricerDesktopFrame3 from "../../assets/set-up-repricer-desktop-frame-3.png";

import setUpRepricerMobileTopFrame1 from "../../assets/set-up-repricer-mobile-top-frame-1.png";
import setUpRepricerMobileTopFrame2 from "../../assets/set-up-repricer-mobile-top-frame-2.png";
import setUpRepricerMobileTopFrame3 from "../../assets/set-up-repricer-mobile-top-frame-3.png";
import setUpRepricerMobileBottomFrame1 from "../../assets/set-up-repricer-mobile-bottom-frame-1.png";
import setUpRepricerMobileBottomFrame2 from "../../assets/set-up-repricer-mobile-bottom-frame-2.png";
import setUpRepricerMobileBottomFrame3 from "../../assets/set-up-repricer-mobile-bottom-frame-3.png";

import {
  DesktopCarousel,
  Heading,
  HeadingHighlighted,
  Headline,
  MobileButtonBox,
  MobileCarousel,
  MobileImageBoxForCarousel,
  Paragraph,
  SetUpRepricerContainer,
  ShapeOne,
  ShapeThree,
  ShapeTwo,
} from "./set-up-repricer.styles";

const SetUpRepricer = () => {
  const phrases = ["Set up your", "Repricer in less then 5 Minutes", "or else we give you 3 months free!"];
  const paragraph = ["Sales.Support Ai Repricer is your ultimate Amazon repricing solution to:"];

  const handleDragStart = (e) => e.preventDefault();
  const items = [
    <img
      src={setUpRepricerDesktopFrame1}
      style={{ width: "100%" }}
      onDragStart={handleDragStart}
      role="presentation"
      loading="lazy"
    />,
    <img
      src={setUpRepricerDesktopFrame2}
      style={{ width: "100%" }}
      onDragStart={handleDragStart}
      role="presentation"
      loading="lazy"
    />,
    <img
      src={setUpRepricerDesktopFrame3}
      style={{ width: "100%" }}
      onDragStart={handleDragStart}
      role="presentation"
      loading="lazy"
    />,
  ];

  const mobileItems = [
    <MobileImageBoxForCarousel>
      <img
        src={setUpRepricerMobileTopFrame1}
        style={{ width: "95%" }}
        onDragStart={handleDragStart}
        role="presentation"
        loading="lazy"
      />
      <img
        src={setUpRepricerMobileBottomFrame1}
        style={{ width: "95%" }}
        onDragStart={handleDragStart}
        role="presentation"
        loading="lazy"
      />
    </MobileImageBoxForCarousel>,

    <MobileImageBoxForCarousel>
      <img
        src={setUpRepricerMobileTopFrame2}
        style={{ width: "95%" }}
        onDragStart={handleDragStart}
        role="presentation"
        loading="lazy"
      />
      <img
        src={setUpRepricerMobileBottomFrame2}
        style={{ width: "95%" }}
        onDragStart={handleDragStart}
        role="presentation"
        loading="lazy"
      />
    </MobileImageBoxForCarousel>,

    <MobileImageBoxForCarousel>
      <img
        src={setUpRepricerMobileTopFrame3}
        style={{ width: "95%" }}
        onDragStart={handleDragStart}
        role="presentation"
        loading="lazy"
      />
      <img
        src={setUpRepricerMobileBottomFrame3}
        style={{ width: "95%" }}
        onDragStart={handleDragStart}
        role="presentation"
        loading="lazy"
      />
    </MobileImageBoxForCarousel>,
  ];

  return (
    <SetUpRepricerContainer>
      <ShapeOne />
      <ShapeTwo />
      <ShapeThree />

      <div>
        <Headline>
          <Heading>
            <TextMaskAnimation phrases={phrases.slice(0, 1)} delay={0.075} />
          </Heading>
          <HeadingHighlighted>
            <Sparkles>
              <TextMaskAnimation phrases={phrases.slice(1, 2)} delay={0.15} />
            </Sparkles>
          </HeadingHighlighted>
          <Heading>
            <TextMaskAnimation phrases={phrases.slice(2)} delay={0.225} />
          </Heading>
        </Headline>
        <Paragraph>
          <TextMaskAnimation phrases={paragraph} delay={0.3} />
        </Paragraph>
      </div>

      <DesktopCarousel>
        <ScrollReveal style={{ position: "relative" }} index={2}>
          <AliceCarousel
            className="alice-carousel"
            autoPlay
            autoPlayInterval={2000}
            infinite
            disableButtonsControls
            //animationDuration={1000}
            //animationEasingFunction="cubic-bezier(0.56, 0.03, 0.12, 1.04)"
            animationType="fadeout"
            mouseTracking
            items={items}
          />
          <img src={sticker} style={{ width: "100px", position: "absolute", top: "-30px", right: "40px" }} />
        </ScrollReveal>
      </DesktopCarousel>

      <MobileCarousel>
        <ScrollReveal index={4}>
          <AliceCarousel
            className="alice-carousel"
            autoPlay
            autoPlayInterval={2000}
            infinite
            disableButtonsControls
            animationDuration={1000}
            animationEasingFunction="cubic-bezier(0.56, 0.03, 0.12, 1.04)"
            animationType="slide"
            mouseTracking
            touchTracking
            items={mobileItems}
          />
        </ScrollReveal>
      </MobileCarousel>

      <MobileButtonBox>
        <Link to="/registration">
          <CustomButton variant="contained">Turn On the Repricer NOW</CustomButton>
        </Link>
      </MobileButtonBox>
    </SetUpRepricerContainer>
  );
};

export default SetUpRepricer;
