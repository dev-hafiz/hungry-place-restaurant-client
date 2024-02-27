import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useCart from "../../../Hooks/useCart";

// eslint-disable-next-line no-unused-vars
const FoodCard = (item) => {
  const { name, recipe, image, _id, price } = item.item || {};
  const { user, error } = useAuth();
  //From tanSteack Query
  const [, refetch] = useCart();
  const navgate = useNavigate();

  const handleAddToCart = (item) => {
    if (user.uid && user.email) {
      const orderItem = { foodId: _id, price, name, image, email: user.email };

      fetch("https://hungry-place-restaurant-server.vercel.app/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(orderItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please Login to order",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navgate("/login");
        }
      });
    }
  };

  return (
    <div className="card  bg-white shadow-xl">
      <figure>
        <img className="h-56" src={image} alt="Food" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-primary"
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
