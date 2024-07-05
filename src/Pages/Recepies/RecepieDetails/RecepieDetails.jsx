import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import "./RecepieDetails.css";
import { IoPricetagOutline } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { useState } from "react";
import profile1 from "../../../assets/reviewProfile/profile1.jpg";
import profile2 from "../../../assets/reviewProfile/profile2.jpg";
import profile3 from "../../../assets/reviewProfile/profile3.jpg";

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

            <div className="single-review">
              <img
                src={profile1}
                width="100%"
                height="100%"
                alt="Review persom"
              />
              <div className="review-info">
                <h4 className="focus-title">
                  Awesome food quality for the price
                  <span className="person-name">Jacob Hammond</span>
                </h4>
                <ul className="stars">
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
                      className="w-4 h-4 fill-current text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  
                  </div>
                </ul>
                <p className="review-des">
                  Delicious and innovative dishes, with fresh ingredients and
                  bold flavors. Exceptional presentation and attentive service
                  make for a delightful dining experience. Highly recommended!
                  4o
                </p>
              </div>
            </div>
            <div className="single-review">
              <img
                src={profile2}
                width="100%"
                height="100%"
                alt="Review persom"
              />
              <div className="review-info">
                <h4 className="focus-title">
                  Great Value for Excellent Cuisine
                  <span className="person-name">Alex Jaza</span>
                </h4>
                <ul className="stars">
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
                </ul>
                <p className="review-des">
                  Mouthwatering cuisine with creative twists, using fresh and
                  flavorful ingredients. Beautifully presented dishes paired
                  with impeccable service ensure a memorable dining experience.
                  Strongly recommended! Is this conversation helpful so far?
                </p>
              </div>
            </div>
            <div className="single-review">
              <img
                src={profile3}
                width="100%"
                height="100%"
                alt="Review persom"
              />
              <div className="review-info">
                <h4 className="focus-title">
                  Outstanding Quality at Affordable Prices
                  <span className="person-name">Dino Shofia</span>
                </h4>
                <ul className="stars">
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
                </ul>
                <p className="review-des">
                  Exquisite dishes with unique flavors, crafted from fresh,
                  high-quality ingredients. Stunning presentation and top-notch
                  service guarantee an unforgettable dining adventure. Highly
                  recommended!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecepieDetails;
