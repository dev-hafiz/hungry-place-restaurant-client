import "./Banner.css";
import banner1 from "../../../assets/BannerImages/Banner1.jpg";
import banner2 from "../../../assets/BannerImages/Banner2.jpg";
import banner3 from "../../../assets/BannerImages/Banner3.jpg";
import { PiPlayCircleThin } from "react-icons/pi";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import styled from "styled-components";
import withAutoplay from "react-awesome-slider/dist/autoplay";

const Banner = () => {
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
      background-color: red;
    }
    .awssld__bullets button {
      background-color: lightgray;
    }
  `;

  return (
    <StyledSlider
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={6000}
    >
      <div>
        <div className="lg:container  mx-auto flex flex-wrap my-16">
          <div className="w-full lg:w-1/2 flex items-center ">
            {/* Content for the first column */}
            <div className="left-box">
              <h1 className="heading">
                Delicious & Affordable <br />
                <span className="highlight">Meals Near You.</span>
              </h1>
              <p className="description">
                Discover and order your favorite dishes with our food app.
                Explore top-rated restaurants, diverse cuisines, and enjoy quick
                delivery. Delicious meals are just a few taps away.
              </p>
              <div className="flex items-center">
                <button className="order-btn">Order Now</button>
                <button className="play-btn">
                  <PiPlayCircleThin className="fa-play" />
                </button>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            {/* Content for the second column */}
            <div className="right-box">
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
        {" "}
        <div className="lg:container  mx-auto flex flex-wrap my-16">
          <div className="w-full lg:w-1/2 flex items-center ">
            {/* Content for the first column */}
            <div className="left-box">
              <h1 className="heading">
                Delicious & Affordable <br />
                <span className="highlight">Meals Near You.</span>
              </h1>
              <p className="description">
                Discover and order your favorite dishes with our food app.
                Explore top-rated restaurants, diverse cuisines, and enjoy quick
                delivery. Delicious meals are just a few taps away.
              </p>
              <div className="flex items-center">
                <button className="order-btn">Order Now</button>
                <button className="play-btn">
                  <PiPlayCircleThin className="fa-play" />
                </button>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            {/* Content for the second column */}
            <div className="right-box">
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
        {" "}
        <div className="lg:container  mx-auto flex flex-wrap my-16">
          <div className="w-full lg:w-1/2 flex items-center ">
            {/* Content for the first column */}
            <div className="left-box">
              <h1 className="heading">
                Delicious & Affordable <br />
                <span className="highlight">Meals Near You.</span>
              </h1>
              <p className="description">
                Discover and order your favorite dishes with our food app.
                Explore top-rated restaurants, diverse cuisines, and enjoy quick
                delivery. Delicious meals are just a few taps away.
              </p>
              <div className="flex items-center">
                <button className="order-btn">Order Now</button>
                <button className="play-btn">
                  <PiPlayCircleThin className="fa-play" />
                </button>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            {/* Content for the second column */}
            <div className="right-box">
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
  );
};

export default Banner;
