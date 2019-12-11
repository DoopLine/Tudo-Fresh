import React from "react";
import { FiX } from "react-icons/fi";

import { Container, Input, CleanButton, Label } from "./styled";

const InputText = ({
  placeholder = "",
  label = "",
  value = "",
  onClean,
  onChange,
  name,
  required = false,
  type = "text",
  ...otherProps
}) => {
  return (
    <Container>
      <Input
        id={name}
        type={type}
        autoCorrect="true"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        autoFocus={true}
        name={name}
        required={required}
        {...otherProps}
      />
      {value && (
        <CleanButton>
          <FiX onClick={onClean} />
        </CleanButton>
      )}
      <Label htmlFor={name} shink={value.length !== 0}>{label}</Label>
    </Container>
  );
};

export default InputText;
