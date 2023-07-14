import icon1 from "../../public/images/Visa.webp"
import icon2 from "../../public/images/PayPal.webp"
import icon3 from "../../public/images/brand-mastercard@3x.webp"
import icon4 from "../../public/images/brand-chinaunionpay@3x.webp"
import icon5 from "../../public/images/Discover.webp"
import { BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";


export default function Footer() {
    return (
        <footer className="footer">
            <h3>We accept the following paying methods</h3>
            <br />
            <div className="icons">
                <img src={icon1} alt="Icon payment" />
                <img src={icon2} alt="Icon payment" />
                <img src={icon3} alt="Icon payment" />
                <img src={icon4} alt="Icon payment" />
                <img src={icon5} alt="Icon payment" />
            </div>
            <div className="contactUS">
                <h5>contact us</h5>
                <div className="social-icons">
                    <a href="https://www.facebook.com/1622398364495125/posts/pfbid02nRtu3EoKQS8MsV3KfFFRdBomPDYrceayaBRtQ66cjbrVhC36DwiWEvRTg9AtWWkzl/" className="face"><BsFacebook /></a>
                    <a href="https://www.linkedin.com/feed/" className="linkdin"><BsLinkedin /></a>
                    <a href="https://twitter.com/home" className="twitter"><BsTwitter /></a>
                    <a href="https://www.youtube.com/" className="youtube"><BsYoutube /></a>
                </div>
            </div>
        </footer>
    )
}
