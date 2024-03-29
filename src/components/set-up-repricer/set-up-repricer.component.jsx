import React from "react";
import { Link } from "react-router-dom";

import CustomButton from "../UI/button/button.component";
import Sparkles from "../UI/sparkles/sparkles.component";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import TextMaskAnimation from "../../utils/framer-animations/text-mask-animation/text-mask-animation.component";
import ScrollReveal from "../../utils/framer-animations/scroll-reveal/simple-scroll-reveal/scroll-reveal.component";

import "./alice-carousel-custom-styles.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import sticker from "../../assets/sticker.png";
import setUpRepricerDesktopFrame1 from "../../assets/set-up-repricer/main/set-up-repricer-desktop-frame-1.png";
import setUpRepricerDesktopFrame2 from "../../assets/set-up-repricer/main/set-up-repricer-desktop-frame-2.png";
import setUpRepricerDesktopFrame3 from "../../assets/set-up-repricer/main/set-up-repricer-desktop-frame-3.png";

import setUpRepricerMobileTopFrame1 from "../../assets/set-up-repricer/main/set-up-repricer-mobile-top-frame-1.png";
import setUpRepricerMobileTopFrame2 from "../../assets/set-up-repricer/main/set-up-repricer-mobile-top-frame-2.png";
import setUpRepricerMobileTopFrame3 from "../../assets/set-up-repricer/main/set-up-repricer-mobile-top-frame-3.png";
import setUpRepricerMobileBottomFrame1 from "../../assets/set-up-repricer/main/set-up-repricer-mobile-bottom-frame-1.png";
import setUpRepricerMobileBottomFrame2 from "../../assets/set-up-repricer/main/set-up-repricer-mobile-bottom-frame-2.png";
import setUpRepricerMobileBottomFrame3 from "../../assets/set-up-repricer/main/set-up-repricer-mobile-bottom-frame-3.png";

import setUpRepricerDesktopFrameInverted1 from "../../assets/set-up-repricer/footer/set-up-repricer-desktop-frame-inverted-1.png";
import setUpRepricerDesktopFrameInverted2 from "../../assets/set-up-repricer/footer/set-up-repricer-desktop-frame-inverted-2.png";
import setUpRepricerDesktopFrameInverted3 from "../../assets/set-up-repricer/footer/set-up-repricer-desktop-frame-inverted-3.png";

import setUpRepricerMobileBottomFrameInverted1 from "../../assets/set-up-repricer/footer/set-up-repricer-mobile-bottom-frame-inverted-1.png";
import setUpRepricerMobileBottomFrameInverted2 from "../../assets/set-up-repricer/footer/set-up-repricer-mobile-bottom-frame-inverted-2.png";
import setUpRepricerMobileBottomFrameInverted3 from "../../assets/set-up-repricer/footer/set-up-repricer-mobile-bottom-frame-inverted-3.png";

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
  Wrapper,
} from "./set-up-repricer.styles";

const SetUpRepricer = ({ invertColors = false }) => {
  const paragraph = ["Sales.Support Ai Repricer is your ultimate Amazon repricing solution to:"];

  const isInvertedColors = invertColors;

  const handleDragStart = (e) => e.preventDefault();
  const items = [
    <img
      src={isInvertedColors ? setUpRepricerDesktopFrameInverted1 : setUpRepricerDesktopFrame1}
      style={{ width: "100%" }}
      onDragStart={handleDragStart}
      role="presentation"
      loading="lazy"
    />,
    <img
      src={isInvertedColors ? setUpRepricerDesktopFrameInverted2 : setUpRepricerDesktopFrame2}
      style={{ width: "100%" }}
      onDragStart={handleDragStart}
      role="presentation"
      loading="lazy"
    />,
    <img
      src={isInvertedColors ? setUpRepricerDesktopFrameInverted3 : setUpRepricerDesktopFrame3}
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
        src={isInvertedColors ? setUpRepricerMobileBottomFrameInverted1 : setUpRepricerMobileBottomFrame1}
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
        src={isInvertedColors ? setUpRepricerMobileBottomFrameInverted2 : setUpRepricerMobileBottomFrame2}
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
        src={isInvertedColors ? setUpRepricerMobileBottomFrameInverted3 : setUpRepricerMobileBottomFrame3}
        style={{ width: "95%" }}
        onDragStart={handleDragStart}
        role="presentation"
        loading="lazy"
      />
    </MobileImageBoxForCarousel>,
  ];

  return (
    <Wrapper $invertedColors={invertColors}>
      <ShapeOne />
      <ShapeTwo />
      <ShapeThree />
      <SetUpRepricerContainer>
        <Headline>
          <ScrollReveal key="set-up-repricer-heading" index={1}>
            <div style={{ textAlign: "center" }}>
              <Heading $invertColors={invertColors}>Set up your&nbsp;</Heading>
              <HeadingHighlighted>
                <Sparkles>Repricer in less then 5 Minutes&nbsp;</Sparkles>
              </HeadingHighlighted>
              <Heading $invertColors={invertColors} style={{ whiteSpace: "pre-line" }}>
                or else{`\n`}we give you 3 months free!
              </Heading>
            </div>
          </ScrollReveal>

          <Paragraph $invertColors={invertColors}>
            <TextMaskAnimation phrases={paragraph} delay={0.3} />
          </Paragraph>
        </Headline>

        <DesktopCarousel>
          <ScrollReveal key="set-up-repricer-carousel" style={{ position: "relative" }} index={2}>
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
            <CustomButton
              variant="contained"
              inverted={invertColors}
              endIcon={invertColors ? <EastRoundedIcon /> : null}
            >
              {invertColors ? "Start now" : "Turn On the Repricer NOW"}
            </CustomButton>
          </Link>
        </MobileButtonBox>
      </SetUpRepricerContainer>
    </Wrapper>
  );
};

export default SetUpRepricer;
