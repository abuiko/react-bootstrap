import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
    .container {
        max-width: 1400px;
        padding: 0;
        margin: auto;
    }

`;
export const Layout = (props) => {
    return (
        <Styles>
            <Container className="container">
                {props.children}
            </Container>
        </Styles>

    )
}