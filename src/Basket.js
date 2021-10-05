import React from 'react';
import { Container, Col, Row, Button, Image } from "react-bootstrap";
import styled from "styled-components";
import Amex from "./assets/amex.png";
import American from "./assets/american-express.png";
import Paypal from "./assets/paypal.png";
import Visa from "./assets/visa.png";

const Styles = styled.div`
    .total-area {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1.5rem;
    }
    .gray-bg {
        background: #EBF2FA;
        padding: 1.5rem;
    }
    .bank-logos {
        display: flex;
        
    }
    .banks {
        margin-top: 1rem;
    }
    .bank-logos {
        margin: 1rem 0rem;
    }
    .b-logo {
        width: 50px;
        height: 50px;
        margin-right: 2rem;
    }
`;


export const Basket = () => {
    return (

        <Styles>
            <Container>
                <Row>
                    <Col md="6" sm="12">
                        <h2>YOUR SHOPPING BAG IS EMPTY!</h2>
                        <p>Sign in/Become a member to save or access saved items in your shopping bag.</p>
                        <a href="/" className="text-dark signin-btn">Sign in/Become a member</a>
                    </Col>
                    <Col md="6" sm="12" className="gray-bg">
                        <Button type="button" variant="outline-dark" size="lg">Sign in/Become a member</Button>
                        <hr />
                        <div className="total-area">
                            <h4>Total</h4>
                            <h4 id="total">0.00$</h4>
                        </div>
                        <Button type="button" variant="secondary" size="lg">Continue to Checkout</Button>
                        <div className="banks">
                            <p>We accept</p>
                            <div className="bank-logos">
                                <Image src={American} className="b-logo" />
                                <Image src={Visa} className="b-logo" />
                                <Image src={Paypal} className="b-logo" />
                                <Image src={Amex} className="b-logo" />

                            </div>
                            <p>The estimated tax will be confirmed once you added your shipping address in checkout.</p>
                        </div>

                    </Col>
                </Row>

            </Container>
        </Styles>

    )
}
