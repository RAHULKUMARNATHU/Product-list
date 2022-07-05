import React from "react";
import "./productCard.component.css";

const ProductCard = ({name, price, image}) => {
  return (
    <div className="product-card">
      <div className="product-card-header">
        <img
          src={image}
          alt="rover"
        />
      </div>
      <div className="product-card-body">
        <h4>{name}</h4>
        <p>Rs. {price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
