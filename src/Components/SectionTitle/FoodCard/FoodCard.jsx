// eslint-disable-next-line no-unused-vars
const FoodCard = (item) => {
  const { name, price, recipe, image } = item.item || {};

  return (
    <div className="card  bg-white shadow-xl">
      <figure>
        <img className="h-56" src={image} alt="Food" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
