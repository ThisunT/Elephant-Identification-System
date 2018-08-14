import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// material-ui components
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";

import image1 from "../../../images/caro1.jpg";
import image2 from "../../../images/caro2.jpg";
import image3 from "../../../images/caro3.jpg";
import image4 from "../../../images/caro4.jpg";


class SectionCarousel extends React.Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 400,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true
        };
        return (
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <Carousel {...settings}>
                            <div>
                                <img
                                    src={image1}
                                    alt="First slide"
                                    className="slick-image"
                                />

                            </div>
                            <div>
                                <img
                                    src={image2}
                                    alt="Second slide"
                                    className="slick-image"
                                />
                            </div>
                            <div>
                                <img
                                    src={image3}
                                    alt="Third slide"
                                    className="slick-image"
                                />
                            </div>
                            <div>
                                <img
                                    src={image4}
                                    alt="Third slide"
                                    className="slick-image"
                                />
                            </div>
                        </Carousel>
                    </Card>
                </GridItem>
            </GridContainer>
        );
    }
}

export default SectionCarousel;