import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductLists from "./pages/ProductLists";
import Product from "./pages/Product";
import EditProduct from "./pages/EditProduct";
import { Heading } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Heading>React query</Heading>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductLists />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/products/:id/edit" element={<EditProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
