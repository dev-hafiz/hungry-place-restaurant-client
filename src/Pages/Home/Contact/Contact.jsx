/* eslint-disable react/no-unknown-property */
import "./Contact.css";

const Contact = () => {
  return (
    <div className="bg-[url('/src/assets/contactSlide/contact.jpeg')] flex justify-center items-center  py-12 bg-cover bg-no-repeat bg-center">
      <section className="bg-white bg-opacity-60 py-10  w-2/4 ">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mt-5 pb-4 text-3xl font-light leading-snug sm:text-5xl sm:leading-snug lg:text-6xl lg:leading-snug">
              We’d Love to <br className="sm:hidden" />
              Hear from You
              <span className="relative inline-flex justify-center whitespace-nowrap font-bold">
                Contact Us
              </span>
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
