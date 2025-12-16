import React from "react";
import ProductCard from "./components/ProductCard/ProductCard";

function App() {
  return (
    <div>
    <ProductCard  name="sample product" price = {29.99} isAvailable={true} />
    <ProductCard  name="another product" price = {19.99} isAvailable={false} />
    <ProductCard  name="product-list" price = {18.99} isAvailable={false} />
    </div>
  );
}
export default App;