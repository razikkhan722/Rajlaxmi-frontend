import React, { useState } from "react";

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

const Forgot = () => {
  const navigate = useNavigate();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm(); // Initialize react-hook-form

  const [isOtpVerified, setIsOtpVerified] = useState(false);

  // API endpoint
  const userEndpoint = "forgot";

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
      toast.error(error || "Failed to set new password!", {
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
    setIsOtpVerified(true);
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
              <div className="col-lg-5 col-sm-12 d-flex">
                <img src={Logi} alt="Loading" className="img-fluid" />
              </div>
              <div className="col-lg-6 col-sm-12 px-5 pb-5">
                <div className="text-start josefin-sans-font-family-600 font-size-30 py-3 heading-text text-color-dark-grayish-blue pt-4">
                  Forgot Password?
                </div>
                <p className="inter-font-family-400 font-size-16 text-color-dark-grayish-blue">
                  No Worries, We help you set a new password <br />
                  Enter your registered E-mail ID/ Mobile no and we will <br />{" "}
                  send you a verification code
                </p>

                <span
                  className="form-resignation"
                >
                  <div className="row gap-2">
                    {!isOtpVerified && (
                      <>
                      <form action="">
                        
                      </form>
                        <div className="pt-3 col-lg-8 col-sm-12">
                          <label className="inter-font-family-400 font-size-14 login-text py-2 d-block">
                            E-mail/Contact No
                          </label>
                          <input
                            type="email"
                            {...register("email", {
                              required: "Email is required",
                              pattern: {
                                value: /^\S+@\S+$/i,
                                message: "Enter a valid email",
                              },
                            })}
                            className="input-style"
                          />
                          {errors.email && (
                            <p className="text-danger">
                              {errors.email.message}
                            </p>
                          )}
                        </div>

                        {/* <div className="py-2 col-lg-10">
                                              <label className="inter-font-family-400 font-size-14 login-text py-2 d-block">
                                                Password
                                            </label>
                                            <input
                                                type="password"
                                                {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
                                                className="input-style"
                                            />
                                            {errors.password && <p className="text-danger">{errors.password.message}</p>}
                                        </div> */}

                        {/* OTP Inputs */}
                        <div className="py-2 col-lg-8 col-sm-12">
                          <label className="inter-font-family-400 font-size-14 login-text py-2 d-block">
                            Verification Code
                          </label>
                          <div className="d-flex justify-content-between">
                            {Array(5)
                              .fill(0)
                              .map((_, index) => (
                                <input
                                  key={index}
                                  type="text"
                                  maxLength="1"
                                  className="otp-input"
                                  {...register(`otp[${index}]`, {
                                    required: "All OTP digits are required",
                                    pattern: {
                                      value: /^[0-9]$/,
                                      message: "Only digits allowed",
                                    },
                                  })}
                                />
                              ))}
                          </div>
                          {errors.otp && (
                            <p className="text-danger">OTP must be 6 digits</p>
                          )}
                        </div>
                      </>
                    )}

                    {isOtpVerified && (
                      <>
                        <div className="pt-3 col-lg-8">
                          <label className="inter-font-family-400 font-size-14 login-text py-2 d-block">
                            New Password
                          </label>
                          <input
                            type="password"
                            {...register("newPassword", {
                              required: "Enter new password",
                              minLength: 6,
                            })}
                            className="input-style"
                          />
                          {errors.password && (
                            <p className="text-danger">
                              {errors.password.message}
                            </p>
                          )}
                        </div>

                        <div className="pt-3 col-lg-8">
                          <label className="inter-font-family-400 font-size-14 login-text py-2 d-block">
                            Confirm Password
                          </label>
                          <input
                            type="password"
                            {...register("confirmPassword", {
                              required: "Confirm password",
                              validate: (value) =>
                                value === watch("newPassword") ||
                                "Passwords do not match",
                            })}
                            className="input-style"
                            // placeholder="Confirm Password"
                          />
                          <p className="text-danger">
                            {errors.confirmPassword?.message}
                          </p>
                        </div>
                      </>
                    )}
                    <div className="py-3 col-lg-8">
                      <button
                        type="submit"
                        className="background-color-terracotta text-color-white py-2 inter-font-family-500 font-size-16 rounded border-0"
                      >
                        {isOtpVerified ? "Set New Password" : "Submit"}
                      </button>
                    </div>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Forgot;
