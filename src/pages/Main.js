import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
const Main = () => {
  return (
    <div className="container-fluid">
      <div className="column d-flex justify-content-center tiles">
        <div className="col-3 shadow-sm border-light border-2 d-flex flex-column  d-flex justify-content-center d-flex align-items-center">
          <h3>Do you want to sign up?</h3>
          <Link to="/signup">
            <Button type="submit" className="btn btn-primary bigButton">
              SIGNUP
            </Button>
          </Link>
        </div>
        <div className="col-3 shadow-sm border-light border-2 d-flex flex-column  d-flex justify-content-center d-flex align-items-center">
          <h3>Create admin account?</h3>
          <Link to="/signup/admin">
            <Button type="submit" className="btn btn-primary bigButton">
              SIGNUP ADMIN
            </Button>
          </Link>
        </div>
        <div className="col-3 shadow-sm border-light border-2 d-flex flex-column  d-flex justify-content-center d-flex align-items-center">
          <h3>Do you want to login?</h3>
          <Link to="/login">
            <Button type="submit" className="btn btn-primary bigButton">
              LOGIN
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
