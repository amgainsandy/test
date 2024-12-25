import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 w-full object-contain mb-4"
      />
      <h2 className="text-lg font-semibold">{product.title}</h2>
      <p className="text-gray-700">${product.price}</p>
      <Link
        to={`/product/${product.id}`}
        className="text-blue-500 mt-2 inline-block hover:underline"
      >
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
