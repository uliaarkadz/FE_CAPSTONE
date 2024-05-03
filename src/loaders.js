import desposeSession from "./helpers";
const URL = process.env.REACT_APP_URL;

export const productsLoader = async ({ params }) => {
  const response = await fetch(`${URL}/api/products`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  desposeSession(response);
  const products = await response.json();
  return products;
};

export const productLoader = async ({ params }) => {
  const response = await fetch(`${URL}/api/products/${params.id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  desposeSession(response);
  const product = await response.json();

  return product;
};

export const cartLoader = async ({ params }) => {
  const response = await fetch(`${URL}/api/cart/4`);
  desposeSession(response);
  const cart = await response.json();

  return cart;
};

export const productsCartLoader = async ({ params }) => {
  const responseProducts = await fetch(`${URL}/api/products`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  desposeSession(responseProducts);
  const products = await responseProducts.json();
  const responseCart = await fetch(`${URL}/api/cart/4`);
  desposeSession(responseCart);
  const cart = await responseCart.json();
  return { products, cart };
};

export const productCartLoader = async ({ params }) => {
  const responseProduct = await fetch(`${URL}/api/products/${params.id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  desposeSession(responseProduct);
  const product = await responseProduct.json();
  const responseCart = await fetch(`${URL}/api/cart/4`);
  desposeSession(responseCart);
  const cart = await responseCart.json();
  return { product, cart };
};

export const ordersLoader = async ({ params }) => {
  const response = await fetch(`${URL}/api/order/user/4`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  desposeSession(response);
  const orders = await response.json();

  return orders;
};
