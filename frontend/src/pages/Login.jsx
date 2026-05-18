import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

import { FaEnvelope, FaLock } from "react-icons/fa";


const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);


  // Login Function
  const handleLogin = async (e) => {

    e.preventDefault();

    setLoading(true);

    setMessage("");

    try {

      const res = await axios.post(
        "https://resell-4hzi.onrender.com/api/auth/login",
        {
          email,
          password,
        }
      );

      console.log(res.data);

      // Save Token
      localStorage.setItem(
        "token",
        res.data.token
      );

      // Save User
      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      setMessage("Login Successful");

      // Redirect to Home Page
      setTimeout(() => {
        navigate("/");
      }, 1500);

    } catch (error) {

      console.log(error);

      setMessage(
        error.response?.data?.message ||
        "Login Failed "
      );

    } finally {

      setLoading(false);

    }
  };


  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 via-sky-700 to-cyan-500 px-4">

      {/* Main Card */}
      <div className="w-full max-w-5xl bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl border border-white/20 grid md:grid-cols-2">

        {/* Left Side */}
        <div className="hidden md:flex flex-col justify-center items-center p-10 text-white bg-white/5">

          <h1 className="text-5xl font-bold mb-4">
            ReSell_
          </h1>

          <p className="text-lg text-center text-gray-200 leading-relaxed">
            Buy and sell products easily with a modern marketplace experience.
          </p>

          <img
            src="https://cdn-icons-png.flaticon.com/512/869/869636.png"
            alt="shopping"
            className="w-60 mt-10 drop-shadow-2xl"
          />

        </div>

        {/* Right Side */}
        <div className="bg-white p-8 md:p-12">

          <div className="mb-8 text-center">

            <h2 className="text-4xl font-bold text-gray-800">
              ReSell_ Login
            </h2>

          </div>

          {/* Message */}
          {message && (
            <div className="mb-4 text-center text-sm font-medium text-blue-700">
              {message}
            </div>
          )}

          {/* Form */}
          <form
            onSubmit={handleLogin}
            className="space-y-6"
          >

            {/* Email */}
            <div>

              <label className="block mb-2 text-gray-700 font-medium">
                Email
              </label>

              <div className="flex items-center border rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-blue-500">

                <FaEnvelope className="text-gray-400 mr-3" />

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

              </div>

            </div>

            {/* Password */}
            <div>

              <label className="block mb-2 text-gray-700 font-medium">
                Password
              </label>

              <div className="flex items-center border rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-blue-500">

                <FaLock className="text-gray-400 mr-3" />

                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

              </div>

            </div>

            {/* Forgot Password */}
            <div className="text-right">

              <a
                href="#"
                className="text-blue-600 hover:underline text-sm"
              >
                Forgot Password?
              </a>

            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold text-lg transition duration-300 shadow-lg"
            >

              {loading ? "Logging in..." : "Login"}

            </button>

          </form>

          {/* Signup */}
          <p className="text-center text-gray-600 mt-8">

            Don't have an account?

            <Link
              to="/signup"
              className="text-blue-600 font-semibold ml-1 hover:underline"
            >
              Sign Up
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
};

export default Login;