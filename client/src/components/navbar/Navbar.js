import React from 'react'
import "./navbar.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Navbar = () => {

    
    return (
        <div className="navbarBackground">
        <div className="navbarContainer">
        <Link to="/">

            <div className="titleContainer">
                {/* <img src ="./img/flipstars.png" style={{height:'180px', borderRadius:'100%', padding:'5px'}}/> */}
                <img src="/img/logo.PNG" style={{height:'80px'}}/>       
                <h1 className="companyTitle">FLIPSTARS</h1>
            {/* <p className="slogan">Wholesale Clearance</p> */}
            </div></Link>
            <div className="phoneContainer">
            <i class="fas fa-2x fa-phone phoneIcon"></i>
            <h2 className="phoneNumber">01254 111222</h2>
            </div>
        </div>
        </div>
    )
}

export default Navbar


