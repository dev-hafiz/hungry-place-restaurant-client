import Cover from "../../Shared/Cover/Cover";
import foodImg from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Orders = () => {
  return (
    <>
      <Cover title="Our Foods" img={foodImg} />
      <div className="h-full bg-white ">
        <div className="max-w-screen-lg	mx-auto">
          <Tabs>
            <TabList>
              <Tab>SALAD</Tab>
              <Tab>PIZZA</Tab>
              <Tab>SOUPS</Tab>
              <Tab>DESSERTS</Tab>
              <Tab>DRINKS</Tab>
            </TabList>

            <TabPanel>
              <h2>Any content 1</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 3</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 4</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 5</h2>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Orders;
