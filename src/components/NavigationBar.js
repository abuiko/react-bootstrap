import React from "react";
import { Link } from 'react-router-dom'
import { Nav, Navbar, Image, Form, FormControl } from "react-bootstrap";
import styled from "styled-components";
import Logo from '../assets/icons/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const Styles = styled.div`
    .ml-auto {
        margin-left: auto;       
    }
    .navbar {
        background-color: #fff;
        padding: 1.6rem 2rem 1.6rem;  
        
        
        
        &__logo {
            width: 2.6rem;   
                    
        }

        
        &__link {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-left: 3rem; 

            p {
                font-size: 0.9rem;
                margin-top: 0.4rem;
                margin-bottom: 0rem;
                color: #000;
            }
        }
        &__icon {
            font-size: 1.5rem;
        color: #000;
        }
        &__brand, &__link, .nav {
            color: #000;
        }
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
            <Navbar expand="lg" className="navbar" fixed="top">
                <div className="navbar__search">
                    <FontAwesomeIcon className="navbar__icon" icon={faSearch} />
                </div>

                <Link to="/">
                    <Navbar.Brand className="navbar__brand">
                        <Image src={Logo} className="navbar__logo" />
                    </Navbar.Brand>
                </Link>



                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Item>

                            <Nav.Link className="navbar__link">
                                <Link to="/user">
                                    <FontAwesomeIcon className="navbar__icon" icon={faUserAlt} />
                                </Link>
                            </Nav.Link>

                        </Nav.Item>
                        <Nav.Item>

                            <Nav.Link className="navbar__link">
                                <Link to="/favorites">
                                    <FontAwesomeIcon className="navbar__icon" icon={faHeart} />
                                </Link>
                            </Nav.Link>

                        </Nav.Item>
                        <Nav.Item>

                            <Nav.Link className="navbar__link">
                                <Link to="/basket">
                                    <FontAwesomeIcon className="navbar__icon" icon={faShoppingCart} />
                                </Link>
                            </Nav.Link>


                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>


        </Styles>
    )
}