import React, { useState, useEffect } from "react";
import { commerce } from "./components/lib/commerce";
import { Products, Navbar } from "./components";

const App = () => {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const response = await commerce.products.list();
    setProducts(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);

  return (
    <div>
      <Navbar />
      <Products products={products} />
    </div>
  );
};

export default App;
