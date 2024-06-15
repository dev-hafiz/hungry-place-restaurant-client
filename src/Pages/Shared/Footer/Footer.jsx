/* eslint-disable react/no-unknown-property */
import "aos/dist/aos.css";
import visa from "./../../../assets/cards/visa.png";
import master from "./../../../assets/cards/master.png";
import american from "./../../../assets/cards/american.png";
import paypal from "./../../../assets/cards/paypal.png";
import payoneer from "./../../../assets/cards/payoneer.png";
import { Link } from "react-router-dom";
import logo from "../../../assets/Logo1.png";

const Footer = () => {
  return (
    <div>
      <footer className="w-full">
        <div>
          <div className="mx-auto max-w-7xl  px-4 sm:px-6 ">
            <div className="flex flex-col xl:flex-row gap-8 pt-14 pb-14">
              <div className="w-full   xl:max-w-[265px] max-xl:mb-8">
                <Link to="/" className="flex justify-center md:justify-start">
                  <img src={logo} alt="footer logo" className="mb-5  " />
                </Link>
                <div className="flex max-xl:items-center max-xl:justify-between  flex-col sm:flex-row xl:flex-col">
                  <div className="flex gap-8 xl:flex-col">
                    {/* img gallery start  */}

                    <div class="grid grid-cols-2 md:grid-cols-2 gap-2  max-w-[400px] md:max-w-[600px] pr-14 ">
                      <img
                        class="hover:opacity-75 w-24 h-24 rounded-md"
                        src="https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      />
                      <img
                        class="hover:opacity-75  w-24 h-24 rounded-md"
                        src="https://images.pexels.com/photos/277253/pexels-photo-277253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      />
                      <img
                        class="hover:opacity-75  w-24 h-24 rounded-md"
                        src="https://images.pexels.com/photos/1998920/pexels-photo-1998920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      />
                      <img
                        class="hover:opacity-75  w-24 h-24 rounded-md"
                        src="https://images.pexels.com/photos/1988624/pexels-photo-1988624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      />
                    </div>
                    {/* img gallery end  */}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 min-[890px]:grid-cols-5 lg:grid-cols-5 gap-4 xl:gap-8 w-full max-w-sm mx-auto sm:max-w-3xl min-[890px]:max-w-full">
                <div className="w-full  text-left">
                  <h4 className="text-xl text-gray-900 font-medium mb-7">
                    Company
                  </h4>
                  <ul className=" transition-all duration-500">
                    <li className="mb-6">
                      <a
                        href="javascript:;"
                        className="text-gray-600 hover:text-gray-900"
                      >
                        Home
                      </a>
                    </li>
                    <li className="mb-6">
                      <a
                        href="javascript:;"
                        className=" text-gray-600 hover:text-gray-900"
                      >
                        About
                      </a>
                    </li>
                    <li className="mb-6">
                      <a
                        href="javascript:;"
                        className=" text-gray-600 hover:text-gray-900"
                      >
                        Pricing
                      </a>
                    </li>
                    <li className="mb-6">
                      <a
                        href="javascript:;"
                        className=" text-gray-600 hover:text-gray-900"
                      >
                        Menu
                      </a>
                    </li>
                    <li className="mb-6">
                      <a
                        href="javascript:;"
                        className=" text-gray-600 hover:text-gray-900"
                      >
                        Special Offers
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full  text-left">
                  <h4 className="text-xl text-gray-900 font-medium mb-7">
                    Recepies
                  </h4>
                  <ul className=" transition-all duration-500">
                    <li className="mb-6">
                      <a
                        href="javascript:;"
                        className="text-gray-600 hover:text-gray-900"
                      >
                        Fresh Mango Salsa
                      </a>
                    </li>
                    <li className="mb-6">
                      <a
                        href="javascript:;"
                        className=" text-gray-600 hover:text-gray-900"
                      >
                        Margherita Pizza
                      </a>
                    </li>
                    <li className="mb-6">
                      <a
                        href="javascript:;"
                        className=" text-gray-600 hover:text-gray-900"
                      >
                        Chocolate Lava Cake
                      </a>
                    </li>
                    <li className="mb-6">
                      <a
                        href="javascript:;"
                        className=" text-gray-600 hover:text-gray-900"
                      >
                        Spicy Thai Basil Beef
                      </a>
                    </li>
                    <li className="">
                      <a
                        href="javascript:;"
                        className=" text-gray-600 hover:text-gray-900"
                      >
                        Vegan Quinoa Salad
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full  text-left">
                  <h4 className="text-xl text-gray-900 font-medium mb-7">
                    Food APIs
                  </h4>
                  <ul className="  transition-all duration-500">
                    <li className="mb-6">
                      <a
                        href="javascript:;"
                        className="text-gray-600 hover:text-gray-900"
                      >
                        FAQs
                      </a>
                    </li>
                    <li className="mb-6">
                      <a
                        href="javascript:;"
                        className=" text-gray-600 hover:text-gray-900"
                      >
                        Quick Start
                      </a>
                    </li>
                    <li className="mb-6">
                      <a
                        href="javascript:;"
                        className=" text-gray-600 hover:text-gray-900"
                      >
                        Documentation
                      </a>
                    </li>
                    <li className="mb-6">
                      <a
                        href="javascript:;"
                        className=" text-gray-600 hover:text-gray-900"
                      >
                        User Guide
                      </a>
                    </li>
                    <li className="">
                      <a
                        href="javascript:;"
                        className=" text-gray-600 hover:text-gray-900"
                      >
                        Plugin Guide
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full text-left">
                  <h4 className="text-xl text-gray-900 font-medium mb-7">
                    Blogs
                  </h4>
                  <ul className="transition-all duration-500">
                    <li className="mb-6">
                      <a
                        href="javascript:;"
                        className="text-gray-600 hover:text-gray-900"
                      >
                        Food News
                      </a>
                    </li>
                    <li className="mb-6">
                      <a
                        href="javascript:;"
                        className=" text-gray-600 hover:text-gray-900"
                      >
                        Cooking Tips
                      </a>
                    </li>
                    <li className="mb-6">
                      <a
                        href="javascript:;"
                        className=" text-gray-600 hover:text-gray-900"
                      >
                        Recipe Updates
                      </a>
                    </li>
                    <li className="mb-6">
                      <a
                        href="javascript:;"
                        className=" text-gray-600 hover:text-gray-900"
                      >
                        Food Events
                      </a>
                    </li>
                    <li className="">
                      <a
                        href="javascript:;"
                        className=" text-gray-600 hover:text-gray-900"
                      >
                        Food Stories
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full text-left">
                  <h4 className="text-xl text-gray-900 font-medium mb-7">
                    Support
                  </h4>
                  <ul className="transition-all duration-500">
                    <li className="mb-6">
                      <a
                        href="javascript:;"
                        className="text-gray-600 hover:text-gray-900"
                      >
                        Customer Support
                      </a>
                    </li>
                    <li className="mb-6">
                      <a
                        href="javascript:;"
                        className=" text-gray-600 hover:text-gray-900"
                      >
                        Cookies
                      </a>
                    </li>
                    <li className="mb-6">
                      <a
                        href="javascript:;"
                        className=" text-gray-600 hover:text-gray-900"
                      >
                        License
                      </a>
                    </li>
                    <li className="mb-6">
                      <a
                        href="javascript:;"
                        className=" text-gray-600 hover:text-gray-900"
                      >
                        Terms & Conditions
                      </a>
                    </li>
                    <li className="mb-6">
                      <a
                        href="javascript:;"
                        className=" text-gray-600 hover:text-gray-900"
                      >
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-7xl  ">
            <div className="py-2 border-t border-gray-200">
              <div className="flex items-center justify-center flex-col sm:justify-between sm:flex-row">
                <div className=" bg-white ">
                  <div className=" lg:container  mx-auto text-black  ">
                    <div className="flex justify-center md:justify-start ">
                      <div className="flex items-center border w-auto rounded-lg px-4 py-1  hover:bg-[#e5e5e5] transition-all duration-3000 ease-linear cursor-pointer">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                          className="w-7 md:w-6"
                        />
                        <div className="text-left ml-3">
                          <p className="text-xs text-[#243E63]">Download on </p>
                          <p className="text-xs"> Play Store</p>
                        </div>
                      </div>
                      <div className="flex hover:bg-[#e5e5e5] transition-all duration-3000 ease-linear  cursor-pointer items-center border w-auto rounded-lg px-4 ml-2">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
                          className="w-7 md:w-6"
                        />
                        <div className="text-left ml-3">
                          <p className="text-xs text-[#243E63]">Download on </p>
                          <p className="text-xs "> Apple Store </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <span className="text-sm text-gray-500 ">
                  ©
                  <a
                    href="https://dev-hafiz.netlify.app/"
                    className="ml-1 mr-1"
                  >
                    Dev Hafiz
                  </a>
                  2024, All rights reserved.
                </span>
                <div className=" flex justify-end  gap-2">
                  <img width="50px" src={visa} alt="visa" />
                  <img width="50px" src={master} alt="master" />
                  <img width="50px" src={american} alt="american" />
                  <img width="50px" src={paypal} alt="paypal" />
                  <img width="50px" src={payoneer} alt="payoneer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
