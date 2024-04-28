import { redirect } from "react-router-dom";

const URL = process.env.REACT_APP_URL;

export const createProductAction = async ({ request }) => {
  const formData = await request.formData();
  const createdProduct = {
    name: formData.get("name"),
    description: formData.get("description"),
    price: formData.get("price"),
    image: formData.get("image"),
    serial: formData.get("serial"),
    inventory: formData.get("inventory"),
  };

  await fetch(`${URL}/api/products`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(createdProduct),
  });

  return redirect("/products");
};

export const editProductAction = async ({ request, params }) => {
  const formData = await request.formData();
  const updatedProduct = {
    name: formData.get("name"),
    description: formData.get("description"),
    price: formData.get("price"),
    image: formData.get("image"),
    serial: formData.get("serial"),
    inventory: formData.get("inventory"),
  };

  await fetch(`${URL}/api/products/${params.id}`, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedProduct),
  });

  return redirect("/products");
};

export const deleteProductAction = async ({ params }) => {
  await fetch(`${URL}/api/products/${params.id}/`, {
    method: "delete",
  });

  return redirect("/products");
};

export const addProductToCartAction = async ({ request, params }) => {
  const formData = await request.formData();
  const addedCartProduct = {
    productId: formData.get("productId"),
    quantity: formData.get("quantity"),
    isProccesed: false,
  };

  await fetch(`${URL}/api/cart/${params.id}`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(addedCartProduct),
  });

  return redirect("/store");
};

export const updateCartItemAction = async ({ request, params }) => {
  const formData = await request.formData();
  const updatedCartProduct = {
    productId: formData.get("productId"),
    quantity: formData.get("quantity"),
  };

  await fetch(`${URL}/api/cart/4/${params.id}`, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedCartProduct),
  });

  return redirect("/cart/4");
};

export const deleteCartItemAction = async ({ params }) => {
  await fetch(`${URL}/api/cart/4/${params.id}/`, {
    method: "delete",
  });

  return redirect("/cart/4");
};

export const createOrder = async ({ request, params }) => {
  console.log(Object.values(params));

  const formDataOrder = await request.formData();
  const createdOrder = {
    orderStatus: formDataOrder.get("orderStatus"),
    userId: 4,
  };

  //const formDataCart = await request.formData();
  const updatedCartProduct = [
    {
      op: "replace",
      path: "/IsProccesed",
      value: true,
    },
  ];
  let cartIds = JSON.stringify(Object.values(params))
    .replace('["', "")
    .replace('"]', "")
    .split(",");
  console.log(cartIds);
  console.log(typeof Number(cartIds[0]));
  for (let i = 0; i < cartIds.length; i++) {
    let id = Number(cartIds[i]);
    // console.log(id);
    await fetch(`${URL}/api/order/${id}`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createdOrder),
    });

    await fetch(`${URL}/api/cart/4/${id}`, {
      method: "patch",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCartProduct),
    });
  }
  return redirect("/store");
};
