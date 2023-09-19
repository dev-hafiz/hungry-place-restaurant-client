import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";

const Menu = () => {
  return (
    <section className="h-screen">
    {/* React Halmet  */}
      <Helmet>
        <title>Hungry Place | Our Menu</title>
      </Helmet>
      <div>
        <Cover title={"Kinds of Food Available"} />
      </div>
    </section>
  );
};

export default Menu;
