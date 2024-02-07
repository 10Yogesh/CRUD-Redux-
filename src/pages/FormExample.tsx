import { Box, Button, Flex, Input, VStack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormField {
  name: "string";
  price: "number";
  description: "string";
}

const FormExample = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormField>({
    defaultValues: {},
  });

  const onSubmit: SubmitHandler<FormField> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      throw new Error();
      console.log(data);
    } catch (error) {
      setError("root", {
        message: "This product is already added",
      });
    }
  };
  return (
    <>
      <Flex justifyContent="center" alignItems="center">
        <Box pt="200px">
          <form onSubmit={handleSubmit(onSubmit)}>
            <VStack>
              <Input
                {...register("name", {
                  required: "Name is required",
                })}
                type="text"
                placeholder="Name"
              ></Input>
              {errors.name && <Box color="red">{errors.name.message}</Box>}
              <Input
                {...register("price", {
                  required: "Price is required",
                })}
                type="number"
                placeholder="Price"
              ></Input>
              {errors.price && <Box color="red">{errors.price.message}</Box>}
              <Input
                {...register("description", {
                  required: "Description is required",
                })}
                type="text"
                placeholder="Description"
              ></Input>
              {errors.price && <Box color="red">{errors.price.message}</Box>}
              <Button
                disabled={isSubmitting}
                type="submit"
                variant="outline"
                colorScheme="blue"
              >
                {isSubmitting ? "Loading..." : "Submit"}
              </Button>
              {errors.root && <Box color="red">{errors.root.message}</Box>}
            </VStack>
          </form>
        </Box>
      </Flex>
    </>
  );
};

export default FormExample;
