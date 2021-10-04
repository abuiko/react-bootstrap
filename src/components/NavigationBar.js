import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`

    .navbar {
        background-color: #fff;
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
            <Navbar expand="lg" className="p-4">
                <Navbar.Brand href="/">Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Item><Nav.Link href="/user">User</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/favorites">Favorites</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/basket">Basket</Nav.Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styles>
    )
}