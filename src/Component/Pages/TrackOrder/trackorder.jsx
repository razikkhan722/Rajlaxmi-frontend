import React from 'react'


import Footer from '../../Common/Footer';
import Navbar from '../../Common/Navbar';

import ArrowLight from "../../Assets/img/ProductDescription/arrow-light.png";
import ArrowDark from "../../Assets/img/ProductDescription/arror-dark.png";
import { FaRegStar } from 'react-icons/fa';
import { useForm } from 'react-hook-form';


const TrackOrder = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        console.log('data: ', data);

    }

    return (
        <>
            <section>
                <div className="bg-custom-gradient-product pb-2">
                    <Navbar />


                    <div className=' py-3 d-flex justify-content-center align-items-center'>
                        <div className='container d-flex justify-content-center pt-5 padding-bottom-100'>

                            <form onSubmit={handleSubmit(onSubmit)} className='track'>
                                <p className='font-size-32 josefin-sans-font-family-600 mt-5 text-center'>Track Your Order</p>
                                <p className='font-size-22 inter-font-family-400 text-center pb-3'>Check current status of your shipment</p>
                                <div className="">
                                    <label className="inter-font-family-500 font-size-12 product-qty d-block">
                                        Enter Order ID/Tracking ID
                                    </label>
                                    <input
                                        type="text"
                                        // placeholder='Enter your name here'
                                        // {...register("firstName", { required: "First name is required" })}
                                        className="feedback-input border-0 rounded-3  pb-3 pt-2 mt-1 px-3"
                                    />
                                    {/* {errors.firstName && <p className="text-danger">{errors.firstName.message}</p>} */}
                                </div>

                                <div>
                                    <button type='submit' className='background-color-terracotta w-100 mt-4 mb-5 text-color-white py-2 inter-font-family-500 font-size-16 rounded border-0'>Track</button>
                                </div>
                            </form>
                        </div>

                    </div>

                </div>



                <Footer />
            </section>
        </>
    )
}

export default TrackOrder;