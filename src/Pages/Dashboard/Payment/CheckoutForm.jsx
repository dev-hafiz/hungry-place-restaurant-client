import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useCart from "../../../Hooks/useCart";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ flatShippingRate = 3 }) => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const [cart, refetch] = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [totals, setTotals] = useState({
    subTotal: 0,
    shipping: 0,
    quantity: 0,
    tax: 0,
    grandTotal: 0,
  });
  const price = totals.grandTotal.toFixed(2);

  // Recalculate totals whenever quantities or cart changes
  useEffect(() => {
    let subTotal = 0;
    let quantity = 0;

    for (const item of cart) {
      quantity = quantity + item.quantity;
      subTotal = subTotal + item.price * item.quantity;
    }

    const shipping = flatShippingRate * quantity;
    const tax = parseFloat((subTotal * 0.1).toFixed(2));
    const grandTotal = subTotal + shipping + tax;

    setTotals({ subTotal, shipping, quantity, tax, grandTotal });
  }, [cart, flatShippingRate]);

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads

    if (price > 0) {
      fetch(
        "https://hungry-place-restaurant-server.vercel.app/create-payment-intent",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ price }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setClientSecret(data.clientSecret);
        });
    }
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }

    // Confirm Payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("confirm error", confirmError);
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("Transaction ID --->", paymentIntent.id);
        setTransactionId(paymentIntent.id);

        // Now Save the payment in Database
        const payment = {
          email: user.email,
          price: price,
          date: new Date(),
          cartIds: cart.map((item) => item._id),
          foodItemIds: cart.map((item) => item.foodId),
          status: "Pending",
          transactionId: paymentIntent.id,
        };

        //Post data to server
        fetch("https://hungry-place-restaurant-server.vercel.app/payments", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(payment),
        })
          .then((res) => res.json())
          .then((data) => {
            refetch();
            console.log("payment saved", data);
            if (data?.paymentResult?.insertedId) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Thank You for Payment",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/dashboard/paymentHistory");
            }
          });
      }
    }
  };
  return (
    <form onSubmit={handleSubmit} className="mt-3 ">
      <CardElement
        className="mb-3 border border-gray-300 p-4 rounded-md "
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />

      {cart.length ? (
        <button
          className="payment-btn mb-3"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Confirm Payment
        </button>
      ) : (
        <button type="submit" disabled className="payment-btn-disabled ">
          Confirm Payment
        </button>
      )}

      <p className="text-red-800">{error}</p>
      {transactionId && (
        <p className="text-green-700">
          {" "}
          Your transaction id :{" "}
          <span className="font-bold text-orange-600">{transactionId}</span>
        </p>
      )}
    </form>
  );
};

export default CheckoutForm;
