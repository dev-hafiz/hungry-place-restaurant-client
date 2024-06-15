import deliveryImg from "../../../assets/home/bike.png";
import foodLogo from "../../../assets/icon/food 1.png";

const DeliveryInfo = () => {
  return (
    <div className="lg:container  mx-auto pt-10  mb-24 ">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4   items-center  ">
        <div className="md:col-span-6 p-4">
          <h3 className="headingFour text-[#243E63]">
            A Moments Of
            <br />
            <span className="text-[#CF2424]">
              Delivered On Right Time & Place
            </span>
          </h3>
          <p className="text-[#2A435D] text-justify text-[16px] mb-20">
            Hungry Place is a restaurant website, bar and coffee roastery
            located on a busy corner site in Farringdon&lsquo;s Exmouth Market.
            With glazed frontage on two sides of the building, overlooking the
            market and a bustling inteon.
          </p>
          <div className="flex items-center justify-between w-3/4">
            <div className="flex items-center gap-2">
              <div>
                <p className="text-[#243E63] font-semibold text-[20px]">
                  Delivery Order
                </p>
                <p className="text-[#2A435D]  ">+880 1630 225 015</p>
              </div>
              <img src={foodLogo} width={"46px"} alt="delivery Logo" />
            </div>
            <button className="order-btn">Order Now</button>
          </div>
        </div>
        <div className="md:col-span-6 flex sm:justify-center md:justify-end">
          <img src={deliveryImg} alt="Delivery Image" />
        </div>
      </div>
    </div>
  );
};

export default DeliveryInfo;
