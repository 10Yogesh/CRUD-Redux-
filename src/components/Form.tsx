import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import CommonInput from "./CommonInput";

interface Product {
  title: string;
  description: string;
  price: string;
}

interface FormProps {
  onSubmit: SubmitHandler<Product>;
  initialValue: Product;
}

const Form: React.FC<FormProps> = ({ onSubmit, initialValue }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<Product>({
    defaultValues: {},
  });

  React.useEffect(() => {
    if (initialValue) {
      setValue("title", initialValue.title || "");
      setValue("description", initialValue.description || "");
      setValue("price", initialValue.price || "");
    }
  }, [initialValue, setValue]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <CommonInput
            register={register}
            name="title"
            placeholder="Product Title"
            errorMessage={errors.title?.message}
          />
          <CommonInput
            register={register}
            name="description"
            placeholder="Product description"
            errorMessage={errors.title?.message}
          />
          <CommonInput
            register={register}
            name="price"
            placeholder="Product price"
            errorMessage={errors.title?.message}
          />

          <Button disabled={isSubmitting} type="submit">
            Submit
          </Button>
          {isSubmitting ? "Loading..." : ""}
        </Box>
      </form>
    </>
  );
};

export default Form;
