/* eslint-disable react/no-unknown-property */
import { CiMail } from "react-icons/ci";
import "./TopNavbar.css";
import useAuth from "../../../Hooks/useAuth";
import { Link, NavLink } from "react-router-dom";
import useAdmin from "../../../Hooks/useAdmin";
const TopNavbar = () => {
  const { user, logOut } = useAuth();
  const [isAdmin] = useAdmin();
  return (
    <nav className=" custom-navbar  max-sm:mt-10 max-sm:pb-4 md:px-0  px-5 md:py-5 py-0">
      <div className="mx-auto container flex items-center justify-between flex-wrap md:flex-nowrap">
        <div className="text-black md:order-1 flex items-center">
          <CiMail className="fa-icon" />
          <span className="support-text">need@support.com</span>
        </div>
        <div className="text-gray-500 order-3 w-full md:w-auto md:order-2 px-4 max-sm:mb-6">
          <ul className="flex flex-wrap font-semibold justify-between ">
            <li className="md:px-4 md:py-2 flex cursor-pointer items-center text-sm font-medium  outline-none  hover:text-rose-600">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-rose-600 " : undefined
                }
              >
                Home
              </NavLink>
            </li>
            <li className="md:px-4 md:py-2 flex cursor-pointer items-center text-sm font-medium  outline-none  hover:text-rose-600">
              <NavLink
                to="/recepies"
                className={({ isActive }) =>
                  isActive ? "text-rose-600 " : undefined
                }
              >
                Recipes
              </NavLink>
            </li>
            <li className="md:px-4 md:py-2 flex cursor-pointer items-center text-sm font-medium  outline-none  hover:text-rose-600">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-rose-600 " : undefined
                }
              >
                Contact
              </NavLink>
            </li>
            <li className="md:px-4 md:py-2 flex cursor-pointer items-center text-sm font-medium  outline-none  hover:text-rose-600">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-rose-600 " : undefined
                }
              >
                About
              </NavLink>
            </li>

            {user?.email && isAdmin?.admin && (
              <li className="md:px-4 md:py-2 flex cursor-pointer items-center text-sm font-medium  outline-none  hover:text-rose-600">
                <NavLink
                  to="/dashboard/profile"
                  className={({ isActive }) =>
                    isActive ? "text-rose-600 " : undefined
                  }
                >
                  Dashboard
                </NavLink>
              </li>
            )}
            {user?.email && !isAdmin?.admin && (
              <li className="md:px-4 md:py-2 flex cursor-pointer items-center text-sm font-medium  outline-none  hover:text-rose-600">
                <NavLink
                  to="/dashboard/profile"
                  className={({ isActive }) =>
                    isActive ? "text-rose-600 " : undefined
                  }
                >
                  Dashboard
                </NavLink>
              </li>
            )}
          </ul>
        </div>
        <div className="order-2 md:order-3 ">
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
