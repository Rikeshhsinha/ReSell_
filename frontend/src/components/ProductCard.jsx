import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product._id}`}>
      <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg">
        <img
          src={`http://localhost:5000/uploads/${product.image}`}
          className="h-52 w-full object-cover"
        />

        <div className="p-3">
          <h2 className="text-xl font-bold">₹ {product.price}</h2>

          <p className="font-semibold">{product.title}</p>

          <p className="text-gray-500">{product.location}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;