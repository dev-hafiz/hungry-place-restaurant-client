/* eslint-disable react/no-unknown-property */
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { CiSearch } from "react-icons/ci";
import "./Recepies.css";
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
              {/* food card  */}
              <div class="card">
                <div class="card__image">
                  <img
                    src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="Salad"
                  />
                </div>
                <div class="card__info">
                  <div class="car__info--title">
                    <h3>Salad</h3>
                    <p>Fresh & sweet</p>
                  </div>

                  <div class="card__info--price">
                    <p>$ 5</p>
                  </div>
                  <button className="cart-btn">
                    Details <IoIosArrowForward />
                  </button>
                </div>
              </div>
              <div class="card">
                <div class="card__image">
                  <img
                    src="https://images.unsplash.com/photo-1610970878459-a0e464d7592b?q=80&w=1524&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Salad"
                  />
                </div>
                <div class="card__info">
                  <div class="car__info--title">
                    <h3>Burger</h3>
                    <p>Fresh & sweet</p>
                  </div>

                  <div class="card__info--price">
                    <p>$ 10</p>
                  </div>
                  <button className="cart-btn">
                    Details <IoIosArrowForward />
                  </button>
                </div>
              </div>
              <div class="card">
                <div class="card__image">
                  <img
                    src="https://images.unsplash.com/photo-1676037150408-4b59a542fa7c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Salad"
                  />
                </div>
                <div class="card__info">
                  <div class="car__info--title">
                    <h3>Fish Fry</h3>
                    <p>Fresh & sweet</p>
                  </div>

                  <div class="card__info--price">
                    <p>$ 5</p>
                  </div>
                  <button className="cart-btn">
                    Details <IoIosArrowForward />
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
