import React from 'react'
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from 'react-scroll';

const Nav = () => {
    return (
        <div className='nav-container'>
            <div className="logo">
                <img src="https://d-themes.com/wordpress/udesign/business-consulting-3/wp-content/uploads/sites/67/2023/01/d62-logo.png" alt="logo" />
            </div>
            <div className="links">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li>
                        <Link to="about" smooth={true} duration={500}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="testimonial" smooth={true} duration={500}>
                            Testimonials
                        </Link>
                    </li>
                    <li className='con'>
                        <Link to="contact" smooth={true} duration={500}>
                            Contact
                        </Link>
                    </li>
                    <li className='cart-icon'><a href="#"><MdOutlineShoppingCart /></a></li>
                    <button className='book'>Booking Now</button>
                </ul>
            </div>
        </div>
    )
}

export default Nav