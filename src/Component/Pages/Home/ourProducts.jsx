import React, { useState } from "react";

// Images
import Mask from "../../Assets/img/ourProducts/Mask group.jpg";
import Care from "../../Assets/img/ourProducts/CaretDown.svg";
import Group from "../../Assets/img/ourProducts/Group.svg";
import Leaves from "../../Assets/img/ourProducts/leaves 1.svg";
import Vector from "../../Assets/img/ourProducts/Vector.svg";
import Email from "../../Assets/img/ourProducts/EnvelopeSimple.svg";
import Phone from "../../Assets/img/ourProducts/phone.svg";
import Map from "../../Assets/img/ourProducts/map.svg";
import threerightarrow from "../../Assets/img/slickimg/threerightarrow.svg";
import dashLine from "../../Assets/img/slickimg/dashline.svg";
import second from "../../Assets/img/ourProducts/expl.png";
import slid from "../../Assets/img/ProductDescription/image 10.png";
import { Carousel } from "react-bootstrap";
import { postData } from "../../../services/apiService";
import { NavLink } from "react-router-dom";

const CardData = [
  {
    title: "Nutrient-Rich Goodness",
    description:
      "quam dui. ex. elit quis dui. Morbi ac placerat Cras Nullam ultrices vehicula, lacus.",
    image: Group,
    class: "goodness",
  },
  {
    title: "Naturally Pure Treats",
    description:
      "quam dui. ex. elit quis dui. Morbi ac placerat Cras Nullam ultrices vehicula, lacus.",
    image: Leaves,
    class: "treats",
  },
  {
    title: "Eco-Friendly Choices",
    description:
      "quam dui. ex. elit quis dui. Morbi ac placerat Cras Nullam ultrices vehicula, lacus.",
    image: Vector,
    class: "choices",
  },
  {
    title: "Nutrient-Rich Goodness",
    description:
      "quam dui. ex. elit quis dui. Morbi ac placerat Cras Nullam ultrices vehicula, lacus.",
    image: Group,
    class: "choices",
  },
];

const loction = [
  {
    img: Email,
    title: "rajlaxmiorganicfoods@gmail.com",
  },
  {
    img: Phone,
    title: +91 - 8769115905,
  },
  {
    img: Map,
    title:
      "Address: 11, manish bagh colony, Sapna sangeeta road, indore, madhya pradesh, 452001",
  },
];
const OurProducts = () => {
  let uid = sessionStorage.getItem("uid");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
    const payload = {
      uid:uid,
      user_name : formData?.name,
      user_email : formData?.email,
      user_number : formData?.phone,
      message:  formData?.message,
      title : formData?.message,
    }
    // You can make your POST API request here
      const response = await postData("contact",payload)
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      })
    } catch (error) {
      console.log('error: ', error);
    }
  };

  return (
    <>
      <section className="background-color-light-grayish-yellow padding-top-100 padding-bottom-60">
        <div className="container py-2">
          <div className="josefin-sans-font-family-600 heading-text font-size-40 text-start text-color-dark-ashy-blue">
            Explore Our Products
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12  ">
              <div className="py-3">
                <Carousel
                  className="explore-slider"
                  fade
                  controls={false}
                  indicators={false}
                  interval={3000}
                >
                  <Carousel.Item>
                    <img
                      src={Mask}
                      alt="Loading"
                      id="explore-slider-img"
                      className=" img-fluid"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src={second}
                      alt="Loading"
                      id="explore-slider-img"
                      className=" img-fluid"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12  py-3">
              <Carousel
                className="explore-slider"
                slide={false}
                controls={false}
                indicators={false}
                interval={3000}
                onAnimationEnd={false}
              >
                <Carousel.Item>
                  <div className="josefin-sans-font-family-500 font-size-40 heading-title text-start mt-2 text-color-dark-ashy-blue">
                    Natural and Nutritious dry Fruits
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="josefin-sans-font-family-500 font-size-40 heading-title text-start mt-2 text-color-dark-ashy-blue">
                    A2 Gir Cow Ghee
                  </div>
                </Carousel.Item>
              </Carousel>

              <div className="inter-font-family-400 font-size-24 text-capitalize text-description text-color-dark-ashy-blue py-3">
                quam dui. ex. elit quis dui. Morbi ac placerat Cras Nullam
                ultrices vehicula, lacus tincidunt id viverra nulla, dui. leo.
                urna at, sit lacus faucibus placerat
              </div>
              <div className="inter-font-family-400 font-size-24 text-capitalize text-description text-color-dark-ashy-blue">
                sollicitudin. Sed placerat sapien placerat. Ut venenatis quam
                felis, nisi viverra nisl. quis placerat.
              </div>
              <div className="py-4">
                <NavLink className="explore-link-tag d-block text-decoration-none" to={"/products"}>
                <button className="background-color-terracotta explore-button d-flex align-items-center inter-font-family-500 rounded-pill text-color-white py-2 px-4 border-0">
                  Explore Product
                  <span className="d-flex">
                    <img className="ms-2" src={threerightarrow} alt="Loading" />
                  </span>
                </button>
                </NavLink>
                  
              </div>
            </div>
            {CardData.map((item, index) => (
              <>
                {index <= 2 ? (
                  <div className="natural-cards d-flex justify-content-center col-lg-3 col-md-6 col-sm-6 col-6 my-2">
                    <div className={item.class}>
                      <div className="py-2 sm:py-0 d-flex explore-img  natural-icons justify-content-center">
                        <img
                          src={item.image}
                          alt="Loading"
                          className="img-fluid background-color-white rounded-3 p-2"
                          // style={{ borderRadius: "8px" }}
                        />
                      </div>
                      <div className="inter-font-family-500 font-size-16 text-description text-dark text-center py-1">
                        {item.title}
                      </div>
                      <div className="inter-font-family-400 font-size-14  explore-descp font-sm-8 text-capitalize text-center py-2 text-color-dark-ashy-blue">
                        {item.description}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="natural-cards d-flex justify-content-center circle-section col-lg-3 col-md-6 col-sm-6 col-6 my-2">
                    <div className="explore-section position-relative">

                    <span className="inter-font-family-500 font-size-16 background-color-gleeful d-flex justify-content-center text-white align-items-center circle-section-off">
                      15% Off
                    </span>
                    <Carousel
                      className="explore-slider "
                      fade
                      controls={false}
                      indicators={false}
                      interval={3000}
                    >
                      <Carousel.Item className="redem-slider">
                      <img className="w-100 redem-img" src={Mask} alt="" />
                      </Carousel.Item>
                      <Carousel.Item className="redem-slider">
                        <img className="w-100 redem-img" src={slid} alt="" />
                      </Carousel.Item>
                    </Carousel>
                    
                    <img className="circle-section-hr" src={dashLine} alt="" />
                    <span className="redem-cirlce-left"></span>
                    <span className="redem-cirlce-right"></span>
                    <button
                      type="submit"
                      class="background-color-terracotta circle-section-btn text-color-white  w-75 inter-font-family-500 font-size-16 rounded border-0"
                    >
                      REDEEM
                    </button>
                  </div>
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
      </section>
      <section>
        {/* <div className="container-fluid"> */}
        <div className="back-ground-img pt-5 pb-2">
          <div className="container-fluid">
            <div className="row mx-lg-5 px-lg-3">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="josefin-sans-font-family-500 heading-title font-size-40 mt-3 text-color-white pb-4">
                  Have Questions About Our Organic Products?
                </div>
                <div className="py-2">
                  <img
                    src={Email}
                    alt="Loading"
                    className="background-color-white p-2 rounded-circle"
                  />
                  <span className="inter-font-family-500 text-description font-size-16 text-color-white ms-3">
                    rajlaxmiorganicfoods@gmail.com
                  </span>
                </div>
                <div className="py-2">
                  <img
                    src={Phone}
                    alt="Loading"
                    className="background-color-white p-2 rounded-circle"
                  />
                  <span className="inter-font-family-500 text-description font-size-16 text-color-white ms-3">
                    +91-8769115905
                  </span>
                </div>
                <div className="py-2 d-flex">
                  <div>
                    <img
                      src={Map}
                      alt="Loading"
                      className="background-color-white p-2 rounded-circle"
                    />
                  </div>
                  <span className="inter-font-family-500 font-size-16 text-description text-color-white text-capitalize ms-3 w-75">
                    Address: 11, manish bagh colony, Sapna sangeeta road,
                    indore, madhya pradesh, 452001
                  </span>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 p-3 d-flex justify-content-end">
                <div className="background-from  p-3">
                  <form className="" onSubmit={handleSubmit}>
                    <div className="mb-3">
                      {/* <label htmlFor="name" className="form-label">
                          Name
                        </label> */}
                      <input
                        type="text"
                        className="form-control contact-us-form"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        required
                      />
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="mb-3" style={{ width: "197px" }}>
                        {/* <label htmlFor="email" className="form-label">
                          Email
                        </label> */}
                        <input
                          type="email"
                          className="form-control contact-us-form"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="E-Mail"
                          required
                        />
                      </div>

                      <div className="mb-3 ms-2" style={{ width: "197px" }}>
                        {/* <label htmlFor="phone" className="form-label">
                          Phone
                        </label> */}
                        <input
                          type="tel"
                          className="form-control contact-us-form"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Contact No"
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      {/* <label htmlFor="message" className="form-label">
                          Message
                        </label> */}
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message"
                        rows="4"
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="background-color-terracotta text-color-white py-2 w-100 inter-font-family-500 font-size-16 rounded border-0"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="together py-2 inter-font-family-500 font-size-20 heading-title text-color-white text-center text-capitalize my-4">
            Let’s Grow Greener Together!!!
          </div>
        </div>
        {/* </div> */}
      </section>
    </>
  );
};

export default OurProducts;
