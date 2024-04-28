const Landing = () => {
  return (
    <div className="container">
      <div className="row justify-content-end">
        <div className="col-4">
          <a href={`/products`}>
            <button type="submit" className="btn btn-primary mb-3 bigButton">
              MANAGE INVENTORY
            </button>
          </a>
        </div>
        <div className="col-4">
          <a href={`/users`}>
            <button type="submit" className="btn btn-primary mb-3 bigButton">
              MANAGE USERS
            </button>
          </a>
        </div>
        <div className="col-4">
          <a href={`/store`}>
            <button type="submit" className="btn btn-primary mb-3 bigButton">
              STORE
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
