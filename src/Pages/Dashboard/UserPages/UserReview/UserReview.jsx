import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UserReview = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const axiosPublic = useAxiosPublic();

  const onSubmit = async (data) => {
    console.log("review data -->", data);
    // Image upload to imageBB and then get an URL
    const imageFile = data.image_url[0];
    const formData = new FormData();
    formData.append("image", imageFile);
    const res = await axiosPublic.post(image_hosting_api, formData, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const review = {
        name: data.name,
        rating: data.category,
        details: data.details,
        image_url: res.data.data.display_url,
      };
      fetch("https://hungry-place-restaurant-server.vercel.app/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(review),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            reset();
            Swal.fire({
              position: "center",
              icon: "success",
              title: `Your Review Posted successfully`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    }
  };

  return (
    <>
      <Helmet>
        <title>Dashboard | User Review</title>
      </Helmet>

      <div className="w-full">
        <div className=" flex items-center justify-center">
          <form
            className="mx-0 md:mx-5 w-full"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h3 className="sub-heading mt-12">Write Your Review</h3>

            <label className="form-control w-full mb-6">
              <div className="label">
                <span className="label-text">Your Name*</span>
              </div>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Recipe Name"
                className="input input-bordered w-full bg-white"
              />
              {errors.name && (
                <span className="text-red-500">Name is required</span>
              )}
            </label>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex flex-wrap md:flex-nowrap gap-4">
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Ratings*</span>
                  </div>
                  <select
                    {...register("category", { required: true })}
                    className="select select-bordered w-full bg-white"
                  >
                    <option disabled value="default">
                      Select a Ratings
                    </option>
                    <option value="1">1 Star</option>
                    <option value="2">2 Star</option>
                    <option value="3">3 Star</option>
                    <option value="4">4 Star</option>
                    <option value="5">5 Star</option>
                  </select>
                  {errors.category && (
                    <span className="text-red-500">Category is required</span>
                  )}
                </label>
              </div>
            </div>

            <div>
              <label className="form-control mb-10 mt-5">
                <div className="label">
                  <span className="label-text">Description*</span>
                </div>
                <textarea
                  {...register("details", { required: true })}
                  placeholder="Write Your Review "
                  className="input input-bordered w-full bg-white p-3"
                  rows="4"
                />
                {errors.description && (
                  <span className="text-red-500">Description is required</span>
                )}
              </label>
            </div>

            <label className="form-control  mb-5">
              <div className="label">
                <span className="label-text">Your Photo*</span>
              </div>
              <input
                {...register("image_url", { required: true })}
                type="file"
                accept="image/*"
                className="file-input mb-8 bg-white file-input-sm max-w-xs"
              />
              {errors.image_url && (
                <span className="text-red-500">Image is required</span>
              )}
            </label>

            <button className="update-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 text-red-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserReview;
