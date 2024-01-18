import styled from "styled-components";
import { device } from "../../breakpoints.styles";
import FramerMagnetic from "../../utils/framer-animations/framer-magnetic/framer-magnetic.component";

export const CtaSectionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 130px;
  background: #1565d8;
  gap: 90px;
  cursor: none;

  @media ${device.xl} {
    padding: 100px 80px;
  }
  @media ${device.xs} {
    flex-direction: column-reverse;
    padding: 60px 15px;
    gap: 40px;
  }
`;

export const Heading = styled.h2`
  color: #fff;
  text-align: center;
  font-family: Titillium Web;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  margin: 0;
  margin-bottom: 24px;

  @media ${device.xs} {
    text-align: start;
    font-size: 1.5rem;
    line-height: 132%;
    margin-bottom: 8px;
  }
`;

export const Info = styled.span`
  color: #fff;
  font-family: Titillium Web;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;

  @media ${device.xs} {
    font-weight: 400;
    line-height: 156%;
  }
`;

export const ActionContainer = styled.div`
  @media ${device.xs} {
    width: 100%;
  }
`;

export const Headline = styled.div`
  margin-bottom: 50px;

  @media ${device.xs} {
    margin-bottom: 40px;
  }
`;

export const CtaBanner = styled.svg`
  width: 338px;

  @media ${device.xs} {
    width: 100%;
  }
`;

export const MobileButtonBox = styled(FramerMagnetic)`
  @media ${device.xs} {
    align-self: stretch;
  }
`;
