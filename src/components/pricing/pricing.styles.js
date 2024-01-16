import styled from "styled-components";
import { device } from "../../breakpoints.styles";

export const PricingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 130px;
  background: #f1fbfe;
  gap: 50px;
  cursor: none;

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

export const PricingVariantsBox = styled.div`
  display: flex;
  padding: 10px;
  align-self: stretch;
  justify-content: space-between;
  border-radius: 30px;
  border: 2px solid #1565d8;
  background: #fff;
  overflow: hidden;

  @media ${device.xs} {
    display: block;
  }
`;

export const BasicSubscription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 64px;
  gap: 40px;
  background: #fff;
  border-radius: 20px;

  @media ${device.xs} {
    gap: 24px;
    padding: 32px 10px;
  }
`;

export const PremiumSubscription = styled(BasicSubscription)`
  background: #000;
`;

export const Columns = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-inline: -20px;
  //background-color: red;
  /* > *:nth-last-child(-n + 3) {
    margin-bottom: -12px;
  } */

  @media ${device.xs} {
    > *:nth-last-child(-n + 3) {
      margin-bottom: 0;
    }

    /* > *:nth-last-child(-n + 1) {
      margin-bottom: -30px;
    } */
  }
`;

export const ColumnContainer = styled.div`
  width: 33.3%;
  height: max-content;
  padding-inline: 20px;
  padding-bottom: 24px;
  //background-color: rebeccapurple;

  @media ${device.xs} {
    width: 100%;
  }
`;

export const SubscriptionHeadline = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  @media ${device.xs} {
    gap: 16px;
  }
`;

export const PriceVariantsHeading = styled.span`
  color: ${({ $inverted }) => ($inverted ? "#fff" : "#000")};
  text-align: center;
  font-family: Titillium Web;
  font-size: ${({ $enlarged }) => ($enlarged ? "2.5rem" : "2rem")};
  font-style: normal;
  font-weight: 700;
  line-height: 120%;

  @media ${device.xs} {
    font-size: ${({ $enlarged }) => ($enlarged ? "1.875rem" : "1.5rem")};
    line-height: 132%;
  }
`;

export const Price = styled.span`
  color: ${({ $inverted }) => ($inverted ? "#fff" : "#000")};
  font-family: Titillium Web;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const OptionText = styled.span`
  color: ${({ $inverted }) => ($inverted ? "#fff" : "#000")};
  font-family: Titillium Web;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;

export const CheckMark = styled.span`
  min-width: 24px;
  min-height: 24px;
  width: 24px;
  height: 24px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none'%3e%3cg clip-path='url(%23a)'%3e%3ccircle cx='12' cy='12' r='12' fill='%2301CB99'/%3e%3cpath fill='%23fff' d='m13.1 15.14 4.74-4.57a1 1 0 0 0-1.39-1.44L11.7 13.7a1 1 0 0 1-1.44-.03l-2.28-2.11a1 1 0 0 0-1.36 1.46l2.25 2.1a3 3 0 0 0 4.23 0Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='%23fff' d='M0 0h24v24H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
`;

export const MobileButtonBox = styled.div`
  @media ${device.xs} {
    align-self: stretch;
  }
`;
