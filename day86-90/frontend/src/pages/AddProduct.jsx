import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [image, setImage] = useState("");
  const token = useSelector((state) => state.auth.token);

  const addProduct = async (e) => {
    e.preventDefault();
    console.log("Token being sent:", token); // debugging
    try {
      const token = localStorage.getItem("token"); // Check if token exists

      if (!token) {
        return (
          <p className="text-center text-red-500 text-lg">
            You must be logged in to add a product.
          </p>
        );
      }

      const res = await axios.post(
        "http://localhost:8080/api/product/add",
        { title, description, price, stock, image },
        { headers: { Authorization: `Bearer ${token}` } } // Send token
      );
      console.log("Product added:", res.data);
      toast.success("Product added!", {
        position: "bottom-left",
        theme: "colored",
      });
      // Success toast
      // Reset form fields
      setTitle("");
      setDescription("");
      setPrice("");
      setStock("");
      setImage("");
    } catch (error) {
      console.error("Add product failed", error.response.data);
    }
  };

  return (
    <form
      onSubmit={addProduct}
      className="max-w-lg mx-auto p-8 bg-white shadow-xl rounded-xl border border-gray-200"
    >
      <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">
        Add Product
      </h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-3 border m-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-3 border m-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></textarea>
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="w-full p-3 border m-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="number"
        placeholder="Stock"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
        className="w-full p-3 border m-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className="w-full p-3 border m-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="w-full p-3 m-2 bg-blue-600 text-white rounded-md text-lg font-semibold cursor-pointer hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        Add Product
      </button>
    </form>
  );
};

export default AddProduct;
