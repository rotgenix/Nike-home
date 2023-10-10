import React from 'react'
import flipakrt from '../images/flipkart.png'
import amazon from '../images/amazon.png'
import shoe from '../images/shoe_image.png'


const MainSection = () => {
    return (
        <>
            <div className="main-section">

                <div className="text-container">
                    <h1>
                        YOUR FEET
                        DESERVE
                        THE BEST
                    </h1>
                    <p className='tagline'>
                        YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
                    </p>

                    <div className="btns">
                        <button className='shop-now'>Shop Now</button>
                        <button className='category'>Category</button>
                    </div>

                    <div className="available">
                        <p className='av-p'>Also available on</p>
                        <br />
                        <div className="apps">
                            <img src={flipakrt} alt="" />
                            <img src={amazon} alt="" />
                        </div>
                    </div>
                </div>
                <div className="img-container">
                    <img src={shoe} alt="" />
                </div>
            </div>

        </>
    )
}

export default MainSection