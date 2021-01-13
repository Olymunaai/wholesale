import React from 'react'
import "./footer.css"

const Footer = () => {
    return (
        <footer className="">
            <div className="footer">
            <div className="contactUs">
                <h3>Contact Us</h3>
                <ul className="contactInfo">
                    <li>Company Name or Number</li>
                    <li>Street Name</li>
                    <li>Locality</li>
                    <li>Postcode</li>
                    <br />
                    <li>Call: 01254 111222</li>
                    <li>email@email.com</li>
                </ul>
            </div>
            <div className="socialMediaContainer">
                <h3 className="socialMediaTitle">Follow us on Social Media</h3>
                <div className="socialMediaIcons">
                    <a href="!#" className="fbLink"><i class="fab fa-2x fa-facebook"></i></a>
                    <a href="!#" className="instaLink"><i class="fab fa-2x fa-instagram"></i></a>
                    <a href="!#" className="twitterLink"><i class="fab fa-2x fa-twitter"></i></a>
                </div>
            </div>
            </div>
            <p className="createdBy">Website designed and created by Brett Cahill</p>
        </footer>
    )
}

export default Footer
