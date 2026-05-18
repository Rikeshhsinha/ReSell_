import React, { useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

import {
  FaBoxOpen,
  FaImage,
  FaMapMarkerAlt,
} from "react-icons/fa";


const SellProduct = () => {

  const navigate = useNavigate();

  const [title, setTitle] = useState("");

  const [price, setPrice] = useState("");

  const [category, setCategory] = useState("");

  const [brand, setBrand] = useState("");

  const [condition, setCondition] = useState("");

  const [description, setDescription] = useState("");

  const [location, setLocation] = useState("");

  const [images, setImages] = useState([]);

  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);


  // Submit Product
  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    setMessage("");

    try {

      // Token
      const token = localStorage.getItem("token");

      // FormData
      const formData = new FormData();

      formData.append("title", title);

      formData.append("price", price);

      formData.append("category", category);

      formData.append("brand", brand);

      formData.append("condition", condition);

      formData.append("description", description);

      formData.append("location", location);

      // Multiple Images
      images.forEach((image) => {

        formData.append("images", image);

      });

      // API
      const res = await axios.post(
        "https://resell-4hzi.onrender.com/api/products",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(res.data);

      setMessage("Product Added Successfully ✅");


      // Clear
      setTitle("");

      setPrice("");

      setCategory("");

      setBrand("");

      setCondition("");

      setDescription("");

      setLocation("");

      setImages([]);


      // Redirect
      setTimeout(() => {

        navigate("/");

      }, 1500);

    } catch (error) {

      console.log(error);

      setMessage(
        error.response?.data?.message ||
        "Failed To Add Product ❌"
      );

    } finally {

      setLoading(false);

    }
  };


  return (

    <div className="min-h-screen bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-500 flex items-center justify-center px-4 py-10">

      <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="bg-blue-600 text-white p-8 text-center">

          <h1 className="text-4xl md:text-5xl font-bold flex items-center justify-center gap-3">

            <FaBoxOpen />

            Sell Product

          </h1>

          <p className="mt-3 text-blue-100 text-lg">
            Add complete product details for buyers
          </p>

        </div>


        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="p-8 grid md:grid-cols-2 gap-6"
        >

          {/* Product Title */}
          <div>

            <label className="block mb-2 font-semibold text-gray-700">
              Product Title
            </label>

            <input
              type="text"
              placeholder="iPhone 14 Pro"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

          </div>


          {/* Price */}
          <div>

            <label className="block mb-2 font-semibold text-gray-700">
              Price
            </label>

            <input
              type="number"
              placeholder="₹50000"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full border rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

          </div>


          {/* Category */}
          <div>

            <label className="block mb-2 font-semibold text-gray-700">
              Category
            </label>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              required
            >

              <option value="">
                Select Category
              </option>

              <option value="Mobiles">
                Mobiles
              </option>

              <option value="Cars">
                Cars
              </option>

              <option value="Bikes">
                Bikes
              </option>

              <option value="Furniture">
                Furniture
              </option>

            </select>

          </div>


          {/* Brand */}
          <div>

            <label className="block mb-2 font-semibold text-gray-700">
              Brand
            </label>

            <input
              type="text"
              placeholder="Apple"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="w-full border rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>


          {/* Condition */}
          <div>

            <label className="block mb-2 font-semibold text-gray-700">
              Condition
            </label>

            <select
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
              className="w-full border rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              required
            >

              <option value="">
                Select Condition
              </option>

              <option value="New">
                New
              </option>

              <option value="Like New">
                Like New
              </option>

              <option value="Used">
                Used
              </option>

            </select>

          </div>


          {/* Location */}
          <div>

            <label className="block mb-2 font-semibold text-gray-700 flex items-center gap-2">

              <FaMapMarkerAlt />

              Location

            </label>

            <input
              type="text"
              placeholder="Patna"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full border rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

          </div>


          {/* Multiple Images */}
          <div className="md:col-span-2">

            <label className="block mb-2 font-semibold text-gray-700 flex items-center gap-2">

              <FaImage />

              Product Images

            </label>

            <input
              type="file"
              multiple
              onChange={(e) =>
                setImages(
                  Array.from(e.target.files)
                )
              }
              className="w-full border rounded-2xl px-4 py-3"
              required
            />

            <p className="text-sm text-gray-500 mt-2">
              You can upload multiple images
            </p>

          </div>


          {/* Image Preview */}
          {images.length > 0 && (

            <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">

              {images.map((img, index) => (

                <img
                  key={index}
                  src={URL.createObjectURL(img)}
                  alt="preview"
                  className="h-32 w-full object-cover rounded-2xl shadow-md"
                />

              ))}

            </div>

          )}


          {/* Description */}
          <div className="md:col-span-2">

            <label className="block mb-2 font-semibold text-gray-700">
              Description
            </label>

            <textarea
              rows="5"
              placeholder="Write complete product details..."
              value={description}
              onChange={(e) =>
                setDescription(e.target.value)
              }
              className="w-full border rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

          </div>


          {/* Message */}
          {message && (

            <div className="md:col-span-2 text-center font-semibold text-blue-700">

              {message}

            </div>

          )}


          {/* Submit */}
          <div className="md:col-span-2">

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-bold text-lg transition shadow-lg"
            >

              {loading
                ? "Adding Product..."
                : "Add Product"}

            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default SellProduct;