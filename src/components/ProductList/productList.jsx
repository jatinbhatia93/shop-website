import React from "react";
import ProductCard from "../../components/ProductCard/productCard";
import { useParams } from "react-router-dom";

const ProductList = (props) => {
  let list = props.data;
  const { brandName } = useParams();
  if (brandName) {
    list = list.filter(
      (p) => p.brand.toLowerCase() === brandName.toLowerCase()
    );
  }
  return (
    <div className="p-grid p-col-12 p-pl-5">
      {list.map((product, index) => (
        <ProductCard
          key={index}
          product={product}
          onAddCart={props.onAddCart}
          onQuantityChange={props.onQuantityChange}
          onDelete={props.onDelete}
        />
      ))}
    </div>
  );
};

export default ProductList;
