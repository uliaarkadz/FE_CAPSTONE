import { Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="container-fluid header">
      {pathname !== "/" && (
        <div className="m-3 d-flex justify-content-center">
          <a href={`/`}>
            <h1>AMAZingSTORE</h1>
          </a>
        </div>
      )}
      {pathname !== "/" && (
        <div>
          {localStorage.getItem("token") && (
            <div className="row d-flex justify-content-center">
              {localStorage.getItem("userRoles") === "Admin" && (
                <div className="col-2 d-flex justify-content-evenly">
                  <a href={`/admin`}>
                    <Button type="submit" className="btn btn-primary bigButton">
                      HOME ADMIN
                    </Button>
                  </a>
                </div>
              )}
              <div className="col-2 d-flex justify-content-evenly">
                <a href={`/store`}>
                  <Button type="submit" className="btn btn-primary bigButton">
                    STORE
                  </Button>
                </a>
              </div>

              <div className="col-2 d-flex justify-content-evenly">
                <a href={`/order/user/${4}`}>
                  <Button type="submit" className="btn btn-primary bigButton">
                    MY ORDERS
                  </Button>
                </a>
              </div>
              <div className="col-2 d-flex justify-content-evenly">
                <Button
                  className="btn btn-primary bigButton"
                  onClick={() => {
                    localStorage.clear();
                    navigate("/");
                  }}
                >
                  LOGOUT
                </Button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Header;
