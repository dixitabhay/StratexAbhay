import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Subscribe from './Subscribe';
import '../css/Footer.css'


export default function Footer(props) {

    const dataToPass = "Subscribe to Our Newsletter";

    return (
        <footer className="bg-dark text-white py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        {/* <h3>Subscribe to Our Newsletter</h3> */}
                        <Subscribe propData={dataToPass} />
                        <p>Stay updated with our latest news and product releases.</p>
                    </div>
                    <div className="col-lg-4">
                        <h3>Follow Us</h3>
                        <ul className="list-unstyled social-icons">
                            <li><a href="#" className="social-icon"><FaFacebook className='react-icons' />Facebook</a></li>
                            <li><a href="#" className="social-icon"><FaInstagram className='react-icons' /> Instagram</a></li>
                            <li><a href="#" className="social-icon"><FaTwitter className='react-icons' /> Twitter</a></li>
                            <li><a href="#" className="social-icon"><FaYoutube className='react-icons' /> Youtube</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-4">
                        <h3>Contact Us</h3>
                        <p>Email : info@yourcompany.com</p>
                        <p>Phone : +1 (123) 456-7890</p>
                    </div>
                </div>
            </div>
        </footer>
    )
};
