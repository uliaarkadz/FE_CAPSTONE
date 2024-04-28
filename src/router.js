import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App";

import Landing from "./pages/Index";
import Products from "./pages/Product/Products";
import ProductDetails from "./pages/Product/ProductDetails";
import CreateProduct from "./pages/Product/ProductCreate";
import EditProduct from "./pages/Product/EditProduct";
import StoreLanding from "./pages/Store/MainPage";
import CartDetails from "./pages/Store/CartDetails";
import Orders from "./pages/Store/Orders";
import {
  productsLoader,
  productLoader,
  productsCartLoader,
  cartLoader,
  productCartLoader,
  ordersLoader,
} from "./loaders";
import {
  createProductAction,
  deleteProductAction,
  editProductAction,
  addProductToCartAction,
  deleteCartItemAction,
  updateCartItemAction,
  createOrder,
} from "./actions";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Landing />} />
      <Route
        path="/store"
        element={<StoreLanding />}
        loader={productsCartLoader}
      />
      <Route path="/products" element={<Products />} loader={productsLoader} />
      <Route
        path="/products/:id"
        element={<ProductDetails />}
        loader={productCartLoader}
      />
      <Route
        path="/products/new"
        element={<CreateProduct />}
        action={createProductAction}
      />
      <Route
        path="/products/edit/:id"
        element={<EditProduct />}
        action={editProductAction}
        loader={productLoader}
      />
      <Route path="/products/delete/:id" action={deleteProductAction} />
      <Route path="/cart/add/:id" action={addProductToCartAction} />
      <Route
        path="/cart/:id"
        element={<CartDetails />}
        loader={productsCartLoader}
      />
      <Route path="/cart/update/:id" action={updateCartItemAction} />
      <Route path="/cart/delete/:id" action={deleteCartItemAction} />
      <Route path="/order/:ids" action={createOrder} />
      <Route path="/order/user/:userid" element={<Orders />} loader={ordersLoader} />
    </Route>
  )
);

export default router;
