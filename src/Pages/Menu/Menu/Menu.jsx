import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import coverPhoto from "../../../../src/assets/menu/banner3.jpg";
import pizzaImg from "../../../../src/assets/menu/pizza-bg.jpg";
import dessertImg from "../../../../src/assets/menu/dessert-bg.jpeg";
import saladImg from "../../../../src/assets/menu/salad-bg.jpg";
import soupImg from "../../../../src/assets/menu/soup-bg.jpg";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../../../Components/SectionTitle/MenuCategory";
const Menu = () => {
  // Load all data based on category
  const [items] = useMenu();
  const salad = items.filter((i) => i.category === "salad");
  const pizza = items.filter((i) => i.category === "pizza");
  const offered = items.filter((i) => i.category === "offered");
  const dessert = items.filter((i) => i.category === "dessert");
  const soup = items.filter((i) => i.category === "soup");

  return (
    <div className="bg-white">
      {/* React Halmet  */}
      <Helmet>
        <title>Hungry Place | Our Menu</title>
      </Helmet>
      <div>
        <Cover img={coverPhoto} title={"Our Menu"} />
      </div>
      <SectionTitle heading="Today's Offer" subHeading="Don't miss" />
      <div className="max-w-screen-lg	mx-auto">
        {/* offered items  */}
        <MenuCategory items={offered} />
      </div>
      {/* Dessert  */}
      <Cover img={dessertImg} title={"Dessert"} />
      <div className="max-w-screen-lg	mx-auto">
        <MenuCategory items={dessert} />
      </div>
      {/* Pizza  */}
      <Cover img={pizzaImg} title={"Pizza"} />
      <div className="max-w-screen-lg	mx-auto">
        <MenuCategory items={pizza} />
      </div>
      {/* Salad  */}
      <Cover img={saladImg} title={"Salad"} />
      <div className="max-w-screen-lg	mx-auto">
        <MenuCategory items={salad} />
      </div>
      {/* Soup  */}
      <Cover img={soupImg} title={"Soup"} />
      <div className="max-w-screen-lg	mx-auto">
        <MenuCategory items={soup} />
      </div>
    </div>
  );
};

export default Menu;
