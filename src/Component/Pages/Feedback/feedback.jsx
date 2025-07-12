import React from "react";
import Footer from "../../Common/Footer";
import Navbar from "../../Common/Navbar";

import ArrowLight from "../../Assets/img/ProductDescription/arrow-light.png";
import ArrowDark from "../../Assets/img/ProductDescription/arror-dark.png";
import { FaRegStar } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { postData } from "../../../services/apiService";
import { useLocation, useParams } from "react-router-dom";

const Feedback = () => {
  let uid = sessionStorage.getItem("uid");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const params = useParams();

  const onSubmit = async (data) => {
    try {
      const payload = {
        uid,
        user_name: data?.firstName,
        user_email: data?.email,
        rating: "7",
        feedback: data?.message,
        product_id: params?.id,

      };
      const response = await postData("feedback", payload);
      reset()
    } catch (error) {
      console.log("error: ", error);
    }
  };
  return (
    <>
      <section>
        <div className="bg-custom-gradient-product">
          <Navbar />
          <div className="container pt-5 text-light-gray-color font-size-14 inter-font-family-500">
            <span> Back</span>{" "}
            <img src={ArrowLight} className="mx-2" alt="Loading" />{" "}
            <span>Anjeer</span>{" "}
            <img src={ArrowDark} className="mx-2" alt="Loading" />{" "}
            <span className="text-dark">Submit Feedback</span>
          </div>
        </div>
        <div className="background-color-light-grayish-yellow py-3 pb-5">
          <div className="container pb-5 mb-5">
            <p className="font-size-32 feedback-heading josefin-sans-font-family padding-top-100">
              Rate Us
            </p>
            <div className="d-flex align-items-center">
              <div className="font-size-18 product-qty inter-font-family-500">
                Tap To Rate
              </div>
              <div className="ms-5 feedback-rating mb-1">
                <FaRegStar className="me-3" />
                <FaRegStar className="me-3" />
                <FaRegStar className="me-3" />
                <FaRegStar className="me-3" />
                <FaRegStar className="me-3" />
              </div>
            </div>
            <hr />

            <form onSubmit={handleSubmit(onSubmit)} className="feedback-bg-img ">
              <div className="mt-4">
                <label className="inter-font-family-500 font-size-12 product-qty d-block">
                  Title for your review
                </label>
                <input
                  type="text"
                  placeholder="Enter Title here"
                  {...register("title", {
                    required: "Title is required",
                  })}
                  className="feedback-input border-0 rounded-3 pb-3 pt-2 mt-1 px-3 feedback-inp-tag"
                />
                {errors.title && (
                  <p className="text-danger">{errors.title.message}</p>
                )}
              </div>

              <div class="my-4">
                <label
                  for="exampleFormControlTextarea1"
                  class="inter-font-family-500 product-qty font-size-12 d-block"
                >
                  Your Review
                </label>
                <textarea
                  class="feedback-input border-0 rounded-3 p-2 mt-1 feedback-inp-tag"
                  placeholder="Enter your comment here"
                  id="exampleFormControlTextarea1"
                  rows="5"
                  {...register("message", {
                    required: "First name is required",
                  })}
                ></textarea>
              </div>

              <hr />

              <p className="font-size-18 inter-font-family-500 product-qty py-4">
                Please provide your basic details
              </p>
              <div className="">
                <label className="inter-font-family-500 font-size-12 product-qty d-block">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name here"
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                  className="feedback-input border-0 rounded-3 pb-3 pt-2 mt-1 px-3 feedback-inp-tag"
                />
                {errors.firstName && (
                  <p className="text-danger">{errors.firstName.message}</p>
                )}
              </div>
              <div className="mt-4">
                <label className="inter-font-family-500 font-size-12 product-qty d-block">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email here"
                  {...register("email", {
                    required: "First name is required",
                  })}
                  className="feedback-input border-0 rounded-3 pb-3 pt-2 mt-1 px-3 feedback-inp-tag"
                />
                {errors.email && (
                  <p className="text-danger">{errors.email.message}</p>
                )}
              </div>
              <div className="pb-5">
                <button
                  type="submit"
                  className="background-color-terracotta w-25 mt-5 text-color-white py-2 inter-font-family-500 font-size-16 rounded border-0"
                >
                  Submit Feedback
                </button>
              </div>
            </form>
          </div>
        </div>

        <Footer />
      </section>
    </>
  );
};

export default Feedback;
