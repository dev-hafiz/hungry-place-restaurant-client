import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import "./RecepieDetails.css";
import { IoPricetagOutline } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { useState } from "react";

const RecepieDetails = () => {
  const [quantity, setQuantity] = useState({ value: 1 });

  const increment = () => {
    setQuantity((prevQuantity) => ({ value: prevQuantity.value + 1 }));
  };

  const decrement = () => {
    setQuantity((prevQuantity) => ({
      value: prevQuantity.value > 1 ? prevQuantity.value - 1 : 1,
    }));
  };

  return (
    <div className="bg-[#F9F9F9]">
      <SectionTitle title="Recepie Details" details="Details" />
      {/* Order Area  */}
      <div className="lg:container pb-24 mx-auto">
        <div className="order-area">
          <div className="grid grid-cols-12 gap-2">
            <div className="left-col col-span-12 md:col-span-4">
              <div className="item-img">
                <img
                  src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2VhZm9vZHxlbnwwfDB8MHx8fDA%3D"
                  alt=""
                />
              </div>
            </div>
            <div className="right-col col-span-12 md:col-span-8">
              <div className="item-des">
                <h3 className="item-title">Franch Salmon Fry</h3>
                <div className="flex items-center">
                  <IoPricetagOutline className="mr-1" />
                  <span className="category-text">Category : fast food</span>
                </div>
                <div className="ratings"></div>
                <p className="item-price">$ 44.00</p>
                <p className="item-sub-title">Delicious Franch fish fry</p>
                <p className="item-description">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Harum, fugit libero. Corrupti magnam ad quisquam eum, fuga
                  ullam cum velit accusamus earum necessitatibus repellendus sed
                  rem quae aspernatur odio illum.
                </p>
                <p className="food-quantity">Quantity</p>
                <div className="sm:order-1 w-28 my-2">
                  <div className="mx-auto flex h-8 items-stretch text-gray-600">
                    <button
                      onClick={decrement}
                      className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-[#CF2424] hover:text-white"
                    >
                      -
                    </button>
                    <div className="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">
                      {quantity.value}
                    </div>
                    <button
                      onClick={increment}
                      className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-[#CF2424] hover:text-white"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div>
                  <button className="add-to-cart">
                    Add To Cart <FaCartShopping className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Details Area  */}
        <div className="details-area">
          <div className="grid grid-cols-12 gap-2">
            <div className="details-left-col col-span-12 md:col-span-6">
              <h3 className="details-title">Details</h3>
              <p className="details-des">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate ipsum fuga odit obcaecati sequi dicta neque officiis
                voluptates, dolores deserunt. Corporis eveniet nisi dicta eos
                nemo sapiente, quia quo vero molestias soluta quidem odio
                voluptate fugit ipsum praesentium et unde.
              </p>
              <h3 className="details-title">Features</h3>
              <ul className="features">
                <li>Capture 4K30 Video and 12MP Photos</li>
                <li>Capture 4K30 Video and 12MP Photos</li>
                <li>Capture 4K30 Video and 12MP Photos</li>
                <li>Capture 4K30 Video and 12MP Photos</li>
                <li>Capture 4K30 Video and 12MP Photos</li>
              </ul>
            </div>
            <div className="details-right-col col-span-12 md:col-span-6">
              <div className="right-container">
                <h3 className="details-title">Specifications</h3>
                <p className="normal-list">
                  Weight: <span>35.5oz (1006g)</span>
                </p>
                <p className="normal-list">
                  Weight: <span>35.5oz (1006g)</span>
                </p>
                <p className="normal-list">
                  Weight: <span>35.5oz (1006g)</span>
                </p>
                <p className="normal-list">
                  Weight: <span>35.5oz (1006g)</span>
                </p>
              </div>
              <div className="right-container mt-6">
                <h3 className="details-title">Order Options:</h3>
                <p className="normal-list">
                  Courier: <span> 2 - 4 days, $22.50</span>
                </p>
                <p className="normal-list">
                  Courier: <span> 2 - 4 days, $22.50</span>
                </p>
                <p className="normal-list">
                  Courier: <span> 2 - 4 days, $22.50</span>
                </p>
                <p className="normal-list">
                  Courier: <span> 2 - 4 days, $22.50</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Area  */}

        <div className="grid grid-cols-12 gap-9">
          <div className="reviews-left-col col-span-12 md:col-span-4">
            <div>
              <div className="flex w-4/5 justify-center flex-col">
                <div className="flex flex-col sm:flex-row ">
                  <>
                    <div className="flex items-center text-[20px] font-bold text-[#243E63]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      4.7 (Overall)
                    </div>
                  </>
                </div>
                <div className="text-gray-700">
                  <p className="font-medium my-2">Reviews</p>
                  <ul className="mb-6 mt-2 space-y-3">
                    <li className="flex items-center text-sm font-medium ">
                      <span className="w-3">5</span>
                      <span className="mr-4 text-yellow-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </span>
                      <div className="mr-4 h-2 w-96 overflow-hidden rounded-full bg-gray-300">
                        <div className="h-full w-10/12 bg-yellow-400"></div>
                      </div>
                      <span className="w-3">56</span>
                    </li>
                    <li className="flex items-center text-sm font-medium">
                      <span className="w-3">4</span>
                      <span className="mr-4 text-yellow-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </span>
                      <div className="mr-4 h-2 w-96 overflow-hidden rounded-full bg-gray-300">
                        <div className="h-full w-8/12 bg-yellow-400"></div>
                      </div>
                      <span className="w-3">12</span>
                    </li>
                    <li className="flex items-center text-sm font-medium">
                      <span className="w-3">3</span>
                      <span className="mr-4 text-yellow-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </span>
                      <div className="mr-4 h-2 w-96 overflow-hidden rounded-full bg-gray-300">
                        <div className="h-full w-1/12 bg-yellow-400"></div>
                      </div>
                      <span className="w-3">4</span>
                    </li>
                    <li className="flex items-center text-sm font-medium">
                      <span className="w-3">2</span>
                      <span className="mr-4 text-yellow-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </span>
                      <div className="mr-4 h-2 w-96 overflow-hidden rounded-full bg-gray-300">
                        <div className="h-full w-0 bg-yellow-400"></div>
                      </div>
                      <span className="w-3">0</span>
                    </li>
                    <li className="flex items-center text-sm font-medium">
                      <span className="w-3">1</span>
                      <span className="mr-4 text-yellow-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </span>
                      <div className="mr-4 h-2 w-96 overflow-hidden rounded-full bg-gray-300">
                        <div className="h-full w-1/12 bg-yellow-400"></div>
                      </div>
                      <span className="w-3">5</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center  justify-center">
                <button className="w-full  mt-4 rounded-sm bg-[#FFA000] hover:bg-yellow-500  transition duration-300 ease-linear py-3 text-white font-medium">
                  Write a review
                </button>
              </div>
            </div>
          </div>
          <div className="reviews-right-col col-span-12 md:col-span-8">
            <h3 className="details-title">Latest Reviews</h3>
            <div className="reviews-container border borde-2 p-4">
              <div className="flex items-star">
                <div className="flex-shrink-0">
                  <div className="inline-block relative">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                      <img
                        className="absolute top-0 left-0 w-full h-full bg-cover object-fit object-cover"
                        src="https://picsum.photos/id/646/200/200"
                        alt="Profile picture"
                      />
                      <div className="absolute top-0 left-0 w-full h-full rounded-full shadow-inner"></div>
                    </div>
                    <svg
                      className="fill-current text-white bg-red-500 rounded-full p-1 absolute bottom-0 right-0 w-6 h-6 -mx-1 -my-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M19 11a7.5 7.5 0 0 1-3.5 5.94L10 20l-5.5-3.06A7.5 7.5 0 0 1 1 11V3c3.38 0 6.5-1.12 9-3 2.5 1.89 5.62 3 9 3v8zm-9 1.08l2.92 2.04-1.03-3.41 2.84-2.15-3.56-.08L10 5.12 8.83 8.48l-3.56.08L8.1 10.7l-1.03 3.4L10 12.09z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-6 ">
                  <p className="flex items-baseline">
                    <span className="text-gray-600 font-bold">Mary T.</span>
                    <span className="ml-2 text-green-600 text-xs">
                      Verified Customer
                    </span>
                  </p>
                  <div className="flex items-center mt-1">
                    <svg
                      className="w-4 h-4 fill-current text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    <svg
                      className="w-4 h-4 fill-current text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    <svg
                      className="w-4 h-4 fill-current text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    <svg
                      className="w-4 h-4 fill-current text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    <svg
                      className="w-4 h-4 fill-current text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  </div>
                  <div className=" mt-4 text-gray-600">
                    <div className="flex items-center">
                      <span className="text-sm">Food Quality</span>
                      <div className="flex items-center ml-2">
                        <svg
                          className="w-3 h-3 fill-current text-yellow-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                        <svg
                          className="w-3 h-3 fill-current text-yellow-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                        <svg
                          className="w-3 h-3 fill-current text-yellow-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                        <svg
                          className="w-3 h-3 fill-current text-yellow-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                        <svg
                          className="w-3 h-3 fill-current text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm">Delivery time</span>
                      <div className="flex items-center ml-2">
                        <svg
                          className="w-3 h-3 fill-current text-yellow-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                        <svg
                          className="w-3 h-3 fill-current text-yellow-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                        <svg
                          className="w-3 h-3 fill-current text-yellow-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                        <svg
                          className="w-3 h-3 fill-current text-yellow-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                        <svg
                          className="w-3 h-3 fill-current text-yellow-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <span className="font-bold">
                      Sapien consequat eleifend!
                    </span>
                    <p className="mt-1">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam,
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-4 text-sm text-gray-600 fill-current">
                    <div className="flex items-center">
                      <span>Was this review helplful?</span>
                      <button className="flex items-center ml-6">
                        <svg
                          className="w-3 h-3"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M11 0h1v3l3 7v8a2 2 0 0 1-2 2H5c-1.1 0-2.31-.84-2.7-1.88L0 12v-2a2 2 0 0 1 2-2h7V2a2 2 0 0 1 2-2zm6 10h3v10h-3V10z" />
                        </svg>
                        <span className="ml-2">56</span>
                      </button>
                      <button className="flex items-center ml-4">
                        <svg
                          className="w-3 h-3"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M11 20a2 2 0 0 1-2-2v-6H2a2 2 0 0 1-2-2V8l2.3-6.12A3.11 3.11 0 0 1 5 0h8a2 2 0 0 1 2 2v8l-3 7v3h-1zm6-10V0h3v10h-3z" />
                        </svg>
                        <span className="ml-2">10</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="reviews-container mt-6 border borde-2 p-4">
              <div className="flex items-star">
                <div className="flex-shrink-0">
                  <div className="inline-block relative">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                      <img
                        className="absolute top-0 left-0 w-full h-full bg-cover object-fit object-cover"
                        src="https://picsum.photos/id/646/200/200"
                        alt="Profile picture"
                      />
                      <div className="absolute top-0 left-0 w-full h-full rounded-full shadow-inner"></div>
                    </div>
                    <svg
                      className="fill-current text-white bg-red-500 rounded-full p-1 absolute bottom-0 right-0 w-6 h-6 -mx-1 -my-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M19 11a7.5 7.5 0 0 1-3.5 5.94L10 20l-5.5-3.06A7.5 7.5 0 0 1 1 11V3c3.38 0 6.5-1.12 9-3 2.5 1.89 5.62 3 9 3v8zm-9 1.08l2.92 2.04-1.03-3.41 2.84-2.15-3.56-.08L10 5.12 8.83 8.48l-3.56.08L8.1 10.7l-1.03 3.4L10 12.09z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-6 ">
                  <p className="flex items-baseline">
                    <span className="text-gray-600 font-bold">Mary T.</span>
                    <span className="ml-2 text-green-600 text-xs">
                      Verified Customer
                    </span>
                  </p>
                  <div className="flex items-center mt-1">
                    <svg
                      className="w-4 h-4 fill-current text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    <svg
                      className="w-4 h-4 fill-current text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    <svg
                      className="w-4 h-4 fill-current text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    <svg
                      className="w-4 h-4 fill-current text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    <svg
                      className="w-4 h-4 fill-current text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  </div>
                  <div className=" mt-4 text-gray-600">
                    <div className="flex items-center">
                      <span className="text-sm">Food Quality</span>
                      <div className="flex items-center ml-2">
                        <svg
                          className="w-3 h-3 fill-current text-yellow-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                        <svg
                          className="w-3 h-3 fill-current text-yellow-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                        <svg
                          className="w-3 h-3 fill-current text-yellow-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                        <svg
                          className="w-3 h-3 fill-current text-yellow-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                        <svg
                          className="w-3 h-3 fill-current text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm">Delivery time</span>
                      <div className="flex items-center ml-2">
                        <svg
                          className="w-3 h-3 fill-current text-yellow-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                        <svg
                          className="w-3 h-3 fill-current text-yellow-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                        <svg
                          className="w-3 h-3 fill-current text-yellow-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                        <svg
                          className="w-3 h-3 fill-current text-yellow-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                        <svg
                          className="w-3 h-3 fill-current text-yellow-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <span className="font-bold">
                      Sapien consequat eleifend!
                    </span>
                    <p className="mt-1">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam,
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-4 text-sm text-gray-600 fill-current">
                    <div className="flex items-center">
                      <span>Was this review helplful?</span>
                      <button className="flex items-center ml-6">
                        <svg
                          className="w-3 h-3"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M11 0h1v3l3 7v8a2 2 0 0 1-2 2H5c-1.1 0-2.31-.84-2.7-1.88L0 12v-2a2 2 0 0 1 2-2h7V2a2 2 0 0 1 2-2zm6 10h3v10h-3V10z" />
                        </svg>
                        <span className="ml-2">56</span>
                      </button>
                      <button className="flex items-center ml-4">
                        <svg
                          className="w-3 h-3"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M11 20a2 2 0 0 1-2-2v-6H2a2 2 0 0 1-2-2V8l2.3-6.12A3.11 3.11 0 0 1 5 0h8a2 2 0 0 1 2 2v8l-3 7v3h-1zm6-10V0h3v10h-3z" />
                        </svg>
                        <span className="ml-2">10</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecepieDetails;
