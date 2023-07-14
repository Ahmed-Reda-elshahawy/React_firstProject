import Carousel from 'react-bootstrap/Carousel';
import img1 from "../../public/images/7.jpg"
import img2 from "../../public/images/10.jpg"
import img3 from "../../public/images/6.jpg"
import '../slider.css';

function CarouselFadeExample() {
    return (
        <div className='suit-height'>
            <Carousel fade className='slider'>
                <Carousel.Item>
                    <img
                        className="d-block w-100 wh"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Welcome to our site</h3>
                        <p>You can buy what you need with low cost.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 wh"
                        src={img2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Welcome to our site</h3>
                        <p>buy your devies now.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 wh"
                        src={img3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Welcome to our site</h3>
                        <p>You can buy phone , tablet and your laptop from here.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className='alert'></div>
        </div>
    );
}

export default CarouselFadeExample;