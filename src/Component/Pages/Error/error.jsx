import React from 'react'


// Import images
import TopImg from "../../Assets/img/error-img/top-img.png";
import BottomImg from "../../Assets/img/error-img/bottomside-img.png";
import ErrorImg from "../../Assets/img/error-img/error.png"
import { NavLink } from 'react-router-dom';


const Error = () => {
    return (
        <>
            <div className='bg-custom-gradient-footer min-vh-100 d-flex align-items-center justify-content-center'>
                <div className='error-page'>
                    <div className="vector">
                        <img src={TopImg} alt="Loading" />
                    </div>
                    <div className="vector2">
                        <img src={BottomImg} alt="Loading" />
                    </div>
                </div>
                <div className='container d-flex flex-column align-items-center justify-content-center'>
                    <div className='error-img'>
                        <img src={ErrorImg} className='z-3' alt="Loading" />
                    </div>


                    <NavLink to={"/"}>
                        <button className='rounded-2 text-white px-4 py-2 border-0 error-btn mt-3 text-uppercase text-size-24 inter-font-family-500'>Go Home</button>
                    </NavLink>
                </div>

            </div>
        </>
    )
}

export default Error;