import React from "react";
import contact from "../../images/contact.jpg";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";
import "./Contacts.css";
// import "animate.css";
const Contacts = () => {
    return (
        <div className='container-fluid contact-section'>

            <Navigation/>
            <h1 className="h1">Contact With Me</h1>
            <div className="row container mt-5 align-items-center">
                <div data-aos="zoom-in-right" className="col-md-6 animate__fadeInLeft">
                    <img src={contact} className="img-fluid" alt="" />
                </div>
                <div className="col-md-6 form-container">
                    <form
                        className="contact-form"
                        action="https://formsubmit.co/khurshidulalam5@gmail.com"
                        method="POST"
                    >
                        <input
                            placeholder="enter your name"
                            type="text"
                            name="name"
                            data-aos="fade-left"
                            required
                        />
                        <input
                            placeholder="enter your email"
                            type="email"
                            name="email"
                            data-aos="fade-up-right"
                            required
                        />
                        <input
                            type="hidden"
                            name="_next"
                            data-aos="fade-down-left"
                            value="http://localhost:3000/submit/success"
                        />
                        <textarea
                            name="message"
                            id="message"
                            cols="10"
                            rows="8"
                            placeholder="enter your message"
                            data-aos="flip-up"
                            required
                        ></textarea>
                        <button type="submit" className="btn contact-btn ms-2">
                            Send
                        </button>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Contacts;