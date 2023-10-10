import { Parallax } from "react-parallax";

// eslint-disable-next-line react/prop-types
const Cover = ({ title, img }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 60 }}
      bgImage={img}
      bgImageAlt="Banner Image "
      strength={-100}
      className="mb-14"
    >
      <div>
        <div className="hero h-[600px]">
          <div className="hero-overlay bg-opacity-50"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className=" bg-black rounded-lg py-16 bg-opacity-40 px-28 w-2/4	">
              <h1 className="mb-5 text-5xl  text-white font-bold">{title}</h1>
              <p className="mb-5 text-white">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
