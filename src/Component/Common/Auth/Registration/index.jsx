

import React from "react";

// Images
import Logi from "../../../Assets/img/Login/Frame 1261158478.png";
import Arro from "../../../Assets/img/Login/Vector (1).svg";

// Common
import { postData } from "../../../../services/apiService";


// Third party libraries
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";


const Resignation = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();  // Initialize react-hook-form


  // API endpoint
  const userEndpoint = "register";

  // Handle form submission
  const onSubmit = async (data) => {
    try {
      const response = await postData(userEndpoint, data);
      toast.success(response.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      setTimeout(() => navigate("/login"), 1000);
    } catch (error) {
      toast.error(error || "Failed to create account!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <>
      <section className="background-color-light-grayish-yellow d-flex justify-content-center align-items-center min-vh-100">
        <div className="container py-2">
          <div className="login-modal-shadow rounded position-relative">
            <div className="position-absolute top-0 end-0">
              <img src={Arro} alt="Loading" className="img-fluid" />
            </div>
            <div className="row">
              <div className="col-lg-6 col-sm-12 d-flex">
                <img src={Logi} alt="Loading" className="img-fluid" />
              </div>
              <div className="col-lg-6 col-sm-12 px-5">
                <div className="text-start josefin-sans-font-family-600 font-size-30 py-3 heading-text text-color-dark-grayish-blue pt-4">
                  Create An Account
                </div>
                <p className="inter-font-family-400 font-size-16 text-color-dark-grayish-blue">
                  Please fill the details below to create an account
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="form-resignation">
                  <div className="pt-3 row">
                    <div className="col-lg-5 col-md-6">
                      <label className="inter-font-family-400 font-size-14 login-text py-2 d-block">
                        First Name
                      </label>
                      <input
                        type="text"
                        {...register("firstName", { required: "First name is required" })}
                        className="input-stylee w-100"
                      />
                      {errors.firstName && <p className="text-danger">{errors.firstName.message}</p>}
                    </div>
                    <div className="col-lg-5 col-md-6">
                      <label className="inter-font-family-400 font-size-14 login-text py-2 d-block">
                        Last Name
                      </label>
                      <input
                        type="text"
                        {...register("lastName", { required: "Last name is required" })}
                        className="input-stylee w-100"
                      />
                      {errors.lastName && <p className="text-danger">{errors.lastName.message}</p>}
                    </div>
                  </div>

                  <div className="row gap-2">
                    <div className="pt-3 col-lg-10">
                      <label className="inter-font-family-400 font-size-14 login-text py-2 d-block">
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        {...register("mobileNumber", { required: "Mobile number is required" })}
                        className="input-style"
                      />
                      {errors.mobileNumber && <p className="text-danger">{errors.mobileNumber.message}</p>}
                    </div>

                    <div className="pt-3 col-lg-10">
                      <label className="inter-font-family-400 font-size-14 login-text py-2 d-block">
                        Email
                      </label>
                      <input
                        type="email"
                        {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Enter a valid email" } })}
                        className="input-style"
                      />
                      {errors.email && <p className="text-danger">{errors.email.message}</p>}
                    </div>

                    <div className="py-2 col-lg-10">
                      <label className="inter-font-family-400 font-size-14 login-text py-2 d-block">
                        Password
                      </label>
                      <input
                        type="password"
                        {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
                        className="input-style"
                      />
                      {errors.password && <p className="text-danger">{errors.password.message}</p>}
                    </div>

                    <div className="py-2 col-lg-10">
                      <button type="submit" className="background-color-terracotta text-color-white py-2 inter-font-family-500 font-size-16 rounded border-0">
                        Create Account
                      </button>
                    </div>
                  </div>
                </form>

                <div className="py-3 w-75 text-center">
                  <span className="inter-font-family-400 font-size-14 ps-4">
                    Already a user?
                  </span>
                  <Link to="/login" className="px-2 text-decoration-none inter-font-family-500 font-size-14 text-color-terracotta hover-button">
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resignation;
