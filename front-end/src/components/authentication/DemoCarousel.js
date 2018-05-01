import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {


render() {
        return (

            <Carousel showArrows={false} showStatus={false} showThumbs={false} infiniteLoop={true} autoPlay={true} interval={1000}>

                <div>
                    <img className="landing-page"  src={require('../images/final.jpg')} />

                </div>
                <div>
                    <img className="landing-page" src={require('../images/finalversion.jpg')} />

                </div>
                <div>
                    <img className="landing-page" src={require('../images/caro4.jpg')} />

                </div>
            </Carousel>


        );
    }
}

//ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
export default DemoCarousel;

// Don't forget to include the css in your page

// Using webpack
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>