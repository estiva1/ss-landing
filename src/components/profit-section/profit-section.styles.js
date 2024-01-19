import styled from "styled-components";
import { device } from "../../breakpoints.styles";

export const ProfitSectionContainer = styled.section`
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
  }
`;
