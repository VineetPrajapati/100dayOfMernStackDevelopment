import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <div className="mb-4">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-40 object-cover rounded-lg shadow-md"
        />
      </div>
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        {product.title}
      </h2>
      <p className="text-lg font-bold text-gray-600 mb-4">
        Rs. {product.price}
      </p>
      <Link
        to={`/product/${product._id}`}
        className="inline-block bg-blue-500 text-white py-2 px-4 rounded-lg text-center hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
      >
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
