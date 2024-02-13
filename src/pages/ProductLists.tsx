import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Center,
  Stack,
  StackDivider,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import AddProduct from "../components/AddProduct";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteProduct, fetchProducts } from "../api/products";
import { useNavigate } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  description: string;
}

const ProductLists = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const {
    isLoading,
    isError,
    data: products,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const deleteProductMutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  if (isLoading) return "Loading...";
  if (isError) return `Error: ${error.message}`;

  const handleDelete = (id) => {
    deleteProductMutation.mutate(id);
  };

  return (
    <>
      <Stack spacing={10}>
        <AddProduct />
        <Center>
          <TableContainer w="1200px">
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Product Title</Th>
                  <Th>Description</Th>
                  <Th isNumeric>Price</Th>
                  <Th>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                {products.map((product) => (
                  <Tr key={product.id}>
                    <Td
                      cursor="pointer"
                      onClick={() => navigate(`/products/${product.id}`)}
                    >
                      {product.title}
                    </Td>
                    <Td
                      cursor="pointer"
                      onClick={() => navigate(`/products/${product.id}`)}
                    >
                      {product.description}
                    </Td>
                    <Td
                      isNumeric
                      cursor="pointer"
                      onClick={() => navigate(`/products/${product.id}`)}
                    >
                      ${product.price}
                    </Td>
                    <Td>
                      <ButtonGroup gap="4">
                        <Button
                          colorScheme="blue"
                          onClick={() =>
                            navigate(`/products/${product.id}/edit`)
                          }
                          mt="2"
                          size="md"
                        >
                          Edit
                        </Button>
                        <Button
                          colorScheme="blue"
                          onClick={handleDelete}
                          mt="5px"
                          size="md"
                        >
                          Delete
                        </Button>
                      </ButtonGroup>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Center>
      </Stack>
    </>
  );
};

export default ProductLists;
