import React from "react";

// Images
import Chemical from "../../Assets/img/whyChooseUs/chemical.svg";
import Sustainable from "../../Assets/img/whyChooseUs/sustainable.svg";
import Standard from "../../Assets/img/whyChooseUs/standard.svg";
import Vector from "../../Assets/img/whyChooseUs/Vector.svg";
import Vector2 from "../../Assets/img/whyChooseUs/vector2.svg";
import Grass from "../../Assets/img/slickimg/grass.svg";
import Choose from "../../Assets/img/slickimg/group.png";

// Third party assets
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  TiStarFullOutline,
  TiStarHalfOutline,
  TiStarOutline,
} from "react-icons/ti";


// Why choose Us
const WhyChooseUs = [
  {
    image: Chemical,
    title: "Chemical & Pesticide-free",
    description:
      "We provide assurance to consumers about quality and trust with compliance and regulations.",
  },
  {
    image: Sustainable,
    title: "Sustainable Farming Techniques",
    description:
      "We provide assurance to consumers about quality and trust with compliance and regulations.",
  },
  {
    image: Standard,
    title: "189 Global Testing Standards",
    description:
      "We provide assurance to consumers about quality and trust with compliance and regulations.",
  },
];

const testimonials = [
  {
    name: "Shivika Tiwary",
    review:
      "Finally, a brand I can trust for 100% organic essentials. Healthy, wholesome, and absolutely worth it!",
    rating: 5, // Number of stars
    image: Choose, // Replace with the appropriate image import
  },
  {
    name: "John Doe",
    review: "Amazing quality and great service. Highly recommend!",
    rating: 4,
    image: Choose,
  },
  {
    name: "Jivika Tiwary",
    review:
      "Finally, a brand I can trust for 100% organic essentials. Healthy, wholesome, and absolutely worth it!",
    rating: 5, // Number of stars
    image: Choose, // Replace with the appropriate image import
  },
   {
    name: "John Doe",
    review: "Amazing quality and great service. Highly recommend!",
    rating: 4,
    image: Choose,
  },
  {
    name: "John Doe",
    review: "Amazing quality and great service. Highly recommend!",
    rating: 4,
    image: Choose,
  },
  // Add more testimonials as needed
];
const WhyChoose = () => {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    arrows: true,
    dots: false,
    speed: 800,
    centerPadding: "0px",
    infinite: true,
  responsive: [
    {
      breakpoint: 1024, // Tablets
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768, // Mobile landscape
      settings: {
        slidesToShow: 2,
        centerMode: false, // Avoid cutting off images
      },
    },
    {
      breakpoint: 480, // Small mobile screens
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
  ],
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(
          <TiStarFullOutline key={i} className="start-gleeful" fontSize={19} />
        );
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        stars.push(
          <TiStarHalfOutline key={i} className="start-gleeful" fontSize={19} />
        );
      } else {
        stars.push(
          <TiStarOutline key={i} className="start-gleeful" fontSize={19} />
        );
      }
    }
    return stars;
  };

  return (
    <>
      <section className="pt-5 background-color-blue choose-sec">
        <div className="vector">
          <img src={Vector} alt="Loading" />
        </div>
        <div className="whychoose-vector-2 vector2">
          <img src={Vector2} alt="Loading" />
        </div>
        <div className="container why-us">
          <div className="josefin-sans-font-family-600 heading-text font-size-40 text-center text-color-dark-ashy-blue">
            Why Choose Us?
          </div>
          <div className="row py-5">
            {WhyChooseUs.map((iteam, i) => (
              <div className="col-md-4 col-sm-12 px-4" key={i}>
                <div className="why-us-img">
                <div className="chemical">
                  <img src={iteam.image} alt="Loading" className="img-fluid" />
                </div>
                </div>
                <div className="font-size-24 heading-title inter-font-family-600 text-chinese-black-color py-4">
                  {iteam.title}
                </div>
                <div className="whychoose-line"></div>
                <div className="pt-3 text-description font-size-18 inter-font-family-400 text-chinese-black-color">{iteam.description}</div>
              </div>
            ))}
          </div>
          <div className="testimonial-section">
            <div className="font-size-40 josefin-sans-font-family-600 heading-text text-center text-color-dark-ashy-blue">
              Why Our Customers Love <span className="text-dark">Rajlaxmi Javiks</span>
            </div>
            <div className="font-size-18 inter-font-family-400 text-description text-chinese-black-color text-center py-2">
              We provide assurance to consumers about quality and trust with
              <br />
              compliance and regulations.
            </div>
          </div>

          {/* Start Why Our Customers Love Rajlaxmi javiks */}

          <div className="row pt-5">
            <div className="col-lg-10 col10 m-auto">
              <div className="wrapper py-0">
                <Slider {...settings} className="center-slider why-choose-slider">
                  {testimonials.map((testimonial, index) => (
                    <div className="slide" key={index}>
                      <div style={{ width: "48px", height: "48px" }}>
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-100 h-100"
                        />
                      </div>
                      <div className="mt-4">
                        <p
                          className="mb-0 card-heading text-chinese-black-color font-size-18 inter-font-family-400"
                        >
                          {testimonial.name}
                        </p>
                        <div className="start-gleeful py-2">
                          {renderStars(testimonial.rating)}
                        </div>
                        <p className="slick-para pt-0 text-description text-color-dark-ashy-blue font-size-14 inter-font-family-400">{testimonial.review}</p>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
          {/* End Why Our Customers Love Rajlaxmi javiks */}
        </div>

        <div className="w-100 grass-img z-3">
          <img src={Grass} alt="" className="width-100vw z-3" />
        </div>
      </section>
    </>
  );
};

export default WhyChoose;
