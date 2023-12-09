import Cover from "../../Shared/Cover/Cover";
import foodImg from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../../Hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Orders = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();

  const initialIndex = categories.indexOf(category);

  const [tabIndex, setTabIndex] = useState(initialIndex);

  const [items] = useMenu();
  const salad = items.filter((i) => i.category === "salad");
  const pizza = items.filter((i) => i.category === "pizza");
  const drink = items.filter((i) => i.category === "drinks");
  const dessert = items.filter((i) => i.category === "dessert");
  const soup = items.filter((i) => i.category === "soup");

  return (
    <>
      {/* React Halmet  */}
      <Helmet>
        <title>Hungry Place | Order Foods</title>
      </Helmet>
      <Cover title="Our Foods" img={foodImg} />
      <div className=" bg-white pb-10">
        <div className="max-w-screen-lg	mx-auto">
          <Tabs
            defaultIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
          >
            <TabList>
              <Tab>SALAD</Tab>
              <Tab>PIZZA</Tab>
              <Tab>SOUPS</Tab>
              <Tab>DESSERTS</Tab>
              <Tab>DRINKS</Tab>
            </TabList>

            <TabPanel>
              <OrderTab items={salad} />
            </TabPanel>
            <TabPanel>
              <OrderTab items={pizza} />
            </TabPanel>
            <TabPanel>
              <OrderTab items={soup} />
            </TabPanel>
            <TabPanel>
              <OrderTab items={dessert} />
            </TabPanel>
            <TabPanel>
              <OrderTab items={drink} />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Orders;
