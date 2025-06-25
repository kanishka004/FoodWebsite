import React from 'react';
import pic from '../assets/image.png';
import { MdOutlineStarPurple500 } from "react-icons/md";

const Testimonial = () => {
    return (
        <>
            <div className="testimonial">
                <div className="test">
                    <h3 className='test-head'>Testimonial</h3>
                    <h1 className="test-heading">What They Are Saying</h1>
                    <p className="test-para">Lorem ipsum dolor sit amet consectetur. Non tincidunt
                        magna non et elit. Dolor  turpis molestie dui
                        magnis facilisis at fringilla quam.</p>
                </div>
                <div className="test-container">
                    <img className='test-img' src={pic} alt="" />
                    <p className="test-p">
                        Lorem ipsum dolor sit amet consectetur. Non tincidunt
                        magna non et elit. Dolor turpis molestie dui
                        magnis facilisis at fringilla quam.
                    </p>
                    <p className="star">
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    </p>
                    <p className="name">Jacob Adam</p>
                </div>
            </div>
        </>
    )
}

export default Testimonial