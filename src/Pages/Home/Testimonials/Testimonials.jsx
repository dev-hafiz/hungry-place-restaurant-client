/* eslint-disable no-unused-vars */
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import quote from "../../../../src/assets/review-profile.png";
import "@smastrom/react-rating/style.css";
import "./Testimonials.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const colors = ["#243E63", "#CF2424"];

  useEffect(() => {
    fetch("https://hungry-place-restaurant-server.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length <= wordLimit) {
      return text;
    }
    return words.slice(0, wordLimit).join(" ") + "...";
  };

  return (
    <div className="mt-16 custom-bg pb-20 relative">
      <h3 className="headinTwo text-center pb-4  relative before:absolute before:bg-[#CF2424] before:h-1 before:w-20 before:content-''  before:bottom-0 before:left-1/2 before:-translate-x-1/2">
        Customer&apos;s Review
      </h3>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper mt-20 mb-16 customSwiper "
      >
        {reviews.map((review, index) => (
          <SwiperSlide
            key={review._id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: colors[index % colors.length],
            }}
          >
            <div className="p-4 flex flex-col items-center justify-center ">
              {review?.profile ? (
                <div className="profile-circle">
                  <img src={review?.profile} alt="review user porfile" />
                </div>
              ) : (
                <div className="profile-circle">
                  <img src={quote} alt="review user porfile" />
                </div>
              )}
              <p className=" profile-title">{review?.name}</p>
              <p className="profile-des">
                {" "}
                {truncateText(review?.details, 30)}
              </p>

              <Rating className="rating" value={review?.rating} readOnly />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
