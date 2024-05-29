import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import CategoryNavbar from "../Pages/Shared/NavBar/CategoryNavbar";
import TopNavbar from "../Pages/Shared/NavBar/TopNavbar";

const Main = () => {
  const location = useLocation();

  const hideHeaderFooter = location.pathname.includes("login");

  return (
    <div className="h-screen bg-white text-black">
      {/* {hideHeaderFooter || <NavBar />} */}
      <TopNavbar />
      <CategoryNavbar />
      <Outlet />
      {hideHeaderFooter || <Footer />}
    </div>
  );
};

export default Main;
