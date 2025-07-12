import React, { useContext } from "react";

// Images
import Logi from "../../../Assets/img/Login/Frame 1261158478.png";
import Arro from "../../../Assets/img/Login/Vector (1).svg";

// Common
import { postData } from "../../../../services/apiService";

// Third party libraries
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
import { CartContext } from "../../../Context/UserContext";

const Login = () => {
  const { setuid } = useContext(CartContext);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // API endpoint
  const userEndpoint = "login";

  // Handle form submission
  const onSubmit = async (data) => {
    try {
      const response = await postData(userEndpoint, data);

      if (response?.success) {
        if (response?.uid) {
          setuid(response.uid);
          sessionStorage.setItem("uid", response.uid);
        }

        if (response?.token) {
          sessionStorage.setItem("token", response.token);
        }

        if (response?.id) {
          sessionStorage.setItem("id", response.id);
        }

        // store data in session for  later use
        toast.success("Login successful!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        setTimeout(() => navigate("/"), 1000);
      } else {
        toast.error(response?.message || "Login failed!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    } catch (error) {
      toast.error(error?.message || "Login failed!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
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
        <div className="container py-4">
          <div className="login-modal-shadow rounded position-relative">
            <div className="position-absolute top-0 end-0">
              <img src={Arro} alt="Loading" className="img-fluid" />
            </div>
            <div className="row">
              <div className="col-lg-6 col-sm-12 d-flex">
                <img src={Logi} alt="Loading" className="img-fluid" />
              </div>
              <div className="col-lg-6 col-sm-12 px-5">
                <div className="text-start josefin-sans-font-family-600 font-size-30 py-3 text-color-dark-grayish-blue pt-4">
                  Login
                </div>
                <p className="inter-font-family-400 font-size-16 text-color-dark-grayish-blue">
                  Please fill the details below to login to your account
                </p>
                <div>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="form-login row"
                  >
                    {/* Email/Mobile Field */}
                    <div className="pt-4 col-lg-10">
                      <label className="inter-font-family-400 font-size-14 login-text py-2 d-block">
                        Email/Contact
                      </label>
                      <input
                        type="text"
                        {...register("emailmobile", {
                          required: "Email or Mobile is required",
                        })}
                        className="input-style"
                      />
                      {errors.emailmobile && (
                        <p className="text-danger font-size-12">
                          {errors.emailmobile.message}
                        </p>
                      )}
                    </div>

                    {/* Password Field */}
                    <div className="py-2 col-lg-9">
                      <label className="inter-font-family-400 font-size-14 login-text py-2 d-block">
                        Password
                      </label>
                      <input
                        type="password"
                        {...register("password", {
                          required: "Password is required",
                        })}
                        className="input-style"
                      />
                      {errors.password && (
                        <p className="text-danger font-size-12">
                          {errors.password.message}
                        </p>
                      )}

                      <div className="d-flex justify-content-between">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            class="form-check-label inter-font-family-400 font-size-12  text-color-terracotta text-end"
                            for="flexCheckDefault"
                          >
                            Remember me
                          </label>
                        </div>

                        <NavLink
                          to={"/forgot"}
                          className="text-decoration-none"
                        >
                          <p className="inter-font-family-400 font-size-12  text-color-terracotta mt-1">
                            Forgot Password?
                          </p>
                        </NavLink>
                      </div>
                    </div>
                    {/* Submit Button */}
                    <div className="py-3">
                      <button
                        type="submit"
                        className="background-color-terracotta text-color-white py-2 inter-font-family-500 font-size-16 rounded border-0"
                      >
                        Login
                      </button>
                    </div>
                  </form>
                </div>

                {/* Registration Link */}
                <div className="py-4 w-75 text-center">
                  <span className="inter-font-family-400 font-size-14 ps-4">
                    Don’t have an account?
                  </span>
                  <span>
                    <Link
                      to="/registration"
                      className="px-2 text-decoration-none inter-font-family-500 font-size-14 text-color-terracotta"
                    >
                      Create an account
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
