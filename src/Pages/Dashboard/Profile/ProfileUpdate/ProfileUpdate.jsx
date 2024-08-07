import { useLoaderData } from "react-router-dom";
import "./ProfileUpdate.css";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const ProfileUpdate = () => {
  const { _id, displayName, email } = useLoaderData();
  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic();

  const onSubmit = async (data) => {
    console.log(data);

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

      console.log(profileInfo);

      fetch(`http://localhost:5000/users/${_id}`, {
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
          }
        });
    }
  };
  return (
    <div>
      <h1>Your ID : {_id}</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="form-control w-full mb-6">
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
        <div className="flex w-full gap-2 mb-6">
          <label className="form-control w-full mb-6">
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
        <div className="flex w-full gap-2 mb-6">
          <label className="form-control w-full mb-6">
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
        <div className="flex w-full gap-2 mb-6">
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

        <input
          {...register("image", { required: true })}
          type="file"
          className="file-input my-6 bg-white file-input-sm w-full max-w-xs"
        />
        <button className="btn btn-primary block">Add Product</button>
      </form>
    </div>
  );
};

export default ProfileUpdate;
