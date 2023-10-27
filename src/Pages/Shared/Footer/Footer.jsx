import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import visa from "./../../../assets/cards/visa.png";
import master from "./../../../assets/cards/master.png";
import american from "./../../../assets/cards/american.png";
import paypal from "./../../../assets/cards/paypal.png";
import payoneer from "./../../../assets/cards/payoneer.png";

const Footer = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5 bg-footerBg text-white pt-20 pb-10 px-12 ps-14">
        <div>
          <h1 className="font-mono font-bold text-xl mb-10">OPENING HOURS</h1>
          <div className="grid lg:grid-cols-3">
            <p className="font-mono font-bold">MONDAY</p>
            <div className="divider ms-[-80px]"></div>
            <p className="ms-2 font-mono text-red-600 font-bold">
              09:00 - 06:00
            </p>
          </div>
          <div className="grid lg:grid-cols-3">
            <p className="font-mono font-bold">THUESDAY</p>
            <div className="divider ms-[-65px]"></div>
            <p className="ms-2 font-mono text-red-600 font-bold">
              09:00 - 06:00
            </p>
          </div>
          <div className="grid lg:grid-cols-3">
            <p className="font-mono font-bold">WEDNESDAY</p>
            <div className="divider ms-[-63px]"></div>
            <p className="ms-2 font-mono text-red-600 font-bold">
              09:00 - 06:00
            </p>
          </div>
          <div className="grid lg:grid-cols-3">
            <p className="font-mono font-bold">THURSDAY</p>
            <div className="divider ms-[-70px]"></div>
            <p className="ms-2 font-mono text-red-600 font-bold">
              09:00 - 06:00
            </p>
          </div>
          <div className="grid lg:grid-cols-3">
            <p className="font-mono font-bold">FRIDAY</p>
            <div className="divider ms-[-78px]"></div>
            <p className="ms-2 font-mono text-red-600 font-bold">
              09:00 - 06:00
            </p>
          </div>
          <div className="grid lg:grid-cols-3">
            <p className="font-mono font-bold">SATRURDAY</p>
            <div className="divider ms-[-68px]"></div>
            <p className="ms-2 font-mono text-red-600 font-bold">
              09:00 - 06:00
            </p>
          </div>
          <div className="grid lg:grid-cols-3">
            <p className="font-mono font-bold">SUNDAY</p>
            <div className="divider ms-[-80px]"></div>
            <p className="ms-2 font-mono text-zinc-500 font-bold">CLOSED</p>
          </div>
        </div>
        <div>
          <h1 className="font-mono font-bold text-xl mb-10">CONTUCT US</h1>
          <p className="text-[#84928A] font-mono font-bold">hungry@place.com</p>
          <p className="text-[#84928A] font-mono font-bold">+1 441 333 997</p>
          <p className="text-[#84928A] font-mono font-bold">
            Park Ave, New York,
            <br />
            NY, USA
          </p>

          <h1 className="font-mono mt-20 font-bold mb-10">
            SIGNUP FOR OUR NEWSLETTER
          </h1>
          <div className="mt-[-20px] flex items-center">
            <input
              type="email"
              placeholder="Your Email"
              className="input bg-[#191919] input-bordered input-error w-full max-w-xs"
            />
            <button className="btn bg-[#FB1D25] ms-3">&gt;</button>
          </div>
        </div>
        <div>
          <h1 className="font-mono font-bold text-xl">OTHER LOCATIONS</h1>
          <h1 className="font-mono  font-bold mt-10">FIRST BRANCH</h1>
          <p className="text-[#84928A] mt-3 font-mono font-bold">
            2432 Saint Alley,
            <br />
            TAMPA, AF 5435
          </p>
          <div className="divider"></div>
          <h1 className="font-mono  font-bold mt-6">SECOND BRANCH</h1>
          <p className="text-[#84928A] mt-3 font-mono font-bold">
            5345 Waston Street,
            <br />
            CAMDEN, NJ 9087
          </p>
        </div>
      </div>

      <div className="bg-black items-center text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div>
          <p className="text-[#8E9584] ms-10">
            &copy; 2023{" "}
            <span className="text-gray-600  font-bold backdrop:">
              Hafizur Rahman
            </span>
            , All Right Reserved
          </p>
        </div>
        <div className=" flex justify-end me-4 gap-2">
          <img width="50px" src={visa} alt="visa" />
          <img width="50px" src={master} alt="master" />
          <img width="50px" src={american} alt="american" />
          <img width="50px" src={paypal} alt="paypal" />
          <img width="50px" src={payoneer} alt="payoneer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
