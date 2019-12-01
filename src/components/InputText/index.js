import React from "react";
import { FiX } from "react-icons/fi";

import { Container, Input, CleanButton } from "./styled";

const InputText = ({ placeholder = "", value = "", onClean, onChange }) => {
  return (
    <Container>
      <Input
        type="text"
        autoCorrect="true"
        inputMode="text"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        autoFocus={true}
      />
      {value && (
        <CleanButton>
          <FiX onClick={onClean} />
        </CleanButton>
      )}
    </Container>
  );
};

export default InputText;
