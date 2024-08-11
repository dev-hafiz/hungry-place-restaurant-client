/* eslint-disable react/no-unknown-property */
import Swal from "sweetalert2";
import useCart from "../../../../Hooks/useCart";
import "./MyCart.css";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../../Payment/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Helmet } from "react-helmet-async";

// Stripe Payment Gateway API env key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_KEY);

const MyCart = ({ flatShippingRate = 3 }) => {
  const [cart, refetch] = useCart();
  console.log("cart", cart);
  const [quantities, setQuantities] = useState({});

  const [totals, setTotals] = useState({
    subTotal: 0,
    shipping: 0,
    quantity: 0,
    tax: 0,
    grandTotal: 0,
  });

  useEffect(() => {
    const initialQuantities = cart.reduce((acc, item) => {
      acc[item._id] = item.quantity;
      return acc;
    }, {});
    setQuantities(initialQuantities);
  }, [cart]);

  // Recalculate totals whenever quantities or cart changes
  useEffect(() => {
    let subTotal = 0;
    let quantity = 0;

    for (const item of cart) {
      const itemQuantity = quantities[item._id] || 0;
      quantity += itemQuantity;
      subTotal += item.price * itemQuantity;
    }

    const shipping = flatShippingRate * quantity;
    const tax = parseFloat((subTotal * 0.1).toFixed(2));
    const grandTotal = subTotal + shipping + tax;

    setTotals({ subTotal, shipping, quantity, tax, grandTotal });
  }, [quantities, cart, flatShippingRate]);

  // Handle increment
  const handleIncrement = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: (prevQuantities[id] || 0) + 1,
    }));

    //existing cart data load from server
    const existingCart = cart.find((item) => item._id === id);
    console.log("existingCart -->", existingCart);
    const quantity = quantities[existingCart._id];

    if (
      existingCart &&
      Object.keys(quantities).includes(existingCart._id) &&
      quantity !== undefined
    ) {
      const payload = {
        quantity: quantity + 1, // Incrementing the quantity
        price: existingCart.price, // Incrementing the price (adjust as per your logic)
      };

      fetch(
        `https://hungry-place-restaurant-server.vercel.app/carts/${existingCart._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log("Response data:", data);
          if (data.modifiedCount > 0) {
            refetch(); // Assuming refetch is a function to update your UI or data
          }
        })
        .catch((error) => {
          console.error("Error updating cart item:", error);
        });
    } else {
      console.log("Item not found in cart or quantity information missing.");
    }

    // console.log(isMatchingId);
    // console.log(quantities[existingCart._id]);
  };

  // Handle decrement
  const handleDecrement = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.max((prevQuantities[id] || 0) - 1, 1),
    }));

    //existing cart data load from server
    const existingCart = cart.find((item) => item._id === id);
    const quantity = quantities[existingCart._id];

    if (
      existingCart &&
      Object.keys(quantities).includes(existingCart._id) &&
      quantity !== undefined
    ) {
      const payload = {
        quantity: quantity - 1, // Incrementing the quantity
        price: existingCart.price, // Incrementing the price (adjust as per your logic)
      };

      fetch(
        `https://hungry-place-restaurant-server.vercel.app/carts/${existingCart._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log("Response data:", data);
          if (data.modifiedCount > 0) {
            refetch(); // Assuming refetch is a function to update your UI or data
          }
        })
        .catch((error) => {
          console.error("Error updating cart item:", error);
        });
    } else {
      console.log("Item not found in cart or quantity information missing.");
    }
  };

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
                position: "center",
                icon: "success",
                title: "Your item deleted from cart",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>Dashboard | My Cart</title>
      </Helmet>
      <div className="md:w-9/12 w-full h-full md:mt-32 mt-14 md:ml-24 ml-0">
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
                        <div className="md:flex md:flex-row items-center flex flex-col  gap-x-1.5">
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
                            className="p-0 w-6 bg-transparent border-0  text-gray-800 text-center focus:ring-0"
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
                    <p className="price-text">＄{item?.price}</p>
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
                <div className="item_counter">{totals.quantity}</div>
              </div>
              <div className="calculating-row">
                <p>Subtotal</p>
                <p>$ {totals.subTotal.toFixed(2)}</p>
              </div>
              <div className="calculating-row">
                <p>Estimated Tax</p>
                <p>$ {totals.tax}</p>
              </div>
              <div className="calculating-row">
                <p>Estimated Shipping</p>
                <p>$ {totals.shipping.toFixed(2)}</p>
              </div>
              <div className="calculating-total">
                <p>Grand Total</p>
                <p>$ {totals.grandTotal.toFixed(2)}</p>
              </div>
              <div>
                <Elements stripe={stripePromise}>
                  <CheckoutForm />
                </Elements>
              </div>

              <Link to="/recepies">
                <button className="continue-btn">Continue to Recepie</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyCart;
