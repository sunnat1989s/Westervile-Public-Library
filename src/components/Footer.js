import React from 'react'
import './Footer.css'
import { BiChevronRight } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";



const Footer = () => {
    return (

        <div className='footer'>
            <div className="footer_top">
                <div className="footer_top-left">
                    <p className="footer_top-text">Westervile Public Library</p>
                    <h5 className="footer_top-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
                    </h5>
                </div>
                <div className="footer_top-center">
                    <div className="input_div">
                        <input type="email" placeholder='Enter your email addres' className='input_left' />
                        <button className='button'><BiChevronRight /></button>
                    </div>
                </div>
                <div className="footer_top-right">

                    <p className='footer_icons'><BsInstagram /></p>
                    <p className='footer_icons'><BsFacebook /></p>
                    <p className='footer_icons'><BsTelegram /></p>
                </div>
            </div>
            <div className="footer_line"></div>

                <div className="footer_midle">
                    <div className="footer_cards">
                        <h3 className="footer_middle-title">
                            TOFINO RESORT + MARINA
                        </h3>
                        <p className="footer_midle-text">
                            634 campbell St <br /> tofino BC
                        </p>
                        <p className="footer_midle-text">
                            P 90165556 <br /> saydaliyevs@gmail.com
                        </p>
                        <button className='footer_midle-button'>BOOK NOW</button>
                    </div>

                    <div className="footer_cards">
                        <h3 className="footer_middle-title">
                            TOFINO RESORT + MARINA
                        </h3>
                        <p className="footer_midle-text">
                            634 campbell St <br /> tofino BC
                        </p>
                        <p className="footer_midle-text">
                            P 90165556 <br /> saydaliyevs@gmail.com
                        </p>
                        <button className='footer_midle-button'>RESERVE A TABLE</button>
                    </div>

                    <div className="footer_cards">
                        <h3 className="footer_middle-title">
                            TOFINO RESORT + MARINA
                        </h3>
                        <p className="footer_midle-text">
                            634 campbell St <br /> tofino BC
                        </p>
                        <p className="footer_midle-text">
                            P 90165556 <br /> saydaliyevs@gmail.com
                        </p>
                        <button className='footer_midle-button'>CHOOSE YOUR AVENTURE</button>
                    </div>
                </div>
        </div>
    )
}

export default Footer