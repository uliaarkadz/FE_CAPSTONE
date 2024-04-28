import { Form, useLoaderData } from "react-router-dom";
const EditProduct = (params) => {
  const product = useLoaderData();
  console.log(params);
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-6">
          <h3>EDIT PRODUCT INFO</h3>
        </div>
      </div>
      <Form action={`/products/edit/${product.id}`} method="post">
        <div className="col-6">
          <label className="form-label">Product Name</label>
          <input
            className="form-control"
            type="input"
            name="name"
            defaultValue={product.name}
          />
        </div>
        <div className="col-6">
          <label className="form-label">Description </label>
          <input
            className="form-control"
            type="input"
            name="description"
            defaultValue={product.description}
          />
        </div>
        <div className="col-6">
          <label className="form-label">Price </label>
          <input
            className="form-control"
            type="number"
            name="price"
            defaultValue={product.price}
          />
        </div>
        <div class="col-6">
          <label class="form-label">Image </label>
          <input
            className="form-control"
            type="input"
            name="image"
            defaultValue={product.image}
          />
        </div>
        <div class="col-6">
          <label class="form-label">Serial </label>
          <input
            className="form-control"
            type="input"
            name="serial"
            defaultValue={product.serial}
          />
        </div>
        <div class="col-6">
          <label class="form-label">Quantity </label>
          <input
            className="form-control"
            type="input"
            name="inventory"
            defaultValue={product.inventory}
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3 bigButton">
            UPDATE RECORD
          </button>
        </div>
      </Form>
    </div>
  );
};

export default EditProduct;
