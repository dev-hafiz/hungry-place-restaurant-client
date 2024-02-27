import Swal from "sweetalert2";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateProduct = () => {
  const { name, category, recipe, price, _id } = useLoaderData();
  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic();

  const onSubmit = async (data) => {
    console.log("Consoled data -->", data);
    // Image upload to imageBB and then get an URL
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };

      fetch(`https://hungry-place-restaurant-server.vercel.app/menu/${_id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(menuItem),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.modifiedCount > 0) {
            // reset();
            Swal.fire({
              position: "center",
              icon: "success",
              title: `${name}Food Updated successfully`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    }
  };
  return (
    <div className="w-full">
      <div className="w-full">
        <SectionTitle
          heading={"Update Products"}
          subHeading={"Manage your Products"}
        />
      </div>

      {/* Update Form  */}
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="form-control w-full mb-6">
              <div className="label">
                <span className="label-text">Recipe Name*</span>
              </div>
              <input
                {...register("name", { required: true })}
                type="text"
                defaultValue={name}
                placeholder="Recipe Name"
                className="input input-bordered w-full bg-white"
              />
            </label>
          </div>
          <div className="flex w-full gap-2 mb-6">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Price*</span>
              </div>
              <input
                {...register("price", { required: true })}
                type="number"
                defaultValue={price}
                placeholder="Price"
                className="input input-bordered w-full bg-white"
              />
            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Category*</span>
              </div>
              <select
                {...register("category", { required: true })}
                className="select select-bordered w-full  bg-white"
              >
                <option disabled defaultValue={category}>
                  Select a Category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Sopu</option>
                <option value="dessert">Dessert</option>
                <option value="drink">Drink</option>
              </select>
            </label>
          </div>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Recipe Details*</span>
            </div>
            <textarea
              {...register("recipe", { required: true })}
              defaultValue={recipe}
              className="textarea textarea-bordered h-24 bg-white w-full"
              placeholder="Recipe Details"
            ></textarea>
          </label>

          <input
            {...register("image", { required: true })}
            type="file"
            className="file-input my-6 bg-white file-input-sm w-full max-w-xs"
          />
          <button className="btn btn-primary block">Update Product</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
