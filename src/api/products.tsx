export async function fetchProducts() {
  const response = await fetch("http://localhost:3000/products");
  return response.json();
}

export async function fetchProduct(id) {
  const response = await fetch(`http://localhost:3000/products/${id}`);
  return response.json();
}

export async function createProduct(newProduct) {
  const response = await fetch("http://localhost:3000/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newProduct),
  });
  return response.json();
}

export async function updateProduct(updatedProduct) {
  const response = await fetch(
    `http://localhost:3000/products/${updatedProduct.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    }
  );
  return response.json();
}

export async function deleteProduct(id) {
  const response = await fetch(`http://localhost:3000/products/${id}`, {
    method: "DELETE",
  });
  return response.json();
}
