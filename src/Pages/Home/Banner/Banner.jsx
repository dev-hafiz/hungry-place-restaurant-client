import "./Banner.css";
import banner1 from "../../../assets/BannerImages/Banner1.jpg";
import banner2 from "../../../assets/BannerImages/Banner2.jpg";
import banner3 from "../../../assets/BannerImages/Banner3.jpg";
import { PiPlayCircleThin } from "react-icons/pi";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import styled from "styled-components";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import { useState } from "react";
import video1 from "../../../../public/assets/video/video1.mp4";
import videoSrc from "../../../../public/assets/video/foodVideo.mp4";
import { Link } from "react-router-dom";

const Banner = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const AutoplaySlider = withAutoplay(AwesomeSlider);

  const StyledSlider = styled(AutoplaySlider)`
    background-color: white;

    .awssld__content {
      background-color: white;
    }
    .awssld__next,
    .awssld__prev {
      visibility: hidden;
    }
    height: 600px;
    .awssld__bullets .awssld__bullets--active {
      background-color: #cf2424;
    }
    .awssld__bullets button {
      background-color: lightgray;
    }
  `;

  return (
    <div className="md:m-0 m-8 ">
      <StyledSlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={6000}
      >
        <div>
          <div className="lg:container  mx-auto flex flex-wrap my-16">
            <div className="w-full lg:w-1/2 flex items-center ">
              {/* Content for the first column */}
              <div className="left-box md:mt-0 mt-40 md:mb-0 mb-28 md:text-left text-center ">
                <h1 className="heading">
                  Delicious & Affordable <br />
                  <span className="highlight md:mx-0 mx-4">
                    Meals Near You.
                  </span>
                </h1>
                <p className="text-lg text-gray-800 my-6 mr-4">
                  Discover and order your favorite dishes with our food app.
                  Explore top-rated restaurants, diverse cuisines, and enjoy
                  quick delivery. Delicious meals are just a few taps away.
                </p>
                <div className="flex items-center md:justify-start justify-center">
                  <Link to="/recepies">
                    <button className="order-btn">Order Now</button>
                  </Link>
                  <button onClick={openModal} className="play-btn">
                    <PiPlayCircleThin className="fa-play" />
                  </button>
                  {showModal && (
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                      <div
                        className="bg-black bg-opacity-50 absolute inset-0"
                        onClick={closeModal}
                      ></div>
                      <div className=" p-2  max-w-3xl">
                        <span
                          className="absolute top-0 right-0 m-4 text-3xl cursor-pointer"
                          onClick={closeModal}
                        >
                          &times;
                        </span>
                        <video controls autoPlay className="w-full ">
                          <source src={video1} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              {/* Content for the second column */}
              <div className="right-box md:block hidden">
                <img
                  src={banner1}
                  alt="slider1"
                  className="banner-img"
                  width={"100%"}
                  height={"100%"}
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="lg:container  mx-auto flex flex-wrap my-16">
            <div className="w-full lg:w-1/2 flex items-center ">
              {/* Content for the first column */}
              <div className="left-box md:mt-0 mt-40 md:mb-0 mb-36  md:text-left text-center">
                <h1 className="heading  md:mx-0 mx-4">
                  Nutritious, Delicious Meals
                  <br />
                  <span className="highlight"> for Healthy Living </span>
                </h1>
                <p className="text-lg text-gray-800 my-6 mr-4">
                  Discover and order your favorite dishes with our food app.
                  Explore top-rated restaurants, diverse cuisines, and enjoy
                  quick delivery. Delicious meals are just a few taps away.
                </p>
                <div className="flex items-center md:justify-start justify-center">
                  <Link to="/recepies">
                    <button className="order-btn">Order Now</button>
                  </Link>
                  <button onClick={openModal} className="play-btn">
                    <PiPlayCircleThin className="fa-play" />
                  </button>
                  {showModal && (
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                      <div
                        className="bg-black bg-opacity-50 absolute inset-0"
                        onClick={closeModal}
                      ></div>
                      <div className=" p-2  max-w-3xl">
                        <span
                          className="absolute top-0 right-0 m-4 text-3xl cursor-pointer"
                          onClick={closeModal}
                        >
                          &times;
                        </span>
                        <video controls autoPlay className="w-full ">
                          <source src={videoSrc} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              {/* Content for the second column */}
              <div className="right-box md:block hidden">
                <img
                  src={banner2}
                  alt="slider1"
                  className="banner-img"
                  width={"100%"}
                  height={"100%"}
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="lg:container  mx-auto flex flex-wrap my-16">
            <div className="w-full lg:w-1/2 flex items-center ">
              {/* Content for the first column */}
              <div className="left-box md:mt-0 mt-40 md:mb-0 mb-36 md:text-left text-center ">
                <h1 className="heading  md:mx-0 mx-4">
                  Budget-Friendly, Delicious
                  <br />
                  <span className="highlight">Meals Near You</span>
                </h1>
                <p className="text-lg text-gray-800 my-6 mr-4">
                  Discover and order your favorite dishes with our food app.
                  Explore top-rated restaurants, diverse cuisines, and enjoy
                  quick delivery. Delicious meals are just a few taps away.
                </p>
                <div className="flex items-center md:justify-start justify-center">
                  <Link to="/recepies">
                    <button className="order-btn">Order Now</button>
                  </Link>
                  <button onClick={openModal} className="play-btn">
                    <PiPlayCircleThin className="fa-play" />
                  </button>
                  {showModal && (
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                      <div
                        className="bg-black bg-opacity-50 absolute inset-0"
                        onClick={closeModal}
                      ></div>
                      <div className=" p-2  max-w-3xl">
                        <span
                          className="absolute top-0 right-0 m-4 text-3xl cursor-pointer"
                          onClick={closeModal}
                        >
                          &times;
                        </span>
                        <video controls autoPlay className="w-full ">
                          <source src={video1} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              {/* Content for the second column */}
              <div className="right-box md:block hidden">
                <img
                  src={banner3}
                  alt="slider1"
                  className="banner-img"
                  width={"100%"}
                  height={"100%"}
                />
              </div>
            </div>
          </div>
        </div>
      </StyledSlider>
    </div>
  );
};

export default Banner;
