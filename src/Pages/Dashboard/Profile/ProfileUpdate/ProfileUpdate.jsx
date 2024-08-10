import { useLoaderData, useNavigate } from "react-router-dom";
import "./ProfileUpdate.css";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const ProfileUpdate = () => {
  const { _id, displayName, email, image } = useLoaderData();
  console.log("Image ", image);
  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    // console.log(data);

    // Image upload to imageBB and then get an URL
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      const profileInfo = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        country: data.country,
        image: res.data.data.display_url,
        city: data.city,
        postCode: data.postCode,
        roadAndHouse: data.roadAndHouse,
      };

      // console.log(profileInfo);

      fetch(`https://hungry-place-restaurant-server.vercel.app/users/${_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(profileInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.modifiedCount > 0) {
            // reset();
            Swal.fire({
              position: "center",
              icon: "success",
              title: `You Profile Updated Successfully`,
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/dashboard/profile");
          }
        });
    }
  };
  return (
    <>
      <div className="w-full">
        <div className=" flex items-center justify-center ">
          <form
            className="mx-0 md:mx-5 w-full"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h3 className="sub-heading mt-12">Profile Update</h3>

            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 md:col-span-8">
                <label className="form-control w-full mb-5">
                  <div className="label">
                    <span className="label-text">Email Address*</span>
                  </div>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    defaultValue={email}
                    className="input input-bordered w-full bg-white"
                  />
                </label>
                <div>
                  <label className="form-control w-full mb-5  ">
                    <div className="label">
                      <span className="label-text">Your Name*</span>
                    </div>
                    <input
                      {...register("name", { required: true })}
                      type="text"
                      defaultValue={displayName}
                      className="input input-bordered w-full bg-white"
                    />
                  </label>
                </div>
                <div className="flex  w-full gap-4 ">
                  <label className="form-control w-full ">
                    <div className="label">
                      <span className="label-text">Phone*</span>
                    </div>
                    <input
                      {...register("phone", { required: true })}
                      type="number"
                      placeholder="Phone Number"
                      className="input input-bordered w-full bg-white"
                    />
                  </label>
                </div>
                <div className="flex flex-wrap md:flex-nowrap w-full gap-4 ">
                  <label className="form-control w-full mb-4">
                    <div className="label">
                      <span className="label-text">Country*</span>
                    </div>
                    <input
                      {...register("country", { required: true })}
                      type="text"
                      placeholder="Country"
                      className="input input-bordered w-full bg-white"
                    />
                  </label>

                  <label className="form-control w-full ">
                    <div className="label">
                      <span className="label-text">City/State*</span>
                    </div>
                    <input
                      {...register("city", { required: true })}
                      type="text"
                      placeholder="City/State"
                      className="input input-bordered w-full bg-white"
                    />
                  </label>
                </div>
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mb-6">
                  <label className="form-control w-full mb-6">
                    <div className="label">
                      <span className="label-text">Post Code*</span>
                    </div>
                    <input
                      {...register("postCode", { required: true })}
                      type="number"
                      placeholder="Post Code"
                      className="input input-bordered w-full bg-white"
                    />
                  </label>

                  <label className="form-control w-full ">
                    <div className="label">
                      <span className="label-text">Road & House*</span>
                    </div>
                    <input
                      {...register("roadAndHouse", { required: true })}
                      type="text"
                      placeholder="Road & House"
                      className="input input-bordered w-full bg-white"
                    />
                  </label>
                </div>
              </div>
              <div className="col-span-12 md:col-span-4 upload-image">
                <div className="profile-area">
                  <img src={image} alt="" />
                  <input
                    {...register("image", { required: true })}
                    type="file"
                    className="file-input my-6 bg-white file-input-sm w-full max-w-xs"
                  />
                </div>
              </div>
            </div>

            <button className="submit-profile-btn">
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
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProfileUpdate;
