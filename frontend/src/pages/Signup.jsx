import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import axios from "axios";


const Signup = () => {

  // Navigation
  const navigate = useNavigate();

  // States
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);


  // Signup Function
  const handleSignup = async (e) => {

    e.preventDefault();

    setLoading(true);

    setMessage("");

    try {

      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          name,
          email,
          password,
        }
      );

      console.log(res.data);

      setMessage("Account Created Successfully ✅");


      // Clear Form
      setName("");

      setEmail("");

      setPassword("");


      // Redirect To Login Page
      setTimeout(() => {

        navigate("/login");

      }, 1500);

    } catch (error) {

      console.log(error);

      setMessage(
        error.response?.data?.message ||
        "Signup Failed ❌"
      );

    } finally {

      setLoading(false);

    }
  };


  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-500 px-4">

      <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-md">

        <h1 className="text-4xl font-bold text-center text-blue-700 mb-2">
          Create Account
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Join ReSell_ today
        </p>

        {/* Message */}
        {message && (
          <div className="mb-4 text-center text-sm font-medium text-blue-700">
            {message}
          </div>
        )}

        {/* Form */}
        <form
          onSubmit={handleSignup}
          className="space-y-5"
        >

          {/* Name */}
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
          >

            {loading ? "Creating..." : "Sign Up"}

          </button>

        </form>

      </div>

    </div>
  );
};

export default Signup;