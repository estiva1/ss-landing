import styled from "styled-components";
import { device } from "../../../breakpoints.styles";

export const TestimonialBoxContainer = styled.div`
  display: flex;
  width: 340px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 20px;

  @media ${device.lg} {
    width: 286px;
  }
  @media ${device.md} {
    width: 100%;
  }
`;

export const TestimonialBoxHeader = styled.div`
  display: flex;
  height: 20px;
  align-items: center;
  align-self: stretch;
  padding-left: 24px;
  background: #0b2447;
  border-radius: 20px 20px 0px 0px;
`;

export const Circle = styled.span`
  width: 6px;
  height: 6px;
  background: #fff;
  border-radius: 50%;
`;

export const TestimonialBoxBody = styled.div`
  display: flex;
  flex-direction: column;
  height: 260px;
  padding: 16px;
  gap: 16px;
  background: #fff;
  border: 1px solid #c4c4c4;
  border-radius: 0px 0px 20px 20px;

  @media ${device.md} {
    height: auto;
  }
`;

export const AvatarContainer = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  overflow: hidden;

  @media ${device.md} {
    width: 108px;
    height: 108px;
  }
  @media ${device.smd} {
    width: 72px;
    height: 72px;
  }
  @media ${device.xs} {
    width: 56px;
    height: 56px;
  }
`;

export const Avatar = styled.img`
  width: 100%;
  font-style: italic;
`;

export const About = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media ${device.xs} {
    gap: 0px;
  }
`;

export const ClientName = styled.span`
  color: #000;
  font-family: Titillium Web;
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 600;
  line-height: 136%;

  @media ${device.md} {
    font-size: 1.5rem;
  }
  @media ${device.smd} {
    font-size: 1.375rem;
  }
  @media ${device.xs} {
    font-size: 1.125rem;
  }
`;

export const ClientHeadline = styled.span`
  color: #4e5969;
  font-family: Titillium Web;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 132%;

  @media ${device.md} {
    font-size: 1.375rem;
  }
  @media ${device.smd} {
    font-size: 1rem;
  }
  @media ${device.xs} {
    font-size: 0.875rem;
    font-weight: 400;
  }
`;

export const Quotes = styled.span`
  min-width: 34px;
  min-height: 24px;
  width: 34px;
  height: 24px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='34' height='24' fill='none'%3e%3cpath fill='%231565D8' d='M0 24V10.6435L7.2089 0h7.2088L9.7911 10.6435h5.2722V24H0Zm18.9367 0V10.6435L26.1456 0h7.2088l-4.6266 10.6435H34V24H18.9367Z'/%3e%3c/svg%3e");

  @media ${device.md} {
    min-width: 51px;
    min-height: 36px;
    width: 51px;
    height: 36px;
  }
  @media ${device.smd} {
    min-width: 34px;
    min-height: 24px;
    width: 34px;
    height: 24px;
  }
  @media ${device.xs} {
    display: none;
  }
`;

export const TestimonialText = styled.p`
  color: #000;
  font-family: Titillium Web;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;

  @media ${device.md} {
    font-size: 1rem;
  }
  @media ${device.smd} {
    font-size: 0.875rem;
  }
  @media ${device.xs} {
    font-size: 0.75rem;
  }
`;
