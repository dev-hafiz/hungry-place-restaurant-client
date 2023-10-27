import Cover from "../../Pages/Shared/Cover/Cover";
import MenuItem from "../../Pages/Shared/MenuItems/MenuItem";

// eslint-disable-next-line react/prop-types
const MenuCategory = ({items, title, img}) => {
  return (
    <div>
    {title && <Cover title={title} img={img} />}
      <div className="grid md:grid-cols-2 mt-4 pb-16 gap-4">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;