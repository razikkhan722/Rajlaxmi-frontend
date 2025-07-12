// import Images1 from "../../Assets/img/Shopcategory/Rectangle 55.png";
// export const BestSellers = [
//   {
//     id: 1,
//     name: "Organic Kabuli Chana",
//     price: "180.00",
//     qty: "500 gm",
//     image: Images1,
//     rating: 3.5,
//     reviews: 312,
//   },
//   {
//     id: 2,
//     name: "Soyabean Chunk Small Size",
//     price: "58.00",
//     qty: "500 gm",
//     image: Images1,
//     rating: 4.0,
//     reviews: 210,
//   },
//   {
//     id: 3,
//     name: "Organic Jaggery Powder",
//     price: "54.00",
//     qty: "500 gm",
//     image: Images1,
//     rating: 5,
//     reviews: 210,
//   },
//   {
//     id: 4,
//     name: "Hing Powder",
//     price: "1200.00",
//     qty: "500 gm",
//     image: Images1,
//     rating: 5,
//     reviews: 210,
//   },
// ];

// import { useEffect } from "react";
import { getData } from "../../../services/apiService";

// =======================
// Get ALL Product APIs
// =======================

// Function

export const GetAllProductsAPI = async () => {
  try {
    const response = await getData("getAllProduct");
    console.log("response: ", response);
  } catch (error) {}
};

// useEffect(() => {
//   GetAllProductsAPI()
// }, [])
