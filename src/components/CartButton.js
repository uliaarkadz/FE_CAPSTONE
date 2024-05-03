import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

function CartButton({ data }) {
  function totalCartItems(...data) {
    let total = 0;
    data.forEach((item) => {
      if (!item.isProccesed) total += item.quantity;
    });
    return total;
  }

  return (
    <div>
      <Link to={localStorage.getItem("token") ? `/cart/${"4"}` : "/"}>
        <Button
          type="submit"
          className="btn btn-primary border-light bigButton"
        >
          <FontAwesomeIcon icon={faCartShopping} />({totalCartItems(...data)})
        </Button>
      </Link>
    </div>
  );
}

export default CartButton;
