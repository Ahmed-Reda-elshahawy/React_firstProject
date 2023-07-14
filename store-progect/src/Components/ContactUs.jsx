import Header from "./Header"
import Footer from "./Footer"
import { IoCallOutline } from "react-icons/io5";
// import { BiMessageDetail } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { MdOutlineEmail } from "react-icons/md";

export default function ContactUs() {
    return (
        <>
            <Header />
            <div className="ContactUs-content">
                <div className="title-two">
                    <h4>Contact us options</h4>
                </div>
                <div className="contactus-cards">
                    <div className="contact-card-con">
                        <h2> <span className="con-icon"><IoCallOutline /></span> Call Us</h2>
                        <h4>(020) 1009797821</h4>
                    </div>
                    <div className="contact-card-con">
                        <h2> <span className="con-icon"><MdOutlineEmail /></span> Send E-mail</h2>
                        <a href="https://myaccount.google.com/email"> <h4>Ahmed92.5Elshahawy@gmail.com</h4> </a>
                    </div>
                    <div className="contact-card-con">
                        <h2> <span className="con-icon"><GoLocation /></span> Our Location</h2>
                        <h4>Alexandria doson</h4>
                    </div>
                </div>
                <div className="p-contact">
                    <p>We are here to help you</p>
                </div>
            </div>
            <Footer />
        </>
    )
}