import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Component/Common/Auth/Login";
import Registration from "./Component/Common/Auth/Registration";
import Home from "./Component/Pages/Home";
import Product from "./Component/Pages/Products/index";
import "react-toastify/dist/ReactToastify.css";

import ProductInner from "./Component/Pages/Products/productinner";
import ProductDescription from "./Component/Pages/ProductDescription/productdescription";

import { ToastContainer } from "react-toastify";
import WishList from "./Component/Pages/Wishlist/wishlist";
import Feedback from "./Component/Pages/Feedback/feedback.jsx";
import ScrollToTop from "./Component/Common/Scroll-to-Top/index.jsx";
import ContactUs from "./Component/Pages/ContactUs/contactUs.jsx";
import Refund from "./Component/Pages/Refund/Refund.jsx";
import PrivacyPolicy from "./Component/Pages/PrivacyPolicy/PrivacyPolicy.jsx";
import ShippingPolicy from "./Component/Pages/ShippingPolicy/ShippingPolicy.jsx";
import TermsAndConditionsPolicy from "./Component/Pages/TermsAndConditionsPolicy/TermsAndConditions.jsx";
import Forgot from "./Component/Common/Auth/ForgotPass/forgot.jsx";
import Error from "./Component/Pages/Error/error.jsx";
import TrackOrder from "./Component/Pages/TrackOrder/trackorder.jsx";
import Faq from "./Component/Pages/Faq/faq.jsx";
import { useEffect } from "react";
import {GetAllProductsAPI} from '../src/Component/Assets/Json/AllProducts.jsx'


function App() {


  useEffect(() => {
    GetAllProductsAPI()
  }, [])
  

  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/forgot" element={<Forgot />} />

          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/products-inner" element={<ProductInner />} />
          <Route
            path="/productdescription/:id"
            element={<ProductDescription />}
          />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/feedback/:id" element={<Feedback />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditionsPolicy />}
          />
          <Route path="/error" element={<Error />} />
          <Route path="/track" element={<TrackOrder />} />
          <Route path="/faq" element={<Faq />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
