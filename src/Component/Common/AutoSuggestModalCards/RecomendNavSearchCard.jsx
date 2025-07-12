import React, { useContext, useEffect, useState } from "react";

// Images
import Product1 from "../../Assets/img/ProductDescription/Rectangle 55.png";
// Icons
import { MdCurrencyRupee } from "react-icons/md";
import { CartContext } from "../../Context/UserContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  deleteProductAPI,
  postData,
  updateData,
} from "../../../services/apiService";

// Json

const RecommendNavSearchCard = ({ product }) => {
  const getSessionUID = () => {
    let uid = sessionStorage.getItem("uid");
    if (!uid) {
      // uid = `user_${Math.random().toString(36).substr(2, 9)}`;
      // sessionStorage.setItem("uid", uid);
    }
    return uid;
  };
  // UseState

  // useState for Add to Cart Button

  const [isAdded, setIsAdded] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [selectedWeight, setSelectedWeight] = useState("500gm");


  const navigate = useNavigate();

  const uid = getSessionUID(); // Get UID for session
  const isAuthenticated = !!sessionStorage.getItem("token"); // Check if user is logged in

  useEffect(() => {
    const fetchCartData = () => {
      const storedCart =
        JSON.parse(sessionStorage.getItem(`cart_${uid}`)) || {};
      if (storedCart[product?.id] && storedCart[product?.id][selectedWeight]) {
        setIsAdded(true);
        setQuantity(storedCart[product?.id][selectedWeight].quantity);
      } else {
        setIsAdded(false);
        setQuantity(0);
      }
    };

    fetchCartData();

    // 🔥 Listen for cart updates globally
    window.addEventListener("cartUpdated", fetchCartData);

    return () => {
      window.removeEventListener("cartUpdated", fetchCartData);
    };
  }, [product?.id, selectedWeight, uid]);

  // Add to Cart
  const increaseQuantity = async (productId) => {
    if (!isAuthenticated) {
      navigate("/login");
      toast.warning("⚠️ Please login to add items!", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    let storedCart = JSON.parse(sessionStorage.getItem(`cart_${uid}`)) || {};

    if (!storedCart[product.id]) {
      storedCart[product.id] = {};
    }

    if (!storedCart[product.id][selectedWeight]) {
      storedCart[product.id][selectedWeight] = {
        productDetails: product,
        quantity: 1,
      };
      // ==========================
      // Add Item  POST API
      // ========================
      try {
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

        const payload = itemsArray?.map((product) => ({
          uid,
          product_id: product?.id,
          product_name: product?.productDetails?.name,
          product_price: product?.productDetails?.price,
          product_quantity: product?.quantity,
          product_weight: product?.weight,
        }));
        const AddToCartData = payload?.find(
          (product) =>
            product?.product_id == productId &&
            product?.product_weight == selectedWeight
        );
        const response = await postData("addtocart", AddToCartData);
        console.log("response: ", response);
      } catch (error) {
        console.log("error: ", error);
      }

      toast.success(`${product.name} added to cart!`, {
        position: "top-right",
        autoClose: 2000,
      });
    } else {
      storedCart[product.id][selectedWeight].quantity += 1;

      // ==========================
      // Update Item Quantity Put API
      // ========================
      try {
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

        const payload = itemsArray?.map((product) => ({
          uid,
          product_id: product?.id,
          product_name: product?.productDetails?.name,
          product_price: product?.productDetails?.price,
          product_quantity: product?.quantity,
          product_weight: product?.weight,
        }));

        const UpdateData = payload?.find(
          (product) =>
            product?.product_id == productId &&
            product?.product_weight == selectedWeight
        );
        const response = await postData(
          "updateCart",
          // UpdateData?.product_id,
          UpdateData
        );
        console.log("response: ", response);
      } catch (error) {
        console.log("error: ", error);
      }
      toast.info(`Increased quantity of ${product.name}`, {
        position: "top-right",
        autoClose: 2000,
      });
    }

    sessionStorage.setItem(`cart_${uid}`, JSON.stringify(storedCart));

    // 🔄 Update UI immediately
    setIsAdded(true);
    setQuantity(storedCart[product.id][selectedWeight].quantity);

    // 🔥 Notify all components
    window.dispatchEvent(new Event("cartUpdated"));
  };

  // Remove from Cart
  const decreaseQuantity = async (productId) => {
    let storedCart = JSON.parse(sessionStorage.getItem(`cart_${uid}`)) || {};

    if (
      storedCart[product.id] &&
      storedCart[product.id][selectedWeight]?.quantity > 1
    ) {
      storedCart[product.id][selectedWeight].quantity -= 1;
      toast.info(`Decreased quantity of ${product.name}`, {
        position: "top-right",
        autoClose: 2000,
      });
      // ==========================
      // Decrease Item Quantity  API
      // ========================
      try {
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

        const payload = itemsArray?.map((product) => ({
          uid,
          product_id: product?.id,
          product_name: product?.productDetails?.name,
          product_price: product?.productDetails?.price,
          product_quantity: product?.quantity,
          product_weight: product?.weight,
        }));

        const UpdateData = payload?.find(
          (product) =>
            product?.product_id == productId &&
            product?.product_weight == selectedWeight
        );
        const response = await postData(
          "updateCart",
          // UpdateData?.product_id,
          UpdateData
        );
        console.log("response: ", response);
      } catch (error) {
        console.log("error: ", error);
      }
      toast.info(`Increased quantity of ${product?.name}`, {
        position: "top-right",
        autoClose: 2000,
      });
    } else {
      delete storedCart[product?.id][selectedWeight];

      if (Object.keys(storedCart[product?.id]).length === 0) {
        delete storedCart[product?.id]; // Remove entire product if no sizes left
      }
      toast.error(`Removed ${product?.name} from cart!`, {
        position: "top-right",
        autoClose: 2000,
      });
      setIsAdded(false);
      try {
        const payload = {
          uid,
          product_id: productId,
        };
        const response = await deleteProductAPI(
          "removecart",
          '',
          payload
        );
        console.log("response: ", response);
      } catch (error) {}
    }

    sessionStorage.setItem(`cart_${uid}`, JSON.stringify(storedCart));

    // 🔄 Update UI immediately
    setQuantity(storedCart[product.id]?.[selectedWeight]?.quantity || 0);
    // setIsAdded(
    //   storedCart[product.id] && Object.keys(storedCart[product.id]).length > 0
    // );

    // 🔥 Notify all components
    window.dispatchEvent(new Event("cartUpdated"));
  };



  return (
    <React.Fragment>
      <div className="d-flex me-4">
        <div className="col-lg-2 mx-2">
          <div className="product-recommedation-cards  nav-Recommend-card background-color-white my-2 pb-0">
            {/* <div className="d-flex  justify-content-center pt-2"> */}
            <div className="d-flex justify-content-center pt-2">
              {/* Product Image & Qty Selector */}
              <img src={product?.image} alt="Loading" className="img-fluid" />
            </div>
            <div className="pt-2 pb-1 d-flex flex-column">
              <span className="font-size-14 inter-font-family-600 text-color-dark-grayish-blue ms-2">
                {product?.name}
              </span>
              <span className="inter-font-family-400 product-qty font-size-14 ms-2 my-1">
                ({product?.qty})
              </span>
            </div>
            {/* </div> */}

            {/* Price & Add to Cart Button */}

            <div className="d-flex justify-content-between">
              <div className="ms-2 d-flex align-items-center">
                <MdCurrencyRupee className="" />
                <span className="inter-font-family-500 font-size-14 text-color-black">
                  {product?.price}
                </span>
              </div>

              {/* Add to Cart / Quantity Controls */}

              {!isAdded ? (
                <div>
                  <button
                    className="background-color-terracotta button-addtocard btn-add-recommendation inter-font-family-500 font-size-16"
                    onClick={() => {
                      setIsAdded(true);
                      setQuantity(1); // Set initial quantity to 1
                      increaseQuantity(product?.id);
                    }}
                  >
                    Add
                  </button>
                </div>
              ) : (
                <div>
                  <div className="background-color-gleeful button-addtocard btn-add-recommendation d-flex justify-content-around align-items-center">
                    <div>
                      <button
                        className="background-color-terracotta font-size-24 inter-font-family-500 d-flex justify-content-around align-items-center"
                        onClick={() => decreaseQuantity(product?.id)}
                      >
                        -
                      </button>
                    </div>
                    <div>
                      <span className="font-size-24">{quantity}</span>
                    </div>
                    <div>
                      <button
                        className="background-color-terracotta font-size-24 inter-font-family-500 d-flex justify-content-around align-items-center"
                        onClick={() => increaseQuantity(product?.id)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RecommendNavSearchCard;
