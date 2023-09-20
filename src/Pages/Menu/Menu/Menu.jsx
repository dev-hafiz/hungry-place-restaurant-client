import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import coverPhoto from "../../../../src/assets/menu/banner3.jpg";
const Menu = () => {
  return (
    <section className="h-screen">
      {/* React Halmet  */}
      <Helmet>
        <title>Hungry Place | Our Menu</title>
      </Helmet>
      <div>
        <Cover img={coverPhoto} title={"Our Menu"} />
      </div>
    </section>
  );
};

export default Menu;
