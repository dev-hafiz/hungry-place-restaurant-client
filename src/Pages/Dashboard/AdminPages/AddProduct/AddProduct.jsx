import { useForm, useFieldArray } from "react-hook-form";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import "./AddProduct.css";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      calories: "",
      ingredients: [{ value: "" }],
      preparation_time: "",
      description: "",
      price: "",
      category: "default",
      image_url: null,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "ingredients",
  });

  const axiosPublic = useAxiosPublic();

  const onSubmit = async (data) => {
    // console.log("Add Product Data: ", data);
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
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        description: data.description,
        preparation_time: data.preparation_time,
        calories: data.calories,
        ingredients: data.ingredients.map((ingredient) => ingredient.value),
        image_url: res.data.data.display_url,
      };

      fetch("https://hungry-place-restaurant-server.vercel.app/menu", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(menuItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            reset();
            Swal.fire({
              position: "center",
              icon: "success",
              title: `Food added successfully`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    }
  };

  return (
    <div className="w-full">
      <div className="h-full mt-10 w-full flex items-center justify-center">
        <form className="mx-10 w-full" onSubmit={handleSubmit(onSubmit)}>
          <h3 className="sub-heading">Add Food Item</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="form-control w-full mb-6">
                <div className="label">
                  <span className="label-text">Recipe Name*</span>
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
              <div className="flex w-full gap-4">
                <label className="form-control w-full mb-4">
                  <div className="label">
                    <span className="label-text">Preparation Time*</span>
                  </div>
                  <input
                    {...register("preparation_time", { required: true })}
                    type="text"
                    placeholder="Preparation Time (20 minutes)"
                    className="input input-bordered w-full bg-white"
                  />
                  {errors.preparation_time && (
                    <span className="text-red-500">
                      Preparation time is required
                    </span>
                  )}
                </label>

                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Calories*</span>
                  </div>
                  <input
                    {...register("calories", { required: true })}
                    type="text"
                    placeholder="Calories Number"
                    className="input input-bordered w-full bg-white"
                  />
                  {errors.calories && (
                    <span className="text-red-500">Calories are required</span>
                  )}
                </label>
              </div>
              <div className="flex w-full gap-4">
                <label className="form-control w-full mb-4">
                  <div className="label">
                    <span className="label-text">Price*</span>
                  </div>
                  <input
                    {...register("price", { required: true })}
                    type="text"
                    placeholder="Price"
                    className="input input-bordered w-full bg-white"
                  />
                  {errors.price && (
                    <span className="text-red-500">Price is required</span>
                  )}
                </label>

                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Category*</span>
                  </div>
                  <select
                    {...register("category", { required: true })}
                    className="select select-bordered w-full bg-white"
                  >
                    <option disabled value="default">
                      Select a Category
                    </option>
                    <option value="Fast food">Fast food</option>
                    <option value="Chinese food">Chinese food</option>
                    <option value="Deshi food">Deshi food</option>
                  </select>
                  {errors.category && (
                    <span className="text-red-500">Category is required</span>
                  )}
                </label>
              </div>
            </div>
          </div>

          <div>
            <label className="form-control w-3/6 mb-10">
              <div className="label">
                <span className="label-text">Description*</span>
              </div>
              <textarea
                {...register("description", { required: true })}
                placeholder="Food Description"
                className="input input-bordered w-full bg-white p-3"
                rows="4"
              />
              {errors.description && (
                <span className="text-red-500">Description is required</span>
              )}
            </label>
          </div>

          <div className="w-3/6 -mt-2 mb-6">
            <h4 className="label-text mb-2">Ingredients*</h4>
            {fields.map((item, index) => (
              <div key={item.id} className="flex items-center gap-4 mb-2">
                <input
                  {...register(`ingredients.${index}.value`, {
                    required: true,
                  })}
                  type="text"
                  placeholder={`Ingredient ${index + 1}`}
                  className="input input-bordered w-full mb-2 bg-white"
                />
                <button
                  type="button"
                  className="remove-btn"
                  onClick={() => remove(index)}
                >
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
                      d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </button>
              </div>
            ))}
            <button
              type="button"
              className="add-btn"
              onClick={() => append({ value: "" })}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 text-green-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>{" "}
              Add Ingredient
            </button>
          </div>

          <label className="form-control  mb-5">
            <div className="label">
              <span className="label-text">Food Image*</span>
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
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
