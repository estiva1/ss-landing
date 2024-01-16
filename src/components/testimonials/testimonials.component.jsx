import React from "react";
import { Link } from "react-router-dom";

import CustomButton from "../UI/button/button.component";
import TestimonialBox from "../UI/testimonial-box/testimonial-box.component";
import FramerMagnetic from "../../utils/framer-animations/framer-magnetic/framer-magnetic.component";
import TextTypingAnimation from "../../utils/framer-animations/text-typing-animation/text-typing-animation.componen";

import client1 from "../../assets/client-1.jpg";
import client2 from "../../assets/client-2.jpg";
import client3 from "../../assets/client-3.jpg";

import {
  ColumnContainer,
  Columns,
  MobileButtonBox,
  MotionHeading,
  Paragraph,
  ShapeOne,
  ShapeThree,
  ShapeTwo,
  TestimonialContainer,
  TestimonialsContainer,
} from "./testimonials.styles";

const Testimonials = () => {
  const heading = "Clients Feedback on our The Best Repricing solution";
  const paragraph = "See what Clients think of our service and unclose the ways to your success!";

  const clients = [
    {
      avatar: client1,
      name: "Joe C.",
      headline: "ACMA Tech CEO",
      testimonialText:
        "I am thrilled to share my outstanding experience with Sales.Support, the AI repricing service that has truly transformed the way I manage my Amazon business!",
    },
    {
      avatar: client2,
      name: "Kelly K.",
      headline: "LogiLockers Head of Business",
      testimonialText:
        "Since integrating this AI repricing service into my Amazon business, I've seen a remarkable boost in sales and profitability. The adaptability of the AI, coupled with excellent customer support, sets Sales.Support apart.",
    },
    {
      avatar: client3,
      name: "Samuel S.",
      headline: "FiniCo S&L CEO",
      testimonialText:
        "Comprehensive analytics and insights help refine my strategy for maximum growth. If you're serious about success on Amazon, Sales.Support is a game-changer!",
    },
  ];

  return (
    <TestimonialsContainer>
      <ShapeOne />
      <ShapeTwo />
      <ShapeThree />

      <div>
        <MotionHeading>
          <TextTypingAnimation text={heading} />
        </MotionHeading>

        <Paragraph>
          <TextTypingAnimation text={paragraph} />
        </Paragraph>
      </div>

      <Columns>
        {clients.map((client, index) => (
          <ColumnContainer key={index}>
            <TestimonialContainer index={index}>
              <TestimonialBox
                avatar={client.avatar}
                clientName={client.name}
                clientHeadline={client.headline}
                testimonialText={client.testimonialText}
              />
            </TestimonialContainer>
          </ColumnContainer>
        ))}
      </Columns>

      <MobileButtonBox>
        <FramerMagnetic>
          <Link to="/registration">
            <CustomButton variant="contained">Become a Client Now</CustomButton>
          </Link>
        </FramerMagnetic>
      </MobileButtonBox>
    </TestimonialsContainer>
  );
};

export default Testimonials;
