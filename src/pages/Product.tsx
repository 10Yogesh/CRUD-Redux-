import { useQuery } from "@tanstack/react-query";
import { fetchProduct } from "../api/products";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, Heading, Text } from "@chakra-ui/react";

const Product = () => {
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

  if (isLoading) return "Loading...";
  if (isError) return `Error:${error.message}`;

  return (
    <Box>
      <Button onClick={() => navigate("/")}>Back to list products</Button>
      <Heading>{product.title}</Heading>
      <Text>{product.description}</Text>
      <Text>{product.price}</Text>
    </Box>
  );
};

export default Product;
