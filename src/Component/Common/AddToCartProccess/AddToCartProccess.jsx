import React, { useContext, useEffect, useState } from "react";

// images
import rightTick from "../../Assets/img/ourProducts/rightTick.svg";
import trash from "../../Assets/img/ourProducts/TrashSimple.svg";
import cross from "../../Assets/img/Product/cross.svg";
import { Modal } from "react-bootstrap";
import { CartContext } from "../../Context/UserContext";
import CardEmpty from "../../Assets/img/Product/cart.png";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { useForm } from "react-hook-form";
import { deleteData, getData, postData } from "../../../services/apiService";
const AddToCartProccess = ({ showModal, handleClose }) => {
  const { register, handleSubmit } = useForm();
  // const {  clearCart } = useContext(CartContext);

  const [cartItems, setCartItems] = useState([]);
  const uid = sessionStorage.getItem("uid");
  // const AddToCartPayload = JSON?.parse(sessionStorage.getItem(`cart_${uid}`)||{});

  // States
  const [step, setStep] = useState(0);
  const [Paymode, setPaymode] = useState(false);
  const [mobView, setmobView] = useState(false);

  // Functions
  const handleTapSteps = async () => {
    setStep(step + 1);
    if (step >= 2) {
      return setPaymode(!Paymode);
    }

    const uid = sessionStorage.getItem("uid");

    const storedCart = JSON.parse(sessionStorage.getItem(`cart_${uid}`)) || {};

    if (Object.keys(storedCart).length === 0) {
      toast.warning("Your cart is empty!", { position: "top-right" });
      return;
    }

    const payload = {
      uid: uid,
      cartItems: Object.keys(storedCart).map((productId) => ({
        productId,
        items: Object.entries(storedCart[productId]).map(([weight, data]) => ({
          weight,
          quantity: data.quantity,
        })),
      })),
    };
    console.log(payload);

    // try {
    //   const response = await postData("checkout", payload);

    //   if (response.status === 200) {
    //     toast.success("Order placed successfully!", { position: "top-right" });
    //     clearCart(); // Clear cart after order
    //   }
    // } catch (error) {
    //   toast.error("Failed to place order. Try again.", {
    //     position: "top-right",
    //   });
    //   console.error("Order Error:", error);
    // }
  };

  const fetchCartItems = () => {
    const storedCart = JSON.parse(sessionStorage.getItem(`cart_${uid}`)) || {};
    const itemsArray = [];

    Object.keys(storedCart).forEach((productId) => {
      Object.keys(storedCart[productId]).forEach((weight) => {
        itemsArray.push({
          id: productId,
          weight,
          quantity: storedCart[productId][weight].quantity,
          productDetails: storedCart[productId][weight].productDetails,
        });
      });
    });

    setCartItems(itemsArray);
  };

  useEffect(() => {
    fetchCartItems(); // Fetch on initial render

    // 🔥 Listen for cart updates
    window.addEventListener("cartUpdated", fetchCartItems);

    return () => {
      window.removeEventListener("cartUpdated", fetchCartItems);
    };
  }, [uid]);

  const updateQuantity = (productId, weight, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId, weight);
      return;
    }

    const storedCart = JSON.parse(sessionStorage.getItem(`cart_${uid}`)) || {};
    if (storedCart[productId] && storedCart[productId][weight]) {
      storedCart[productId][weight].quantity = newQuantity;
      sessionStorage.setItem(`cart_${uid}`, JSON.stringify(storedCart));
      fetchCartItems(); // 🔄 Update UI immediately
      window.dispatchEvent(new Event("cartUpdated")); // Notify all components
    }
  };

  const removeFromCart = (productId, weight) => {
    const storedCart = JSON.parse(sessionStorage.getItem(`cart_${uid}`)) || {};
    if (storedCart[productId] && storedCart[productId][weight]) {
      delete storedCart[productId][weight];
      if (Object.keys(storedCart[productId]).length === 0) {
        delete storedCart[productId];
      }
      sessionStorage.setItem(`cart_${uid}`, JSON.stringify(storedCart));
      fetchCartItems(); // 🔄 Update UI immediately
      window.dispatchEvent(new Event("cartUpdated"));
    }
  };

  const clearCart = () => {
    const uid = sessionStorage.getItem("uid");
    sessionStorage.removeItem(`cart_${uid}`);

    fetchCartItems(); // 🔄 Update UI immediately
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const totalPrice = cartItems?.reduce((total, product) => {
    return total + Number(product?.productDetails?.price);
  }, 0);

  // Add to Cart API
  const handleAddToCartApi = async () => {
    try {
      const payload = cartItems?.map((product) => ({
        uid,
        product_id: product?.id,
        product_name: product?.productDetails?.name,
        product_price: product?.productDetails?.price,
        product_quantity: product?.quantity,
        product_weight: product?.weight,
      }));

      const response = await postData("addtocart", payload);
      console.log("response: ", response);
      setStep(1);
      if (step >= 2) {
        return setPaymode(!Paymode);
      }
    } catch (error) {}
  };

  const [allAdress, setAllAdress] = useState([]);

  useEffect(() => {
    getAddressAPI();
  }, []);

  const getAddressAPI = async () => {
    try {
      const response = await getData("getAllAddressRajlaxmi");

      setAllAdress(response?.addresses || []);
    } catch (error) {}
  };
  console.log("allAdress: ", allAdress);

  const onSubmit = async (data) => {
    console.log("data-----: ", data);
    // handleTapSteps()
    try {
      const payload = {
        fullName: data?.fullName,
        email: data?.email,
        address: data?.address,
        houseNo: data?.houseNo,
        country: data?.country,
        contactNo: data?.contactNo,
        state: data?.state,
        city: data?.city,
        pincode: data?.pincode,
        userId: sessionStorage.getItem("id"),
      };

      const response = await postData("createAddressRajlaxmi", payload);
      console.log("response: ", response);

      if (response?.success) {
        await getAddressAPI();
        toast.success(`${response?.message}`, {
          position: "top-right",
          autoClose: 2000,
        });
      }
    } catch (error) {
      console.log("error:============ onSubmit ", error);
    }
  };

  const handleAddressDelete = async (id) => {
    console.log("d: ", id);
    try {
      // deleteAddressByIdRajlaxmi/:id
      const response = await deleteData("deleteAddressByIdRajlaxmi", id);
      console.log("response:============== ", response);
      if (response?.success) {
        await getAddressAPI();
        toast.success(`${response?.message}`, {
          position: "top-right",
          autoClose: 2000,
        });
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };
  const [SetectedAddress, SetSetectedAddress] = useState(null);
  const onSelectAddress = (a) => {
    try {
      SetSetectedAddress(a);
      handleTapSteps();
    } catch (error) {
      console.log("error: ", error);
    }
  };
  console.log("SetectedAddress: ", SetectedAddress);

 const handleCheckOut = () => {
    try {
      
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <div>
      {cartItems.length > 0 ? (
        <Modal
          show={showModal}
          onHide={handleClose}
          centered
          className="AddToCartModal modal-fullscreen modal-dialog-centered modal-dialog-box"
        >
          <div className="modal-content AddToCartModal-modal bg-transparent">
            <div className="d-flex justify-content-center ">
              <div className="background-color-add-modal rounded-top-4 me-4">
                <img
                  type="button"
                  onClick={() => handleClose()}
                  className="mx-4 mt-3 mb-2 "
                  src={cross}
                  alt="Loading"
                />
              </div>
            </div>
            <Modal.Header className="modal-header AddToCartModal-header justify-content-center">
              <div className="d-flex justify-content-center">
                <div>
                  <div
                    className={`tick-box${
                      step >= 1 ? "-active" : ""
                    } d-flex justify-content-center align-items-center`}
                  >
                    {step >= 1 && <img src={rightTick} alt="Loading" />}
                  </div>
                  <span className="josefin-sans-font-family-500 font-size-18">
                    Cart
                  </span>
                </div>

                <div className="text-center">
                  <div className="d-flex">
                    <hr
                      className={`tick-progress-bar${
                        step >= 1 ? "-active" : ""
                      }`}
                    />
                    <div
                      className={`tick-box${
                        step >= 1 ? "-active" : ""
                      } d-flex justify-content-center align-items-center`}
                    >
                      {step >= 2 && <img src={rightTick} alt="Loading" />}
                    </div>
                    <hr
                      className={`tick-progress-bar${
                        step >= 2 ? "-active" : ""
                      }`}
                    />
                  </div>
                  <span className="josefin-sans-font-family-500 font-size-18">
                    Address
                  </span>
                </div>

                <div className="text-center">
                  <div
                    className={`tick-box${
                      step >= 2 ? "-active" : ""
                    } d-flex justify-content-center align-items-center`}
                  >
                    {step >= 4 && <img src={rightTick} alt="Loading" />}
                  </div>
                  <span className="josefin-sans-font-family-500 font-size-18">
                    Payment
                  </span>
                </div>
              </div>
            </Modal.Header>
            <Modal.Body className=" background-color-light-grayish-yellow pt-0 AddToCartModal-body">
              <div className="container-fluid">
                <div
                  className={`payment-process-modal row ${
                    Paymode ? "" : "justify-content-evenly"
                  }`}
                >
                  {/* items Add */}
                  <div
                    className={`col-lg-4 AddToCartModal-modal-grid-1 pt-3 ${
                      Paymode ? "d-none" : ""
                    } ${mobView ? "pay-mob-view" : ""} `}
                  >
                    <div className="d-flex justify-content-between">
                      <span className="text-color-terracotta font-size-14 inter-font-family-500">
                        {cartItems.length} Products
                      </span>
                      <span onClick={clearCart} style={{ cursor: "pointer" }}>
                        Clear all
                      </span>
                    </div>
                    <hr />

                    <div className="row payment-process-card-height overflow-auto">
                      {cartItems?.map((i, index) => (
                        <div className="d-flex col-md-6 col-lg-12 mx-md-1 mx-lg-0 px-0  align-items-center product-cards my-3">
                          <div className=" p-0">
                            <img
                              src={i.productDetails.image}
                              className="rounded m-2"
                              alt=""
                            />
                          </div>
                          <div className="ms-2 product-cards-center p-0">
                            <div className="text-color-dark-grayish-blue inter-font-family-500 font-size-16 pt-1">
                              {i.productDetails.name}
                            </div>
                            <div className="text-color-dark-grayish-blue inter-font-family-400 font-size-14 pt-1">
                              Qty: {i.weight}
                            </div>
                            <div className="text-color-dark-grayish-blue inter-font-family-500 font-size-24 pt-2">
                              ₹ {i.productDetails.price}
                            </div>
                          </div>
                          <div className=" product-cards-end p-0 background-color-gleeful d-flex justify-content-center align-items-center">
                            <div>
                              <div className=" button-addtocard d-grid justify-content-center">
                                <div>
                                  <button
                                    className="background-color-terracotta font-size-24 inter-font-family-500 d-flex justify-content-around align-items-center"
                                    onClick={() =>
                                      updateQuantity(
                                        i.id,
                                        i.weight,
                                        i.quantity - 1
                                      )
                                    }
                                  >
                                    -
                                  </button>
                                </div>
                                <div className="text-center">
                                  <span className="font-size-24">
                                    {i.quantity}
                                  </span>
                                </div>
                                <div>
                                  <button
                                    className="background-color-terracotta font-size-24 inter-font-family-500 d-flex justify-content-around align-items-center"
                                    onClick={() =>
                                      updateQuantity(
                                        i.id,
                                        i.weight,
                                        i.quantity + 1
                                      )
                                    }
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className=" product-cards-end p-0 background-color-terracotta AddToCartModal-delete-button d-flex justify-content-center align-items-center"
                            style={{ cursor: "pointer" }}
                          >
                            <span
                              className="text-white inter-font-family-600 font-size-16"
                              onClick={() => removeFromCart(i.id, i.weight)}
                            >
                              Delete
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="d-flex justify-content-between mt-5">
                      <Link to="/products">
                        <button
                          className={`addToCartModalButton font-size-16 px-5 inter-font-family-500 rounded`}
                        >
                          Add more item
                        </button>
                      </Link>

                      <button
                        onClick={() => {
                          handleTapSteps();
                          handleAddToCartApi();
                        }}
                        className={`addToCartModalButton font-size-16 px-5 inter-font-family-500 rounded`}
                      >
                        Proceed
                      </button>
                    </div>
                  </div>
                  <hr
                    className={` vertical-hr vertical-hr-tab ${
                      Paymode ? "d-none" : ""
                    }`}
                  />
                  {/* Detail Form */}
                  <div
                    className={`col-lg-4 AddToCartModal-modal-grid-2 pt-3 ${
                      Paymode ? "payModeBlackScreenActive" : ""
                    } ${mobView ? "pay-mob-view" : ""}`}
                  >
                    {allAdress?.length > 0 && (
                      <div className="">
                        <span className="address-heading font-size-14 inter-font-family-500">
                          Address Details
                        </span>
                        <hr />
                      </div>
                    )}

                    <div className="payment-process-card-height overflow-auto overflow-x-class">
                      <div className={`row ${step >= 1 ? "" : "d-none"}`}>
                        {allAdress?.map((a, i) => (
                          <div
                            onClick={() => {
                              onSelectAddress(a);
                            }}
                            className="col-lg-3 ps-2 ms-3 me-4 mb-3 address-section p-0 rounded-3 pointer"
                            role="button"
                          >
                            <div className="d-flex justify-content-end align-items-center">
                              <div
                                onClick={() => {
                                  handleAddressDelete(a?.id);
                                }}
                                className="address-box-section  background-color-gleeful-opacity rounded-circle d-flex justify-content-center align-items-center mt-2 mx-2"
                              >
                                <img className="" src={trash} alt="" />
                              </div>
                            </div>
                            <div className="font-size-14 inter-font-family-500">
                              {a?.fullName}
                            </div>
                            <div className="font-size-12 inter-font-family-300 text-trunc-class">
                              {a?.address}
                            </div>
                            <div className="font-size-12 inter-font-family-300">
                              {a?.contactNo}
                            </div>
                          </div>
                        ))}
                      </div>
                      {allAdress?.length < 3 && (
                        <>
                          <hr
                            className={`address-sect-hr ${
                              step >= 1 ? "" : "d-none"
                            }`}
                          />
                          <div
                            className={`login-text font-size-14 inter-font-family-500 ${
                              step >= 1 ? "" : "d-none"
                            }`}
                          >
                            Add New Address
                          </div>

                          <form
                            onSubmit={handleSubmit(onSubmit)}
                            className={`row ${step >= 1 ? "" : "d-none"}`}
                          >
                            <div className="col-lg-6 address-section-form form-group pt-3">
                              <label
                                className="font-size-12 inter-font-family-400"
                                htmlFor="fullName"
                              >
                                Full Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                {...register("fullName")}
                              />
                            </div>
                            <div className="col-lg-6 address-section-form form-group pt-3">
                              <label
                                className="font-size-12 inter-font-family-400"
                                htmlFor="email"
                              >
                                Email
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                {...register("email")}
                              />
                            </div>
                            <div className="col-lg-6 address-section-form form-group pt-3">
                              <label
                                className="font-size-12 inter-font-family-400"
                                htmlFor="address"
                              >
                                Address
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                {...register("address")}
                              />
                            </div>
                            <div className="col-lg-6 address-section-form form-group pt-3">
                              <label
                                className="font-size-12 inter-font-family-400"
                                htmlFor="apartment"
                              >
                                House No.
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                {...register("houseNo")}
                              />
                            </div>
                            <div className="col-lg-4 address-section-form form-group pt-3">
                              <label
                                className="font-size-12 inter-font-family-400"
                                htmlFor="country"
                              >
                                Country
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                {...register("country")}
                              />
                            </div>
                            <div className="col-lg-8 address-section-form form-group pt-3">
                              <label
                                className="font-size-12 inter-font-family-400"
                                htmlFor="contactNo"
                              >
                                Contact No
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                {...register("contactNo")}
                              />
                            </div>
                            <div className="col-lg-4 address-section-form form-group pt-3">
                              <label
                                className="font-size-12 inter-font-family-400"
                                htmlFor="state"
                              >
                                State
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                {...register("state")}
                              />
                            </div>
                            <div className="col-lg-4 address-section-form form-group pt-3">
                              <label
                                className="font-size-12 inter-font-family-400"
                                htmlFor="city"
                              >
                                City
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                {...register("city")}
                              />
                            </div>
                            <div className="col-lg-4 address-section-form form-group pt-3">
                              <label
                                className="font-size-12 inter-font-family-400"
                                htmlFor="pincode"
                              >
                                Pincode
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                {...register("pincode")}
                              />
                            </div>
                            <div
                              className={`mt-5 ${step >= 1 ? "" : "d-none"}`}
                            >
                              <button
                                type="submit"
                                className={`addToCartModalButton font-size-16 px-5 inter-font-family-500 rounded`}
                              >
                                Proceed with this address
                              </button>
                            </div>
                          </form>
                        </>
                      )}
                    </div>

                    {/* <div className={`mt-5 ${step >= 1 ? "" : "d-none"}`}>
                      <button
                        type="submit"
                        className={`addToCartModalButton font-size-16 px-5 inter-font-family-500 rounded`}
                      >
                        Proceed with this address
                      </button>
                    </div> */}
                  </div>
                  <hr
                    className={`vertical-hr vertical-hr-tab ${
                      Paymode ? "payModeBlackScreenLineActive" : ""
                    }`}
                  />
                  {/* payment details */}
                  <div
                    className={`col-lg-4 payment-section AddToCartModal-modal-grid-1 pt-3 ${
                      Paymode ? "payModeBlackScreenActive" : ""
                    } ${mobView ? "pay-mob-view" : ""}`}
                  >
                    <div className="">
                      <span className="address-heading font-size-14 inter-font-family-500">
                        Bill Summary
                      </span>
                      <hr />
                    </div>
                    <div className={`${step >= 2 ? "" : "d-none"}`}>
                      <ul className="pay-process-bill-summary">
                        {cartItems?.map((i, index) => (
                          <li className="d-flex justify-content-between py-2">
                            <span className="login-text font-size-14 inter-font-family-500">
                              {i?.productDetails.name}
                            </span>
                            <span className="font-size-16 inter-font-family-500">
                              ₹ {i.productDetails.price}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <hr className="address-sect-hr" />
                      <ul>
                        <li className="d-flex justify-content-between">
                          <span className="login-text font-size-14 inter-font-family-500">
                            Deliver To:
                          </span>
                          <span className="font-size-16 inter-font-family-500 text-truncate w-75">
                            abc Road, XYZ Nagar, Madhya Pr...
                          </span>
                        </li>
                        <li className="d-flex justify-content-between  py-3">
                          <span className="login-text font-size-14 inter-font-family-500 d-flex align-items-center">
                            Coupon Code
                          </span>
                          {/* <span className="font-size-16 inter-font-family-500">₹ 1200</span> */}
                          <div className="background-color-add-modal apply-coupon p-2  rounded">
                            <input
                              className="coupon-input"
                              type="text"
                              name=""
                              id=""
                            />{" "}
                            <button className=" background-color-terracotta text-white border-0 rounded py-1 font-size-12 inter-font-family-500 px-3">
                              Apply
                            </button>
                          </div>
                        </li>
                        <li className="d-flex justify-content-between py-2">
                          <span className="login-text font-size-14 inter-font-family-500">
                            Sub Total:
                          </span>
                          <span className="font-size-16 inter-font-family-500">
                            ₹ {totalPrice}
                          </span>
                        </li>
                        <li className="d-flex justify-content-between py-2">
                          <span className="login-text font-size-14 inter-font-family-500">
                            Tax:
                          </span>
                          <span className="font-size-16 inter-font-family-500">
                            ₹ 00.00
                          </span>
                        </li>
                      </ul>
                      <hr />
                      <div className=" d-flex justify-content-around align-item-center">
                        <span className="font-size-24 inter-font-family-500 d-flex justify-content-around align-items-center">
                          ₹ {totalPrice}
                        </span>
                        <button
                          onClick={() => {
                            handleCheckOut();
                          }}
                          className="btn payment-section-button text-white font-size-16 inter-font-family-500 px-5"
                        >
                          Checkout
                        </button>
                      </div>
                    </div>
                  </div>
                  <hr
                    className={`vertical-hr-tab vertical-hr ${
                      Paymode ? "" : "d-none"
                    }`}
                  />
                  {/* Paymode section */}
                  <div
                    className={`col-lg-4 ${
                      Paymode ? "" : "d-none"
                    } payment-section AddToCartModal-modal-grid-1 pt-3`}
                  >
                    <div className="font-size-24 inter-font-family-500 text-color-dark-grayish-blue">
                      Payment
                    </div>
                    <p className="font-size-16 inter-font-family-400 login-text">
                      All transactions are secure and encypted
                    </p>
                    <form action="">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios1"
                          value="option1"
                        />
                        <label
                          className="form-check-label font-size-16 inter-font-family-500 text-color-dark-grayish-blue"
                          for="exampleRadios1"
                        >
                          UPI, Debit Card, Credit Card, Net Banking
                        </label>
                        <p className="font-size-16 inter-font-family-400 login-text">
                          (By clicking on ‘Pay Now’ you will be redirected to
                          the respective platform to complete your purchase
                          securely){" "}
                        </p>
                      </div>
                      <hr className="address-sect-hr" />
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios2"
                          value="option2"
                        />
                        <label
                          className="form-check-label font-size-16 inter-font-family-500 text-color-dark-grayish-blue"
                          for="exampleRadios2"
                        >
                          Cash On Delivery
                        </label>
                      </div>
                      <button className="btn payment-section-button-active text-white font-size-16 inter-font-family-500 px-5 mt-3">
                        Pay Now
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </Modal.Body>
          </div>
        </Modal>
      ) : (
        <Modal
          show={showModal}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          dialogClassName="custom-modal-width "
        >
          <Modal.Header
            closeButton
            className="background-color-light-grayish-yellow border-0 text-center"
          >
            <Modal.Title>Your cart is empty !</Modal.Title>
          </Modal.Header>
          <Modal.Body className="background-color-light-grayish-yellow">
            <div className="background-color-light-grayish-yellow">
              <img src={CardEmpty} alt="Loading" className="img-fluid" />
            </div>
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default AddToCartProccess;
