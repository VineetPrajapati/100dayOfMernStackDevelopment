import { useState } from "react";

const Contact = () => {
  const [form, setform] = useState({ name: "", message: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setform((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.message) {
      return alert("No types message found by you!");
    }
    alert(`Message sent by ${form.name}`);
  };
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="bock text-gray-700">Name:</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </div>
        <div>
          <label className="block text-gray-700">Message:</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
