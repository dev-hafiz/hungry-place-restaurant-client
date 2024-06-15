import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { CiSearch } from "react-icons/ci";
import "./Recepies.css";
import { IoHeartOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";

const Recepies = () => {
  return (
    <div className="bg-[#F9F9F9]">
      <SectionTitle />

      <div className=" mt-10 ">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-1">
          <div className=" col-span-12 md:col-span-3">
            {/* Search Area  */}
            <div className="left-area">
              <h4 className="search-text">Search Food</h4>
              <div className="search-input-wrapper">
                <input
                  type="text"
                  className="input-search"
                  placeholder="Search Here..."
                />
                <CiSearch className="search-icon" />
              </div>
            </div>

            {/* Filter By Categories  */}
            <div className="left-area">
              <h4 className="search-text">Filter By Categories</h4>
              <div className=" flex items-center gap-2 mb-1">
                <input type="checkbox" className="checkbox  checkbox-xs" />
                <p className="filter-text">All Food</p>
              </div>
              <div className=" flex items-center gap-2 mb-1">
                <input type="checkbox" className="checkbox  checkbox-xs" />
                <p className="filter-text">Fast Food</p>
              </div>
              <div className=" flex items-center gap-2 mb-1">
                <input type="checkbox" className="checkbox  checkbox-xs" />
                <p className="filter-text">Deshi Food</p>
              </div>
              <div className=" flex items-center gap-2 mb-1">
                <input type="checkbox" className="checkbox  checkbox-xs" />
                <p className="filter-text">Chinese Food</p>
              </div>
            </div>
            {/* Filter By Price  */}
            <div className="left-area ">
              <h4 className="search-text">Filter By Price</h4>
              <div className=" flex items-center gap-2 mb-1">
                <input type="checkbox" className="checkbox  checkbox-xs" />
                <p className="filter-text">$0 - $50</p>
              </div>
              <div className=" flex items-center gap-2 mb-1">
                <input type="checkbox" className="checkbox  checkbox-xs" />
                <p className="filter-text">$50 - $100</p>
              </div>
              <div className=" flex items-center gap-2 mb-1">
                <input type="checkbox" className="checkbox  checkbox-xs" />
                <p className="filter-text">$100 - $150</p>
              </div>
              <div className=" flex items-center gap-2 mb-1">
                <input type="checkbox" className="checkbox  checkbox-xs" />
                <p className="filter-text">$150 - $200</p>
              </div>
              <div className=" flex items-center gap-2 mb-1">
                <input type="checkbox" className="checkbox  checkbox-xs" />
                <p className="filter-text">$200 - $250</p>
              </div>
              <div className=" flex items-center gap-2 mb-1">
                <input type="checkbox" className="checkbox  checkbox-xs" />
                <p className="filter-text">$250 - $300</p>
              </div>
              <div className=" flex items-center gap-2 mb-1">
                <input type="checkbox" className="checkbox  checkbox-xs" />
                <p className="filter-text">$300 - $Over</p>
              </div>
            </div>
          </div>
          <div className=" col-span-12 md:col-span-9">
            <div className="right-area flex flex-wrap items-center">
              <div className="item-card">
                <div className="heart-btn">
                  <IoHeartOutline />
                </div>
                <div className="card-image">
                  <img
                    src="https://i.ibb.co/CMbvnmb/cup-prev-ui.png"
                    alt="food card"
                  />
                </div>
                <div className="card-description">
                  <h3 className="card-title">Morning Set</h3>
                  <p className="card-info">
                    Set of coffee and chocolate cookies as a top tier among our
                    customers and a perfect way to start your day.
                  </p>
                </div>
                <div className="card-sub-des flex items-center gap-1">
                  <span>Ingredients:</span>
                  <div className="card-action-one">sugar</div>
                  <div className="card-action-two">cheam</div>
                  <div className="card-action-three">jam</div>
                </div>
                <div className="flex items-center mt-2 justify-between">
                  <p className="card-price"> $16</p>
                  <button className="card-btn flex items-center gap-1">
                    Make an order <IoIosArrowForward />
                  </button>
                </div>
              </div>
              <div className="item-card">
                <div className="heart-btn">
                  <IoHeartOutline />
                </div>
                <div className="card-image">
                  <img
                    src="https://i.ibb.co/CMbvnmb/cup-prev-ui.png"
                    alt="food card"
                  />
                </div>
                <div className="card-description">
                  <h3 className="card-title">Morning Set</h3>
                  <p className="card-info">
                    Set of coffee and chocolate cookies as a top tier among our
                    customers and a perfect way to start your day.
                  </p>
                </div>
                <div className="card-sub-des flex items-center gap-1">
                  <span>Ingredients:</span>
                  <div className="card-action-one">sugar</div>
                  <div className="card-action-two">cheam</div>
                  <div className="card-action-three">jam</div>
                </div>
                <div className="flex items-center mt-2 justify-between">
                  <p className="card-price"> $16</p>
                  <button className="card-btn flex items-center gap-1">
                    Make an order <IoIosArrowForward />
                  </button>
                </div>
              </div>
              <div className="item-card">
                <div className="heart-btn">
                  <IoHeartOutline />
                </div>
                <div className="card-image">
                  <img
                    src="https://i.ibb.co/CMbvnmb/cup-prev-ui.png"
                    alt="food card"
                  />
                </div>
                <div className="card-description">
                  <h3 className="card-title">Morning Set</h3>
                  <p className="card-info">
                    Set of coffee and chocolate cookies as a top tier among our
                    customers and a perfect way to start your day.
                  </p>
                </div>
                <div className="card-sub-des flex items-center gap-1">
                  <span>Ingredients:</span>
                  <div className="card-action-one">sugar</div>
                  <div className="card-action-two">cheam</div>
                  <div className="card-action-three">jam</div>
                </div>
                <div className="flex items-center mt-2 justify-between">
                  <p className="card-price"> $16</p>
                  <button className="card-btn flex items-center gap-1">
                    Make an order <IoIosArrowForward />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recepies;
