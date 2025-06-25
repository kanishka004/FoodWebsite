import React from 'react'
import { FaCirclePlay } from "react-icons/fa6";
import aboutbg from '../assets/about-background-image.png';

const About = () => {
    return (
        <>
            <section className="about">
                <img src={aboutbg} className='about-img' alt="" />
                <div className="about-container">
                <h3 className='about-head'>About</h3>
                <div className="about-heading">
                    <h1>Food Is An Important</h1>
                    <h1>Part Of A Balanced</h1>
                    <h1>Diet</h1>
                </div>
                <div className="about-para">
                    <p className='a-para'>Lorem ipsum dolor sit amet consectetur. Non tincidunt
                        magna non et elit. Dolor  turpis molestie dui
                        magnis facilisis at fringilla quam magna non et elir gcisse derum.</p>
                    <p>Non tincidunt magna non et elit. Dolor turpis molestie
                        dui magnis facilisis at fringilla quam.</p>
                </div>
                <div className="about-btns">
                <button className='learn-btn'>Learn more</button>
                <button className='video-btn'><FaCirclePlay className='video-icon'/> Watch Video</button>
                </div>
                </div>
            </section>
        </>
    )
}

export default About