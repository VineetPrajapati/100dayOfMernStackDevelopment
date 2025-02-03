import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded shadow-lg">
      <img
        src={product.image}
        alt={product.title}
        className="bg-amber-400 w-full h-40 object-cover mb-4"
      />
      <h2 className="text-xl font-bold">{product.title}</h2>
      <p className="text-gray-700">${product.price}</p>
      <Link to={`/product/${product._id}`} className="block mt-2 bg-blue-500 text-white py-2 px-4 text-center rounded">View Details</Link>
    </div>
  );
};

export default ProductCard;
