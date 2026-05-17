import { useState } from "react";
import API from "../services/api";

const CreateProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("title", title);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("location", location);
    formData.append("category", category);
    formData.append("image", image);

    await API.post("/products", formData, {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });

    alert("Product Created");
  };

  return (
    <div className="flex justify-center p-10">
      <form
        onSubmit={handleSubmit}
        className="w-[500px] shadow-lg p-5 rounded"
      >
        <h1 className="text-3xl font-bold mb-5">Sell Product</h1>

        <input
          type="text"
          placeholder="Title"
          className="border p-2 w-full mb-3"
          onChange={(e) => setTitle(e.target.value)}
        />

         <input
          type="number"
          placeholder="Price"
          className="border p-2 w-full mb-3"
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          type="text"
          placeholder="Location"
          className="border p-2 w-full mb-3"
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          type="text"
          placeholder="Category"
          className="border p-2 w-full mb-3"
          onChange={(e) => setCategory(e.target.value)}
        />

        <textarea
          placeholder="Description"
          className="border p-2 w-full mb-3"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <input
          type="file"
          className="mb-4"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <button className="bg-black text-white w-full p-2 rounded">
          Upload Product
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;