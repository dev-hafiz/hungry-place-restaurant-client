/* eslint-disable react/no-unknown-property */
import Swal from "sweetalert2";
import useCart from "../../../../Hooks/useCart";
import "./OrderCart.css";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const OrderCart = () => {
  const [cart, refetch] = useCart();
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const initialQuantities = cart.reduce((acc, item) => {
      acc[item._id] = item.quantity;
      return acc;
    }, {});
    setQuantities(initialQuantities);
  }, [cart]);

  // Handle increment
  const handleIncrement = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: (prevQuantities[id] || 0) + 1,
    }));
  };

  // Handle decrement
  const handleDecrement = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.max((prevQuantities[id] || 0) - 1, 1),
    }));
  };

  let subTotal = 0;
  let shipping = 0;
  let quantity = 0;

  for (const item of cart) {
    quantity = quantity + item.quantity;
    subTotal = subTotal + item.price * item.quantity;
    shipping = shipping + 3;
  }
  const tax = parseFloat((subTotal * 0.1).toFixed(2));
  const grandTotal = subTotal + shipping + tax;

  //Send delete request in server side from client side
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure to Delete Order?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://hungry-place-restaurant-server.vercel.app/carts/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted Successfully!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div className="w-9/12 h-full mt-20">
      <div className=" grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-8 py-6 px-5">
          <div>
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-semibold">Your Cart</h1>
              <p className="text-[#6F6F79] ">{cart?.length} Items in cart</p>
            </div>

            {cart.map((item) => (
              <div key={item._id} className="cart-item">
                <div className="left-box-wrapper">
                  <div className="flex items-center gap-6">
                    <img src={item?.image_url} alt="item image" />
                    <div className="item-des">
                      <h3>{item?.name}</h3>
                      <p>{item?.category}</p>
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
                          className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50"
                          onClick={() => handleDecrement(item._id)}
                        >
                          <svg
                            className="flex-shrink-0 size-3.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14"></path>
                          </svg>
                        </button>
                        <input
                          className="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0"
                          type="text"
                          value={quantities[item._id] || 0}
                          readOnly
                        />
                        <button
                          type="button"
                          className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50"
                          onClick={() => handleIncrement(item._id)}
                        >
                          <svg
                            className="flex-shrink-0 size-3.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right-box-wrapper">
                  <p className="price-text">{item?.price}</p>
                  <button onClick={() => handleDelete(item._id)}>
                    <AiOutlineDelete className="delete-btn" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="md:col-span-4  p-4">
          <div className="calculator-area">
            <div className="summary">
              <h3>Summary</h3>
              <div className="item_counter">{quantity}</div>
            </div>
            <div className="calculating-row">
              <p>Subtotal</p>
              <p>$ {subTotal.toFixed(2)}</p>
            </div>
            <div className="calculating-row">
              <p>Estimated Tax</p>
              <p>$ {tax}</p>
            </div>
            <div className="calculating-row">
              <p>Estimated Shipping</p>
              <p>$ {shipping.toFixed(2)}</p>
            </div>
            <div className="calculating-total">
              <p>Grand Total</p>
              <p>$ {grandTotal.toFixed(2)}</p>
            </div>
            <button className="payment-btn">Confirm Payment</button>
            <Link to="/recepies">
              <button className="continue-btn">Continue to Recepie</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCart;
