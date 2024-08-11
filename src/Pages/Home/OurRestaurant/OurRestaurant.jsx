import banner1 from "../../../assets/restaurentImage/banner1.png";
import banner2 from "../../../assets/restaurentImage/banner2.png";
import banner3 from "../../../assets/restaurentImage/banner3.png";
import growthIcon from "../../../assets/restaurentImage/growth 1.png";
import cookIcon from "../../../assets/restaurentImage/cooking 1.png";
import "./OurRestaurant.css";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const OurRestaurant = () => {
  return (
    <div className="lg:container  mx-auto pt-10 relative   mb-24 ">
      <h3 className="headinTwo text-center pb-4 mb-20 relative before:absolute before:bg-[#CF2424] before:h-1 before:w-20 before:content-''  before:bottom-0 before:left-1/2 before:-translate-x-1/2">
        Our Restaurant
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:pl-4 md:mx-0 mx-5">
        <div className="md:col-span-5 ">
          <div className="flex items-center">
            <div>
              <img src={banner2} alt="restaurent banner" />
            </div>
            <div>
              <img src={banner3} alt="restaurent banner" />
            </div>
          </div>
          <div>
            <img src={banner1} alt="restaurent banner" />
          </div>
        </div>
        <div className="md:col-span-7 sm:-mt-14 md:-mt-14 ">
          <h3 className="headingFour text-[#243E63]">
            For every specialoccasion <br /> there’s heritaste
          </h3>
          <p className="text-[#2A435D] text-[16px] mb-2">
            Indignation and dislike men who are so beguiled demoralized by the
            charms of pleasure of the moment. Success Story. They forsake their
            duties and abandon long-term goals for fleeting satisfaction.
          </p>
          <div className="flex gap-4 items-center mt-5">
            <div className="icon-img">
              <img src={growthIcon} alt="icon" />
            </div>
            <div className="des">
              <h5>Success Story</h5>
              <p>
                Certain circumstances and owing to the claims of duty
                obligations <br /> of business it will frequently.
              </p>
              <Link to="/about">
                <button className="read-active flex items-center gap-1">
                  Read More <FaRegArrowAltCircleRight />
                </button>
              </Link>
            </div>
          </div>
          <div className="flex gap-4 items-center mt-5">
            <div className="icon-img ">
              <img src={cookIcon} alt="icon" />
            </div>
            <div className="des">
              <h5>Passionate Chefs</h5>
              <p>
                Duty or the obligations of business it frequently occur
                pleasures <br /> have to be repudiated.
              </p>
              <Link to="/about">
                <button className="read-In-active flex items-center gap-1">
                  Read More <FaRegArrowAltCircleRight />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurRestaurant;
