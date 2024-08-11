import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Testimonials from "../Testimonials/Testimonials";
import FoodCategory from "../FoodCategory/FoodCategory";
import RichAndHealthy from "../RichAndHealthy/RichAndHealthy";
import DeliveryInfo from "../DeliveryInfo/DeliveryInfo";
import OurRestaurant from "../OurRestaurant/OurRestaurant";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Hungry Place | Home</title>
      </Helmet>
      <Banner />
      <FoodCategory />
      <RichAndHealthy />
      <OurRestaurant />
      <DeliveryInfo />
      <Testimonials />
    </div>
  );
};

export default Home;
