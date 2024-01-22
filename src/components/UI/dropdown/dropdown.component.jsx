import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { ListItem, PrimaryText, StyledAutocomplete } from "./dropdown.styles";

const Dropdown = ({ data = {}, placeholder = "", setSelectedValue, disabled }) => {
  const [value, setValue] = useState(data[0] || null);
  const [inputValue, setInputValue] = useState("");

  const handleValueChange = (event, newValue) => {
    setValue(newValue);

    // Map selected option to corresponding value
    let selectedValue;
    switch (newValue) {
      case "If you're FBA Seller...":
        selectedValue = 0;
        break;
      case "If you're 3PL Seller...":
        selectedValue = 1;
        break;
      case "If you're Agency...":
        selectedValue = 2;
        break;
      // Add more cases as needed
      default:
        selectedValue = null;
    }

    setSelectedValue(selectedValue);
  };

  return (
    <StyledAutocomplete
      id="styled-autocomplete"
      disableClearable
      disabled={disabled}
      inputMode="none"
      value={value}
      options={data}
      inputValue={inputValue}
      onChange={handleValueChange}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      getOptionLabel={(option) => `${option}`}
      renderInput={(params) => <TextField label={placeholder} {...params} />}
      renderOption={(props, option, state) => {
        return (
          <ListItem {...props}>
            <PrimaryText>{option}</PrimaryText>
          </ListItem>
        );
      }}
    />
  );
};

export default Dropdown;
