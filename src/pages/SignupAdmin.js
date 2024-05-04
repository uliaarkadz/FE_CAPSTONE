import { Form } from "react-router-dom";
import { PasswordInput, UserNameInput } from "../components/LoginComponents";
const SignupAdmin = () => {
  return (
    <div className="container-fluid">
      <div className="p-3 border-light border-3 d-flex flex-column align-items-center justify-content-center">
        <Form action="/login" method="POST">
          <div className="p-4 border-light border-3 d-flex flex-column align-items-center justify-content-center">
            <div className="col-auto">
              <UserNameInput />
            </div>
            <div className="col-auto">
              <PasswordInput />
            </div>
            <div className="col-auto">
              <input
                className="btn btn-primary m-3"
                type="submit"
                value="SIGNUP"
              ></input>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignupAdmin;
