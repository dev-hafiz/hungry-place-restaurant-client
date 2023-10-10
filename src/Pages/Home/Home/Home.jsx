import { Helmet } from "react-helmet-async";
import MenuItems from "../../Shared/MenuItems/MenuItems";
import Banner from "../Banner/Banner";
import Categories from "../Category/Categories";
import Featured from "../Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";
import Cover from "../../Shared/Cover/Cover";
import homeBg from "../../../assets/menu/home-bg.png";

const Home = () => {
  return (
    <div className=" bg-white">
      <Helmet>
        <title>Hungry Place | Home</title>
      </Helmet>
      <Banner />
      <Categories />
      <Cover title={"Hungry Place"} img={homeBg} />
      <MenuItems />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;
