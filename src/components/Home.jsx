import React from 'react'
import Nav from './Nav';
import { FaArrowRight } from "react-icons/fa6";
import Bannerimg from "../assets/home-banner-image.png";

const Home = () => {
  return (
    <>
    <div className="home-page">
      <Nav />
      <section className='home-container'>
        <div className="home-content">
        <div className="home-heading">
          <h1>Your Favourite Food</h1>
          <h1>Delivered Hot &</h1>
          <h1>Fresh</h1>
        </div>
        <div className='home-info'>
          <p>Healthy switcher chefs do all the prep work, like</p>
          <p>peeding, chopping & marinating, so you can cook</p>
          <p>a fresh food.</p>
        </div>
        <button className='order-btn'>Order Now <FaArrowRight className='right-arrow-icon'/></button>
        </div>
      <img className='banner-image' src={Bannerimg} alt="" />
      </section>
      </div>
    </>
  )
}

export default Home