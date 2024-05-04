import { useLoaderData } from "react-router-dom";
import React from "react";
import { format } from "date-fns";
function Orders() {
  const orderProduct = useLoaderData();
  console.log(orderProduct);

  debugger;

  return (
    <div>
      {orderProduct.orders.map((order) => {
        return (
          <div
            key={order.id}
            className="border-light border-2 p-1 ps-2 mb-2 row-cols-8 d-flex flex-row justify-content-center align-items-center"
          >
            {/* <div className="col-2">
              {orderProduct.carts.forEach((c) => {
                if (c.id === order.cartid) {
                  return orderProduct.products.map((i) => {
                    if (i.id == c.productId) {
                      return <div>{i.name}</div>;
                    }
                  });
                }
              })}
            </div> */}

            <div className="col-2">{order.id}</div>
            <div className="col-2">{order.orderStatus}</div>

            <div className="col-2">
              {format(order.createdDate, "MM/dd/yyyy")}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Orders;
