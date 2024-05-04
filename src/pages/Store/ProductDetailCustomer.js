import { useLoaderData, Form } from "react-router-dom";
import CartButton from "../../components/CartButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

const ProductDetailCustomer = () => {
  const productDetails = useLoaderData();

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-3">
          <h3>PRODUCT INFO</h3>
        </div>
      </div>
      <div className="row  d-flex justify-content-end">
        <div className="col-3">
          <CartButton data={productDetails.cart} />
        </div>
      </div>
      <div className="product d-flex justify-content-center">
        <div className="d-flex flex-column border patients col-6">
          <label className="ps-3">Name:</label>
          <div className="col-auto p-3 bg-light d-flex align-items-center justify-content-center">
            {productDetails.product.name}
          </div>
          <label className="ps-3">Image:</label>
          <div className="col-auto p-3 bg-light  d-flex align-items-center justify-content-center">
            <img src={productDetails.product.image} alt="product" />
          </div>
          <label className="ps-3">Description:</label>
          <div className="col-auto p-3 bg-light d-flex align-items-center justify-content-center ">
            {productDetails.product.description}
          </div>
          <label className="ps-3">Price:</label>
          <div className="col-auto p-3 bg-light  d-flex align-items-center justify-content-center">
            ${productDetails.product.price}
          </div>
          <Form
            action={`/cart/add/${productDetails.product.id}/${"4"}`}
            method="post"
            className="col-auto p-3 bg-light  d-flex align-items-center justify-content-center"
          >
            <div className="col-auto">
              <input
                className="form-control text-center"
                type="number"
                name="quantity"
                min="1"
                defaultValue={1}
              />
            </div>

            <Button type="submit" className="btn bg-transparent">
              <FontAwesomeIcon
                icon={faPlus}
                size="2xl"
                style={{ color: "#115641" }}
              />
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailCustomer;
