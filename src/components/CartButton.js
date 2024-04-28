import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

function CartButton({ data }) {
  function totalCartItems(...data) {
    let total = 0;
    data.forEach((item) => {
      if (!item.isProccesed) total += item.quantity;
    });
    return total;
  }

  return (
    <div className="row justify-content-end">
      <div className="col-4">
        <a href={`/cart/${"4"}`}>
          <Button
            type="submit"
            className="btn btn-primary border-light bigButton"
          >
            <FontAwesomeIcon icon={faCartShopping} />({totalCartItems(...data)})
          </Button>
        </a>
      </div>
    </div>
  );
}

export default CartButton;
