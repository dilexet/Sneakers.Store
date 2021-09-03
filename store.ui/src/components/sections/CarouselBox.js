import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

import {carouselSteps} from "../../variables/carouselSteps";

const CarouselBox = () => {
    return (
        <Carousel>
            {carouselSteps.map((item, index) =>
                <Carousel.Item key={index}>
                    <img className='d-block w-100' src={item.imgPath} alt={item.label}/>
                </Carousel.Item>
            )}
        </Carousel>
    )
}

export default CarouselBox;