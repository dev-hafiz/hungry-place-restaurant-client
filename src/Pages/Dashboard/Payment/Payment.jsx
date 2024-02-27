import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_KEY);

const Payment = () => {
  return (
    <div className="w-full">
      <div className="w-full">
        <SectionTitle heading={"Payment"} subHeading={"Pay for Orders"} />
      </div>
      {/* Card Elements  */}
      <div className="px-8 w-2/3 ">
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
