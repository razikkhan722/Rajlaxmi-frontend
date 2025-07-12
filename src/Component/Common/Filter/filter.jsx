// import React from 'react'

// // import Sort from "../../Assets/img/Product/SlidersHorizontal.svg";

// import Funnel from "../../Assets/img/Product/Funnel.svg";
// const FilterDropDown = () => {
//     return (
//         <>
//             <div class="dropdown">
//                 <button className='border-0 bg-transparent'  type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
//                 <img src={Funnel} alt="Filter" className="sort-icon" />
//                 <div className="text-center text-color-terracotta">Filter</div>
//                 </button>
//                 <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
//                     <li><a class="dropdown-item" href="/#">Action</a></li>
//                     <li><a class="dropdown-item" href="/#">Another action</a></li>
//                     <li><a class="dropdown-item" href="/#">Something else here</a></li>
//                 </ul>
//             </div>
//         </>


//     )
// }

// export default FilterDropDown

import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Funnel from "../../Assets/img/Product/Funnel.svg";
import Accordion from 'react-bootstrap/Accordion';


const FilterDropDown = () => {

    const dropdownRef = useRef(null);

    // Prevent dropdown from closing on accordion toggle
    const handleAccordionClick = (event) => {
        event.stopPropagation(); // Prevents dropdown from closing
    };
    const [value, setValue] = useState(50);

    const handleChange = (e) => {
      setValue(e.target.value);
      e.target.style.backgroundSize = `${e.target.value}% 100%`;
    };
  

    const CategoryData = [
        { id: "checkbox1", value: "ghee", label: "Ghee" },
        { id: "checkbox2", value: "oil", label: "Oil" },
        { id: "checkbox3", value: "100gm", label: "100 gm" },
        { id: "checkbox4", value: "200gm", label: "200 gm" },
        { id: "checkbox5", value: "250gm", label: "250 gm" },
    ];
    const VarientData = [
        { id: "checkbox1", value: "small", label: "Small" },
        { id: "checkbox2", value: "medium", label: "Medium" },
        { id: "checkbox3", value: "100gm", label: "100 gm" },
        { id: "checkbox4", value: "200gm", label: "200 gm" },
    ];

    return (
        <>
            {/* Filter Button with Dropdown */}
            <div className="dropdown" ref={dropdownRef}>
                <button
                    className="border-0 bg-transparent"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <img src={Funnel} alt="Filter" className="sort-icon" />
                    <div className="text-center  text-color-terracotta">Filter</div>
                </button>

                {/* Dropdown Menu (Popup) */}
                <ul className="dropdown-menu border-green" aria-labelledby="dropdownMenuButton" data-bs-auto-close="outside">
                    <li>
                        <p className="ms-2 mb-3 mt-1 fw-medium inter-font-family-500 text-heading filter-heading text-start">FILTERS</p>
                    </li>

                    {/* Accordion for Filters */}
                    <Accordion className="px-2">
                        <Accordion.Item eventKey="0" onClick={handleAccordionClick} className="my-3 mx-2 rounded-3 border-0">
                            <Accordion.Header className="text-heading "><span className="inter-font-family-500 font-size-18 text-color-dark-grayish-blue">Availability</span></Accordion.Header>
                            <Accordion.Body>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="checkbox1" value="option1" />
                                    <label class="form-check-label inter-font-family-400 font-size-14 text-color-dark-grayish-blue" for="checkbox1">
                                        In Stock
                                    </label>
                                </div>

                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="checkbox2" value="option2" />
                                    <label class="form-check-label inter-font-family-400 font-size-14 text-color-dark-grayish-blue" for="checkbox2">
                                        Out Of Stock
                                    </label>
                                </div>

                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1" onClick={handleAccordionClick} className="my-3 mx-2 rounded-3 border-0">
                            <Accordion.Header>
                                <span className="inter-font-family-500 font-size-18 text-color-dark-grayish-blue">
                                Price
                                </span>
                                </Accordion.Header>
                            <Accordion.Body>
                                {/* <label for="customRange1" class="form-label"></label> */}
                                <input type="range" min="0" value={value}
                                    onChange={handleChange}
                                    max="100" class="customRange1" id="customRange1" />
                                <div className="d-flex justify-content-between">
                                    <p className="inter-font-family-500 font-size-14 text-color-terracotta "> ₹ 0</p>
                                    <p className="inter-font-family-500 font-size-14 text-color-terracotta "> ₹ 2999</p>
                                </div>

                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="2" onClick={handleAccordionClick} className="my-3 mx-2 rounded-3 border-0">
                            <Accordion.Header>
                                <span  className="inter-font-family-500 font-size-18 text-color-dark-grayish-blue">
                                Category
                                </span>
                                </Accordion.Header>
                            <Accordion.Body>
                                <div>
                                    {CategoryData.map((checkbox) => (
                                        <div className="form-check" key={checkbox.id}>
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id={checkbox.id}
                                                value={checkbox.value}
                                            />
                                            <label className="form-check-label inter-font-family-400 font-size-14 text-color-dark-grayish-blue" htmlFor={checkbox.id}>
                                                {checkbox.label}
                                            </label>
                                        </div>
                                    ))}
                                </div>

                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="3" onClick={handleAccordionClick} className="my-3 mx-2 rounded-3 border-0">
                            <Accordion.Header>
                                <span className="inter-font-family-500 font-size-18 text-color-dark-grayish-blue">
                                Variants
                                </span>
                                </Accordion.Header>
                            <Accordion.Body>
                                <div>
                                    {VarientData.map((checkbox) => (
                                        <div className="form-check" key={checkbox.id}>
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id={checkbox.id}
                                                value={checkbox.value}
                                            />
                                            <label className="form-check-label inter-font-family-400 font-size-14 text-color-dark-grayish-blue" htmlFor={checkbox.id}>
                                                {checkbox.label}
                                            </label>
                                        </div>
                                    ))}
                                </div>


                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>



                    {/* Apply Button */}
                    <li className="mt-5 mb-0 fixed-bottom">
                        <button className="border-0 rounded-bottom py-2 text-white filter-btn w-100">Apply</button>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default FilterDropDown;
