import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-8 py-4 bg-white shadow-md">

      {/* Logo */}
      <Link to="/">
        <h1 className="text-4xl font-bold text-[#002f34]">
          OLX Clone
        </h1>
      </Link>

      {/* Right Side */}
      <div className="flex items-center gap-6">

        <Link
          to="/create"
          className="font-semibold border-2 border-black px-5 py-2 rounded-full hover:bg-black hover:text-white transition"
        >
          Sell
        </Link>

        <Link
          to="/login"
          className="text-lg font-medium hover:text-blue-600"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="text-lg font-medium hover:text-blue-600"
        >
          Register
        </Link>

      </div>
    </div>
  );
};

export default Navbar;