import { Form } from "react-router-dom";

const Signup = () => {
  return (
    <div className="container-fluid">
      <Form action="/login" method="POST">
        <div className="p-3 d-flex flex-column align-items-center justify-content-center">
          <div className="col-auto">
            <label>Username:</label>
            <input
              className="form-control"
              type="text"
              name="username"
              placeholder="username"
            ></input>
          </div>
          <div className="col-auto">
            <label>Password:</label>
            <input
              className="form-control"
              type="password"
              name="password"
              placeholder="password"
            ></input>
          </div>
          <div className="col-auto">
            <input
              className="btn btn-primary m-3"
              type="submit"
              value="LOGIN"
            ></input>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Signup;
