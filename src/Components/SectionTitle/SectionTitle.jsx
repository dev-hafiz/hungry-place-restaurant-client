import { Link } from "react-router-dom";
import "./SectionTitle.css";
import { GoHome } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";

const SectionTitle = ({ title, details }) => {
  return (
    <div className="border-b bg-white border-gray-200 px-10 py-5 shadow-sm">
      <div className="container mx-auto">
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
          <div className=" md:text-left text-center">
            <p className="recepie-text">{title}</p>
          </div>
          <div>
            <ul className="flex items-center gap-1 justify-center md:justify-end">
              <li>
                <Link to="/" className="custom-link flex items-center gap-1">
                  <GoHome /> Home
                </Link>
              </li>
              <li>
                <IoIosArrowForward className="custom-link" />
              </li>
              <li>
                <Link
                  to="/recepies"
                  className={`custom-link ${
                    !details ? "custom-link-active" : ""
                  }`}
                >
                  Recepies
                </Link>
              </li>
              {details ? (
                <li>
                  <IoIosArrowForward className="custom-link" />
                </li>
              ) : (
                ""
              )}
              <li>
                <Link to="" className="custom-link-active flex items-center ">
                  {details}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
