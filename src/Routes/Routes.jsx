import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login/Login";
import Signup from "../Pages/Login/Signup";
import Dashboard from "../Layout/Dashboard";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AllUser from "../Pages/Dashboard/AdminPages/AllUser/AllUser";
import AddProduct from "../Pages/Dashboard/AdminPages/AddProduct/AddProduct";
import AdminRoute from "../PrivateRoute/AdminRoute";
import ManageProducts from "../Pages/Dashboard/AdminPages/ManageProducts/ManageProducts";
import UpdateProduct from "../Pages/Dashboard/AdminPages/UpdateProduct/UpdateProduct";
import AdminHome from "../Pages/Dashboard/AdminPages/AdminHome/AdminHome";
import PaymentHistory from "../Pages/Dashboard/UserPages/PaymentHistory/PaymentHistory";
import Recepies from "../Pages/Recepies/Recepies";
import RecepieDetails from "../Pages/Recepies/RecepieDetails/RecepieDetails";
import MyCart from "../Pages/Dashboard/UserPages/OrderCart/MyCart";
import Profile from "../Pages/Dashboard/Profile/Profile";
import ProfileUpdate from "../Pages/Dashboard/Profile/ProfileUpdate/ProfileUpdate";
import Contact from "../Pages/Home/Contact/Contact";
import About from "../Pages/Home/About/About";
import UserReview from "../Pages/Dashboard/UserPages/UserReview/UserReview";

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
        path: "recepies",
        element: <Recepies />,
      },
      {
        path: "recepies/:id",
        element: (
          <PrivateRoute>
            <RecepieDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://hungry-place-restaurant-server.vercel.app/menu/${params.id}`
          ),
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },

  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Signup />,
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
        path: "mycart",
        element: <MyCart />,
      },
      {
        path: "review",
        element: <UserReview />,
      },

      {
        path: "paymentHistory",
        element: <PaymentHistory />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "profile/:id",
        element: <ProfileUpdate />,
        loader: ({ params }) =>
          fetch(
            `https://hungry-place-restaurant-server.vercel.app/users/id/${params.id}`
          ),
      },

      //Admin only routes

      {
        path: "analytics",
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
