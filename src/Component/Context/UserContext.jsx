// import React, { createContext, useState } from "react";

// // Create Context
// export const CartContext = createContext();

// // Provider Component
// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]); // Cart state
//   const [WishListItems, setWishListItems] = useState([]); // wishlist state

//   // Add to Cart function
//   const addToCart = (product, quantity, weight) => {
//     setCartItems((prevCart) => {
//       const existingItem = prevCart.find(
//         (item) => item.id === product.id && item.weight === weight
//       );

//       if (existingItem) {
//         return prevCart.map((item) =>
//           item.id === product.id && item.weight === weight
//             ? { ...item, quantity: item.quantity + quantity }
//             : item
//         );
//       } else {
//         return [...prevCart, { ...product, quantity, weight }];
//       }
//     });
//   };

//   // Remove from Cart function
//   const removeFromCart = (productId, weight) => {
//     setCartItems((prevCart) =>
//       prevCart
//         .map((item) =>
//           item.id === productId && item.weight === weight
//             ? { ...item, quantity: item.quantity - 1 }
//             : item
//         )
//         .filter((item) => item.quantity > 0)
//     );
//   };

//   // Add to WishList Functions
//   const AddToWishList = (product) => {
//     const isProductInWishList = WishListItems.some(item => item?.id === product?.id);
//     if (!isProductInWishList) {
//       setWishListItems([...WishListItems, product]);
//     }
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cartItems,
//         WishListItems,
//         addToCart,
//         removeFromCart,
//         AddToWishList,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

import React, { createContext, useEffect, useState } from "react";
import {
  API_BASE_URL,
  deleteData,
  getWishListData,
  postData,
} from "../../services/apiService";
import { Bounce, toast } from "react-toastify";
import axios from "axios";

// Create Context
export const CartContext = createContext();

// Provider Component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]); // Cart state
  const [WishListItems, setWishListItems] = useState(); // Wishlist state
  const [uid, setuid] = useState([]); // User Id
  const getUid = sessionStorage.getItem("uid");

  // Add to Cart function
  const addToCart = (product, quantity, weight) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.id === product.id && item.weight === weight
      );

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id && item.weight === weight
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity, weight }];
      }
    });
  };

  // Remove item from cart completely
  const removeFromCart = (productId, weight) => {
    setCartItems((prevCart) =>
      prevCart.filter(
        (item) => !(item.id === productId && item.weight === weight)
      )
    );
  };

  // Update quantity in cart
  const updateQuantity = (productId, weight, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId, weight);
    } else {
      setCartItems((prevCart) =>
        prevCart.map((item) =>
          item.id === productId && item.weight === weight
            ? { ...item, quantity: newQuantity }
            : item
        )
      );
    }
  };

  // Clear entire cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Add to wishlist
  const AddToWishList = async (product) => {
    const payload = {
      uid: getUid,
      product_name: product?.name,
      product_image: product?.image,
      product_id: product?.id,
      product_price: product?.price,
      product_quantity: 1,
    };
    const isProductInWishList = WishListItems?.some(
      (item) => Number(item?.product_id) === Number(product?.id)
    );
    try {
      if (isProductInWishList) {
        // Remove product from WishList
        const updatedWishList = WishListItems.filter(
          (item) => item?.id !== product?.id
        );
        const removePay = {
          uid: getUid,
          product_id: product?.id,
        };

        // Sending removePay as part of the config
        const removeres = await axios.delete(
          `${API_BASE_URL}/removeFromWishlist`,
          { data: removePay } // This is crucial. Axios requires the data for DELETE requests to be included in an object.
        );
        // setWishListItems(updatedWishList);
        toast.success(removeres?.data?.message, {
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
      } else {
        // Add product to WishList
        // setWishListItems([...WishListItems, product]);

        const response = await postData("wishlist", payload);
        toast.success(response?.message, {
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
      
      const responseWish = await getWishListData()
      setWishListItems(responseWish);
    } catch (error) {
      toast.error(error?.message, {
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

  const FetchWishData = async () => {
    try {
      const resp = await getWishListData();
      setWishListItems(resp);
    } catch (error) {}
  };

  // ===========
  // useeffect
  // =========
  useEffect(() => {
    FetchWishData();
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        WishListItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        AddToWishList,
        uid,
        setuid,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
