// import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Logo from "../../Assets/img/Logo/RAJLAXMI JAVIK PNG.png";
// import { PiShoppingCartSimpleFill } from "react-icons/pi";
// import { RiSearch2Line } from "react-icons/ri";

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 100) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <nav className={`navbar navbar-expand-lg navbar-light ${scrolled ? "scrolled" : ""}`}>
//       <div className="container">
//         <a className="navbar-brand" href="#">
//           <img src={Logo} alt="Logo" style={{ height: "42px", width: "44px" }} />
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse gap-4" id="navbarNav">
//           <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-4">
//             {["Home", "Products", "About Us", "Contact"].map((link) => (
//               <li className="nav-item" key={link}>
//                 <a className="nav-link" href="#">{link}</a>
//               </li>
//             ))}
//           </ul>
//           <div className="d-flex gap-4">
//             <button className="login-btn rounded-pill" type="button">
//               Login
//             </button>
//             <button className="nav-search-btn rounded-circle border-0 px-2 d-flex align-items-center justify-content-around">
//               <RiSearch2Line className="nav-search-icon" />
//             </button>
//             <button className="cart-btn rounded-circle border-0 px-2">
//               <PiShoppingCartSimpleFill className="mt-2 cart-icon" />
//               <span className="cart-quantity translate-middle rounded-pill">
//                 0
//               </span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../../Assets/img/Logo/RAJLAXMI JAVIK PNG.png";
import mappin from "../../Assets/img/Login/MapPin.svg";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { RiSearch2Line } from "react-icons/ri";
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { Link, NavLink, useLocation } from "react-router-dom";
import AddToCartProccess from "../AddToCartProccess/AddToCartProccess";
import AutoSuggestSearch from "../AutoSuggestSearchBar/AutoSuggestSearchBar";
import { CartContext } from "../../Context/UserContext";
import { Dropdown } from "react-bootstrap";

const DataNavbar = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Products",
    url: "/products",
  },
  {
    title: "Wishlist",
    url: "/wishlist",
  },
  {
    title: "Track",
    url: "/track",
  },
  {
    title: "Contact",
    url: "/contact",
  },
];

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);
  const uid = sessionStorage.getItem("uid");
  const location = useLocation();

  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [autoSearchFillValue, setautoSearchFillValue] = useState();
  const [inputBar, setInputBar] = useState(false);

  // Functions

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const HandleAutoSearchInp = (e) => {
    setautoSearchFillValue(e.target.value);
  };

  const handleOpenSearchBar = () => {
    return setInputBar(true);
  };
  const handleCloseSearchBar = () => {
    setInputBar(false);
  };

  const mobNav = window?.screen?.width;

  // useEffect

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event?.target?.closest(".automodal")) {
        return true;
      }
      if (!event?.target?.closest(".autosuggest-nav")) {
        handleCloseSearchBar();
        setautoSearchFillValue();
      }
    };
    if (inputBar) {
      document?.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document?.removeEventListener("mousedown", handleClickOutside);
    };
  }, [inputBar]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const updateCartCount = () => {
    const storedCart = JSON.parse(sessionStorage.getItem(`cart_${uid}`)) || {};
    let totalItems = 0;

    Object.values(storedCart).forEach((product) => {
      Object.values(product).forEach((weight) => {
        totalItems += weight.quantity;
      });
    });

    setCartCount(totalItems);
  };

  useEffect(() => {
    updateCartCount(); // Initial load

    // 🔥 Listen for the "cartUpdated" event
    window.addEventListener("cartUpdated", updateCartCount);

    return () => {
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, [uid]);

  // ==================
  // to prevent background scrolling
  // ==================
  useEffect(() => {
    if (inputBar) {
      document.body.classList.add("position-fixed");
    } else {
      document.body.classList.remove("position-fixed");
    }
    return () => {
      document.body.classList.remove("position-fixed");
    };
  }, [inputBar]);

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-background ${
          scrolled ? "scrolled" : ""
        }`}
      >
        <div className="container">
          <a className="navbar-brand d-lg-block d-none" href="/">
            <img
              src={Logo}
              alt="Logo"
              style={{ height: "42px", width: "44px" }}
            />
          </a>
          <div className="d-flex justify-content-center align-items-center">
            <hr className="nav-location-section-hr d-lg-block d-none" />
            <img className="mx-2" src={mappin} alt="" />
            <Dropdown className="nav-location-section">
              <Dropdown.Toggle
                type="text"
                className="inter-font-family-400 font-size-10 text-chinese-black-color text-dark p-0"
                id="dropdown-basic-nav"
              >
                Location
              </Dropdown.Toggle>
              <p className="inter-font-family-500 font-size-12 m-0 text-color-terracotta w-50 text-truncate">
                Indore, Madhya Pradesh
              </p>

              <Dropdown.Menu>
                <Dropdown.Item>Action</Dropdown.Item>
                <Dropdown.Item>Another action</Dropdown.Item>
                <Dropdown.Item>Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          {/* Toggle Button */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            {/* <span className="navbar-toggler-icon"></span> */}
            {!isOpen ? <FaBarsStaggered /> : <RxCross2 />}
          </button>

          {/* Navbar Menu */}
          <div
            className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
            id="navbarNav"
          >
            <ul
              className={`navbar-nav nav-section ms-auto mb-2 mb-lg-0 ${
                mobNav < 992
                  ? "d-flex justify-content-center align-items-center text-center gap-0"
                  : "gap-4"
              }`}
            >
              {DataNavbar.map((link, i) => (
                <li
                  className={`nav-item nav-text-deco inter-font-family nav-text-deco-${
                    String(location?.pathname) === String(link.url)
                      ? "active"
                      : ""
                  } ${inputBar ? "d-none" : ""}`}
                  key={i}
                >
                  {/* <a className="nav-link" href=>{link.title}</a> */}
                  <Link
                    className={`nav-link nav-text text-center nav-text-${
                      String(location?.pathname) === String(link.url)
                        ? "active"
                        : ""
                    }`}
                    to={link.url}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div
              className={`d-flex nav-section align-items-center gap-4 ${
                mobNav < 992
                  ? "d-flex justify-content-center align-items-center gap-0"
                  : ""
              }`}
            >
              {uid ? (
                <NavLink to={"/"}>
                <button
                  className={`login-btn rounded-pill mx-3 inter-font-family-500 ${
                    inputBar ? "d-none" : ""
                  }`}
                  type="button"
                  onClick={() => {
                    sessionStorage?.removeItem("uid");
                    sessionStorage?.removeItem("token");
                  }}
                  >
                  Log Out
                </button>
                  </NavLink>
              ) : (
                <NavLink to={"/login"}>
                  <button
                    className={`login-btn rounded-pill mx-3 inter-font-family-500 ${
                      inputBar ? "d-none" : ""
                    }`}
                    type="button"
                  >
                    Login
                  </button>
                </NavLink>
              )}

              {/* -------- nav search section ---------- */}
              <div
                onClick={() => handleOpenSearchBar()} // Set focus on click
                className={`d-flex align-items-center  autosuggest-nav background-color-gleeful  p-2 ${
                  inputBar
                    ? "autosuggest-nav-active rounded-3"
                    : "rounded-circle justify-content-center"
                } ${mobNav < 992 ? "d-none" : ""}`}
              >
                <RiSearch2Line
                  className={`nav-search-icon autosuggest-icon ${
                    inputBar ? "me-3 ms-2" : ""
                  }`}
                />
                {inputBar ? (
                  <>
                    <div className="autosuggest-input w-100">
                      <input
                        type="text"
                        placeholder="Search for Oil, Ghee and other products  "
                        onChange={HandleAutoSearchInp}
                        className={`  h-100  ${autoSearchFillValue ? "" : ""}`}
                      />
                    </div>
                  </>
                ) : null}
              </div>
              {/* ----------------- */}

              <button
                onClick={() => handleShow()}
                className={`cart-btn rounded-circle border-0 px-2 ${
                  mobNav < 992 ? "d-none" : ""
                }`}
              >
                <PiShoppingCartSimpleFill className="mt-2 cart-icon" />
                <span className="cart-quantity translate-middle rounded-pill">
                  {cartCount}
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* -------- nav search on mobile screen section ---------- */}
      <div className="d-flex justify-content-around">
        <div
          onClick={() => handleOpenSearchBar()} // Set focus on click
          className={`d-flex align-items-center autosuggest-nav-active rounded-5 bg-white  p-2 ${
            inputBar ? "autosuggest-nav-active rounded-3" : ""
          } ${mobNav < 992 ? "" : "d-none"}`}
        >
          <RiSearch2Line
            className={`nav-search-icon autosuggest-icon bg-white ${
              inputBar ? "me-3 ms-2" : "me-3 ms-2"
            }`}
          />
          {/* {inputBar ? ( */}
          <>
            <div className="autosuggest-input w-100">
              <input
                type="text"
                placeholder="Search for Oil, Ghee and other products  "
                onChange={HandleAutoSearchInp}
                className={`  h-100  ${autoSearchFillValue ? "" : ""}`}
              />
            </div>
          </>
          {/* // ) : null} */}
        </div>
        <button
          onClick={() => handleShow()}
          className={`cart-btn rounded-circle border-0 px-2 bg-white ${
            mobNav < 992 ? "" : "d-none"
          }`}
        >
          <PiShoppingCartSimpleFill className="mt-2 cart-icon" />
          <span className="cart-quantity translate-middle rounded-pill">
            {cartCount}
          </span>
        </button>
      </div>
      {/* ----------------- */}
      {inputBar && (
        <AutoSuggestSearch
          modalClass={"automodal"}
          inputValue={autoSearchFillValue}
          handleClose={handleCloseSearchBar}
        />
      )}
      <AddToCartProccess showModal={showModal} handleClose={handleClose} />
    </>
  );
};

export default Navbar;
