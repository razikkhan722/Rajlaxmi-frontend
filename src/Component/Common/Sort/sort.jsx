import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Sort from "../../Assets/img/Product/SlidersHorizontal.svg";

const sortOptions = [
    { id: 1, label: "Featured", color: "black" },
    { id: 2, label: "Best Selling", color: "black" },
    { id: 3, label: "Alphabetically", text: "(A-Z)", color: "red" },
    { id: 4, label: "Alphabetically", text : "(Z-A)", color: "red" },
    { id: 5, label: "Price", text: " (Low To High)", color: "red" },
    { id: 6, label: "Price", text: "(High To Low)", color: "red" },
    { id: 7, label: "Date", text:"(Old To New)", color: "red" },
    { id: 8, label: "Date",text: "(New To Old)", color: "red" },
];

const SortDropdown = () => {
    const [selected, setSelected] = useState(1); // Default: "Featured"

    const handleChange = (id) => {
        setSelected(id);
    };

    return (
        <div className="d-flex flex-column align-items-end">
            {/* Filter Button */}
            <div className="dropdown">
                <button
                    className="border-0 bg-transparent d-flex flex-column align-items-center"
                    type="button"
                    id="sortDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <img src={Sort} alt="Sort" className="sort-icon" />
                    <div className="text-center text-color-terracotta">Sort</div>
                </button>

                {/* Dropdown Menu */}
                <ul className="dropdown-menu sort-menu py-3 px-2" style={{ backgroundColor: "#fdf7de" }}>
                    <li className="filter-heading fw-medium text-heading pb-3 px-2">SORT BY</li>
                    {sortOptions.map((option) => (
                        <li key={option.id} className="d-flex align-items-center my-2 justify-content-between px-2">
                            <label
                                className="form-check-label text-color-dark-ashy-blue"
                                // style={{ color: option.color, fontWeight: "500" }}
                            >
                                {option.label} {" "}
                                <span className="sort-red-text">{option.text}</span>
                            </label>
                            <input
                                type="checkbox"
                                className="form-check-input me-2"
                                checked={selected === option.id}
                                onChange={() => handleChange(option.id)}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SortDropdown;
