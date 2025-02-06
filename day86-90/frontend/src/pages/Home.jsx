import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/product")
      .then((res) => setProducts(res.data))
      .catch((err) => console.err(err));
  }, []);
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">
        Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
