import React, { useState } from 'react'
import { MdCurrencyRupee } from 'react-icons/md';

// import Image
import Product1 from "../../Assets/img/ProductDescription/Rectangle 55.png";

// Json
const ProductCardData = [
    {
        image: Product1,
        name: "Organic Kabuli Chana",
        qty: "500gm",
        price: 2355,
    },
    {
        image: Product1,
        name: "Organic Kabuli Chana",
        qty: "500gm",
        price: 2355,
    },
    {
        image: Product1,
        name: "Organic Kabuli Chana",
        qty: "500gm",
        price: 2355,
    },
    {
        image: Product1,
        name: "Organic Kabuli Chana",
        qty: "500gm",
        price: 2355,
    },
    {
        image: Product1,
        name: "Organic Kabuli Chana",
        qty: "500gm",
        price: 2355,
    },
    {
        image: Product1,
        name: "Organic Kabuli Chana",
        qty: "500gm",
        price: 2355,
    },
]

const ProductCard = () => {

    // ===========
    // useState
    // ===========

    // useState for Add to Cart Button

    const [isAdded, setIsAdded] = useState(false);
    const [quantity, setQuantity] = useState(0);

    // ==============
    // function
    // ================

    // Handle Quantity Changes
    const increaseQuantity = () => setQuantity(quantity + 1);
    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        } else {
            setIsAdded(false); // Reset if quantity reaches 0
            setQuantity(0);
        }
    };
    return (
        <>
            <div className='row d-flex justify-content-center align-items-center'>
                {ProductCardData.map((product, index) => (
                    <div className='col-lg-2 col-md-4 col-sm-12 d-lg-block d-flex justify-content-lg-start justify-content-center'>
                        <div className="product-recommedation-cards background-color-white my-2 pb-0">
                            {/* <div className="d-flex  justify-content-center pt-2"> */}
                                <div className='d-flex justify-content-center pt-2'>
                                    {/* Product Image & Qty Selector */}
                                    <img src={product.image} alt="Loading" className="img-fluid" />
                                </div>
                                <div className='pt-2 pb-1 d-flex flex-column'>
                                    <span className='font-size-14 inter-font-family-600 text-color-dark-grayish-blue ms-2'>{product.name}</span>
                                    <span className="inter-font-family-400 product-qty font-size-14 ms-2 my-1">
                                       ({product.qty})
                                    </span>
                                </div>
                            {/* </div> */}


                            {/* Price & Add to Cart Button */}

                            <div className="d-flex justify-content-between">
                                <div className="ms-2 d-flex align-items-center">
                                    <MdCurrencyRupee className="" />
                                    <span className="inter-font-family-500 font-size-14 text-color-black">
                                        {product.price}
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
                                            }}
                                        >
                                            Add
                                        </button>
                                    </div>
                                ) : (
                                    <div>
                                        <div className="background-color-gleeful button-addtocard d-flex justify-content-around align-items-center">
                                            <div>
                                                <button
                                                    className="background-color-terracotta font-size-24 inter-font-family-500 d-flex justify-content-around align-items-center"
                                                    onClick={decreaseQuantity}
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
                                                    onClick={increaseQuantity}
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

                ))}

            </div>
        </>
    )
}

export default ProductCard;