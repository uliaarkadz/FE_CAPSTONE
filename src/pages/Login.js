import { Form } from "react-router-dom";
import { PasswordInput, UserNameInput } from "../components/LoginComponents";
const Login = () => {
  return (
    <div className="container-fluid">
      <div className="p-2 border-light border-3 d-flex flex-column align-items-center justify-content-center">
        <div className="column d-flex justify-content-center">
          <h2> Input your credentials to login</h2>
        </div>
        <Form action="/login" method="POST">
          <div className="p-5 border-light border-3 d-flex flex-column align-items-center justify-content-center">
            <div className="col-auto">
              <UserNameInput />
            </div>
            <div className="col-auto">
              <PasswordInput />
            </div>
            <div className="col-auto align-items-center">
              <input
                className="btn btn-primary m-3"
                type="submit"
                value="LOGIN"
              ></input>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
