import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import quote from "../../../../src/assets/left-quote.png";

import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://hungry-place-restaurant-server.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="mt-16 max-w-screen-lg	mx-auto pb-20">
      <h1>What Our Clients Say</h1>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex space-y-3 flex-col justify-center items-center">
              <img className="w-[80px] h-[80px]" src={quote} alt="Quote" />
              <Rating
                style={{ maxWidth: 180 }}
                value={review?.rating}
                readOnly
              />
              <p>{review?.details}</p>
              <p className="text-[#CD9003] text-2xl">{review?.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
