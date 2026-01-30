import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import EnquiryPopup from "./components/EnquiryPopup";

export default function Layout() {


  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}