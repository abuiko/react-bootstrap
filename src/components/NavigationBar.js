import React from "react";
import { Link } from 'react-router-dom'
import { Nav, Navbar, Image } from "react-bootstrap";
import styled from "styled-components";
import Logo from '../assets/icons/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


const Styles = styled.div`

    .navbar {
        background-color: #fff;
        padding: 1.2rem 2rem 1rem;      
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
        font-size: 1.5rem;
        color: #000;
    }
    @media only screen and (max-width: 500px) {
        .fa-icon {
            font-size: 1rem;
        }
    }
    
`;

export const NavigationBar = () => {
    return (
        <Styles>
            <Navbar expand="lg" className="navbar">
                <Link to="/">
                    <Navbar.Brand>
                        <Image src={Logo} className="logo" />
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Item>

                            <Nav.Link className="nav-link">
                                <Link to="/user">
                                    <FontAwesomeIcon className="fa-icon" icon={faUserAlt} />
                                </Link>
                            </Nav.Link>

                        </Nav.Item>
                        <Nav.Item>

                            <Nav.Link className="nav-link">
                                <Link to="/favorites">
                                    <FontAwesomeIcon className="fa-icon" icon={faHeart} />
                                </Link>
                            </Nav.Link>

                        </Nav.Item>
                        <Nav.Item>

                            <Nav.Link className="nav-link">
                                <Link to="/basket">
                                    <FontAwesomeIcon className="fa-icon" icon={faShoppingCart} />
                                </Link>
                            </Nav.Link>


                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styles>
    )
}