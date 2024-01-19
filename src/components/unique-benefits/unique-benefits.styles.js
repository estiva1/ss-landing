import styled from "styled-components";
import { device } from "../../breakpoints.styles";
import DelayedScrollReveal from "../../utils/framer-animations/scroll-reveal/delayed-scroll-reveal/delayed-scroll-reveal.component";
import FramerMagnetic from "../../utils/framer-animations/framer-magnetic/framer-magnetic.component";

export const UniqueBenefitsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 130px;
  background: #f1fbfe;
  gap: 50px;
  overflow: hidden;

  @media ${device.xl} {
    padding: 100px 80px;
  }
  @media ${device.xs} {
    padding: 60px 15px;
    gap: 40px;
  }
`;

export const Heading = styled.h2`
  color: #000;
  text-align: center;
  font-family: Titillium Web;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  margin: 0;

  @media ${device.xs} {
    font-size: 1.5rem;
    line-height: 132%;
  }
`;

export const Columns = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-inline: -16px;

  > *:nth-last-child(-n + 3) {
    margin-bottom: -40px;
  }

  @media ${device.xs} {
    > *:nth-last-child(-n + 3) {
      margin-bottom: 0;
    }

    > *:nth-last-child(-n + 1) {
      margin-bottom: -30px;
    }
  }
`;

export const ColumnContainer = styled.div`
  width: 33.3%;
  height: max-content;
  padding-inline: 16px;
  padding-bottom: 40px;
  //background-color: rebeccapurple;

  @media ${device.xs} {
    width: 100%;
    padding-bottom: 30px;
  }
`;

export const BenefitImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 292px;
  border-radius: 32px;
  background: #fff;
  border: 1px solid #c4c4c4;
  //box-shadow: 3.235px 3.235px 20.217px 0px rgba(111, 213, 246, 0.25), 1.2px 1.2px 2px #00a3ff;
  transition: box-shadow 0.3s ease-in-out;
  overflow: hidden;
`;

export const BenefitContainer = styled(DelayedScrollReveal)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;

  @media ${device.xs} {
    gap: 8px;
  }

  &:hover {
    ${BenefitImageBox} {
      //box-shadow: 3.235px 3.235px 20.217px 0px rgba(111, 213, 246, 0.25), 3px 3px 3px #00a3ff;
      transition: box-shadow 0.3s ease-in-out;
    }
  }
`;

export const BenefitCaptionBox = styled.div`
  width: max-content;
`;

export const CaptionSecondaryBorderBox = styled.div`
  display: flex;
  width: max-content;
  padding: 2.4px 18px;
  align-items: flex-start;
  gap: 6px;
  border-radius: 60px;
  box-shadow: inset 0px 0px 0px 1.2px #000;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: inset 0px 0px 0px 3px #000;
    transition: box-shadow 0.3s ease-in-out;
  }
`;

export const BenefitImage = styled.img`
  width: 100%;
  font-style: italic;
`;

export const CaptionPrimary = styled.span`
  color: #000;
  font-family: Titillium Web;
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  letter-spacing: 0.0225rem;
  text-transform: uppercase;

  @media ${device.xs} {
    font-size: 1.875rem;
    letter-spacing: 0.01875rem;
  }
`;

export const CaptionSecondary = styled(CaptionPrimary)`
  font-weight: 400;
`;

export const Paragraph = styled.p`
  color: #4e5969;
  font-family: Titillium Web;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.375rem;
  margin: 0;
`;

export const MobileButtonBox = styled(FramerMagnetic)`
  @media ${device.xs} {
    align-self: stretch;
  }
`;
