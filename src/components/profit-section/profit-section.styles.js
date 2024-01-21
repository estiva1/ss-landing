import styled from "styled-components";
import { device } from "../../breakpoints.styles";

export const Wrapper = styled.section`
  background: #1565d8;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfitSectionContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 130px;
  background: #1565d8;

  @media ${device.xl} {
    padding: 40px 80px;
  }
  @media ${device.xs} {
    padding: 40px 15px;
    flex-direction: column;
    row-gap: 32px;

    > * {
      width: 100%;
    }
  }
`;
