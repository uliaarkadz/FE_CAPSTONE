import { useLoaderData, Form } from "react-router-dom";
import { DeleteButton } from "../../components/DetailsButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import CartButton from "../../components/CartButton";

const CartDetails = () => {
  const productsCartLoader = useLoaderData();
  console.log(productsCartLoader.cart);
  const cartIds = [];
  productsCartLoader.cart.forEach((cart) => {
    if (!cart.isProccesed) {
      cartIds.push(cart.id);
    }
  });

  return (
    <div className="container">
      <div className="row  d-flex justify-content-end">
        <div className="col-3">
          <CartButton data={productsCartLoader.cart} />
        </div>
      </div>
      <table className="table table-hover table-grey align-middle text-center">
        <thead className="align-middle">
          <tr className="text-center">
            <th scope="col">Product Name</th>
            <th scope="col">Price Total</th>
            <th scope="col">Quantity</th>
            {/* <th scope="col">Edit</th> */}
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {productsCartLoader.cart.map((item) => {
            if (!item.isProccesed) {
              return (
                <tr key={item.id}>
                  <td>
                    {productsCartLoader.products.map((i) => {
                      if (i.id === item.productId) {
                        return <div>{i.name}</div>;
                      }
                    })}
                  </td>
                  <td>${item.totalAmount}</td>
                  <td>
                    <Form
                      id="my_form"
                      action={`/cart/update/${item.productId}/${item.id}`}
                      method="post"
                      className="row justify-content-center"
                    >
                      <div className="col-auto">
                        <input
                          className="form-control text-center"
                          type="number"
                          name="quantity"
                          min="1"
                          defaultValue={item.quantity}
                        />
                      </div>
                      <div className="col-2">
                        <Button type="submit" className="btn btn-primary">
                          <FontAwesomeIcon icon={faPenToSquare} />
                        </Button>
                      </div>
                    </Form>
                  </td>

                  <td>
                    <Form
                      action={`/cart/delete/${item.id}`}
                      method="post"
                      className="col"
                    >
                      <DeleteButton />
                    </Form>
                  </td>
                </tr>
              );
            }
          })}{" "}
        </tbody>
      </table>
      <Form action={`/order/${cartIds}`} method="post" className="col">
        <input
          hidden
          className="form-control"
          type="input"
          name="orderStatus"
          defaultValue={"new"}
        />
        <div className="row  d-flex justify-content-end">
          <div className="col-3">
            <Button
              type="submit"
              className=" btn btn-primary bigButton"
              variant="danger"
            >
              PURCHASE
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default CartDetails;
