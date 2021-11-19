import React from 'react';
import styled from 'styled-components';
import { Button, Container } from "react-bootstrap";


const Styles = styled.div`

    .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 50vh;
        text-align: center;
    }
    
    .no-match h2 {
        font-weight: normal;
    }
    .mb {
        margin-bottom: 2rem;
    }
`;

export const NoMatch = () => {
    return (
        <Styles>
            <Container className="wrapper">
                <div className="no-match">
                    <h2 className="mb">OOPS, SORRY WE CAN'T FIND THIS PAGE!</h2>
                    <p>Either something went wrong or the page doesn't exist anymore.</p>
                    <hr />
                    <Button type="button" variant="secondary" className="mt-4">HOME PAGE</Button>
                </div>
            </Container>

        </Styles>

    )
}
