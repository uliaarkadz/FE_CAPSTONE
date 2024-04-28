import { Form } from "react-router-dom";
const CreateProduct = () => {
  return (
    <div className="container">
      <div className="row justify-content-start">
        <div className="col-3">
          <h3>Add New Product </h3>
        </div>
      </div>
      <Form action="/products/new" method="post">
        <div className="col-6">
          <label class="form-label">Product Name</label>
          <input
            className="form-control"
            type="input"
            name="name"
            placeholder="Name"
          />
        </div>
        <div class="col-6">
          <label class="form-label">Description </label>
          <input
            className="form-control"
            type="input"
            name="description"
            placeholder="Product Description"
          />
        </div>
        <div class="col-6">
          <label class="form-label">Price </label>
          <input
            className="form-control"
            type="number"
            name="price"
            placeholder="Product price"
          />
        </div>
        <div class="col-6">
          <label class="form-label">Image </label>
          <input
            className="form-control"
            type="input"
            name="image"
            placeholder="Product image"
          />
        </div>
        <div class="col-6">
          <label class="form-label">Serial </label>
          <input
            className="form-control"
            type="input"
            name="serial"
            placeholder="Product Serial"
          />
        </div>
        <div class="col-6">
          <label class="form-label">Quantity </label>
          <input
            className="form-control"
            type="input"
            name="inventory"
            placeholder="Product Inventory"
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3 bigButton">
            ADD +
          </button>
        </div>
      </Form>
    </div>
  );
};

export default CreateProduct;
