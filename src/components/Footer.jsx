import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <section className="footer">
        <div className="foot1">
            <p>FOODIE</p>
            <ul className="social">
                <li><a href="https://x.com/"><FaTwitter /></a></li>
                <li><a href="https://www.linkedin.com/"><FaLinkedin /></a></li>
                <li><a href="https://www.youtube.com/"><FaYoutube /></a></li>
                <li><a href="https://www.facebook.com/"><FaFacebook /></a></li>
            </ul>
        </div>
        <div className="foot2">
            <ul>
                <li><a href="/">Quality</a></li>
                <li><a href="/">Help</a></li>
                <li><a href="/">Share</a></li>
                <li><a href="/">Carrers</a></li>
                <li><a href="/">Work</a></li>
                <li><a href="/">Testimonials</a></li>
            </ul>
        </div>
        <div className="foot3">
            <ul>
                <li>244-5333-7783</li>
                <li>hello@food.com</li>
                <li>press@food.com</li>
                <li>contact@food.com</li>
            </ul>
        </div>
        <div className="foot4">
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
        </div>
    </section>
    </>
  )
}

export default Footer