import React from 'react'
import './Header.css'
import { BsSearch } from "react-icons/bs";
import { AiOutlineDown} from "react-icons/ai";
import { GoCalendar } from "react-icons/go";



const Header = () => { 
    return (
        <header className="hedader_list">
            <nav className="navbar_top">
                <ul className="nav_list">
                    <li className="nav_item"><a href="#!" className="nav_link">Hour & location</a></li>
                    <li className="nav_item"><a href="#!" className="nav_link">Help</a></li>
                    <li className="nav_item"><a href="#!" className="nav_link">Log in/My WPL</a></li>
                </ul>
            </nav>
            <div className="header_midle">
                <div className="header_midle-left">
                    <img src="https://media.glassdoor.com/sqll/928184/westerville-public-library-squarelogo-1636704931334.png" alt="rasm" className="left_img" />
                    <h2 className="left_title">Westervile Public Library</h2>
                </div>
                <div className="header_midle-right">
                    <p className="right_text">Search the</p>
                    <input type="text" className='input' placeholder='Catalog' />
                    <p className="right_text">By</p>
                    <input type="text" className='input' placeholder='Keyword' />
                    <div className="righ_right">
                        <input type="search" className='search_input' />
                        <button className='search_btn'>< BsSearch /></button>
                    </div>
                </div>
            </div>
            <div className="header_bottom">
            <ul className="header_bottom-list">
                    <li className="header_bottom-item"><a href="#!" className="header_bottom-link">Books,Movies&More <span><AiOutlineDown/></span> </a></li>
                    <li className="header_bottom-item"><a href="#!" className="header_bottom-link">Services<span><AiOutlineDown/></span></a></li>
                    <li className="header_bottom-item"><a href="#!" className="header_bottom-link"> <span><GoCalendar/></span> Events</a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header