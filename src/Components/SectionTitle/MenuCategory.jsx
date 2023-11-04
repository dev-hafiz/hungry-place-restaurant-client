import { Link } from "react-router-dom";
import MenuItem from "../../Pages/Shared/MenuItems/MenuItem";

// eslint-disable-next-line react/prop-types
const MenuCategory = ({ items, title }) => {
  return (
    <div className="mb-20">
      <div className="grid md:grid-cols-2 mt-4 pb-16 gap-4">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>

      <Link to={`/order/${title}`}>
        <button className="btn mt-4 btn-outline text-black">Order Now</button>
      </Link>
    </div>
  );
};

export default MenuCategory;
