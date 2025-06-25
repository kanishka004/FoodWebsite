import React from 'react';
import meals from '../assets/pick-meals-image.png';
import choose from '../assets/choose-image.png';
import delivery from '../assets/delivery-image.png';

const Work = () => {
    return (
        <>
            <div className="work">
                <div className="work-content">
                    <h3 className='work-head'>Work</h3>
                    <h1 className='work-heading'>How It Works</h1>
                    <p className='work-para'>Lorem ipsum dolor sit amet consectetur. Non tincidunt
                        magna non et elit. Dolor  turpis molestie dui
                        magnis facilisis at fringilla quam.</p>
                </div>
                <div className="work-main">
                    <div className="work-main-content">
                        <img src={meals} alt="" className='work-main-img'/>
                        <h2 className='work-main-head'>Pick Meals</h2>
                        <p className='work-main-para'>Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.</p>
                    </div>
                    <div className="work-main-content">
                        <img src={choose} alt="" className='work-main-img'/>
                        <h2 className='work-main-head'>Choose How Often</h2>
                        <p className='work-main-para'>Lorem ipsum dolor sit amet consectetur. Maecenas orci et</p>
                    </div>
                    <div className="work-main-content">
                        <img src={delivery} alt="" className='work-main-img'/>
                        <h2 className='work-main-head'>Fast Deliveries</h2>
                        <p className='work-main-para'>Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Work