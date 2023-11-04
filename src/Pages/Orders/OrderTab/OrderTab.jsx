import FoodCard from "../../../Components/SectionTitle/FoodCard/FoodCard";

const OrderTab = ({ items }) => {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {items.map((item) => (
        <FoodCard item={item} key={item._id} />
      ))}
    </div>
  );
};

export default OrderTab;
