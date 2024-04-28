import { useLoaderData, Form } from "react-router-dom";
import CartButton from "../../components/CartButton";
import { EditButton, DeleteButton } from "../../components/DetailsButton";

const CartDetails = () => {
  const productsCartLoader = useLoaderData();

  const cartIds = [];
  productsCartLoader.cart.forEach((cart) => {
    if (!cart.isProccesed) {
      cartIds.push(cart.id);
    }
  });

  return (
    <div className="container">
      <CartButton data={productsCartLoader.cart} />
      <table className="table table-hover align-middle text-center">
        <thead className="align-middle">
          <tr className="text-center">
            <th scope="col">Product Name</th>
            <th scope="col">Price Total</th>
            <th scope="col">Quantity</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>

        {productsCartLoader.cart.map((item) => {
          if (!item.isProccesed) {
            return (
              // <div key={item.id} className="cart">
              <tbody>
                <tr>
                  <td>
                    {productsCartLoader.products.map((i) => {
                      if (i.id == item.productId) {
                        return <div>{i.name}</div>;
                      }
                    })}
                  </td>
                  <td>${item.totalAmount}</td>
                  <td>
                    <Form
                      id="my_form"
                      action={`/cart/update/${item.id}`}
                      method="post"
                      className="row"
                    >
                      <input
                        className="form-control"
                        type="number"
                        name="quantity"
                        min="1"
                        defaultValue={item.quantity}
                      />

                      <input
                        hidden
                        className="form-control"
                        type="input"
                        name="productId"
                        defaultValue={item.productId}
                      />
                    </Form>
                  </td>
                  <td>
                    <EditButton value={"my_form"} />
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
              </tbody>
            );
          }
        })}
      </table>
      <Form action={`/order/${cartIds}`} method="post" className="col">
        <input
          hidden
          className="form-control"
          type="input"
          name="orderStatus"
          defaultValue={"new"}
        />
        <button type="submit" className=" btn btn-primary bigButton">
          PURCHASE
        </button>
      </Form>
    </div>
  );
};

export default CartDetails;
