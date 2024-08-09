/* eslint-disable react/no-unknown-property */
import { CiMail } from "react-icons/ci";
import "./TopNavbar.css";
import useAuth from "../../../Hooks/useAuth";
import { Link } from "react-router-dom";
import useAdmin from "../../../Hooks/useAdmin";
const TopNavbar = () => {
  const { user, logOut } = useAuth();
  const [isAdmin] = useAdmin();
  return (
    <nav className=" custom-navbar w-100  max-sm:mt-4  md:px-auto">
      <div className="mx-auto container flex items-center justify-between flex-wrap md:flex-nowrap">
        <div className="text-black md:order-1 flex items-center">
          <CiMail className="fa-icon" />{" "}
          <span className="support-text">need@support.com</span>
        </div>
        <div className="text-gray-500 order-3 w-full md:w-auto md:order-2 px-4 max-sm:mb-6">
          <ul className="flex font-semibold justify-between ">
            <li className="md:px-4 md:py-2 text-indigo-500">
              <Link to="/">Home</Link>
            </li>
            <li className="md:px-4 md:py-2 hover:text-indigo-400">
              <Link to="/recepies">Recepies</Link>
            </li>
            <li className="md:px-4 md:py-2 hover:text-indigo-400">
              <Link to="/">About</Link>
            </li>
            <li className="md:px-4 md:py-2 hover:text-indigo-400">
              <Link to="/contact">Contact</Link>
            </li>

            {user?.email && isAdmin?.admin && (
              <li className="md:px-4 md:py-2 hover:text-indigo-400">
                <Link to="/dashboard/profile">Dashboard</Link>
              </li>
            )}
            {user?.email && !isAdmin?.admin && (
              <li className="md:px-4 md:py-2 hover:text-indigo-400">
                <Link to="/dashboard/profile">Dashboard</Link>
              </li>
            )}
          </ul>
        </div>
        <div className="order-2 md:order-3">
          {user?.uid ? (
            <button onClick={logOut} className="btn-logout ml-2">
              <span>LogOut</span>
            </button>
          ) : (
            <>
              <button className="btn-login">
                <Link to="/login">Login</Link>
              </button>
              <button className="btn-login ml-2">
                <Link to="/register">Register</Link>
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
