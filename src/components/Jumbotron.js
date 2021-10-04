import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from 'styled-components';
import bannerImage from '../assets/bannerImage.jpg';


const Styles = styled.div`

    .jumbo {
        position: relative;
        background: url(${bannerImage});
        height: 400px;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        display: flex;
        align-items: center;
       
    }

    .overlay {
        width: 100%;
        height: 100%;
        position: absolute;
        background: rgba(255,255,255,0.2);
    }

    .jumbo-text {
        width: 80%;
        margin-left: auto;
    }

    .jumbo-text h1, .jumbo-text p {
        color: black;
    }
`;

export const Jumbotron = () => {
    return (
        <Styles>
            <Jumbo fluid className="jumbo">
                <div className="overlay"></div>
                <Container className="jumbo-text">
                    <h1>Welcome</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </Container>
            </Jumbo>

        </Styles>
    )
}