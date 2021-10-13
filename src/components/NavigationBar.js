import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import Logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


const Styles = styled.div`

    .navbar {
        background-color: #fff;
        padding: 1.2rem 1rem 1rem;      
    }
    .ml-auto {
        margin-left: auto;       
    }
    .logo {
        width: 2.6rem;
    }
    .nav-link {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-left: 3rem;        
    }
    .nav-link p {
        font-size: 0.9rem;
        margin-top: 0.4rem;
        margin-bottom: 0rem;
        color: #000;
    }
    .navbar-brand, .navbar-nav, .nav-link {
        color: #000;

        &:hover {
            color: #bbb;
        }
    }
    .fa-icon {
        font-size: 1.2rem;
        color: #000;
    }
    
`;


export const NavigationBar = () => {
    return (
        <Styles>
            <Navbar expand="lg" className="navbar">
                <Navbar.Brand href="/"><img className="logo" src={Logo} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Item>
                            <Nav.Link className="nav-link" href="/user">
                                <FontAwesomeIcon className="fa-icon" icon={faUserAlt} />
                                <p>Sign In</p>
                            </Nav.Link>

                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="nav-link" href="/favorites">
                                <FontAwesomeIcon className="fa-icon" icon={faHeart} />
                                <p>Favorites</p>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="nav-link" href="/basket">
                                <FontAwesomeIcon className="fa-icon" icon={faShoppingCart} />
                                <p>Shopping Cart</p>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styles>
    )
}