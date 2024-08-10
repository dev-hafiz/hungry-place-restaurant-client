import { FaEdit, FaTrash } from "react-icons/fa";
import useMenu from "../../../../Hooks/useMenu";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useState } from "react";

const ManageProducts = () => {
  const [items, , refetch] = useMenu();
  // State for Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

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

  // Start Pagination Calculation
  // Calculate the indexes for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate total pages
  const totalPages = Math.ceil(items.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle previous page
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Handle next page
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // End Pagination Calculation

  return (
    <div className="mx-0 md:mx-5">
      <div className="w-full">
        <h3 className="sub-heading mt-10">Manage: {items.length} items</h3>
      </div>
      <div>
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-black">
              <th>Image</th>
              <th> Item Name </th>
              <th>Price</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {currentItems.map((item) => (
              <tr key={item?._id}>
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

        {/* Pagination  Start*/}
        {currentItems.length > 0 && (
          <div className="flex flex-col items-center justify-center my-12">
            <div className="flex text-gray-700">
              <div
                className={`h-8 w-8 mr-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer ${
                  currentPage === 1 && "opacity-50 cursor-not-allowed"
                }`}
                onClick={handlePreviousPage}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-chevron-left w-4 h-4"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </div>
              <div className="flex h-8 font-medium rounded-full bg-gray-200">
                {Array.from({ length: totalPages }, (_, index) => (
                  <div
                    key={index + 1}
                    className={`w-8 flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full ${
                      currentPage === index + 1 ? "bg-red-500 text-white" : ""
                    }`}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </div>
                ))}
              </div>
              <div
                className={`h-8 w-8 ml-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer ${
                  currentPage === totalPages && "opacity-50 cursor-not-allowed"
                }`}
                onClick={handleNextPage}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-chevron-right w-4 h-4"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </div>
            </div>
          </div>
        )}
        {/* Pagination  End*/}
      </div>
    </div>
  );
};

export default ManageProducts;
