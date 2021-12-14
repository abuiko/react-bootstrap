import React from "react";
import { Link } from 'react-router-dom'
import { Nav, Navbar, Image, Container, Form, FormControl, InputGroup } from "react-bootstrap";
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
    .container {
        padding: 0;
    }
    .navbar {
        background-color: #fff;
        padding: 1.6rem 2rem 1.6rem;
      
        &__search__icon {
            background: transparent;
            border: none;
        }
        &__input {
            border: none;
        }
        &__logo {
            width: 2.6rem;   
                    
        }

        &__brand {
            margin: 0;
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
    @media only screen and (max-width: 920px) {
        .navbar__search {
            display: none;
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
                <div className="container">


                    <Form className="navbar__search">
                        <InputGroup>
                            <InputGroup.Text className="navbar__search__icon"><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
                            <FormControl className="navbar__input" placeholder="Search products" />
                        </InputGroup>
                    </Form>
                </div>
                <div className="text-center">

                    <Link to="/">
                        <Navbar.Brand className="navbar__brand">
                            <Image src={Logo} className="navbar__logo" />
                        </Navbar.Brand>
                    </Link>

                </div>
                <Container fluid className="p-0">

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">


                        <Nav className="ml-auto p-0">
                            <Nav.Item>

                                <Nav.Link as={Link} to="/user" className="navbar__link">

                                    <FontAwesomeIcon className="navbar__icon" icon={faUserAlt} />

                                </Nav.Link>

                            </Nav.Item>
                            <Nav.Item>

                                <Nav.Link as={Link} to="/favorites" className="navbar__link">

                                    <FontAwesomeIcon className="navbar__icon" icon={faHeart} />

                                </Nav.Link>

                            </Nav.Item>
                            <Nav.Item>

                                <Nav.Link as={Link} to="/basket" className="navbar__link">

                                    <FontAwesomeIcon className="navbar__icon" icon={faShoppingCart} />

                                </Nav.Link>


                            </Nav.Item>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </Styles >
    )
}