import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/HomeBody";
import About from "./components/About";
import ServicePage from "./components/Services";
import EnquiryPopup from "./components/EnquiryPopup";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Enquiry" element={<EnquiryPopup />}></Route>
          <Route path="/services/:slug" element={<ServicePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}