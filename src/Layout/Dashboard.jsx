import { Link, Outlet } from "react-router-dom";
import { FaEdit, FaHamburger, FaHome, FaShoppingCart } from "react-icons/fa";
import { FaCalendar, FaPlus, FaUsers, FaWallet } from "react-icons/fa6";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();

  const [isAdmin] = useAdmin();

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center bg-white text-black">
        {/* Page content here */}
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-white text-black">
          {/* Sidebar content here */}
          {isAdmin?.admin ? (
            <>
              <li>
                <Link to="/dashboard/adminHome">
                  <FaHome />
                  Admin Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard/alluser">
                  <div className="flex">
                    <FaUsers className="mr-2 flex justify-center items-center" />
                    All User
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/dashboard/addProduct">
                  <FaPlus />
                  Add Product
                </Link>
              </li>
              <li>
                <Link to="/dashboard/manageProducts">
                  <FaEdit />
                  Manage Products
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/dashboard/userHome">
                  <FaHome />
                  User Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard/mycart">
                  <div className="flex">
                    <FaShoppingCart className="mr-2" />
                    My Cart{" "}
                    <span className="badge ml-1 mt-[-5px] badge-secondary bg-red-600">
                      +{cart.length || 0}
                    </span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/dashboard/paymentHistory">
                  <FaWallet />
                  Payment History
                </Link>
              </li>
              <li>
                <Link to="/dashboard/riservations">
                  <FaCalendar />
                  Riservations
                </Link>
              </li>
            </>
          )}

          <div className="divider"></div>
          <li>
            <Link to="/">
              <FaHome />
              Home
            </Link>
          </li>
          <li>
            <Link to="/dashboard/menu">
              <FaHamburger />
              Menu
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
