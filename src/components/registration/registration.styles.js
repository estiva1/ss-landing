import { styled } from "styled-components";
import { device } from "../../breakpoints.styles";

export const RegistrationContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-inline: 130px;
  height: 100vh;
  gap: 50px;
  background: #f1fbfe;

  @media ${device.xs} {
    padding-inline: 20px;
  }
`;

export const CreatePasswordFrame = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 48px;
  align-items: center;
  gap: 32px;
  border-radius: 20px;
  border: 2px solid #6fd5f6;
  background: #fff;
  box-shadow: 4px 4px 25px 0px rgba(111, 213, 246, 0.25);

  @media ${device.xs} {
    width: 100%;
  }
`;

export const CreatePasswordFrameContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  align-self: stretch;
`;

export const Headline = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 17px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  align-self: stretch;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
`;

export const StyledTextField = styled.input`
  min-width: 100%;
  height: 38px;
  padding: 10px;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  box-shadow: inset 0px 0px 0px 1px #e6e6e6;
  border: none;
  transition: box-shadow 0.3s ease-in-out;
  color: #4e5969;
  font-family: "Titillium Web", sans-serif !important;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem;

  &::placeholder {
    color: #c4c4c4;
  }

  &:focus {
    box-shadow: inset 0px 0px 0px 2px #1565d8;
    transition: box-shadow 0.3s ease-in-out;
    outline: none !important;
  }
`;

export const Heading = styled.h1`
  color: #000;
  margin: 0;
  text-align: center;
  font-family: Titillium Web;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25rem;
`;

export const Support = styled.span`
  color: #4e5969;
  margin: 0;
  font-family: Titillium Web;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem;
`;

export const InputLabel = styled.label`
  color: #000;
  margin: 0;
  font-family: Titillium Web;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.125rem;
`;

export const FooterAgreement = styled.span`
  color: #c4c4c4;
  margin: 0;
  text-align: center;
  font-family: Titillium Web;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 400;
  line-height: 0.75rem;
`;

export const Hyperlink = styled.a`
  text-decoration: none;
  text-decoration-line: underline;
  color: inherit;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    text-decoration-color: rgb(157, 167, 178);
  }

  &:focus {
    outline: 0.125rem solid #1565D8;
    border-radius: 0.375rem;
    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  }
`;
