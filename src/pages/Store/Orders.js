import { useLoaderData, Form } from "react-router-dom";
import React from "react";
function Orders() {
  const orders = useLoaderData();

  return (
    <div>
      {orders.map((order) => {
        return (
          <div key={order.id} className="row justify-content-center">
            <div className="col-2">{order.id}</div>
            <div className="col-2">{order.orderStatus}</div>
            <div className="col-2">{order.createdDate}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Orders;
