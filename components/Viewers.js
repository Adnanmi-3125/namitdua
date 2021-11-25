import React from 'react'
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Viewers() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4
    }

    return (
        <>
            <Heading id="products">
                Products
            </Heading>
            <Container {...settings}>
                <div>
                    <Wrap>
                        <img src="/images/bosch5.jpeg" />
                    </Wrap>
                    <Text>
                        <p style={{ color: 'white' }}>Bosch GBH220 Professional Rotary Hammer</p>
                    </Text>
                </div>

                <div>
                    <Wrap>
                    <img src="/images/bosch12.jpeg" />
                    </Wrap>
                    <Text>
                        <p style={{ color: 'white' }}>Bosch Easy Aquatak 100 High-pressure washer</p>
                    </Text>
                </div>

                <div>
                    <Wrap>
                        <img src="/images/bosch6.jpeg" />
                    </Wrap>
                    <Text>
                        <p style={{ color: 'white' }}>Black and Decker KW712 Wood Planer</p>
                    </Text>
                </div>

                <div>
                    <Wrap>
                        <img src="/images/bosch7.jpeg" />
                    </Wrap>
                    <Text>
                        <p style={{ color: 'white' }}>Dewalt DCD 776C2 18V Lithium-Ion 13mm Hammer Drill/ Driver</p>
                    </Text>
                </div>

                <div>
                    <Wrap>
                        <img src="/images/bosch8.jpeg" />
                    </Wrap>
                    <Text>
                        <p style={{ color: 'white' }}>Black and Decker KC4815 IN Cordless Screw Driver Kit </p>
                    </Text>
                </div>

                <div>
                    <Wrap>
                        <img src="/images/bosch9.jpeg" />
                    </Wrap>
                    <Text>
                        <p style={{ color: 'white' }}>Bosch GKF 550 Palm Router</p>
                    </Text>
                </div>

                <div>
                    <Wrap>
                        <img src="/images/bosch10.jpeg" />
                    </Wrap>
                    <Text>
                        <p style={{ color: 'white' }}>Diamond Tile Cutting Disc- 4 Inch</p>
                    </Text>
                </div>

                <div>
                    <Wrap>
                        <img src="/images/bosch11.jpeg" />
                    </Wrap>
                    <Text>
                        <p style={{ color: 'white' }}> Bosch TCT Wood Circular Saw Blade</p>
                    </Text>
                </div>

                {/* <Wrap>
                    <img src="/images/bosch12.jpeg" />
                </Wrap>
                <Wrap>
                    <img src="/images/bosch6.jpeg" />
                </Wrap>
                <Wrap>
                    <img src="/images/bosch7.jpeg" />
                </Wrap>

                <Wrap>
                    <img src="/images/bosch8.jpeg" />
                </Wrap>
                <Wrap>
                    <img src="/images/bosch9.jpeg" />
                </Wrap>
                <Wrap>
                    <img src="/images/bosch10.jpeg" />
                </Wrap>
                <Wrap>
                    <img src="/images/bosch11.jpeg" />
                </Wrap> */}
            </Container>
        </>
    )
}
export default Viewers;

const Heading = styled.h1`
    color: white;
    margin-left: 10px;
`;


const Container = styled(Slider)`
display:flex;
/* flex-direction: row;
flex-wrap: wrap;
justify-content: space-between; */
/* display: grid; */
/* grid-template-columns: repeat(0, minmax(4, 1fr)); */
/* grid-gap: 25px; */
padding: 10px 0 26px;


.slick-next {
    overflow: visible;
    margin-right: 3rem;
}

button[type="button"] {
    z-index: 1;
    margin-left: 2rem;
    background-color: black;
    border-radius: 100%;
} 



@media screen and (max-width: 1024px) {
    button {
        margin-top: -5rem;
    } 
}

@media screen and (max-width: 550px) {
    button {
        margin-top: -7.5rem;
    } 
}


`;



const Wrap = styled.div`
border-radius: 15%;
margin-left: 40px;
width: 15vw;
cursor: pointer;
border: solid 3px rgba(249, 249, 249, 0.1);
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;

@media screen and (max-width: 900px) {
   
   margin-left: 35px;  
}

@media screen and (max-width: 770px) {
   
   margin-left: 30px;  
}


@media screen and (max-width: 700px) {
   
       margin-left: 15px;  
}
@media screen and (max-width: 425px) {
   
   margin-left: 10px;  
}
img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    margin:auto;
    border-radius: 10%;
    /* border: 1px solid black; */
}

&:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 73%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    transition: 250ms;
}


`;

const Text = styled.div`
    margin-left: 50px;
    width: 60%;
    text-align: justify;
    padding : 0;
    
    line-height : 20px;

    @media screen and (max-width: 425px) {
        margin-left: 15px;
}
`;