import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import "./RecepieDetails.css";
import { IoPricetagOutline } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { useState } from "react";
import profile1 from "../../../assets/reviewProfile/profile1.jpg";
import profile2 from "../../../assets/reviewProfile/profile2.png";
import profile3 from "../../../assets/reviewProfile/profile3.png";
import { MdOutlineStar, MdOutlineStarBorder } from "react-icons/md";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const RecepieDetails = () => {
  const [quantity, setQuantity] = useState({ value: 1 });

  const increment = () => {
    setQuantity((prevQuantity) => ({ value: prevQuantity.value + 1 }));
  };

  const decrement = () => {
    setQuantity((prevQuantity) => ({
      value: prevQuantity.value > 1 ? prevQuantity.value - 1 : 1,
    }));
  };

  return (
    <div className="bg-[#F9F9F9] ">
      <SectionTitle title="Recepie Details" details="Details" />
      {/* Order Area  */}
      <div className="lg:container pb-24 mx-auto">
        <div className="order-area">
          <div className="grid grid-cols-12 gap-2">
            <div className="left-col col-span-12 md:col-span-4">
              <div className="item-img">
                <img
                  src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2VhZm9vZHxlbnwwfDB8MHx8fDA%3D"
                  alt=""
                />
              </div>
            </div>
            <div className="right-col col-span-12 md:col-span-8">
              <div className="item-des">
                <h3 className="item-title">Franch Salmon Fry</h3>
                <div className="flex items-center">
                  <IoPricetagOutline className="mr-1" />
                  <span className="category-text">Category : fast food</span>
                </div>
                <div className="ratings"></div>
                <p className="item-price">$ 44.00</p>
                <p className="item-sub-title">Delicious Franch fish fry</p>
                <p className="item-description">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Harum, fugit libero. Corrupti magnam ad quisquam eum, fuga
                  ullam cum velit accusamus earum necessitatibus repellendus sed
                  rem quae aspernatur odio illum.
                </p>
                <p className="food-quantity">Quantity</p>
                <div className="sm:order-1 w-28 my-2">
                  <div className="mx-auto flex h-8 items-stretch text-gray-600">
                    <button
                      onClick={decrement}
                      className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-[#CF2424] hover:text-white"
                    >
                      -
                    </button>
                    <div className="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">
                      {quantity.value}
                    </div>
                    <button
                      onClick={increment}
                      className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-[#CF2424] hover:text-white"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div>
                  <button className="add-to-cart">
                    Add To Cart <FaCartShopping className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Details Area  */}
        <div className="details-area">
          <div className="grid grid-cols-12 gap-2">
            <div className="details-left-col col-span-12 md:col-span-6">
              <h3 className="details-title">Details</h3>
              <p className="details-des">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate ipsum fuga odit obcaecati sequi dicta neque officiis
                voluptates, dolores deserunt. Corporis eveniet nisi dicta eos
                nemo sapiente, quia quo vero molestias soluta quidem odio
                voluptate fugit ipsum praesentium et unde.
              </p>
              <h3 className="details-title">Features</h3>
              <ul className="features">
                <li>Capture 4K30 Video and 12MP Photos</li>
                <li>Capture 4K30 Video and 12MP Photos</li>
                <li>Capture 4K30 Video and 12MP Photos</li>
                <li>Capture 4K30 Video and 12MP Photos</li>
                <li>Capture 4K30 Video and 12MP Photos</li>
              </ul>
            </div>
            <div className="details-right-col col-span-12 md:col-span-6">
              <div className="right-container">
                <h3 className="details-title">Specifications</h3>
                <p className="normal-list">
                  Weight: <span>35.5oz (1006g)</span>
                </p>
                <p className="normal-list">
                  Weight: <span>35.5oz (1006g)</span>
                </p>
                <p className="normal-list">
                  Weight: <span>35.5oz (1006g)</span>
                </p>
                <p className="normal-list">
                  Weight: <span>35.5oz (1006g)</span>
                </p>
              </div>
              <div className="right-container mt-6">
                <h3 className="details-title">Order Options:</h3>
                <p className="normal-list">
                  Courier: <span> 2 - 4 days, $22.50</span>
                </p>
                <p className="normal-list">
                  Courier: <span> 2 - 4 days, $22.50</span>
                </p>
                <p className="normal-list">
                  Courier: <span> 2 - 4 days, $22.50</span>
                </p>
                <p className="normal-list">
                  Courier: <span> 2 - 4 days, $22.50</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Area  */}
        <div className="grid grid-cols-12 gap-9">
          <div className=" col-span-12 md:col-span-4">
            <div className="reviews-left-col single-block give-review">
              <h4>4.5 (Overall)</h4>
              <ul>
                <li>
                  <span>5 stars - 38</span>
                  <MdOutlineStar className="rating-icon" />
                  <MdOutlineStar className="rating-icon" />
                  <MdOutlineStar className="rating-icon" />
                  <MdOutlineStar className="rating-icon" />
                  <MdOutlineStarBorder className="rating-icon" />
                </li>
                <li>
                  <span>4 stars - 10</span>
                  <MdOutlineStar className="rating-icon" />
                  <MdOutlineStar className="rating-icon" />
                  <MdOutlineStar className="rating-icon" />
                  <MdOutlineStar className="rating-icon" />
                  <MdOutlineStarBorder className="rating-icon" />
                </li>
                <li>
                  <span>3 stars - 3</span>
                  <MdOutlineStar className="rating-icon" />
                  <MdOutlineStar className="rating-icon" />
                  <MdOutlineStar className="rating-icon" />
                  <MdOutlineStarBorder className="rating-icon" />
                  <MdOutlineStarBorder className="rating-icon" />
                </li>
                <li>
                  <span>2 stars - 1</span>
                  <MdOutlineStar className="rating-icon" />
                  <MdOutlineStar className="rating-icon" />
                  <MdOutlineStarBorder className="rating-icon" />
                  <MdOutlineStarBorder className="rating-icon" />
                  <MdOutlineStarBorder className="rating-icon" />
                </li>
                <li>
                  <span>1 star - 0</span>
                  <MdOutlineStar className="rating-icon" />
                  <MdOutlineStarBorder className="rating-icon" />
                  <MdOutlineStarBorder className="rating-icon" />
                  <MdOutlineStarBorder className="rating-icon" />
                  <MdOutlineStarBorder className="rating-icon" />
                </li>
              </ul>
              <button
                type="button"
                className="btn review-btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Leave a Review
              </button>
            </div>

            {/* More Info */}
            <div>
              <h3 className="details-title mt-9">More Info</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                <div>
                  <div className="info-box">
                    <IoCheckmarkCircleOutline className="check-icon" />
                    <p>Home Delivery</p>
                  </div>
                  <div className="info-box">
                    <IoCheckmarkCircleOutline className="check-icon" />
                    <p>Nightlife</p>
                  </div>
                  <div className="info-box">
                    <IoCheckmarkCircleOutline className="check-icon" />
                    <p>Indoor Seating</p>
                  </div>
                  <div className="info-box">
                    <IoCheckmarkCircleOutline className="check-icon" />
                    <p>Luxury Dining</p>
                  </div>
                  <div className="info-box">
                    <IoCheckmarkCircleOutline className="check-icon" />
                    <p>Live Music</p>
                  </div>
                  <div className="info-box">
                    <IoCheckmarkCircleOutline className="check-icon" />
                    <p>Rooftop</p>
                  </div>
                  <div className="info-box">
                    <IoCheckmarkCircleOutline className="check-icon" />
                    <p>Romantic Dining</p>
                  </div>
                  <div className="info-box">
                    <IoCheckmarkCircleOutline className="check-icon" />
                    <p>Family Friendly</p>
                  </div>
                  <div className="info-box">
                    <IoCheckmarkCircleOutline className="check-icon" />
                    <p>Table Booking</p>
                  </div>
                </div>
                <div>
                  <div className="info-box">
                    <IoCheckmarkCircleOutline className="check-icon" />
                    <p>Party Music</p>
                  </div>
                  <div className="info-box">
                    <IoCheckmarkCircleOutline className="check-icon" />
                    <p>Kid Friendly</p>
                  </div>
                  <div className="info-box">
                    <IoCheckmarkCircleOutline className="check-icon" />
                    <p>Available for Functions</p>
                  </div>
                  <div className="info-box">
                    <IoCheckmarkCircleOutline className="check-icon" />
                    <p>Smoking Area</p>
                  </div>
                  <div className="info-box">
                    <IoCheckmarkCircleOutline className="check-icon" />
                    <p>Live Sports Screening</p>
                  </div>
                  <div className="info-box">
                    <IoCheckmarkCircleOutline className="check-icon" />
                    <p>Outdoor Seating</p>
                  </div>
                  <div className="info-box">
                    <IoCheckmarkCircleOutline className="check-icon" />
                    <p> Bar Available</p>
                  </div>
                  <div className="info-box">
                    <IoCheckmarkCircleOutline className="check-icon" />
                    <p> Wifi Available</p>
                  </div>
                  <div className="info-box">
                    <IoCheckmarkCircleOutline className="check-icon" />
                    <p> Gaming Space</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="reviews-right-col col-span-12 md:col-span-8">
            <h3 className="details-title">Latest Reviews</h3>

            <div className="single-review">
              <img
                src={profile1}
                width="100%"
                height="100%"
                alt="Review persom"
              />
              <div className="review-info">
                <h4 className="focus-title">
                  Awesome food quality for the price
                  <span className="person-name">Jacob Hammond</span>
                </h4>
                <ul className="stars">
                  <div className="flex items-center mt-1">
                    <MdOutlineStar className="rating-icon" />
                    <MdOutlineStar className="rating-icon" />
                    <MdOutlineStar className="rating-icon" />
                    <MdOutlineStar className="rating-icon" />
                    <MdOutlineStar className="rating-icon" />
                  </div>
                </ul>
                <p className="review-des">
                  Delicious and innovative dishes, with fresh ingredients and
                  bold flavors. Exceptional presentation and attentive service
                  make for a delightful dining experience. Highly recommended!
                  4o
                </p>
              </div>
            </div>
            <div className="single-review">
              <img
                src={profile2}
                width="100%"
                height="100%"
                alt="Review persom"
              />
              <div className="review-info">
                <h4 className="focus-title">
                  Great Value for Excellent Cuisine
                  <span className="person-name">Alex Jaza</span>
                </h4>
                <ul className="stars">
                  <div className="flex items-center mt-1">
                    <MdOutlineStar className="rating-icon" />
                    <MdOutlineStar className="rating-icon" />
                    <MdOutlineStar className="rating-icon" />
                    <MdOutlineStar className="rating-icon" />
                    <MdOutlineStarBorder className="rating-icon" />
                  </div>
                </ul>
                <p className="review-des">
                  Mouthwatering cuisine with creative twists, using fresh and
                  flavorful ingredients. Beautifully presented dishes paired
                  with impeccable service ensure a memorable dining experience.
                  Strongly recommended! Is this conversation helpful so far?
                </p>
              </div>
            </div>
            <div className="single-review">
              <img
                src={profile3}
                width="100%"
                height="100%"
                alt="Review persom"
              />
              <div className="review-info">
                <h4 className="focus-title">
                  Outstanding Quality at Affordable Prices
                  <span className="person-name">Dino Shofia</span>
                </h4>
                <ul className="stars">
                  <div className="flex items-center mt-1">
                    <MdOutlineStar className="rating-icon" />
                    <MdOutlineStar className="rating-icon" />
                    <MdOutlineStar className="rating-icon" />
                    <MdOutlineStar className="rating-icon" />
                    <MdOutlineStarBorder className="rating-icon" />
                  </div>
                </ul>
                <p className="review-des">
                  Exquisite dishes with unique flavors, crafted from fresh,
                  high-quality ingredients. Stunning presentation and top-notch
                  service guarantee an unforgettable dining adventure. Highly
                  recommended!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecepieDetails;
