import React from "react";
import Navbar from "../../Common/Navbar";
import Footer from "../../Common/Footer";
import ArrowLight from "../../Assets/img/ProductDescription/arrow-light.png";
import ArrowDark from "../../Assets/img/ProductDescription/arror-dark.png";

const ShippingPolicy = () => {
  return (
    <section>
      <div className="bg-custom-gradient-product">
        <Navbar />
        <div className="container pt-5 text-light-gray-color font-size-40 josefin-sans-font-family-500 ">
          <span className="text-dark">Shipping Policy</span>
        </div>
      </div>
      <div className="background-color-light-grayish-yellow py-3">
        <div className="container mb-5 pb-5">
          <div className="refund-head my-4"></div>
          <div className="mt-4 mb-5 pb-5">
            <h5 className="mb-0 font-size-24 josefin-sans-font-family-600">
              Processing Time
            </h5>
            <ul className="term-page mt-3 mb-0 pt-1">
              <li className="mb-3 font-size-16 inter-font-family-500">
                All orders will be devliverd within , 5-10 Working days.
              </li>
              <li className="mb-3 font-size-16 inter-font-family-500">
                Orders are not shipped or delivered on weekends or holidays.
              </li>
              <li className="mb-3 font-size-16 inter-font-family-500">
                If we experience a high volume of orders, shipments may be
                delayed. In such cases, we will notify you via email or phone.
              </li>
            </ul>
            <h5 className="mt-4 pt-3 mb-0 font-size-24 josefin-sans-font-family-600">
              Shipping Confirmation & Order Tracking
            </h5>
            <ul className="term-page mt-3 mb-0 pt-1">
              <li className="mb-3 font-size-16 inter-font-family-500">
                {" "}
                You will receive a shipment confirmation email once your order
                has shipped, containing a tracking number and a link to track
                your package.
              </li>
              <li className="mb-3 font-size-16 inter-font-family-500">
                {" "}
                Non-personal information is automatically collected as you
                interact with our website through the use of cookies, web
                beacons, and other tracking technologies.
              </li>
            </ul>
            <h5 className="mt-4 pt-3 mb-0 font-size-24 josefin-sans-font-family-600">
              Damages
            </h5>
            <ul className="term-page mt-3 mb-0 pt-1">
              <li className="mb-3 font-size-16 inter-font-family-500">
                {" "}
                RAJLAKSHMI JAVIKS is not responsible for products damaged or
                lost during shipping. If you received your order in a damaged
                condition, please contact the shipment carrier or our support
                team to file a claim.
              </li>
              <li className="mb-3 font-size-16 inter-font-family-500">
                {" "}
                Please save all packaging materials and damaged goods before
                filing a claim.
              </li>
            </ul>
            <h5 className="mt-4 pt-3 mb-0 font-size-24 josefin-sans-font-family-600">
              Undeliverable Packages
            </h5>
            <ul className="term-page mt-3 mb-0 pt-1">
              <li className="mb-3 font-size-16 inter-font-family-500">
                {" "}
                If a package is returned to us as undeliverable due to an
                incorrect address provided by the customer, additional shipping
                charges may apply for reshipping.
              </li>
            </ul>
            <h5 className="mt-4 pt-3 mb-0 font-size-24 josefin-sans-font-family-600">
              Contact Us
            </h5>
            <ul className="term-page mt-3 mb-0 pt-1">
              <li className="mb-3 font-size-16 inter-font-family-500">
                {" "}
                For questions about shipping or issues with your order, please
                contact us:
              </li>
              <li className="mb-3 font-size-16 inter-font-family-500">
                {" "}
                Email: rajlaxmiorganicfoods@gmail.com
              </li>
              <li className="mb-3 font-size-16 inter-font-family-500">
                {" "}
                Phone: +91 8769115905
              </li>
              <li className="mb-3 font-size-16 inter-font-family-500">
                {" "}
                Business Hours: Mon to Sat 10Am to 8Pm
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default ShippingPolicy;
