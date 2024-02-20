import AddProduct from "../components/AddProduct";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteProduct, fetchProducts } from "../api/products";
import { useNavigate } from "react-router-dom";
import CommonTable from "../components/CommonTable";

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
    console.log("First");
  };

  const columns = ["Title", "Description", "Price"];

  return (
    <>
      <AddProduct />

      <CommonTable
        products={products}
        columns={columns}
        navigate={navigate}
        handleDelete={handleDelete}
      />
    </>
  );
};

export default ProductLists;
