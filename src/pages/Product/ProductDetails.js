import { useLoaderData, Form } from "react-router-dom";
import React, { useState } from "react";
import CartButton from "../../components/CartButton";

const ProductDetails = () => {
  const productDetails = useLoaderData();

  console.log(productDetails);
  return (
    <div className="container">
      <CartButton data={productDetails.cart} />
      <div className="row justify-content-center">
        <div className="col-3">
          <h3>PRODUCT INFO</h3>
        </div>
      </div>
      <div className="product">
        <div className="row border patients">
          <label>Inventory#:</label>
          <div className="col-4 p-3 bg-light  d-flex align-items-center justify-content-center">
            {productDetails.product.serial}
          </div>
          <label>Name:</label>
          <div className="col-4 p-3 bg-light d-flex align-items-center justify-content-center">
            {productDetails.product.name}
          </div>
          <label>Description:</label>
          <div className="col-4 p-3 bg-light d-flex align-items-center justify-content-center ">
            {productDetails.product.description}
          </div>
          <label>Price:</label>
          <div className="col-4 p-3 bg-light  d-flex align-items-center justify-content-center">
            ${productDetails.product.price}
          </div>
          <label>Image:</label>
          <div className="col-4 p-3 bg-light  d-flex align-items-center justify-content-center">
            <img src={productDetails.product.image} />
          </div>
          <label>Quantity:</label>
          <div className="col-4 p-3 bg-light  d-flex align-items-center justify-content-center">
            {productDetails.product.inventory}
          </div>
        </div>
      </div>
      <div className="row">
        <Form action={`/cart/add/${"4"}`} method="post" className="col">
          <input
            className="form-control"
            type="number"
            name="quantity"
            min="1"
            defaultValue={1}
          />
          <input
            hidden
            className="form-control"
            type="input"
            name="productId"
            defaultValue={productDetails.product.id}
          />
          <button type="submit" className=" btn btn-primary bigButton">
            ADD TO CART
          </button>
        </Form>
      </div>
    </div>
  );
};

export default ProductDetails;
