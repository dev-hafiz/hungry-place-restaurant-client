/* eslint-disable react/no-unknown-property */
import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <div>
      <div className="relative flex justify-center items-center py-12 bg-cover bg-no-repeat bg-center bg-[url('/src/assets/contactSlide/hotel.jpeg')]">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#232220] opacity-90"></div>

        {/* Content section */}
        <section className="relative z-10   py-20 my-5 w-2/4">
          <div className="relative  mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl flex flex-col justify-center items-center">
              <h1 className="mt-5 font-serif pb-4 text-3xl font-light leading-snug sm:text-5xl sm:leading-snug lg:text-6xl lg:leading-snug">
                <span className="text-white relative inline-flex justify-center whitespace-nowrap font-bold">
                  About Us
                </span>
              </h1>
              <div className="link-area">
                <Link to="/" className="text-white">
                  Home
                </Link>
                <span className="mx-2 text-white">/</span>
                <Link to="/about" className="text-white">
                  About Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Invite text  */}
      <div className="lg:container mx-auto mb-16 mt-10  flex justify-center items-center ">
        <div className="w-3/4 text-center">
          <h3 className="headinTwo text-center pb-4 mt-6 mb-10  relative before:absolute before:bg-[#CF2424] before:h-1 before:w-20 before:content-''  before:bottom-0 before:left-1/2 before:-translate-x-1/2">
            Welcome to Restaurant
          </h3>
          <p className="mb-12 text-center text-lg text-gray-600">
            We are excited to invite you to a dining experience that combines
            exceptional cuisine with a warm, inviting atmosphere. Our dedicated
            team is here to ensure that every meal is a delight, whether you’re
            celebrating a special occasion or simply enjoying a casual meal. We
            look forward to making your visit truly memorable. Come and savor
            the flavors with us!
          </p>
          <section class="py-6 -mt-10 text-blue-900 sm:py-16">
            <div class="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8">
              <div class="relative flex flex-col lg:flex-row">
                <div class="pointer-events-none absolute -bottom-10 left-12 hidden h-24 w-24 rounded-full opacity-60 lg:block">
                  <svg
                    id="patternId"
                    width="100%"
                    height="100%"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#f34040]"
                  >
                    <defs>
                      <pattern
                        id="b"
                        patternUnits="userSpaceOnUse"
                        width="40"
                        height="40"
                        patternTransform="scale(0.5) rotate(0)"
                      >
                        <rect
                          x="0"
                          y="0"
                          width="100%"
                          height="100%"
                          fill="none"
                        />
                        <path
                          d="M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5"
                          stroke-width="1"
                          stroke="none"
                          fill="currentColor"
                        />
                      </pattern>
                    </defs>
                    <rect
                      width="800%"
                      height="800%"
                      transform="translate(0,0)"
                      fill="url(#b)"
                    />
                  </svg>
                </div>

                <div class="my-10 text-center sm:mt-20 lg:text-left">
                  <p class="text-lg font-medium text-red-500">
                    Celebrating Our Success
                  </p>
                  <h2 class="text-3xl font-bold text-[#243E63] sm:text-4xl">
                    Our Growth
                  </h2>
                </div>

                <div class="mx-auto mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:mt-16 lg:mr-0">
                  <div class="px-6 py-10">
                    <div class="flex items-center">
                      <h3 class="relative ml-2 inline-block text-4xl font-bold leading-none">
                        <span class="absolute -top-6 -left-6 h-16 w-16 rounded-full bg-red-300"></span>
                        <span class="relative text-[#243E63]">328</span>
                      </h3>
                      <span class="ml-3 text-base font-medium capitalize text-[#243E63]">
                        Dishes Created
                      </span>
                    </div>
                  </div>

                  <div class="px-6 py-10">
                    <div class="flex items-center">
                      <h3 class="relative ml-2 inline-block text-4xl font-bold leading-none">
                        <span class="absolute -top-6 -left-6 h-16 w-16 rounded-full bg-red-300"></span>
                        <span class="relative text-[#243E63]">16</span>
                      </h3>
                      <span class="ml-3 text-[#243E63] text-base font-medium capitalize">
                        New Hires
                      </span>
                    </div>
                  </div>

                  <div class="px-6 py-10">
                    <div class="flex items-center">
                      <h3 class="relative ml-2 inline-block text-4xl font-bold leading-none">
                        <span class="absolute -top-6 -left-6 h-16 w-16 rounded-full bg-red-300"></span>
                        <span class="relative text-[#243E63]">41+</span>
                      </h3>
                      <span class="ml-3 text-[#243E63] text-base font-medium capitalize">
                        Events Hosted
                      </span>
                    </div>
                  </div>

                  <div class="px-6 py-10">
                    <div class="flex items-center">
                      <h3 class="relative ml-2 inline-block text-4xl font-bold leading-none">
                        <span class="absolute -top-6 -left-6 h-16 w-16 rounded-full bg-red-300"></span>
                        <span class="relative text-[#243E63]">99%</span>
                      </h3>
                      <span class="ml-3 text-base text-[#243E63] font-medium capitalize">
                        Customer Satisfaction
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* What We DO  */}
      <div className="lg:container mx-auto">
        <div className="relative mx-auto w-full px-5 -mt-14 pb-16 text-gray-800 sm:px-20 md:max-w-screen-lg lg:py-24">
          <h2 className="headinTwo text-center pb-4  mb-10  relative before:absolute before:bg-[#CF2424] before:h-1 before:w-20 before:content-''  before:bottom-0 before:left-1/2 before:-translate-x-1/2">
            Have Questions? FAQs
          </h2>
          <p className="mb-12 text-center text-lg text-gray-600">
            We have answered some of the most common questions about our
            restaurant. If you have further inquiries, feel free to contact us.
          </p>
          <ul className="divide-y divide-gray-200">
            <li className="text-left">
              <label for="accordion-1" className="flex flex-col">
                <input
                  className="peer hidden"
                  type="checkbox"
                  id="accordion-1"
                  checked
                />
                <div className="before:absolute before:-left-6 before:block before:text-xl before:text-[#CF2424] before:content-['+'] peer-checked:before:content-['–'] relative ml-4 cursor-pointer select-none items-center py-4 pr-2">
                  <h3 className="text-sm lg:text-base">
                    What are your restaurant's opening hours?
                  </h3>
                </div>
                <div className="pr-2">
                  <div className="pb-5">
                    <p className="text-sm">
                      Our restaurant is open from 11 AM to 10 PM on weekdays,
                      and from 10 AM to 11 PM on weekends. We are closed on
                      public holidays.
                    </p>
                  </div>
                </div>
              </label>
            </li>

            <li className="text-left">
              <label for="accordion-2" className="flex flex-col">
                <input
                  className="peer hidden"
                  type="checkbox"
                  id="accordion-2"
                />
                <div className="before:absolute before:-left-6 before:block before:text-xl before:text-[#CF2424] before:content-['+'] peer-checked:before:content-['–'] relative ml-4 cursor-pointer select-none items-center py-4 pr-2">
                  <h3 className="text-sm lg:text-base">
                    Do you offer vegetarian or vegan options?
                  </h3>
                </div>
                <div className="peer-checked:hidden pr-2">
                  <div className="pb-5">
                    <p className="text-sm">
                      Yes, we offer a variety of vegetarian and vegan dishes.
                      Our menu is designed to cater to diverse dietary
                      preferences, ensuring everyone can enjoy a delicious meal.
                    </p>
                  </div>
                </div>
              </label>
            </li>

            <li className="text-left">
              <label for="accordion-3" className="flex flex-col">
                <input
                  className="peer hidden"
                  type="checkbox"
                  id="accordion-3"
                />
                <div className="before:absolute before:-left-6 before:block before:text-xl before:text-[#CF2424] before:content-['+'] peer-checked:before:content-['–'] relative ml-4 cursor-pointer select-none items-center py-4 pr-2">
                  <h3 className="text-sm lg:text-base">
                    Can I make a reservation online?
                  </h3>
                </div>
                <div className="peer-checked:hidden pr-2">
                  <div className="pb-5">
                    <p className="text-sm">
                      Absolutely! You can easily make a reservation through our
                      website or mobile app. Simply select the date, time, and
                      number of guests, and you'll receive a confirmation via
                      email.
                    </p>
                  </div>
                </div>
              </label>
            </li>
          </ul>
          <div className="mt-20 flex justify-center">
            <a
              className="inline-flex cursor-pointer rounded-full bg-[#CF2424] px-5 py-4 text-white"
              href="/contact"
            >
              Still have a question? Contact us!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
