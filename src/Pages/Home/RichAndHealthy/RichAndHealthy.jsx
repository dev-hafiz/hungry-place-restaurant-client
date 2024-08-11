import { Link } from "react-router-dom";
import chef from "../../../assets/home/Chef.png";
import food from "../../../assets/home/food.png";
import star from "../../../assets/icon/Star 1.png";

const RichAndHealthy = () => {
  return (
    <div className="lg:container  mx-auto  mt-32 mb-24 relative">
      <h3 className="headinTwo text-center pb-4  relative before:absolute before:bg-[#CF2424] before:h-1 before:w-20 before:content-''  before:bottom-0 before:left-1/2 before:-translate-x-1/2">
        Rich & Healthy
      </h3>
      <div className="grid grid-cols-1 mt-8 md:grid-cols-12 gap-4">
        <div className="md:col-span-4   md:mr-0 mr-5 md:-ml-0 -ml-5">
          <img src={chef} alt="Chef Photo" />
        </div>
        <div className="md:col-span-8">
          <h3 className="headingThree p-4 ">
            Highest quality artisangrains, <br /> proteins & seasonal
            ingredients
          </h3>
          <p className="text-[#2A435D]   p-4 text-[16px] mb-2">
            Righteous indignation targets those beguiled by fleeting pleasures,
            so blinded by <br /> desire they fail to foresee consequences. This
            demoralization renders them <br /> unable to resist momentary
            charms, losing sight of future impacts.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-6  p-4 flex flex-col justify-between ">
              <div>
                <div className="flex gap-2 mb-4 item-center">
                  <img src={star} width="24px" alt="icon" />
                  <p className="text-[#2A435D] text-[16px]">
                    Simple and easy to distinguish
                  </p>
                </div>
                <div className="flex gap-2 mb-4  item-center">
                  <img src={star} width="24px" alt="icon" />
                  <p className="text-[#2A435D] text-[16px]">
                    Pleasure of the momentblinded desire
                  </p>
                </div>
                <div className="flex gap-2 mb-4  item-center">
                  <img src={star} width="24px" alt="icon" />
                  <p className="text-[#2A435D] text-[16px]">
                    Savor the Moment Indulgent Delights
                  </p>
                </div>
                <div className="flex gap-2 mb-4  item-center">
                  <img src={star} width="24px" alt="icon" />
                  <p className="text-[#2A435D] text-[16px]">
                    Able to do what we like best
                  </p>
                </div>
                <div className="flex gap-2 mb-4  item-center">
                  <img src={star} width="24px" alt="icon" />
                  <p className="text-[#2A435D] text-[16px]">
                    Culinary Bliss Taste the Temptation
                  </p>
                </div>
                <div className="flex gap-2 mb-4  item-center">
                  <img src={star} width="24px" alt="icon" />
                  <p className="text-[#2A435D] text-[16px]">
                    Gourmet Desires A Feast for the Senses
                  </p>
                </div>
              </div>
              <div className="text-center ">
                <Link to="/about">
                  <button className="order-btn">Read More</button>
                </Link>
              </div>
            </div>
            <div className="md:col-span-6 flex justify-center ">
              <img src={food} alt="side banner" className="mt-[-4px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RichAndHealthy;
