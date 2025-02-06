import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/api/product/${id}`);
        setProduct(res.data);
        // console.log("Product: ", product)
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch product", err);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
      <div className="flex justify-center mb-6">
        <img
          src={product?.image}
          alt={product?.title}
          className="w-full max-w-lg h-auto rounded-lg shadow-md object-cover"
        />
      </div>

      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-4">
        {product?.title}
      </h1>
      <p className="text-lg text-gray-600 mb-4">{product?.description}</p>
      <div className="my-4 flex justify-between items-center">
        <p className="text-2xl font-bold text-gray-800">Rs. {product?.price}</p>
      </div>

      <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;
