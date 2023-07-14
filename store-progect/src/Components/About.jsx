import Header from "./Header";
import Footer from "./Footer"

export default function About(){
    return(
        <div>
            <Header/>
            <div className="about-body">
                <div className="about-Tit">
                    <h1>About Store.com</h1>
                    <hr />
                </div>
                <div className="about-dis">
                    <img src="https://static.wixstatic.com/media/c837a6_57c256d2c7474590a3f295bad576b0a1~mv2.jpg/v1/fill/w_825,h_843,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_57c256d2c7474590a3f295bad576b0a1~mv2.jpg" alt="img-about" />

                    <p>
                        Stor is the new online e-commerce store - a
                        continuously envolving shopping centre online
                        just like in any shopping centre. there's always
                        something fresh and exciting.
                        <br /><br />
                        We believe the best way deliver a great user experience is by
                        deeply understanding want and love.
                        then deliver the feature,messages, and content that
                        are most helpful relevant and timely.
                        that's what makes users happy and loyal.
                    </p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}