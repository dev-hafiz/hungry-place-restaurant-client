/* eslint-disable react/no-unknown-property */
import "./Contact.css";
import phone from "../../../assets/icon/phone.png";
import whatsapp from "../../../assets/icon/whatsapp.png";
import email from "../../../assets/icon/email.png";
import store from "../../../assets/icon/store.png";
import { Link } from "react-router-dom";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);
  };
  return (
    <div>
      <div className="relative flex justify-center items-center py-12 bg-cover bg-no-repeat bg-center bg-[url('/src/assets/contactSlide/hotel.jpeg')]">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#232220] opacity-90"></div>

        {/* Content section */}
        <section className="relative z-10  py-20 my-5 w-2/4">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl flex flex-col justify-center items-center">
              <h1 className="mt-5 text-white font-serif pb-4 text-3xl font-light leading-snug sm:text-5xl sm:leading-snug lg:text-6xl lg:leading-snug">
                <span className=" relative inline-flex justify-center whitespace-nowrap font-bold">
                  Contact Us
                </span>
              </h1>
              <div className="link-area">
                <Link to="/" className="text-white">
                  Home
                </Link>
                <span className="mx-2 text-white">/</span>
                <Link to="/contact" className="text-white">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="lg:container mx-auto mb-16 mt-10 grid grid-cols-1 md:grid-cols-2 ">
        <div className="flex flex-col justify-center items-center">
          <div className="p-5 mt-16 w-3/4 ">
            <div class="grid  md:grid-cols-2 justify-center">
              <div class="contact-card">
                <img src={phone} alt="Phone icon" />

                <h5>Phone</h5>

                <p>+880 1445 678 901</p>
              </div>
              <div class="contact-card">
                <img src={whatsapp} alt="whatsapp icon" />

                <h5>Whatsapp</h5>

                <p>+880 1445 678 901</p>
              </div>
            </div>
            <div class="grid  md:grid-cols-2  justify-center">
              <div class="contact-card">
                <img
                  src={email}
                  width={"60px"}
                  height={"60px"}
                  alt="email icon"
                />

                <h5>Email </h5>

                <p>hungry@support.com</p>
              </div>
              <div class="contact-card">
                <img src={store} alt="store icon" />

                <h5>Store</h5>

                <p>#3586 RHD Avenue</p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-5">
          <h2 className="mt-5 text-[#0a121c] font-serif pb-4 text-2xl font-light leading-snug sm:text-5xl sm:leading-snug lg:text-4xl lg:leading-snug">
            <span className="relative inline-flex justify-center whitespace-nowrap font-bold">
              Get In Touch
            </span>
          </h2>
          <p className="text-base text-[#0e1927]  ">
            Our team is here to guide you through our exquisite menu and help
            you plan your perfect dining experience. Contact us today to explore
            flavors that elevate your senses and create unforgettable memories.
          </p>

          <div>
            <form onSubmit={handleSubmit} className="mt-5">
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#0e1927]"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    placeholder="Your Name"
                    className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#0e1927]"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    placeholder="Your Email"
                    className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-[#0e1927]"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#0e1927]"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                    defaultValue={""}
                    placeholder="Write Message"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 mt-4 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-[#CF2424] hover:bg-[#b11e1e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0e1927] focus:ring-offset-white"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="responsive-map lg:container mx-auto ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29211.299601975927!2d90.38808139999999!3d23.76832280000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c79aee494995%3A0xb3b2feaca8442b80!2sHungry%20Restaurant%20~%20Kachukhet!5e0!3m2!1sen!2sbd!4v1723211694103!5m2!1sen!2sbd"
          width="100%"
          height="500"
          allowFullscreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
