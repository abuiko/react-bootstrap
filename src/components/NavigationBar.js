import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import styled from "styled-components";

const Styles = styled.div`

    .navbar {
        background-color: #fff;
    }
    .ml-auto {
        margin-left: auto;
    }
    .navbar-brand, .navbar-nav, .nav-link {
        color: #000;

        &:hover {
            color: #bbb;
        }
    }
    
`;


export const NavigationBar = () => {
    return (
        <Styles>
            <Navbar expand="lg" className="navbar p-4">
                <Navbar.Brand href="/">Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Item><Nav.Link className="nav-link" href="/user"> <FontAwesomeIcon icon={faUserAlt} /></Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link className="nav-link" href="/favorites"><FontAwesomeIcon icon={faHeart} /></Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link className="nav-link" href="/basket"><FontAwesomeIcon icon={faShoppingCart} /></Nav.Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styles>
    )
}