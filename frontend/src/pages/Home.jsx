import React from "react";
import { Link } from "react-router-dom";

const Home = () => {

  const products = [
    {
      id: 1,
      title: "iPhone 14 Pro",
      price: "₹85,000",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    },
    {
      id: 2,
      title: "Gaming Laptop",
      price: "₹65,000",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    },
    {
      id: 3,
      title: "Royal Enfield",
      price: "₹1,20,000",
      image:
        "https://images.unsplash.com/photo-1558981806-ec527fa84c39",
    },
    {
      id: 4,
      title: "Modern Sofa",
      price: "₹18,000",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <h1 className="text-2xl md:text-3xl font-bold text-blue-700 cursor-pointer">
              OLX Clone
            </h1>

            {/* Buttons */}
            <div className="flex items-center gap-3">

              <Link to="/login">
                <button className="px-4 py-2 rounded-xl border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition text-sm md:text-base">
                  Login
                </button>
              </Link>

              <button className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition text-sm md:text-base">
                Sell Product
              </button>

            </div>

          </div>

        </div>

      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-500 text-white">

        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 text-center">

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
            Buy & Sell Anything Easily
          </h2>

          <p className="mt-5 text-gray-200 text-base md:text-xl max-w-2xl mx-auto">
            Best marketplace to buy and sell products near you with a modern experience.
          </p>

          {/* Search Bar */}
          <div className="mt-10 max-w-3xl mx-auto flex flex-col sm:flex-row bg-white rounded-2xl overflow-hidden shadow-2xl">

            <input
              type="text"
              placeholder="Search products..."
              className="flex-1 px-5 py-4 text-black outline-none"
            />

            <button className="bg-blue-700 hover:bg-blue-800 transition px-8 py-4 font-semibold">
              Search
            </button>

          </div>

        </div>

      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 py-14">

        <div className="flex items-center justify-between mb-8">

          <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
            Categories
          </h3>

        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5">

          {["Mobiles", "Cars", "Bikes", "Furniture"].map((category, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 md:p-8 text-center hover:scale-105 hover:shadow-2xl transition duration-300 cursor-pointer"
            >

              <h4 className="text-lg md:text-xl font-semibold text-blue-700">
                {category}
              </h4>

            </div>

          ))}

        </div>

      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-4 pb-16">

        <div className="flex items-center justify-between mb-8">

          <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
            Latest Products
          </h3>

          <button className="text-blue-600 font-semibold hover:underline">
            View All
          </button>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {products.map((product) => (

            <div
              key={product.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2"
            >

              {/* Image */}
              <div className="overflow-hidden">

                <img
                  src={product.image}
                  alt={product.title}
                  className="h-56 w-full object-cover hover:scale-110 transition duration-500"
                />

              </div>

              {/* Content */}
              <div className="p-5">

                <h4 className="text-xl font-semibold text-gray-800">
                  {product.title}
                </h4>

                <p className="text-blue-700 text-2xl font-bold mt-2">
                  {product.price}
                </p>

                <button className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition font-medium">
                  View Details
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">

        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-sm md:text-base">

          © 2026 OLX Clone. All rights reserved.

        </div>

      </footer>

    </div>
  );
};

export default Home;