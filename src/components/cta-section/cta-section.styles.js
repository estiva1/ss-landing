import styled from "styled-components";
import { device } from "../../breakpoints.styles";
import FramerMagnetic from "../../utils/framer-animations/framer-magnetic/framer-magnetic.component";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #1565d8;
`;

export const CtaSectionContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 130px;

  gap: 90px;
  isolation: isolate;

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

export const Decal = styled.span`
  position: absolute;
  bottom: 20px;
  right: 130px;
  min-width: 350px;
  min-height: 28px;
  width: 350px;
  height: 28px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='350' height='28' fill='none'%3e%3crect width='270' height='6' y='22' fill='%23E8F0FC' rx='3'/%3e%3crect width='16' height='10' x='274' y='18' fill='%23E8F0FC' rx='4'/%3e%3crect width='16' height='14' x='294' y='14' fill='%23E8F0FC' rx='4'/%3e%3crect width='16' height='20' x='314' y='8' fill='%23E8F0FC' rx='4'/%3e%3crect width='16' height='28' x='334' fill='%23E8F0FC' rx='4'/%3e%3c/svg%3e");

  @media ${device.xl} {
    right: 80px;
  }

  @media ${device.xs} {
    display: none;
  }
`;

export const MobileButtonBox = styled(FramerMagnetic)`
  @media ${device.xs} {
    align-self: stretch;
  }
`;
