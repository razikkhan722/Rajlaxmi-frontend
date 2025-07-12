import React, { useEffect, useRef, useState } from "react";

// import images
import trendImg from "../../Assets/img/Home/homeimg4.png";
import Images1 from "../../Assets/img/Shopcategory/Rectangle 55.png";
import RecommendNavSearchCard from "../AutoSuggestModalCards/RecomendNavSearchCard";
import AddtoCard from "../Addtocard";
import cross from "../../Assets/img/Product/cross.svg";
import SearchAddToCart from "../AutoSuggestModalCards/SearchAddToCart";

const BestSellers = [
  {
    id: 1,
    name: "Organic Kabuli Chana",
    price: "180.00",
    qty: "500 gm",
    image: Images1,
    rating: 3.5,
    reviews: 312,
  },
  {
    id: 2,
    name: "Soyabean Chunk Small Size",
    price: "58.00",
    qty: "500 gm",
    image: Images1,
    rating: 4.0,
    reviews: 210,
  },
  {
    id: 3,
    name: "Organic Jaggery Powder",
    price: "54.00",
    qty: "500 gm",
    image: Images1,
    rating: 5,
    reviews: 210,
  },
  {
    id: 4,
    name: "Hing Powder",
    price: "1200.00",
    qty: "500 gm",
    image: Images1,
    rating: 5,
    reviews: 210,
  },
];

const AutoSuggestSearch = ({ inputValue, modalClass, handleClose }) => {
  // ========
  // States
  // ==========
  const [query, setQuery] = useState("");
  const [filteredOptions, setFilteredOptions] = useState();
  const [showDropdown, setshowDropdown] = useState(true);
  const [IncrDecrQuantity, setIncrDecrQuantity] = useState({});
  const dropdownRef = useRef(null); // Ref for the dropdown

  // =========
  // Functions
  // =========
  //   const options = [];
  //   MenuItemsJson.map((item) => {
  //     item?.subcategories?.map((foodName) => options?.push(foodName));
  //   });

  // Function to handle Add FOOD Item
  const HandleItemAdd = (item) => {
    const payload = {
      customerID: item?.id,
      menuID: 0,
      floorName: "",
      tableNumber: 0,
      orderID: 0,
      categoriesName: "",
      subcategoriesName: item?.name,
      subcategoriesAmount: item?.price,
      subcategoriesType: "",
      quantity: 1,
      totalAmount: 0,
      totalitemTax: 0,
      discount: "",
      addonNotes: "",
      addonName: "",
      addonAmount: 0,
      addonQuantity: 0,
    };
    // dispatch(AddMenuRedux(payload));
  };

  //   useEffect(() => {
  //     const value = inputValue;
  //     if (value?.length > 0) {
  //       const filtered = options?.filter((option) =>
  //         option?.name?.toLowerCase()?.includes(value?.toLowerCase())
  //       );
  //       setFilteredOptions(filtered);
  //     } else {
  //       setFilteredOptions();
  //     }
  //   }, [inputValue]);

  // Function to handle outside clicks
  useEffect(() => {
    function handleClickOutside(event) {
      // console.log('event: ', event);
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setFilteredOptions(null); // Close the dropdown
        // setshowDropdown(false)
        // console.log('showDropdown: ', showDropdown);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on cleanup
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef, showDropdown]);



  return (
    <>
      <div
        className={`d-flex flex-column align-items-center justify-content-center mx-5 ${modalClass} `}
      >
        {/* Search bar */}
        <div className="position-relative w-100">
          {/* Suggestions dropdown */}
          {/* {filteredOptions?.length >= 0 && ( */}
          <ul
            ref={dropdownRef}
            className={`position-fixed auto-search-modal  rounded-4 shadow-lg auto-search-modal-height px-0 background-color-light-grayish-yellow ${
              showDropdown ? "" : ""
            }`}
            style={{ zIndex: 100 }}
          >
            <div className="d-flex align-items-center justify-content-between">
              <h3 className="font-size-24 josefin-sans-font-family-600 text-color-dark-grayish-blue mt-3 ms-4">
                Trending searches{" "}
              </h3>
              <img
                onClick={handleClose}
                src={cross}
                width={36}
                height={36}
                className="together rounded-circle p-2 me-3 mt-3"
                alt=""
              />
            </div>

            {!inputValue?.length > 0 ? (
              <div className=" d-flex overflow-auto mt-2 mx-3">
                <div className=" auto-search-trend-box">
                  <div className="mx-3">
                    <img src={trendImg} className="rounded-3" alt="" />
                    <h5 className="font-size-14 text-color-dark-ashy-blue inter-font-family-500 mt-2">
                      Gir Cow ghee
                    </h5>
                  </div>
                </div>
                <div className=" auto-search-trend-box">
                  <div className="mx-3">
                    <img src={trendImg} className="rounded-3" alt="" />
                    <h5 className="font-size-14 text-color-dark-ashy-blue inter-font-family-500 mt-2">
                      Gir Cow ghee
                    </h5>
                  </div>
                </div>
                <div className=" auto-search-trend-box">
                  <div className="mx-3">
                    <img src={trendImg} className="rounded-3" alt="" />
                    <h5 className="font-size-14 text-color-dark-ashy-blue inter-font-family-500 mt-2">
                      Gir Cow ghee
                    </h5>
                  </div>
                </div>
              </div>
            ) : (
              <div className="d-flex overflow-auto py-2 me-2 ms-1">
              {BestSellers?.map((i) => (
                <span>
                <SearchAddToCart
                className="login-modal-shadow"
                product={i}
                />
                </span>
              ))}
              </div>
            )}

            <h3 className="font-size-24 josefin-sans-font-family-600 text-color-dark-grayish-blue mt-3 ms-4">
              Recommendations For you
            </h3>
            <div className="d-flex  overflow-auto ms-3">
              {/* <span> */}
              {BestSellers?.map((i) => 
                <RecommendNavSearchCard  product={i} />
              )}
              {/* </span> */}
            </div>
            <li className="h-1"></li>
            {/* {filteredOptions?.map((option, index) => (
              <>
                <li
                  key={index}
                  // onClick={() => handleOptionClick(option)}
                  className="px-3 mx-2 my-2 py-3 h-14 text-base d-flex justify-content-between align-items-center border-bottom cursor-pointer hover-bg-light"
                >
                  {option?.name}
                </li>
              </>
            ))} */}
          </ul>
          {/* )} */}
        </div>
      </div>
    </>
  );
};

export default AutoSuggestSearch;
