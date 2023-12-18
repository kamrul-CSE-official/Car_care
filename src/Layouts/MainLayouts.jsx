import { Outlet } from "react-router-dom";
import Navbar from "../Components/Share/Navbar";
import Footer from "../Components/Share/Footer";

export default function MainLayouts() {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
