import styled from "styled-components";
import Autocomplete from "@mui/material/Autocomplete";

export const StyledAutocomplete = styled(Autocomplete)`
  .MuiAutocomplete-inputRoot {
    color: #78909c;
    font-family: Titillium Web;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    border-radius: 40px;
    border: 1px solid #1565d8;
    background: #e8f0fc;
    fieldset {
      border: none !important;
    }
  }

  .MuiFormLabel-root {
    color: #78909c;
    font-family: Titillium Web;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    padding-top: 1px;
  }
  .MuiAutocomplete-clearIndicator {
    color: #1565d8;
  }
  .MuiAutocomplete-popupIndicator {
    color: #1565d8;
  }
`;

export const PrimaryText = styled.h3`
  color: #000;
  font-family: Titillium Web;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1rem;
  text-transform: capitalize;
  margin: 0;
`;

export const ListItem = styled.li`
  width: 100%;
  border-bottom: 1px solid #eef1f5;
`;
