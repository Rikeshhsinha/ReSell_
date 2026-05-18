import React, { useState } from "react";

const ForgotPassword = () => {

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    alert("Password reset link sent to your email");

  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-500 px-4">

      <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-md">

        <h1 className="text-3xl font-bold text-center text-blue-700 mb-3">
          Forgot Password
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Enter your email to reset password
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
          >
            Send Reset Link
          </button>

        </form>

      </div>

    </div>
  );
};

export default ForgotPassword;