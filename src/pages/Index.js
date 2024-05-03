const Landing = () => {
  return (
    <div className="container-fluid">
      {localStorage.getItem("userRoles") === "Admin" && (
        <div className="row  d-flex justify-content-center tiles">
          <div className="col-3 shadow-sm border-light border-2 d-flex flex-column  d-flex justify-content-center d-flex align-items-center">
            <a href={`/products`}>MANAGE INVENTORY</a>
          </div>
          <div className="col-3 panel shadow-sm border-light border-2 d-flex flex-column  d-flex justify-content-center d-flex align-items-center">
            <a href={`/users`}>MANAGE USERS</a>
          </div>
          <div className="col-3 shadow-sm border-light border-2 d-flex flex-column  d-flex justify-content-center d-flex align-items-center">
            <a href={`/store`}>STORE</a>
          </div>
          <div className="col-3 shadow-sm border-light border-2 d-flex flex-column  d-flex justify-content-center d-flex align-items-center">
            <a href={`/orders`}>MANAGE ORDERS</a>
          </div>
          <div className="col-3 shadow-sm border-light border-2 d-flex flex-column  d-flex justify-content-center d-flex align-items-center">
            <a href={`/store`}>STORE</a>
          </div>
          <div className="col-3 shadow-sm border-light border-2 d-flex flex-column  d-flex justify-content-center d-flex align-items-center">
            <a href={`/store`}>STORE</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Landing;
