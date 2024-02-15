import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { createProduct } from "../api/products";
import Form from "./Form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { v4 as uuidv4 } from "uuid";
import { SubmitHandler } from "react-hook-form";

interface FormField {
  ProductTitle: string;
  ProductDescription: string;
  ProductPrice: string;
}

const AddProduct = () => {
  const queryClient = useQueryClient();

  const createPostMutation = useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      console.log("success");
    },
  });

  const handleAddProduct: SubmitHandler<FormField> = (product) => {
    createPostMutation.mutate({
      id: uuidv4(),
      ...product,
    });
  };

  return (
    <>
      <Box>
        <Heading>Add new product</Heading>
        <Form onSubmit={handleAddProduct} />
      </Box>
    </>
  );
};

export default AddProduct;
