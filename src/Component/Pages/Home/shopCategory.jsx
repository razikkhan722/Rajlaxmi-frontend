import React from "react";

// Image

import Images1 from "../../Assets/img/Shopcategory/Rectangle 55.png";
import Images2 from "../../Assets/img/Shopcategory/Soyabean chunk small size.png";
import Images3 from "../../Assets/img/Shopcategory/Organic Jaggery Powder.png";
import Images4 from "../../Assets/img/Shopcategory/Hing Powder.png";
import Images5 from "../../Assets/img/Shopcategory/Organic Barley Atta.png";
import Images6 from "../../Assets/img/Shopcategory/Organic Maize whole.png";
import Images7 from "../../Assets/img/Shopcategory/Organic Black sesame.png";
import Images8 from "../../Assets/img/Shopcategory/Organic Idli Rice.png";
import Images9 from "../../Assets/img/Shopcategory/Organic Coriander powder.png";
import Images10 from "../../Assets/img/Shopcategory/Organic nutmeg whole.png";
import Images11 from "../../Assets/img/Shopcategory/Organic Chaach Masala.png";
import Images12 from "../../Assets/img/Shopcategory/Organic Brown Sugar.png";
import AddtoCard from "../../Common/Addtocard";
import Slider from "react-slick";
// Shopcategory
const BestSellers = [
  {
    title: "Best Sellers",
    products: [
      {
        id: 1,
        name: "Organic Kabuli Chana",
        price: "180.00",
        qty: "500 gm",
        image: Images1,
        rating: 3.5,
        reviews: 312,
      },
      {
        id: 2,
        name: "Soyabean Chunk Small Size",
        price: "58.00",
        qty: "500 gm",
        image: Images2,
        rating: 4.0,
        reviews: 210,
      },
      {
        id: 3,
        name: "Organic Jaggery Powder",
        price: "54.00",
        qty: "500 gm",
        image: Images3,
        rating: 5,
        reviews: 210,
      },
      {
        id: 4,
        name: "Hing Powder",
        price: "1200.00",
        qty: "500 gm",
        image: Images4,
        rating: 5,
        reviews: 210,
      },
    ],
  },
];

const SeasonalHarvest = [
  {
    title: "Seasonal Harvest",
    products: [
      {
        id: 5,
        name: "Organic Barley Atta",
        price: "70.00",
        qty: "500 gm",
        image: Images5,
        rating: 4.5,
        reviews: 210,
      },
      {
        id: 6,
        name: "Organic Maize whole",
        price: "35.00",
        qty: "500 gm",
        image: Images6,
        rating: 4.5,
        reviews: 210,
      },
      {
        id: 7,
        name: "Organic Black sesame",
        price: "240.00",
        qty: "500 gm",
        image: Images7,
        rating: 4.5,
        reviews: 210,
      },
      {
        id: 8,
        name: "Organic Idli Rice",
        price: "75.00",
        qty: "500 gm",
        image: Images8,
        rating: 4.5,
        reviews: 210,
      },
    ],
  },
];

const EcoEssentials = [
  {
    title: "Eco Essentials",
    products: [
      {
        id: 9,
        name: "Organic Coriander powder",
        price: "125.00",
        qty: "500 gm",
        image: Images9,
        rating: 4.5,
        reviews: 210,
      },
      {
        id: 10,
        name: "Organic Nutmeg Whole",
        price: "1,150.00",
        qty: "500 gm",
        image: Images10,
        rating: 4.5,
        reviews: 210,
      },
      {
        id: 11,
        name: "Organic Chaach Masala",
        price: "35.00",
        qty: "500 gm",
        image: Images11,
        rating: 4.5,
        reviews: 210,
      },
      {
        id: 12,
        name: "Organic Brown Sugar",
        price: "240.00",
        qty: "500 gm",
        image: Images12,
        rating: 4.5,
        reviews: 210,
      },
    ],
  },
];
const ShopCategory = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 992, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 552, settings: { slidesToShow: 1.2, slidesToScroll: 1} },
      { breakpoint: 445, settings: { slidesToShow: 1.1, slidesToScroll: 1 } },

    ],
  };
  return (
    <>
      <section className="background-color-light-grayish-yellow category-padding">
        <div className="container">
          <div className="josefin-sans-font-family-600 heading-text font-size-40 text-color-dark-grayish-blue pb-4 ps-lg-0 ps-3">
            Shop By Category
          </div>
          {/*Start Best Sellers */}
          <div className="row px-1">
            {BestSellers.map((category, index) => (
              <>
                <div
                  className="col-lg-1 col-md-1 col-sm-2 col-2 d-flex align-items-center text-rotate pb-4 pt-lg-0 pt-4"
                  key={index}
                >
                  <div className="josefin-sans-font-family-500 heading-text font-size-30 text-color-dark-grayish-blue">
                    {category.title}
                  </div>
                </div>
                <div className="col-lg-11 col-md-10 col-10 col-sm-10">
                  <div className="slider-container">
                    <div className=" row home-shop-category">
                      <Slider {...sliderSettings}>
                        {category.products.map((product, index) => (
                          <div key={index} className="col-lg-3 col-md-6 col-sm-12">
                            <AddtoCard key={product.id} product={product} />
                          </div>
                        ))}
                      </Slider>

                    </div>
                  </div>
                  <div className="col-md-12 py-5">
                    <div className="horizontal-line"> </div>
                  </div>
                </div>
              </>
            ))}
          </div>
          {/* End Best Sellers */}

          {/* Start Seasonal Harvest */}
          <div className="row">
            {SeasonalHarvest.map((category, index) => (
              <>
                <div
                  className="col-md-1 col-sm-1 col-2 d-flex justify-content-start align-items-center text-rotate pb-4 pt-lg-0 pt-4"
                  key={index}
                >
                  <div className="josefin-sans-font-family-500 heading-text font-size-30 text-color-dark-grayish-blue">
                    {category.title}
                  </div>
                </div>
                <div className="col-lg-11 col-md-10 col-sm-10 col-10">
                  <div className="row home-shop-category">
                   <Slider {...sliderSettings}>
                   {category.products.map((product, index) => (
                      <div key={index} className="col-lg-3 col-md-6 col-sm-12">
                        <AddtoCard key={product.id} product={product} />
                      </div>
                    ))}
                   </Slider>
                  </div>
                  <div className="col-md-12 py-5">
                    <div className="horizontal-line"> </div>
                  </div>
                </div>
              </>
            ))}
          </div>

          {/* End Seasonal Harvest */}

          {/* Start EcoEssentials*/}
          <div className="row">
            {EcoEssentials.map((category, index) => (
              <>
                <div
                  className="col-lg-1 col-md-1 col-sm-2 col-2 d-flex justify-content-start align-items-center text-rotate pb-4 pt-lg-0 pt-4"
                  key={index}
                >
                  <div className="josefin-sans-font-family-500 heading-text font-size-30 text-color-dark-grayish-blue">
                    {category.title}
                  </div>
                </div>
                <div className="col-lg-11 col-md-10 col-sm-10 col-10">
                  <div className="row home-shop-category">
                   <Slider {...sliderSettings}>
                   {category.products.map((product, index) => (
                      <div key={index} className="col-lg-3 col-md-6 col-sm-12">
                        <AddtoCard key={product.id} product={product} />
                      </div>
                    ))}
                   </Slider>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopCategory;
