/* eslint-disable react/no-unknown-property */
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { CiSearch } from "react-icons/ci";
import "./Recepies.css";
import { IoIosArrowForward } from "react-icons/io";
import useMenu from "../../Hooks/useMenu";
import { useState } from "react";

const Recepies = () => {
  const [items] = useMenu();

  // const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [searchTitle, setSearchTitle] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchTitle(event.target.value);
  };

  const filteredItems = items.filter(
    (item) => item.name.toLowerCase().indexOf(searchTitle.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  // const handleChange = (event) => {
  //   setSelectedCategory(event.target.value);
  // };

  function filteredData(items, searchTitle) {
    let filteredMenuItems = items;

    // Filtering Input Items
    if (searchTitle) {
      filteredMenuItems = filteredItems;
    }

    return filteredMenuItems;
  }

  const result = filteredData(items, searchTitle);

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
                  onChange={handleSearchInputChange}
                  value={searchTitle}
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

              {result.map((item) => (
                <div class="card" key={item._id}>
                  <div class="card__image">
                    <img src={item?.image_url} alt="Food Card" />
                  </div>
                  <div class="card__info">
                    <div class="car__info--title">
                      <h3>{item?.name}</h3>
                      <p>{item?.category}</p>
                    </div>

                    <div class="card__info--price">
                      <p>$ {item?.price}</p>
                    </div>
                    <button className="cart-btn">
                      Details <IoIosArrowForward />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recepies;
