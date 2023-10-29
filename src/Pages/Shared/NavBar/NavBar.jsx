import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import logo from "./../../../assets/logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  //AOS animation used here
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/menu">Our Menu</Link>
      </li>

      <li>
        <Link to="/order">Order</Link>
      </li>

      <li>
        <a>Our Menu</a>
      </li>
    </>
  );
  return (
    <div
      className="navbar  fixed z-10 bg-opacity-40 bg-black text-white"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <div className="navbar-start ps-12">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <a>
          <img className="w-[240px]" src={logo} alt="logo" />
        </a>
      </div>

      <div className="navbar-end pe-12">
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
