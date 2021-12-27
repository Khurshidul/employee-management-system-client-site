import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
    return (
        <div className="footer">
            <div className = "footer-icon">
                <h1 className="footer-title">Employee Management</h1>
                <i className="fab fa-facebook-square"></i>
                <i className="fab fa-instagram-square"></i>
                <i className="fab fa-twitter-square"></i>
                <i className="fab fa-whatsapp-square"></i>
                <p>It's a personal project of our company.</p>
               
                
            </div>
            <div className="footer-menu">
                <br /><br />
                <NavLink style={{textDecoration: 'none'}} to = "/home">Home</NavLink>
                <br />
                <br />
                <NavLink style={{textDecoration: 'none'}} to = "/services">Features</NavLink>
                <br />
                <br />
                <NavLink style={{textDecoration: 'none'}} to = "/admin">Admin</NavLink>
                <br />
                <br />
                <NavLink style={{textDecoration: 'none'}} to = "/news">News</NavLink>

            </div>
            <div className="contact-item">
                <h4 className="text-primary">Sign Up for the newsletter</h4>
                <label htmlFor="email">Email:   
                <input type="email" name="email" placeholder="Enter your email" id="" />
                </label>
                <p><i class="fas fa-phone-square-alt"></i> <span className="text-light">:01851*****</span> </p>
                <p><i class="fas fa-map-marked-alt"></i> <span className="text-white">: D.T Sagorika,Pahartali,  <br/> Chittagong,Bangladesh</span> </p>
            </div>
        </div>
    );
};

export default Footer;