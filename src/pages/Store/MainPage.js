import { useLoaderData, Form } from "react-router-dom";
import CartButton from "../../components/CartButton";
import { DetailsButton, AddButton } from "../../components/DetailsButton";

const StoreLanding = () => {
  const products = useLoaderData();

  return (
    <div className="container">
      <CartButton data={products.cart} />
      <div className="row d-flex justify-content-center">
        {products.products.map((product) => {
          return (
            <div
              key={product.id}
              className="col-3 m-2 shadow-sm border-light border-2 d-flex flex-column  d-flex justify-content-between d-flex align-items-center"
            >
              <div className="mt-3">{product.name}</div>
              <div className="">
                <img src={product.image} />
              </div>
              <div className="d-flex flex-row justify-content-between">
                <div className="col-3">${product.price}</div>
              </div>
              <Form
                action={`/cart/add/${"4"}`}
                method="post"
                className="mb-3 d-flex flex-row justify-content-evenly align-items-center"
              >
                <div className="col-3">
                  <DetailsButton />
                </div>
                <div className="col-3 me-3">
                  <input
                    className="form-control"
                    type="number"
                    name="quantity"
                    min="1"
                    defaultValue={1}
                  />
                </div>
                <div>
                  <input
                    hidden
                    className="form-control"
                    type="input"
                    name="productId"
                    defaultValue={product.id}
                  />
                </div>
                <div className="">
                  <AddButton />
                </div>
              </Form>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StoreLanding;
