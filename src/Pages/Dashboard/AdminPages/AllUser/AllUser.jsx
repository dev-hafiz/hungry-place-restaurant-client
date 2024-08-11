import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrash, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUser = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await fetch(
        "https://hungry-place-restaurant-server.vercel.app/users"
      );
      return res.json();
    },
  });

  //Handele Delete user
  const handleDelete = (user) => {
    fetch(
      `https://hungry-place-restaurant-server.vercel.app/users/admin/${user._id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: `User Delete named ${user?.displayName} `,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  //Make Admin Handler
  const handleMakeAdmin = (user) => {
    fetch(
      `https://hungry-place-restaurant-server.vercel.app/users/admin/${user._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${user?.displayName} is Admin Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <>
      <Helmet>
        <title>Dashboard | All Users</title>
      </Helmet>

      <div className=" md:ml-10 mr-5">
        <div className="mb-3 font-semibold">
          <h3 className="sub-heading mt-10">Total : {users.length} users </h3>
        </div>
        <div>
          <div>
            <table className="table mt-7">
              {/* head */}
              <thead>
                <tr className="text-black">
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {users.map((user) => (
                  <tr key={user?._id}>
                    <td>{user?.displayName}</td>
                    <td>
                      <span>{user?.email}</span>
                    </td>
                    <td className="font-bold">
                      {user?.role === "admin" ? (
                        "Admin"
                      ) : (
                        <>
                          <button
                            onClick={() => handleMakeAdmin(user)}
                            className="btn bg-green-500 text-white  btn-ghost btn-xs"
                          >
                            <FaUserShield />
                          </button>
                        </>
                      )}
                    </td>
                    <th>
                      <button
                        onClick={() => handleDelete(user)}
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
      </div>
    </>
  );
};

export default AllUser;
