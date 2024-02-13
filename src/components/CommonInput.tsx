import { Box, Input } from "@chakra-ui/react";
import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface CommonInputProps {
  register: UseFormRegister<FieldValues>;
  name: string;
  placeholder: string;
  errorMessage?: string;
}

const CommonInput: React.FC<CommonInputProps> = ({
  register,
  name,
  placeholder,
  errorMessage,
}) => {
  return (
    <>
      <Input
        {...register(name, { required: `${placeholder} is required` })}
        type="text"
        placeholder={placeholder}
      />
      {errorMessage && <Box color="red">{errorMessage}</Box>}
    </>
  );
};

export default CommonInput;
