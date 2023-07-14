import Header from "./Header";
import Slider from "./Slider";
import Footer from "./Footer";
import "../slider.css";
import Category from "./Category";

function Page() {
    return (
        <div className="Page">
            <Header />
            <Slider />
            <Category />
            <Footer />
        </div>
    );
}

export default Page;
