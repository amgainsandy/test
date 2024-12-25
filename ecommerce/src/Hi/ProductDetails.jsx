import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p className="text-center mt-6">Loading...</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <img
        src={product.image}
        alt={product.title}
        className="h-64 w-full object-contain mb-6"
      />
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <p className="text-gray-700 mt-4">{product.description}</p>
      <p className="text-lg font-semibold mt-4">Price: ${product.price}</p>
    </div>
  );
};

export default ProductDetails;
