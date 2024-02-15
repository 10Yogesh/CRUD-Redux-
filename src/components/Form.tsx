import { useForm, Controller, SubmitHandler } from "react-hook-form";
import CommonInput from "./CommonInput";
import { Box, Button } from "@chakra-ui/react";

interface FormValues {
  title: string;
  description: string;
  price: string;
}

interface FormProps {
  onSubmit: SubmitHandler<FormValues>;
}

function Form({ onSubmit }: FormProps) {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<FormValues>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="title"
        render={({ field: { onChange, value } }) => (
          <CommonInput
            onChange={onChange}
            name="title"
            placeholder="Product Title"
            value={value}
          />
        )}
      />

      <Controller
        control={control}
        name="description"
        render={({ field: { onChange, value } }) => (
          <CommonInput
            onChange={onChange}
            name="description"
            placeholder="Product Description"
            value={value}
          />
        )}
      />

      <Controller
        control={control}
        name="price"
        render={({ field: { onChange, value } }) => (
          <CommonInput
            onChange={onChange}
            name="price"
            placeholder="Product Price"
            value={value}
          />
        )}
      />

      <Button
        disabled={isSubmitting}
        type="submit"
        colorScheme="green"
        mt="5px"
        size="md"
      >
        Submit
      </Button>
      {isSubmitting ? "Loading..." : ""}
    </form>
  );
}

export default Form;
