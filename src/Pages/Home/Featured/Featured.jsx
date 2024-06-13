import featureImg from "../../../assets/home/featured.jpg";
const Featured = () => {
  return (
    <div className="bg-featuredBg bg-fixed bg-cover">
      <div className="bg-gradient-to-r py-20 from-black to-[rgba(21, 21, 21, 0.3)] h-screen">
        <h1>Featured Menu</h1>
        <div className="pb-12 max-w-screen-lg	mx-auto flex space-x-8 items-center">
          <img
            className="w-[500px] rounded-md"
            src={featureImg}
            alt="Featured Food"
          />
          <div className="text-white">
            <p>March 20, 2023</p>
            <p>WHERE CAN I GET SOME?</p>
            <p className="py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="btn mt-4 btn-outline text-white">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
