import { FaTrash } from "react-icons/fa";
import useCart from "../../../../Hooks/useCart";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);

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
    <>
      <div className="flex justify-evenly mt-10 items-center  px-12 font-semibold">
        <h3 className="text-3xl mr-8">TOTAL ITEMS : {cart.length}</h3>
        <h3 className="text-3xl mr-8">TOTAL PRICE : {total.toFixed(2)} </h3>

        {cart.length ? (
          <Link to="/dashboard/payment">
            <button className="btn btn-secondary bg-orange-400 border-none">
              PAY
            </button>
          </Link>
        ) : (
          <button
            disabled
            className="btn btn-secondary bg-orange-400 border-none"
          >
            PAY
          </button>
        )}
      </div>
      <div>
        <div>
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No.</th>
                <th>Food</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {cart.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item?.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span>{item?.name}</span>
                  </td>
                  <td className="font-bold">${item?.price}</td>
                  <th>
                    <button
                      onClick={() => handleDelete(item?._id)}
                      className="btn bg-red-500 text-white  btn-ghost btn-xs"
                    >
                      <FaTrash />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyCart;
