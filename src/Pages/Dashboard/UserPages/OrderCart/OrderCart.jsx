/* eslint-disable react/no-unknown-property */
import "./OrderCart.css";
import { AiOutlineDelete } from "react-icons/ai";

const OrderCart = () => {
  return (
    <div className="w-9/12 h-full mt-20">
      <div className=" grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-8 py-6 px-5">
          <div>
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-semibold">Your Cart</h1>
              <p className="text-[#6F6F79] ">4 Items in cart</p>
            </div>

            <div className="cart-item">
              <div className="flex items-center gap-6">
                <img
                  src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/cart-page/1/product-1.png"
                  alt="item image"
                />
                <div className="item-des">
                  <h3>Apple Watch Series 7 - 44mm</h3>
                  <p>Chategory: Chinese </p>
                </div>
              </div>
              <div>
                <div
                  className="py-1 px-2 inline-block bg-white border border-gray-200 rounded-md"
                  data-hs-input-number=""
                >
                  <div className="flex items-center gap-x-1.5">
                    <button
                      type="button"
                      className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                      data-hs-input-number-decrement=""
                    >
                      <svg
                        className="flex-shrink-0 size-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                      </svg>
                    </button>
                    <input
                      className="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0"
                      type="text"
                      value="0"
                    />
                    <button
                      type="button"
                      className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                    >
                      <svg
                        className="flex-shrink-0 size-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <p className="price-text">$99.00</p>
              <button>
                <AiOutlineDelete className="delete-btn" />
              </button>
            </div>
            <div className="cart-item">
              <div className="flex items-center gap-6">
                <img
                  src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/cart-page/1/product-1.png"
                  alt="item image"
                />
                <div className="item-des">
                  <h3>Apple Watch Series 7 - 44mm</h3>
                  <p>Chategory: Chinese </p>
                </div>
              </div>
              <div>
                <div
                  className="py-1 px-2 inline-block bg-white border border-gray-200 rounded-md"
                  data-hs-input-number=""
                >
                  <div className="flex items-center gap-x-1.5">
                    <button
                      type="button"
                      className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                      data-hs-input-number-decrement=""
                    >
                      <svg
                        className="flex-shrink-0 size-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                      </svg>
                    </button>
                    <input
                      className="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0"
                      type="text"
                      value="0"
                    />
                    <button
                      type="button"
                      className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                    >
                      <svg
                        className="flex-shrink-0 size-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <p className="price-text">$99.00</p>
              <button>
                <AiOutlineDelete className="delete-btn" />
              </button>
            </div>
            <div className="cart-item">
              <div className="flex items-center gap-6">
                <img
                  src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/cart-page/1/product-1.png"
                  alt="item image"
                />
                <div className="item-des">
                  <h3>Apple Watch Series 7 - 44mm</h3>
                  <p>Chategory: Chinese </p>
                </div>
              </div>
              <div>
                <div
                  className="py-1 px-2 inline-block bg-white border border-gray-200 rounded-md"
                  data-hs-input-number=""
                >
                  <div className="flex items-center gap-x-1.5">
                    <button
                      type="button"
                      className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                      data-hs-input-number-decrement=""
                    >
                      <svg
                        className="flex-shrink-0 size-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                      </svg>
                    </button>
                    <input
                      className="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0"
                      type="text"
                      value="0"
                    />
                    <button
                      type="button"
                      className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                    >
                      <svg
                        className="flex-shrink-0 size-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <p className="price-text">$99.00</p>
              <button>
                <AiOutlineDelete className="delete-btn" />
              </button>
            </div>
          </div>
        </div>
        <div className="md:col-span-4  p-4">
          <div className="calculator-area">
            <div className="calculating-row">
              <p>Subtotal</p>
              <p>$100</p>
            </div>
            <div className="calculating-row">
              <p>Tax</p>
              <p>$4.00</p>
            </div>
            <div className="calculating-row">
              <p>Shipping</p>
              <p>$5.00</p>
            </div>
            <div className="calculating-total">
              <p>Total</p>
              <p>$109.00</p>
            </div>
            <button className="payment-btn">Confirm Payment</button>
            <button className="continue-btn">Continue to Recepie</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCart;
