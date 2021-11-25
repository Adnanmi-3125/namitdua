import React from 'react'
import styled from 'styled-components'

function About() {
    return (
        <>
            <Heading>About Us</Heading>
            <Text>
                Why do we use it?
            </Text>

            <Text>
                Why do we use it?
            </Text>

            <Text>
                Why do we use it?
            </Text>

            <Text>
                Why do we use it?
            </Text>
        </>
    )
}

export default About

const Heading = styled.h1`

margin-top:40px;
// text-align: center;
color: white;
padding: 0 1rem;

`;

const Text = styled.p`

text-align: justify;
margin-left:20px;
margin-right:20px;
color: white;
font-weight: 400;
// font-size: 50s0;

`;