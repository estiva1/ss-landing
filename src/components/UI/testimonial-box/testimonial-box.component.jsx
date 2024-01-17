import React from "react";
import { Stack } from "@mui/material";

import {
  About,
  Avatar,
  AvatarContainer,
  Circle,
  ClientHeadline,
  ClientName,
  Quotes,
  TestimonialBoxBody,
  TestimonialBoxContainer,
  TestimonialBoxHeader,
  TestimonialText,
} from "./testimonial-box.styles";
import TextTypingAnimation from "../../../utils/framer-animations/text-typing-animation/text-typing-animation.componen";

const TestimonialBox = ({ avatar, clientName, clientHeadline, testimonialText }) => {
  return (
    <TestimonialBoxContainer>
      <TestimonialBoxHeader>
        <Stack direction="row" gap="4px">
          <Circle />
          <Circle />
          <Circle />
        </Stack>
      </TestimonialBoxHeader>

      <TestimonialBoxBody>
        <Stack direction="row" gap="12px" alignItems="center">
          <AvatarContainer>
            <Avatar src={avatar} alt={clientName} loading="lazy" />
          </AvatarContainer>

          <About>
            <ClientName>{clientName}</ClientName>
            <ClientHeadline>{clientHeadline}</ClientHeadline>
          </About>
        </Stack>

        <Stack spacing="8px">
          <Quotes />

          <TestimonialText>
            <TextTypingAnimation text={testimonialText} />
          </TestimonialText>
        </Stack>
      </TestimonialBoxBody>
    </TestimonialBoxContainer>
  );
};

export default TestimonialBox;
