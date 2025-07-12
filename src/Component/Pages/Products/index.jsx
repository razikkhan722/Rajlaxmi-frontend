import React, { useRef } from "react";
import Navbar from "../../Common/Navbar";
import Love from "../../Assets/img/Product/love.svg";
import Binoculars from "../../Assets/img/Product/binoculars.svg";
import Imge from "../../Assets/img/Product/image 66.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
// import Sort from "../../Assets/img/Product/SlidersHorizontal.svg";
// import Funnel from "../../Assets/img/Product/Funnel.svg";
import AddtoCard from "../../Common/Addtocard";
import Images1 from "../../Assets/img/Shopcategory/Rectangle 55.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import Footer from "../../Common/Footer";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import FilterDropDown from "../../Common/Filter/filter";
import SortDropdown from "../../Common/Sort/sort";

const categories = [
  { name: "Ghee", image: Imge },
  { name: "Oils", image: Imge },
  { name: "Rice & Wheat", image: Imge },
  { name: "Pulses", image: Imge },
  { name: "Seeds", image: Imge },
  { name: "Spices", image: Imge },
  { name: "Dry Fruits", image: Imge },
  { name: "Dry Fruits", image: Imge },
  { name: "Dry Fruits", image: Imge },
];

const BestSellers = [
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
    image: Images1,
    rating: 4.0,
    reviews: 210,
  },
  {
    id: 3,
    name: "Organic Jaggery Powder",
    price: "54.00",
    qty: "500 gm",
    image: Images1,
    rating: 5,
    reviews: 210,
  },
  {
    id: 4,
    name: "Hing Powder",
    price: "1200.00",
    qty: "500 gm",
    image: Images1,
    rating: 5,
    reviews: 210,
  },
];

const Products = () => {
  // const sliderRef = useRef(null);
  const sliderRefs = useRef([]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 992, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 576, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  const categoriesWithProducts = [
    { title: "Ghee", products: BestSellers },
    { title: "Oil", products: BestSellers },
    { title: "Rice And Wheat", products: BestSellers },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 7, slidesToScroll: 1 } },
      { breakpoint: 992, settings: { slidesToShow: 5, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 4, slidesToScroll: 1 } },
      { breakpoint: 552, settings: { slidesToShow: 4, slidesToScroll: 1 } },
      { breakpoint: 445, settings: { slidesToShow: 4, slidesToScroll: 1 } },
    ],
  };

  return (
    <React.Fragment>
      <section>
        <div className="bg-custom-gradient-product">
          <Navbar />
          <div className="josefin-sans-font-family-500 heading-text font-size-32 text-color-dark-grayish-blue text-center pt-3">
            Pure & Natural Choices
          </div>
          <div className="d-flex justify-content-center py-4">
            <div className="px-2">
              <img src={Love} alt="Loading" />
            </div>
            <div className="inter-font-family-400 heading-title font-size-24">
              Shop by Category or Explore Our Full Range
            </div>
            <div className="px-2">
              <img src={Binoculars} alt="Loading" />
            </div>
          </div>
        </div>
        <div className="background-color-light-grayish-yellow py-5">
          <div className="container mb-5 pb-5">
            <div className="category-container shop-category-slider overflow-hidden mb-5">
              <div className="category-label josefin-sans-font-family-500">Categories</div>

              <Slider className="product-header-slider" {...sliderSettings}>
                {categories.map((item, index) => (
                  <div className="category-card">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="category-image"
                    />
                    <div className="category-name">{item.name}</div>
                  </div>
                ))}
              </Slider>
            </div>

            <div className="d-flex product-page-filter justify-content-center py-5">
              <div className="px-3 product-page-sort-filter">
                <SortDropdown />
              </div>
              <div className="px-3 product-page-filter-filter">
                <FilterDropDown />
                {/* <img src={Funnel} alt="Filter" className="sort-icon" />
                <div className="text-center text-color-terracotta">Filter</div> */}
              </div>
            </div>

            {categoriesWithProducts.map((category, index) => (
              <div key={index}>
                <div className="d-flex justify-content-between align-items-center px-5">
                  <div className="josefin-sans-font-family-500 font-size-30 text-start py-2 text-color-dark-grayish-blue">
                    {category.title}
                  </div>
                  <div>
                    <Link
                      to="/products-inner"
                      className="text-color-dark-grayish-blue text-decoration-none d-flex align-items-center"
                    >
                      <span className="font-size-16 inter-font-family-400">View all</span> <FiChevronRight fontSize={18} />
                    </Link>
                  </div>
                </div>

                <div className="slider-container category-page-sliders position-relative text-center">
                  <Slider ref={(el) => (sliderRefs.current[index] = el)} {...settings}>
                    {category.products.map((product) => (
                      <div key={product.id} className="product-card">
                        <AddtoCard product={product} />
                      </div>
                    ))}
                  </Slider>

                  <div className="d-lg-flex d-none justify-content-center align-items-center position-relative my-4 ">
                    <button
                      className="slider-btn me-3"
                      onClick={() => sliderRefs.current[index]?.slickPrev()}
                    >
                      <FaAngleLeft />
                    </button>
                    <button
                      className="slider-btn ms-3"
                      onClick={() => sliderRefs.current[index]?.slickNext()}
                    >
                      <FaAngleRight />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </section>
    </React.Fragment>
  );
};

export default Products;
