import { useLoaderData, Form, useLocation } from "react-router-dom";
import CartButton from "../../components/CartButton";
import { DetailsButton } from "../../components/DetailsButton";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const StoreLanding = () => {
  const products = useLoaderData();

  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div className="container-fluid">
      <div className="row  d-flex justify-content-end">
        <div className="col-3">
          <CartButton data={products.cart} />
        </div>
      </div>

      <div className="row d-flex justify-content-center">
        {products.products.map((product) => {
          return (
            <div
              key={product.id}
              className="col-3 m-2 shadow-sm border-light border-2 d-flex flex-column  d-flex justify-content-between d-flex align-items-center"
            >
              <div className="mt-3">{product.name}</div>
              <div className="">
                <img src={product.image} alt="productimage" />
              </div>
              <div className="mb-3 d-flex flex-row justify-content-between">
                <div className="col-3">${product.price}</div>
              </div>
              <div className="mb-3 d-flex flex-row justify-content-evenly align-items-center">
                <div className="col-2">
                  <a href={`/products/customer/${product.id}`}>
                    <DetailsButton />
                  </a>
                </div>
                <div className="col-6">
                  <Form
                    action={`/cart/add/${product.id}/${4}`}
                    method="post"
                    id="addproduct"
                    className="d-flex flex-row justify-content-evenly align-items-center"
                  >
                    <input
                      className="text-center align-self-center form-control"
                      type="number"
                      name="quantity"
                      min="1"
                      defaultValue={1}
                    />

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
        })}
      </div>
    </div>
  );
};

export default StoreLanding;
