import React, { useState } from "react";

import CustomButton from "../UI/button/button.component";
import Sparkles from "../UI/sparkles/sparkles.component";
import CustomTextField from "../UI/textfield/textfield.component";

import FramerMagnetic from "../../utils/framer-animations/framer-magnetic/framer-magnetic.component";
import TextMaskAnimation from "../../utils/framer-animations/text-mask-animation/text-mask-animation.component";
import ScrollReveal from "../../utils/framer-animations/scroll-reveal/simple-scroll-reveal/scroll-reveal.component";
import TextTypingAnimation from "../../utils/framer-animations/text-typing-animation/text-typing-animation.componen";

import EastRoundedIcon from "@mui/icons-material/EastRounded";

import {
  FormBox,
  Headline,
  HeroContainer,
  HeroContent,
  HeroParagraph,
  HeroParagraphHighlighted,
  HeroText,
  InfoBottom,
  InfoBottomGroup,
  InfoTop,
  InfoTopBox,
  LockLogo,
  ResponsiveStack,
  StyledHeroSvg,
  SubHeadline,
} from "./hero.styles";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const heroTextOne = "With our Ai Repricing, it's\n Prime day…";
  const heroTextTwo = ["Every day!"];

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
    <HeroContainer>
      <HeroContent>
        <Headline>
          <HeroText>
            <TextTypingAnimation text={heroTextOne} />
          </HeroText>
          <HeroText $highlighted>
            <TextMaskAnimation phrases={heroTextTwo} delay={2} />
          </HeroText>
        </Headline>
        <SubHeadline>
          <ScrollReveal key="hero-paragraph" index={1}>
            <HeroParagraph>
              The only Ai Repricer that will automatically&nbsp;
              <HeroParagraphHighlighted>increase your sales by 30%</HeroParagraphHighlighted>, or&nbsp;
              <HeroParagraphHighlighted>we'll pay you $100</HeroParagraphHighlighted>&nbsp;for wasting your time
            </HeroParagraph>
          </ScrollReveal>
        </SubHeadline>

        <FormBox>
          <form id="startFreeTrialForm" onSubmit={handleSubmit}>
            <InfoTopBox>
              <Sparkles>
                <InfoTop>Sign up for free today!</InfoTop>
              </Sparkles>
            </InfoTopBox>

            <ResponsiveStack direction="row" gap="10px" alignItems="center">
              <CustomTextField id="email" name="email" placeholder="Email" value={email} onChange={handleChange} />
              <CustomButton type="submit" variant="contained" endIcon={<EastRoundedIcon />} disabled={!email.trim()}>
                Start free trial
              </CustomButton>
            </ResponsiveStack>

            <InfoBottomGroup direction="row" gap="10px" alignItems="center">
              <LockLogo />
              <InfoBottom>No credit card required</InfoBottom>
            </InfoBottomGroup>
          </form>
        </FormBox>
      </HeroContent>

      
    </HeroContainer>
  );
};

export default Hero;
