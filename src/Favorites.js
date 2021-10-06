import React from 'react';
import { Container, Button } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
    .favorites {
        display: flex;
        align-items: center;
        min-height: 40vh;
        justify-content: center;
        text-align: center;
        background: #f5f5f5;
    }
    .mb {
        margin-bottom: 1.5rem;
    }
`;



export const Favorites = () => {
    return (
        <Styles>
            <div className="favorites">
                <div>
                    <h1 className="mb">My Favorites</h1>

                    <p className="mb">Want to save the items you love? Just click on the heart icon found on the product image and it will show up here.</p>
                    <Button variant="outline-dark" size="lg" type="button">Browse Now</Button>


                </div>
            </div>
        </Styles>

    )
}
