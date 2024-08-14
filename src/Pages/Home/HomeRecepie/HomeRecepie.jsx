import { IoIosArrowForward } from "react-icons/io";
import useMenu from "../../../Hooks/useMenu";
import { Link } from "react-router-dom";

const HomeRecepie = () => {
  const [items] = useMenu();
  return (
    <div className="lg:container mx-auto pt-10 flex flex-col justify-center items-center">
      <h3 className="headinTwo text-center pb-4  mb-10 relative before:absolute before:bg-[#CF2424] before:h-1 before:w-20 before:content-''  before:bottom-0 before:left-1/2 before:-translate-x-1/2">
        Available Foods
      </h3>
      <div className="right-area flex flex-wrap items-center  justify-evenly ">
        {items.slice(0, 8).map((item) => (
          <div className="card-items" key={item._id}>
            <div className="card__image">
              <img src={item?.image_url} alt="Food Card" />
            </div>
            <div className="flex  flex-col items-start">
              <div className="card__info--price">
                <p>$ {item?.price}</p>
              </div>
              <div className="card__info">
                <div className="car__info--title">
                  <h3>{item?.name}</h3>
                  <p>{item?.category}</p>
                </div>

                <Link to={`/recepies/${item._id}`}>
                  <button className="cart-btn">
                    Details <IoIosArrowForward />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link to="/recepies" className="-mt-5">
        <button className="order-btn">All Recipes</button>
      </Link>
    </div>
  );
};

export default HomeRecepie;
