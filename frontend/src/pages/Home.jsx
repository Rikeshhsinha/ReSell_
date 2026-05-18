import React, { useEffect, useState } from "react";

import axios from "axios";

import { Link } from "react-router-dom";

const Home = () => {

  const [products, setProducts] = useState([]);

  const [filteredProducts, setFilteredProducts] = useState([]);

  const [search, setSearch] = useState("");

  const [suggestions, setSuggestions] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));



  // Fetch Products
  useEffect(() => {

    fetchProducts();

  }, []);



  // Fetch Products
  const fetchProducts = async () => {

    try {

      const res = await axios.get(
        "https://resell-4hzi.onrender.com/api/products"
      );

      setProducts(res.data);

      setFilteredProducts(res.data);

    } catch (error) {

      console.log(error);

    }
  };



  // Search Products
  const handleSearch = () => {

    const filtered = products.filter((product) => {

      return (

        product.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||

        product.category
          .toLowerCase()
          .includes(search.toLowerCase()) ||

        product.location
          .toLowerCase()
          .includes(search.toLowerCase())

      );

    });

    setFilteredProducts(filtered);

  };



  // Category Filter
  const filterCategory = (category) => {

    setSelectedCategory(category);

    const updated = products.filter(
      (product) => product.category === category
    );

    setFilteredProducts(updated);

  };



  // Clear Filter
  const clearFilter = () => {

    setSelectedCategory("");

    setFilteredProducts(products);

  };



  return (

    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <nav className="bg-white shadow-md px-4 md:px-8 py-4 flex items-center justify-between">

        <h1 className="text-3xl font-bold text-blue-700">
          ReSell_
        </h1>

        <div className="flex items-center gap-3">

          <select className="border rounded-lg px-3 py-2 text-gray-700">

            <option>Patna</option>
            <option>Delhi</option>
            <option>Mumbai</option>
            <option>Bhilai</option>

          </select>

          {user ? (

            <>
              <p className="hidden md:block font-semibold text-blue-700">
                Hello, {user.name}
              </p>

              <button
                onClick={() => {

                  localStorage.removeItem("token");

                  localStorage.removeItem("user");

                  window.location.reload();

                }}
                className="bg-red-500 text-white px-4 py-2 rounded-xl"
              >
                Logout
              </button>

              <Link
                to="/sell-product"
                className="px-5 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Sell Product
              </Link>
            </>

          ) : (

            <Link
              to="/login"
              className="px-5 py-2 rounded-xl border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition"
            >
              Login
            </Link>

          )}

        </div>

      </nav>



      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-500 text-white py-20 px-4 md:px-8 text-center">

        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          Buy & Sell Anything Easily
        </h2>

        <p className="text-lg text-gray-200 mb-8">
          Find nearby sellers and buy products safely in your city.
        </p>



        {/* Search */}
        <div className="max-w-3xl mx-auto flex bg-white rounded-2xl overflow-hidden shadow-lg">

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-5 py-4 text-black outline-none"
          />

          <button
            onClick={handleSearch}
            className="bg-blue-700 px-8 text-white font-semibold hover:bg-blue-800 transition"
          >
            Search
          </button>

        </div>

      </section>



      {/* Categories */}
      <section className="px-4 md:px-8 py-12">

        <div className="flex items-center justify-between mb-8">

          <h3 className="text-3xl font-bold text-gray-800">
            Categories
          </h3>

          <button
            onClick={clearFilter}
            className="text-blue-600 font-semibold"
          >
            Clear Filter
          </button>

        </div>



        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {["Mobiles", "Cars", "Bikes", "Furniture"].map((category, index) => (

            <div
              key={index}
              onClick={() => filterCategory(category)}
              className={`bg-white shadow-lg rounded-2xl p-8 text-center hover:scale-105 transition cursor-pointer
              ${
                selectedCategory === category
                  ? "border-2 border-blue-600"
                  : ""
              }`}
            >

              <h4 className="text-xl font-semibold text-blue-700">
                {category}
              </h4>

            </div>
          ))}
        </div>

      </section>



      {/* Products */}
      <section className="px-4 md:px-8 pb-16">

        <div className="flex items-center justify-between mb-8">

          <h3 className="text-3xl font-bold text-gray-800">
            Nearby Products
          </h3>

        </div>



        {/* No Products */}
        {filteredProducts.length === 0 && (

          <div className="text-center text-gray-500 text-xl mt-10">

            No Products Found

          </div>

        )}



        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {filteredProducts.map((product) => (

            <div
              key={product._id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >

              {/* Product Image */}
              <img
                src={
                  product.images && product.images.length > 0
                    ? `https://resell-4hzi.onrender.com/uploads/${product.images[0]}`
                    : product.image
                    ? `https://resell-4hzi.onrender.com/uploads/${product.image}`
                    : "https://via.placeholder.com/300"
                }
                alt={product.title}
                className="w-full h-56 object-cover"
              />



              {/* Product Details */}
              <div className="p-5">

                <h4 className="text-xl font-semibold text-gray-800">
                  {product.title}
                </h4>

                <p className="text-blue-700 font-bold text-2xl mt-2">
                  ₹{product.price}
                </p>

                <p className="text-gray-500 mt-1">
                  📍 {product.location}
                </p>

                <p className="text-gray-600 text-sm mt-3 line-clamp-2">
                  {product.description}
                </p>



                <div className="mt-3">

                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">

                    {product.category}

                  </span>

                </div>



                {/* View Details */}
                <Link
                  to={`/product/${product._id}`}
                  className="block mt-5"
                >

                  <button className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition">

                    View Details

                  </button>

                </Link>

              </div>

            </div>
          ))}
        </div>

      </section>



      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 text-center py-6">

        © 2026 ReSell_. All rights reserved.

      </footer>

    </div>
  );
};

export default Home;