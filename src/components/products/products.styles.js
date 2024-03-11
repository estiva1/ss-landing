import styled from "styled-components";
import { device } from "../../breakpoints.styles";
import FramerMagnetic from "../../utils/framer-animations/framer-magnetic/framer-magnetic.component";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #0b2447;
`;

export const ProductsContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 130px;
  gap: 50px;
  overflow: hidden;

  @media ${device.xl} {
    padding: 100px 80px;
  }
  @media ${device.lg} {
    padding: 80px 60px;
  }
  @media ${device.smd} {
    padding: 60px 50px;
  }
  @media ${device.sm} {
    padding: 60px 30px;
  }
  @media ${device.xs} {
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
  transition: all 0.25s ease-in;

  ${({ $highlighted }) =>
    $highlighted &&
    `
      display: inline-flex;
      width: max-content;
      background-image: linear-gradient(315deg, #045de9 0%, #09c6f9 74%);
      background-repeat: no-repeat;
      background-size: 100% 20%;
      background-position: 0 90%;
      transition: all 0.25s ease-in;

      &:hover {
        color: #fff;
        -webkit-text-stroke: 1px black;
        background-size: 100% 90%;
        transition: all 0.25s ease-in;
      }
  `}

  @media ${device.xs} {
    font-size: 1.5rem;
    line-height: 132%;
  }
`;

export const ProductsList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  gap: 100px;

  @media ${device.smd} {
    gap: 64px;
  }
  @media ${device.xs} {
    gap: 32px;
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 40px;

  &:nth-child(even) {
    flex-direction: row-reverse;
  }

  @media ${device.md} {
    flex-direction: column-reverse;
    gap: 12px;

    &:nth-child(even) {
      flex-direction: column-reverse;
    }
  }
`;

export const About = styled.div`
  width: fit-content;

  @media ${device.md} {
    width: 100%;
  }
`;

export const Caption = styled.h3`
  color: #f0e996;
  font-family: Titillium Web;
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  margin: 0;
  margin-bottom: 8px;

  @media ${device.xs} {
    font-size: 1.25rem;
    line-height: 156%;
  }
`;

export const Description = styled.p`
  color: #fff;
  font-family: Titillium Web;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
  margin: 0;

  @media ${device.xs} {
    font-size: 1rem;
    line-height: 140%;
  }
`;

export const ProductImage = styled.img`
  width: 640px;
  height: 100%;
  border-radius: 8px;
  border: 2px solid #00a3ff;
  box-shadow: 4px 4px 25px 0px rgba(111, 213, 246, 0.25);

  @media ${device.xl} {
    width: 520px;
  }

  @media only screen and (${device.md}) {
    width: 100%;
  }
`;

export const MobileButtonBox = styled(FramerMagnetic)`
  @media ${device.xs} {
    align-self: stretch;
  }
`;
