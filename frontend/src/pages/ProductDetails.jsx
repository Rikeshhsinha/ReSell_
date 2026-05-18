import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    const res = await API.get(`/products/${id}`);
    setProduct(res.data);
  };

  if (!product) return <h1>Loading...</h1>;

  return (
    <div className="grid md:grid-cols-2 gap-10 p-10">
      <img
        src={`https://resell-4hzi.onrender.com/uploads/${product.image}`}
        className="w-full rounded-lg"
      />

      <div>
        <h1 className="text-4xl font-bold mb-5">
          ₹ {product.price}
        </h1>

        <h2 className="text-2xl font-semibold mb-4">
          {product.title}
        </h2>

        <p className="mb-4">{product.description}</p>

        <p className="text-gray-500">
          {product.location}
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;