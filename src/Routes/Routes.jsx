import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Orders from "../Pages/Orders/Orders/Orders";
import Login from "../Pages/Login/Login/Login";
import Signup from "../Pages/Login/Signup";
import Dashboard from "../Layout/Dashboard";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import MyCart from "../Pages/Dashboard/UserPages/MyCart/MyCart";
import AllUser from "../Pages/Dashboard/AdminPages/AllUser/AllUser";
import AddProduct from "../Pages/Dashboard/AdminPages/AddProduct/AddProduct";
import AdminRoute from "../PrivateRoute/AdminRoute";
import ManageProducts from "../Pages/Dashboard/AdminPages/ManageProducts/ManageProducts";
import UpdateProduct from "../Pages/Dashboard/AdminPages/UpdateProduct/UpdateProduct";
import AdminHome from "../Pages/Dashboard/AdminPages/AdminHome/AdminHome";
import UserHome from "../Pages/Dashboard/UserPages/UserHome/UserHome";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/UserPages/PaymentHistory/PaymentHistory";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "order/:category",
        element: <Orders />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "userHome",
        element: <UserHome />,
      },
      {
        path: "mycart",
        element: <MyCart />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory />,
      },

      //Admin only routes
      {
        path: "adminHome",
        element: (
          <AdminRoute>
            <AdminHome />
          </AdminRoute>
        ),
      },
      {
        path: "addProduct",
        element: (
          <AdminRoute>
            <AddProduct />
          </AdminRoute>
        ),
      },
      {
        path: "manageProducts",
        element: (
          <AdminRoute>
            <ManageProducts />
          </AdminRoute>
        ),
      },
      {
        path: "updateProduct/:id",
        element: (
          <AdminRoute>
            <UpdateProduct />
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://hungry-place-restaurant-server.vercel.app/menu/${params.id}`
          ),
      },
      {
        path: "alluser",
        element: (
          <AdminRoute>
            <AllUser />
          </AdminRoute>
        ),
      },
    ],
  },
]);
