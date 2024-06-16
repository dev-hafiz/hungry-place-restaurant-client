import { FaEdit, FaTrash } from "react-icons/fa";
import useMenu from "../../../../Hooks/useMenu";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageProducts = () => {
  const [items, , refetch] = useMenu();

  //* Handle Delete
  const handleDelete = (item) => {
    const id = item._id;

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://hungry-place-restaurant-server.vercel.app/menu/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div className="w-full">
      <div className="w-full">
        <h1>Manage your Products</h1>
      </div>
      <div className="pr-6">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-black">
              <th>
                # <span>Total: {items.length}</span>
              </th>
              <th>Image</th>
              <th> Item Name </th>
              <th>Price</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {items.map((item, index) => (
              <tr key={item?._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item?.image_url}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <span>{item?.name}</span>
                </td>
                <td>
                  <span>{item?.price}</span>
                </td>
                <td className="font-bold">
                  <Link to={`/dashboard/updateProduct/${item?._id}`}>
                    <button className="btn bg-green-500 text-white  btn-ghost btn-xs">
                      <FaEdit />
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn bg-red-500 text-white  btn-ghost btn-xs"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
