import React from "react";
import { Button } from "react-bootstrap";
function Header() {
  return (
    <div className="container">
      <div className="row justify-content-start">
        <a href={`/`}>
          <div className="col-12 align-items-center">
            <h1>My STORE</h1>
          </div>
        </a>
      </div>
      <div className="row justify-content-start">
        <div className="col-3 align-items-center">
          <a href={`/`}>
            <button type="submit" className="btn btn-primary bigButton">
              HOME
            </button>
          </a>
        </div>
        <div className="col-3 align-items-center">
          <a href={`/store`}>
            <button type="submit" className="btn btn-primary bigButton">
              STORE
            </button>
          </a>
        </div>
        <div className="col-4">
          <a href={`/order/user/${4}`}>
            <Button type="submit" className="btn btn-primary bigButton">
              MY ORDERS
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
