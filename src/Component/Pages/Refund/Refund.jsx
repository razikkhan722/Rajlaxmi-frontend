import React from "react";
import Navbar from "../../Common/Navbar";
import Footer from "../../Common/Footer";
import ArrowLight from "../../Assets/img/ProductDescription/arrow-light.png";
import ArrowDark from "../../Assets/img/ProductDescription/arror-dark.png";

const Refund = () => {
  return (
    <section>
      <div className="bg-custom-gradient-product">
        <Navbar />
        <div className="container pt-5 text-light-gray-color font-size-40 josefin-sans-font-family-500 ">
          <span className="text-dark">Refund And Cancellation Policy</span>
        </div>
      </div>
      <div className="background-color-light-grayish-yellow py-3">
        <div className="container mb-5 pb-5">
          <div className="refund-head my-4">
            <h2 className="font-size-16 inter-font-family-600">
              Once an order is confirmed, RAJLAKSHMI JAVIKS will not accept
              return or refund requests . However, in any of the below
              situations, we are more than happy to work with our patrons to
              find an amicable solution that is fair to all parties.
            </h2>
          </div>
          <div className=" mt-4 pt-3 mb-5 pb-5">
            <h5 className="font-size-24 josefin-sans-font-family-600 my-0">
              In case of Return & Exchange
            </h5>
            <ul className="term-page mt-3 mb-0 pt-1">
              <li className="font-size-16 inter-font-family-500 mb-3">
                Return/exchange will be done with in 5 working days.
              </li>
              <li className="font-size-16 inter-font-family-500">
                If refund is approved it will be credited within 7-10 working
                days to original payment method.
              </li>
            </ul>
            <h5 className="font-size-24 josefin-sans-font-family-600 mt-4 pt-3 mb-0">
              In case of Damaged product
            </h5>
            <ul className="term-page mt-3 mb-0 pt-1">
              <li className="font-size-16 inter-font-family-500 mb-3">
                RAJLAKSHMI JAVIKS needs to be notified of damaged product within
                2 days from delivery date via email to
                rajlaxmiorganicfoods@gmail.com
              </li>
              <li className="font-size-16 inter-font-family-500 mb-3">
                In the email, order number, image of invoice, 1 outer box image,
                2 clear images & we also need unboxing videos of damaged
                products to be sent.
              </li>
              <li className="font-size-16 inter-font-family-500 mb-3">
                In case of multiple item shipments, only the affected product
                can be returned and replaced.
              </li>
              <li className="font-size-16 inter-font-family-500 mb-3">
                We will be happy to re-send and replace the product(s) promptly
                and we will work with you on providing an amicable solution.
              </li>
              <li className="font-size-16 inter-font-family-500">
                Email will be responded to within 24-48 hrs and full assistance
                will be provided thereafter.
              </li>
            </ul>
            <h5 className="font-size-24 josefin-sans-font-family-600 mt-4 pt-3 mb-0">
              In case of Missing product
            </h5>
            <ul className="term-page mt-3 mb-0 pt-1">
              <li className="font-size-16 inter-font-family-500 mb-3">
                RAJLAKSHMI JAVIKS needs to be notified of missing product within
                2 days from delivery date via email to
                rajlaxmiorganicfoods@gmail.com
              </li>
              <li className="font-size-16 inter-font-family-500 mb-3">
                In the email, order number, image of the invoice, 1 outer box
                image, 2 clear images of the opened box & unboxing video with
                all items received to be sent.
              </li>
              <li className="font-size-16 inter-font-family-500 mb-3">
                We will be unable to accept a refund request. But, we will be
                happy to promptly re-send the missing product
              </li>
              <li className="font-size-16 inter-font-family-500">
                Email will be responded to within 24-48 hrs and full assistance
                will be provided thereafter.
              </li>
            </ul>
            <h5 className="font-size-24 josefin-sans-font-family-600 mt-4 pt-3 mb-0">
              In case of spoiled product
            </h5>
            <ul className="term-page mt-3 mb-0 pt-1">
              <li className="font-size-16 inter-font-family-500 mb-3">
                RAJLAKSHMI JAVIKS needs to be notified of spoilage of product
                within 2 days from delivery date via email to
                rajlaxmiorganicfoods@gmail.com
              </li>
              <li className="font-size-16 inter-font-family-500 mb-3">
                In the email, order number, date of packaging/ date of
                manufacture, clear images or video of the product to be shared
              </li>
              <li className="font-size-16 inter-font-family-500 mb-3">
                We will be unable to accept returns due to variance in taste,
                texture, colour or aroma. This is because our products are
                completely natural and made mostly by hand so no two batches
                will be identical. No compromise is made in the natural
                production process, use of best and natural ingredients and we
                will ensure that maximum nutritional value is retained
              </li>
              <li className="font-size-16 inter-font-family-500 mb-3">
                We will work with you on providing an amicable solution.
              </li>
              <li className="font-size-16 inter-font-family-500">
                Product will be replaced after due investigation and diligence
                and we assure a fair outcome at all times. Email will be
                responded to within 24-48 hrs, and full assistance will be
                provided thereafter.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Refund;
