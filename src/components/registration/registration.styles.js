import { Box } from "@mui/material";
import { styled } from "styled-components";

export const RegistrationContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 130px;
  align-items: center;
  height: 100vh;
  gap: 50px;
  background: #f1fbfe;
`;

export const CreatePasswordFrame = styled(Box)`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 400px;
  max-width: 400px;
  padding: 48px 40px 32px 40px;
  align-items: center;
  gap: 32px;
  border-radius: 20px;
  border: 2px solid #6fd5f6;
  background: #fff;
  box-shadow: 4px 4px 25px 0px rgba(111, 213, 246, 0.25);
`;

export const CreatePasswordFrameContent = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  align-self: stretch;
`;

export const CreatePasswordFrameContentTop = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 17px;
`;

export const CreatePasswordFrameContentBottom = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  align-self: stretch;
`;

export const InputsContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`;

export const InputItem = styled(Box)`
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

export const PasswordFrameHeadingText = styled.h3`
  color: #000;
  margin: 0;
  text-align: center;
  font-family: Titillium Web;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25rem;
`;

export const PasswordFrameSubHeadingText = styled.h4`
  color: #4e5969;
  margin: 0;
  font-family: Titillium Web;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem;
`;

export const InputNameText = styled.h4`
  color: #000;
  margin: 0;
  font-family: Titillium Web;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.125rem;
`;

export const SpanText = styled.h6`
  color: #c4c4c4;
  margin: 0;
  text-align: center;
  font-family: Titillium Web;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 400;
  line-height: 0.75rem;
`;
