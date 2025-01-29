import { useEffect } from "react";
import { Footer, Navbar, ScrollToTop } from "./components";
import {
  Home,
  About,
  Contact,
  WebDevelopment,
  AppDevelopment,
  Ecommerce,
  TrainingDevelopment,
  AmazonMarketing,
} from "./pages";
import { Routes, Route } from "react-router";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service/webdevelopment" element={<WebDevelopment />} />
        <Route path="/service/appdevelopment" element={<AppDevelopment />} />
        <Route path="/service/ecommerce" element={<Ecommerce />} />
        <Route
          path="/service/gadgets_amazon_marketing"
          element={<AmazonMarketing />}
        />
        <Route
          path="/service/trainingdevelopment"
          element={<TrainingDevelopment />}
        />
      </Routes>
      <ToastContainer />
      <Footer />
    </>
  );
}

export default App;
