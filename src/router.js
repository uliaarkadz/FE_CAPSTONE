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
import ProductDetailCustomer from "./pages/Store/ProductDetailCustomer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Main from "./pages/Main";
import {
  productsLoader,
  productLoader,
  productsCartLoader,
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
  loginAction,
} from "./actions";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Main />}>
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} action={loginAction} />
      </Route>
      <Route path="/admin" element={<Landing />} />
      <Route
        path="/store"
        element={<StoreLanding />}
        loader={productsCartLoader}
      />
      <Route path="/products" element={<Products />} loader={productsLoader} />
      <Route
        path="/products/:id"
        element={<ProductDetails />}
        loader={productLoader}
      />
      <Route
        path="/products/customer/:id"
        element={<ProductDetailCustomer />}
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
      <Route
        path="/cart/add/:productid/:userid"
        action={addProductToCartAction}
      />
      <Route
        path="/cart/:id"
        element={<CartDetails />}
        loader={productsCartLoader}
      />
      <Route
        path="/cart/update/:productid/:cartid"
        action={updateCartItemAction}
      />
      <Route path="/cart/delete/:id" action={deleteCartItemAction} />
      <Route path="/order/:ids" action={createOrder} />
      <Route
        path="/order/user/:userid"
        element={<Orders />}
        loader={ordersLoader}
      />
    </Route>
  )
);

export default router;
