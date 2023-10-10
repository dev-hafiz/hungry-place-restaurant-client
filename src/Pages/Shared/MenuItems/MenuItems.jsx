import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "./MenuItem";
import useMenu from "../../../Hooks/useMenu";

const MenuItems = () => {
  //AOS animation used
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  // Loade items data with custom hook
  const [items] = useMenu();
  const filteredData = items.filter((i) => i.category === "salad");

  return (
    <section
      data-aos="fade-up"
      data-aos-duration="2000"
      data-aos-easing="linear"
      className="max-w-screen-lg	mx-auto"
    >
      <SectionTitle subHeading="Check it out" heading="FROM OUR MENU" />
      <div className="grid md:grid-cols-2 mt-4 pb-16 gap-4">
        {filteredData.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default MenuItems;
