import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyCheck } from '@fortawesome/free-solid-svg-icons';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { faRedo } from '@fortawesome/free-solid-svg-icons';


const Styles = styled.div`
    .container {
        padding: 5.5rem 0.7rem;
        
    }
    .footer-icons {
        display: flex;
        justify-content: space-around;
        align-items: center;      
    }
    .f-icon-group {
        text-align: center;
    }
    .footer-icon {
        font-size: 1.5rem;
        margin-bottom: 1.2rem;
    }
    .f-icon-group h3 {
        font-size: 1.3rem;
        letter-spacing: 0.1rem;
    }
    .f-icon-group p {
        font-size: 0.9rem;
    }

    @media only screen and (max-width: 500px) {
        .footer-icon {
            font-size: 1.2rem;
        }
        .f-icon-group h3 {
            font-size: 1.1rem;
        }
        .container {
            padding: 2.5rem 0.7rem;
        }
    }


`;

export const Footer = () => {
    return (
        <Styles>
            <div className="container">
                <Row className="footer-icons">
                    <Col sm className="f-icon-group">
                        <FontAwesomeIcon className="footer-icon" icon={faMoneyCheck} />
                        <h3>Payment</h3>
                        <p>Choose from different payment methods</p>
                    </Col>

                    <Col sm className="f-icon-group">
                        <FontAwesomeIcon className="footer-icon" icon={faTruck} />
                        <h3>Shipping</h3>
                        <p>Standard delivery 3 working days</p>
                    </Col>
                    <Col sm className="f-icon-group">
                        <FontAwesomeIcon className="footer-icon" icon={faRedo} />
                        <h3>Returns</h3>
                        <p>Return by mail during 30 days after purchase</p>
                    </Col>

                </Row>
            </div>

        </Styles>

    )
}