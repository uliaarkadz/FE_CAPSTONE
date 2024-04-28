import { useLoaderData, Form } from "react-router-dom";

import {
  DetailsButton,
  DeleteButton,
  EditButton,
} from "../../components/DetailsButton";

const Products = () => {
  const products = useLoaderData();
  return (
    <div className="container">
      <div className="row justify-content-end">
        <div className="col-4">
          <a href={`/products/new`}>
            <button type="submit" className="btn btn-primary mb-3 bigButton">
              ADD +
            </button>
          </a>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-3">
          <h3>Products List </h3>
        </div>
      </div>
      {products.map((product) => {
        return (
          <div
            key={product.id}
            className="border-light border-2  d-flex flex-row justify-content-between d-flex align-items-center"
          >
            <div className="col-1">{product.serial}</div>
            <div className="col-2 ">{product.name}</div>
            <div className="col-2 ">${product.price}</div>
            <div className="col-2 ">
              <img src={product.image} />
            </div>
            <div className="col-2 ">{product.inventory}</div>
            <div className="col-1 ">
              <a href={`/products/${product.id}`}>
                <DetailsButton />
              </a>
            </div>
            <div className="col-1 ">
              <a href={`/products/edit/${product.id}`}>
                <EditButton />
              </a>
            </div>
            <div className="col-1 ">
              <Form
                action={`/products/delete/${product.id}`}
                method="post"
                className=""
              >
                <DeleteButton />
              </Form>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
