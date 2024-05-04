import { useLoaderData, Form } from "react-router-dom";

import {
  DetailsButton,
  DeleteButton,
  EditButton,
} from "../../components/DetailsButton";

const Products = () => {
  const products = useLoaderData();
  return (
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center">
        <div className="col d-flex flex-column  d-flex justify-content-between d-flex align-items-center">
          <h3>Products List </h3>
        </div>

        <div className="col col-lg-2">
          <a href={`/products/new`}>
            <button type="submit" className="btn btn-primary mb-3 bigButton">
              ADD +
            </button>
          </a>
        </div>
      </div>

      {products.map((product) => {
        return (
          <div
            key={product.id}
            className="border-light border-2 p-1 ps-2 mb-2 row-cols-8 d-flex flex-row justify-content-center align-items-center"
          >
            <div className="col d-flex flex-column  d-flex justify-content-between d-flex align-items-center">
              {product.serial}
            </div>
            <div className="col d-flex flex-column  d-flex justify-content-between d-flex align-items-center">
              {product.name}
            </div>
            <div className="col d-flex flex-column  d-flex justify-content-between d-flex align-items-center">
              ${product.price}
            </div>
            <div className="col d-flex flex-column  d-flex justify-content-between d-flex align-items-center">
              <img src={product.image} alt="product" />
            </div>
            <div className="col d-flex flex-column  d-flex justify-content-between d-flex align-items-center">
              {product.inventory}
            </div>
            <div className="col d-flex flex-column  d-flex justify-content-between d-flex align-items-center">
              <a href={`/products/${product.id}`}>
                <DetailsButton />
              </a>
            </div>
            <div className="col d-flex flex-column  d-flex justify-content-between d-flex align-items-center">
              <a href={`/products/edit/${product.id}`}>
                <EditButton />
              </a>
            </div>
            <div className="col d-flex flex-column  d-flex justify-content-between d-flex align-items-center">
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
