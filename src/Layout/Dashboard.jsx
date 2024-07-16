/* eslint-disable react/no-unknown-property */
import { Link, Outlet } from "react-router-dom";
// import { FaEdit, FaHamburger, FaHome, FaShoppingCart } from "react-icons/fa";
// import { FaCalendar, FaPlus, FaUsers, FaWallet } from "react-icons/fa6";
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
        <div className="h-screen w-64 pb-10">
          <div className="flex h-full flex-grow flex-col overflow-y-auto rounded-br-lg rounded-tr-lg bg-white pt-5 shadow-md">
            <div className="flex mt-10 items-center px-4">
              <img
                className="h-12 w-12 object-cover max-w-full align-middle rounded-full"
                src="data:image/jpeg;base64,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"
                alt=""
              />
              <div className="flex ml-3 flex-col">
                <h3 className="font-medium">Sarah Carter</h3>
                <p className="text-xs text-gray-500">Sr. Engineer</p>
              </div>
            </div>

            <span className="ml-3 mt-10 mb-2 block text-xs font-semibold text-gray-500">
              Dashboard
            </span>

            <div className="flex mt-3 flex-1 flex-col">
              <div className="">
                <nav className="flex-1">
                  {isAdmin?.admin ? (
                    <>
                      <Link
                        to="/dashboard/adminHome"
                        className="flex cursor-pointer items-center border-l-4 border-l-rose-600 py-2 px-4 text-sm font-medium text-rose-600 outline-none transition-all duration-100 ease-in-out focus:border-l-4"
                      >
                        <svg
                          className="mr-4 h-5 w-5 align-middle"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            className=""
                          ></path>
                        </svg>
                        Dashboard
                      </Link>
                      <Link
                        to="/dashboard/alluser"
                        className="flex cursor-pointer items-center border-l-rose-600 py-2 px-4 text-sm font-medium text-gray-600 outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:border-l-rose-600 hover:text-rose-600 focus:border-l-4"
                      >
                        <svg
                          class="mr-4 h-5 w-5 align-middle"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                          ></path>
                        </svg>
                        All User
                      </Link>
                      <Link
                        to="/dashboard/addProduct"
                        className="flex cursor-pointer items-center border-l-rose-600 py-2 px-4 text-sm font-medium text-gray-600 outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:border-l-rose-600 hover:text-rose-600 focus:border-l-4"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-4 h-5 w-5 align-middle"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
                          />
                        </svg>
                        Add Food Item
                      </Link>
                      <Link
                        to="/dashboard/manageProducts"
                        className="flex cursor-pointer items-center border-l-rose-600 py-2 px-4 text-sm font-medium text-gray-600 outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:border-l-rose-600 hover:text-rose-600 focus:border-l-4"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          className="mr-4 h-5 w-5 align-middle"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
                          />
                        </svg>
                        Manage Foods Item
                      </Link>
                      <div className="relative transition">
                        <input
                          className="peer hidden"
                          type="checkbox"
                          id="menu-1"
                        />
                        <label
                          htmlFor="menu-1"
                          className="flex relative w-full items-center border-l-rose-600 py-3 px-4 text-sm font-medium text-gray-600 outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:text-rose-600 focus:border-l-4 cursor-pointer"
                        >
                          <span className="flex mr-5 w-5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                              />
                            </svg>
                          </span>
                          Analytics
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-600 transition-transform duration-300 peer-checked:rotate-180 peer-hover:text-rose-600 focus:border-l-4 cursor-pointer"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </label>
                        <ul className="duration-400 flex m-2 max-h-0 flex-col overflow-hidden rounded-xl bg-gray-100 font-medium transition-all duration-300 peer-checked:max-h-96">
                          <li>
                            <Link
                              to="/dashboard/adminHome"
                              className="flex cursor-pointer items-center m-2  border-l-rose-600 py-3 px-4 pl-5 text-sm font-medium text-gray-600 outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:border-l-rose-600 hover:text-rose-600 focus:border-l-4"
                            >
                              <span className="mr-5">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                  />
                                </svg>
                              </span>
                              Revenue
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </>
                  ) : (
                    <>
                      <span className="ml-3 mt-10 mb-2 block text-xs font-semibold text-gray-500">
                        User Dashboard
                      </span>
                      <nav className="flex-1">
                        <Link
                          to="/dashboard/userHome"
                          className="flex cursor-pointer items-center border-l-rose-600 py-2 px-4 text-sm font-medium text-gray-600 outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:border-l-rose-600 hover:text-rose-600 focus:border-l-4"
                        >
                          <svg
                            className="mr-4 h-5 w-5 align-middle"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                            />
                          </svg>
                          User Home
                        </Link>
                        <Link
                          to="/dashboard/mycart"
                          className="flex cursor-pointer items-center border-l-rose-600 py-2 px-4 text-sm font-medium text-gray-600 outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:border-l-rose-600 hover:text-rose-600 focus:border-l-4"
                        >
                          <svg
                            className="mr-4 h-5 w-5 align-middle"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                            />
                          </svg>
                          <div className="flex">
                            {/* <FaShoppingCart className="mr-2" /> */}
                            My Cart{" "}
                            <span className="badge ml-1 mt-[-5px] badge-secondary bg-red-600">
                              +{cart.length || 0}
                            </span>
                          </div>
                        </Link>
                        <Link
                          to="/dashboard/mycart"
                          className="flex cursor-pointer items-center border-l-rose-600 py-2 px-4 text-sm font-medium text-gray-600 outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:border-l-rose-600 hover:text-rose-600 focus:border-l-4"
                        >
                          <svg
                            className="mr-4 h-5 w-5 align-middle"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                            />
                          </svg>
                          Cart
                        </Link>
                        <Link
                          to="/dashboard/paymentHistory"
                          className="flex cursor-pointer items-center border-l-rose-600 py-2 px-4 text-sm font-medium text-gray-600 outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:border-l-rose-600 hover:text-rose-600 focus:border-l-4"
                        >
                          <svg
                            className="mr-4 h-5 w-5 align-middle"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                            />
                          </svg>
                          Payment History
                        </Link>
                      </nav>
                    </>
                  )}
                </nav>

                <span className="ml-3 mt-10 mb-2 block text-xs font-semibold text-gray-500">
                  Primary
                </span>

                <nav className="flex-1">
                  <Link
                    to="/"
                    className="flex cursor-pointer items-center border-l-rose-600 py-2 px-4 text-sm font-medium text-gray-600 outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:border-l-rose-600 hover:text-rose-600 focus:border-l-4"
                  >
                    <svg
                      className="mr-4 h-5 w-5 align-middle"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        className=""
                      ></path>
                    </svg>
                    Home
                  </Link>
                  <Link
                    to="/recepies"
                    className="flex cursor-pointer items-center border-l-rose-600 py-2 px-4 text-sm font-medium text-gray-600 outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:border-l-rose-600 hover:text-rose-600 focus:border-l-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="mr-4 h-5 w-5 align-middle"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
                      />
                    </svg>
                    All Recepie
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
