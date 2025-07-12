import React from 'react'

// Import Common Components
import Navbar from "../../Common/Navbar";
import Footer from "../../Common/Footer";
import Accordion from 'react-bootstrap/Accordion';
import ArrowLight from "../../Assets/img/ProductDescription/arrow-light.png";
import ArrowDark from "../../Assets/img/ProductDescription/arror-dark.png";
const Faq = () => {
    return (
        <>
            <section>
                <div className="bg-custom-gradient-product">
                    <Navbar />
                    <div className="container pt-5 text-light-gray-color font-size-40 josefin-sans-font-family-500 ">
                        <span className="text-dark">FAQ's</span>
                    </div>
                </div>
                <div className="background-color-light-grayish-yellow py-5">
                    <div className="container pb-5">
                        <Accordion>
                            <Accordion.Item eventKey="0" className='mb-5 rounded-3'>
                                <Accordion.Header className='faq-header josefin-sans-font-family-600'>What is Rajlaxmi?</Accordion.Header>
                                <Accordion.Body className='font-size-16 faq-body inter-font-family-500'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1" className='mb-5 rounded-3'>
                                <Accordion.Header className='faq-header josefin-sans-font-family-600'>What services/products does Rajlaxmi offer?</Accordion.Header>
                                <Accordion.Body className='font-size-16 faq-body inter-font-family-500'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2" className='mb-5 rounded-3'>
                                <Accordion.Header className='faq-header josefin-sans-font-family-600'>How can I place an order or request a service?</Accordion.Header>
                                <Accordion.Body className='font-size-16 faq-body inter-font-family-500'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="3" className='mb-5 rounded-3'> 
                                <Accordion.Header className='faq-header josefin-sans-font-family-600'>What are the payment options available?</Accordion.Header>
                                <Accordion.Body className='font-size-16 faq-body inter-font-family-500'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4" className='mb-5 rounded-3'>
                                <Accordion.Header className='faq-header josefin-sans-font-family-600'>What is the estimated delivery time for products/services?</Accordion.Header>
                                <Accordion.Body className='font-size-16 faq-body inter-font-family-500'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5" className='mb-5 rounded-3'>
                                <Accordion.Header className='faq-header josefin-sans-font-family-600'>Do you offer returns or exchanges?</Accordion.Header>
                                <Accordion.Body className='font-size-16 faq-body inter-font-family-500'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="6" className='mb-5 rounded-3'>
                                <Accordion.Header className='faq-header josefin-sans-font-family-600'>How can I track my order?</Accordion.Header>
                                <Accordion.Body className='font-size-16 faq-body inter-font-family-500'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                    </div>
                </div>

                <Footer />
            </section>
        </>
    )
}

export default Faq;