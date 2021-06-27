import React from "react";
import ProductCard from "../../components/ProductCard/productCard";
import { useParams } from "react-router-dom";
import './productList.css';

const ProductList = (props) => {
  let list = props.data;
  const { brandName } = useParams();
  if (Number(brandName) > 0) {
    list = list.filter(
      (p) => p.type === Number(brandName)
    );
  } else if (brandName !== '0') {
    list = list.filter(
      (p) => p.brand.toLowerCase() === brandName.toLowerCase()
    );
  }
  return (
    <div className="p-p-5 flex-container gap-1rem width-100p p-jc-center">
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
