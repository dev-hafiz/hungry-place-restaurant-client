/* eslint-disable react/no-unknown-property */
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { CiSearch } from "react-icons/ci";
import "./Recepies.css";
import { IoIosArrowForward } from "react-icons/io";
import useMenu from "../../Hooks/useMenu";
import { useState } from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from "../../Components/LoadingSpinner";

const Recepies = () => {
  // State for Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const [items, loading] = useMenu();

  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [searchTitle, setSearchTitle] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchTitle(event.target.value);
  };

  const filteredItems = items.filter(
    (item) => item.name.toLowerCase().indexOf(searchTitle.toLowerCase()) !== -1
  );

  // ----------- Category Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(items, selected, searchTitle) {
    let filteredMenuItems = items;

    // Filtering Input Items
    if (searchTitle) {
      filteredMenuItems = filteredItems;
    }

    if (selected) {
      filteredMenuItems = filteredMenuItems.filter(
        ({ category, price }) => category === selected || price === selected
      );
    }

    return filteredMenuItems;
  }

  const result = filteredData(items, selectedCategory, searchTitle);

  // Start Pagination Calculation
  // Calculate the indexes for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = result.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate total pages
  const totalPages = Math.ceil(result.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle previous page
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Handle next page
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // End Pagination Calculation

  return (
    <div className="bg-[#F9F9F9]">
      <SectionTitle title="All Recepie" />

      <div className=" container mx-auto">
        <div className=" mt-10 ">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
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
                  <input
                    type="radio"
                    name="flexRadioNoLabel"
                    className="radio-sm"
                    id="radioNoLabel01"
                    onChange={handleChange}
                    value={""}
                  />
                  <p className="filter-text">All Food</p>
                </div>
                <div className=" flex items-center gap-2 mb-1">
                  <input
                    type="radio"
                    name="flexRadioNoLabel"
                    className="radio-sm"
                    id="radioNoLabel01"
                    onChange={handleChange}
                    value={"Fast food"}
                  />
                  <p className="filter-text">Fast Food</p>
                </div>
                <div className=" flex items-center gap-2 mb-1">
                  <input
                    type="radio"
                    name="flexRadioNoLabel"
                    className="radio-sm"
                    id="radioNoLabel01"
                    onChange={handleChange}
                    value={"Deshi food"}
                  />
                  <p className="filter-text">Deshi Food</p>
                </div>
                <div className=" flex items-center gap-2 mb-1">
                  <input
                    type="radio"
                    name="flexRadioNoLabel"
                    className="radio-sm"
                    id="radioNoLabel01"
                    onChange={handleChange}
                    value={"Chinese food"}
                  />
                  <p className="filter-text">Chinese Food</p>
                </div>
              </div>
              {/* Filter By Price  */}
              <div className="left-area ">
                <h4 className="search-text">Filter By Price</h4>
                <div className=" flex items-center gap-2 mb-1">
                  <input
                    type="radio"
                    name="flexRadioNoLabel"
                    className="radio-sm"
                    id="radioNoLabel01"
                    onChange={handleChange}
                    value={""}
                  />
                  <p className="filter-text">$All Price</p>
                </div>
                <div className=" flex items-center gap-2 mb-1">
                  <input
                    type="radio"
                    name="flexRadioNoLabel"
                    className="radio-sm"
                    id="radioNoLabel01"
                    onChange={handleChange}
                    value={12}
                  />
                  <p className="filter-text">$0 - $50</p>
                </div>
                <div className=" flex items-center gap-2 mb-1">
                  <input
                    type="radio"
                    name="flexRadioNoLabel"
                    className="radio-sm"
                    id="radioNoLabel01"
                    onChange={handleChange}
                    value={65}
                  />
                  <p className="filter-text">$50 - $100</p>
                </div>
                <div className=" flex items-center gap-2 mb-1">
                  <input
                    type="radio"
                    name="flexRadioNoLabel"
                    className="radio-sm"
                    id="radioNoLabel01"
                    onChange={handleChange}
                    value={75}
                  />
                  <p className="filter-text">$100 - $150</p>
                </div>
                <div className=" flex items-center gap-2 mb-1">
                  <input
                    type="radio"
                    name="flexRadioNoLabel"
                    className="radio-sm"
                    id="radioNoLabel01"
                    onChange={handleChange}
                    value={170}
                  />
                  <p className="filter-text">$150 - $Over</p>
                </div>
              </div>
            </div>
            <div className=" col-span-12 md:col-span-9 bg-white mb-9 mt-[20px]">
              <div className="right-area flex flex-wrap items-center justify-around">
                {/* food card  */}
                {loading && <LoadingSpinner />}
                {currentItems.map((item) => (
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
              {/* Pagination  Start*/}
              {currentItems.length > 0 && (
                <div className="flex flex-col items-center justify-center my-12">
                  <div className="flex text-gray-700">
                    <div
                      className={`h-8 w-8 mr-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer ${
                        currentPage === 1 && "opacity-50 cursor-not-allowed"
                      }`}
                      onClick={handlePreviousPage}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-chevron-left w-4 h-4"
                      >
                        <polyline points="15 18 9 12 15 6"></polyline>
                      </svg>
                    </div>
                    <div className="flex h-8 font-medium rounded-full bg-gray-200">
                      {Array.from({ length: totalPages }, (_, index) => (
                        <div
                          key={index + 1}
                          className={`w-8 flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full ${
                            currentPage === index + 1
                              ? "bg-red-500 text-white"
                              : ""
                          }`}
                          onClick={() => handlePageChange(index + 1)}
                        >
                          {index + 1}
                        </div>
                      ))}
                    </div>
                    <div
                      className={`h-8 w-8 ml-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer ${
                        currentPage === totalPages &&
                        "opacity-50 cursor-not-allowed"
                      }`}
                      onClick={handleNextPage}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-chevron-right w-4 h-4"
                      >
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </div>
                  </div>
                </div>
              )}
              {/* Pagination  End*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recepies;
