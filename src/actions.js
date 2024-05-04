import { redirect } from "react-router-dom";
import desposeSession from "./helpers";
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

  const response = await fetch(`${URL}/api/products`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(createdProduct),
  });
  desposeSession(response);
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

  const response = await fetch(`${URL}/api/products/${params.id}`, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(updatedProduct),
  });
  desposeSession(response);
  return redirect("/products");
};

export const deleteProductAction = async ({ params }) => {
  const response = await fetch(`${URL}/api/products/${params.id}/`, {
    method: "delete",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  desposeSession(response);
  return redirect("/products");
};

export const addProductToCartAction = async ({ request, params }) => {
  //validate if product in the cart
  // const responseCart = await fetch(`${URL}/api/cart/4`);
  // const cart = await responseCart.json();

  const formData = await request.formData();

  const addedCartProduct = {
    productId: params.productid,
    quantity: formData.get("quantity"),
    isProccesed: false,
  };

  const response = await fetch(`${URL}/api/cart/${params.userid}`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(addedCartProduct),
  });
  desposeSession(response);
  return redirect("/store");
};

export const updateCartItemAction = async ({ request, params }) => {
  console.log(params);
  const formData = await request.formData();
  const updatedCartProduct = {
    productId: params.productid,
    quantity: formData.get("quantity"),
  };

  const response = await fetch(`${URL}/api/cart/4/${params.cartid}`, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedCartProduct),
  });
  desposeSession(response);
  return redirect("/cart/4");
};

export const deleteCartItemAction = async ({ params }) => {
  const response = await fetch(`${URL}/api/cart/4/${params.id}/`, {
    method: "delete",
  });
  desposeSession(response);
  return redirect("/cart/4");
};

export const createOrder = async ({ request, params }) => {
  const formDataOrder = await request.formData();
  const createdOrder = {
    orderStatus: formDataOrder.get("orderStatus"),
    userId: 4,
  };

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

  for (let i = 0; i < cartIds.length; i++) {
    let id = Number(cartIds[i]);

    const responseOrder = await fetch(`${URL}/api/order/${id}`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(createdOrder),
    });

    const responseCart = await fetch(`${URL}/api/cart/4/${id}`, {
      method: "patch",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCartProduct),
    });
  }

  return redirect("/store");
};

export const loginAction = async ({ request }) => {
  const formData = await request.formData();
  //build out the object that we will sending to /login
  const newUser = {
    username: formData.get("username"),
    password: formData.get("password"),
  };

  //make the request to login
  const response = await fetch(`${URL}/api/authentication/login`, {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      "Content-Type": "application/json",
    },
  });
  desposeSession(response);
  const data = await response.json();

  localStorage.setItem("token", data.token);
  localStorage.setItem("userRoles", data.roles);

  if (data.roles === "Admin") {
    return redirect("/admin");
  } else {
    return redirect("/store");
  }
};

export const signUpAction = async ({ request }) => {
  const formData = await request.formData();
  //build out the object that we will sending to /login
  const newUser = {
    username: formData.get("username"),
    password: formData.get("password"),
  };

  //make the request to login
  const response = await fetch(`${URL}/api/authentication/signup`, {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      "Content-Type": "application/json",
    },
  });
  desposeSession(response);
  const data = await response.json();

  localStorage.setItem("token", data.token);
  localStorage.setItem("userRoles", data.roles);

  if (data.roles === "Admin") {
    return redirect("/admin");
  } else {
    return redirect("/store");
  }
};

export const signUpAdminAction = async ({ request }) => {
  const formData = await request.formData();
  //build out the object that we will sending to /login
  const newUser = {
    username: formData.get("username"),
    password: formData.get("password"),
  };

  //make the request to login
  const response = await fetch(`${URL}/api/authentication/signup`, {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      "Content-Type": "application/json",
    },
  });
  desposeSession(response);
  const data = await response.json();

  localStorage.setItem("token", data.token);
  localStorage.setItem("userRoles", data.roles);

  if (data.roles === "Admin") {
    return redirect("/admin");
  } else {
    return redirect("/store");
  }
};
