import React from 'react'
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImgSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }
    
    return (
        <Carousel {...settings}>
            <Wrap>
<img src="/images/bosch4.jpeg"/>
            </Wrap>
            {/* <Wrap>
<img src="/images/bosch2.jpeg"/>
            </Wrap> */}
            {/* <Wrap>
<img src="/images/slider-scale.jpg"/>
            </Wrap>
            <Wrap>
<img src="/images/slider-scales.jpg"/>
            </Wrap> */}
        </Carousel>
    )
}

export default ImgSlider;

const Carousel = styled(Slider)`
margin-top: 20px;
max-width:98vw;

ul li button {
    &:before {
        font-size: 10px;
        color: white;        
    }
}
.slick-list {
    overflow: visible;
}

button {
    z-index: 1;
}
`;

const Wrap = styled.div`
cursor: pointer;
img {
    border: solid 4px transparent;
    height: 100%;
    width: 100%;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;

    &:hover {
        border: 4px solid rgba(249, 249, 249, 0.8);
    }

}

`;


