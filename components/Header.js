import React, {useState} from 'react'
import styled from 'styled-components'
import {Link} from 'react-scroll'

function Header() {

    const [isOpen, setisOpen] = useState(false)
    return (
        <Nav>
            <Logo href="">
                Tool<span>World</span>
            </Logo>
            <Hamburger onClick={() => setisOpen(!isOpen)}>
                <span />
                <span />
                <span />
            </Hamburger>
            <Menu isOpen={isOpen }>
            <Link activeClass="active" to="products" spy={true} smooth={true}>
            <MenuLink href="">Products</MenuLink>
            </Link>
            <br/>
            <Link activeClass="active" to="products" spy={true} smooth={true}> <MenuLink href="">About Us</MenuLink> </Link>
            <br/>
            <Link activeClass="active" to="contact" spy={true} smooth={true}> <MenuLink href="">Contact</MenuLink> </Link>
            </Menu>
        </Nav>

    )
}
export default Header

const Nav = styled.div`
padding: 0 2rem;
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
background: black; 
`;

const Hamburger = styled.div`
display: none;
flex-direction: column;
cursor: pointer;

span{
    height: 2px;
    width: 25px;
    background: white;
    margin-bottom: 4px;
    border-radius: 5px;
}
@media (max-width: 768px) {
    display: flex;
    
}
`;

const MenuLink = styled.a`
padding: 1rem 2rem;
cursor: pointer;
text-decoration: none;
align-items: center;
color: white;
transition: all 0.3s ease-in; 
font-weight: 600;
&:hover {
    color: red;
}
`;

const Menu = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
position: relative;

@media (max-width: 768px){
overflow: hidden;
flex-direction: column;
width: 100%;
max-height: ${({isOpen}) => (isOpen ? "300px" : "0")}};
transition: max-height 0.5s ease-in;


`;

const Logo = styled.a`
padding: 1.5rem 0;
text-decoration: none;
font-weight: 500;
font-size: 3.5rem;
color: purple;

span {
    font-weight: 150;
    font-size: 2.5rem;
    color: white;
}
`;

