import React from "react";
import Form from "../components/Form";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchProduct, updateProduct } from "../api/products";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    isLoading,
    isError,
    data: product,
    error,
  } = useQuery({
    queryKey: ["products", id],
    queryFn: () => fetchProduct(id),
  });

  const queryClient = useQueryClient();

  const updateProductMutation = useMutation({
    mutationFn: updateProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      navigate("/");
    },
  });

  if (isLoading) return "Loading...";
  if (isError) return `Error:${error.message}`;
  console.log(product);

  const handleSubmit = (updatedProduct) => {
    updateProductMutation.mutate({ id, ...updatedProduct });
  };
  return (
    <>
      <Form onSubmit={handleSubmit} initialValue={product} />
    </>
  );
};

export default EditProduct;
