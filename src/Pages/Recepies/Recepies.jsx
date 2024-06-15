import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { CiSearch } from "react-icons/ci";
import "./Recepies.css";
const Recepies = () => {
  return (
    <div className="bg-[#F9F9F9]">
      <SectionTitle />

      <div className="lg:container mt-10 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          <div className=" col-span-12 md:col-span-4">
            {/* Search Area  */}
            <div className="search-area">
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
            <div className="search-area">
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
            <div className="search-area ">
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
          <div className=" col-span-12 md:col-span-8">
            Right Column (8 units)
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recepies;
