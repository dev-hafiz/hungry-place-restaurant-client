import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import coverPhoto from "../../../../src/assets/menu/banner3.jpg";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
const Menu = () => {
  // Load all data based on category
  const [items] = useMenu();
  const salad = items.filter((i) => i.category === "salad");
  const pizza = items.filter((i) => i.category === "pizza");
  const offered = items.filter((i) => i.category === "offered");
  const dessert = items.filter((i) => i.category === "dessert");
  const soup = items.filter((i) => i.category === "soup");

  return (
    <div className="h-full">
      {/* React Halmet  */}
      <Helmet>
        <title>Hungry Place | Our Menu</title>
      </Helmet>
      <div>
        <Cover img={coverPhoto} title={"Our Menu"} />
      </div>
      <div className="pb-6">
        <SectionTitle heading="Today's Offer" subHeading="Don't miss" />
      </div>
    </div>
  );
};

export default Menu;
