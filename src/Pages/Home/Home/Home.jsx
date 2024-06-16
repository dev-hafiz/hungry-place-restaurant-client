import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";
import useMenu from "../../../Hooks/useMenu";
import FoodCategory from "../FoodCategory/FoodCategory";
import RichAndHealthy from "../RichAndHealthy/RichAndHealthy";
import DeliveryInfo from "../DeliveryInfo/DeliveryInfo";
import OurRestaurant from "../OurRestaurant/OurRestaurant";

const Home = () => {
  // const [items] = useMenu();
  // console.log(items);
  return (
    <div className=" bg-white">
      <Helmet>
        <title>Hungry Place | Home</title>
      </Helmet>
      <Banner />
      <FoodCategory />
      <RichAndHealthy />
      <OurRestaurant />
      <DeliveryInfo />
      {/* <Featured /> */}
      <Testimonials />
    </div>
  );
};

export default Home;
