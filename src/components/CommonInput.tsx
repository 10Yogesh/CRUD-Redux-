import { Box, Input } from "@chakra-ui/react";
import React from "react";

interface CommonInputProps {
  onChange: (value: string) => void;
  name: string;
  placeholder: string;
  errorMessage?: string;
}

const CommonInput: React.FC<CommonInputProps> = ({
  onChange,
  placeholder,
  errorMessage,
}) => {
  return (
    <>
      <Input
        isRequired
        onChange={(e) => onChange(e.target.value)}
        type="text"
        placeholder={placeholder}
      />
      {errorMessage && <Box color="red">{errorMessage}</Box>}
    </>
  );
};

export default CommonInput;
