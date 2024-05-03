import { useLoaderData, Form } from "react-router-dom";
import React, { useState } from "react";
import CartButton from "../../components/CartButton";

const ProductDetails = () => {
  const product = useLoaderData();

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-3">
          <h3>PRODUCT INFO</h3>
        </div>
      </div>
      <div className="p-3 d-flex flex-column align-items-center justify-content-center">
        <div className="col-6 p-3 bg-light d-flex justify-content-center">
          <label>Inventory#: </label>
          {product.serial}
        </div>
        <div className="col-6 p-3 bg-light d-flex justify-content-center">
          <label>Name:</label>
          {product.name}
        </div>
        <div className="col-6 p-3 bg-light d-flex justify-content-center">
          <label>Description:</label>
          {product.description}
        </div>
        <div className="col-6 p-3 bg-light d-flex justify-content-center">
          <label>Price:</label>${product.price}
        </div>
        <div className="col-6 p-3 bg-light d-flex justify-content-center">
          <label>Image:</label>
          <img src={product.image} />
        </div>
        <div className="col-6 p-3 bg-light d-flex justify-content-center">
          <label>Quantity:</label>
          {product.inventory}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
