import React from 'react'
import styled from "styled-components";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Facebook from "../assets/icons/facebook.png"
import Twitter from "../assets/icons/twitter.png"
import Instagram from "../assets/icons/instagram.png"
import Youtube from "../assets/icons/youtube.png"



const Styles = styled.div`
    
    .footer {
        padding: 6rem 0rem 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        &__menu {
            justify-content: center;
            display: flex;
            div:first-child {
                margin-right: 5rem; 
            }
            
            h4 {
                font-size: 1.1rem;
                margin-bottom: 1.3rem;
            }
            p {
                font-size: 0.9rem;
                
                color: #000;
            }
        }
        &__newsletter {
            text-align: left;
            h3 {                              
                line-height: 2.5rem;                
                font-size: 1.2em;
                letter-spacing: 0.1rem;
                margin-bottom: 1rem;
            }
            p {
                text-decoration: underline;
                font-size: 0.9rem;
                
                
            }
        }
        &__icons {
            width: 100%;
            text-align: center;
            margin-top: 3rem;
            
            img {
                width: 30px;
                margin: 1.4rem;                           
            }
            
        }
        &__rights {
            text-align: center;
            width: 80%;
            margin: auto;
            margin-top: 2rem;
            p {
                font-size: 0.8rem;
                
            }
        }
    }

    @media only screen and (max-width: 800px) {
        .footer__menu {
            order: 2;
            padding: 2rem;
        }
        .footer__newsletter {
            text-align: center;
            padding: 2rem;
            order: 1;
            h3 {
                line-height: 2rem;                
                font-size: 1.1em;
                letter-spacing: 0rem;
            }
        }
        .footer__icons {
            margin-top: 0rem;
            img {
                width: 25px;
                margin: 1.2rem;
            }
        }
    }
    @media only screen and (max-width: 300px) {
        .footer__menu {
            p {
                font-size: 0.7rem;
            }
        }
        .footer__icons {
            margin-top: 0rem;
            img {
                
                margin: 0.7rem;
            }
        }
    }
`;
function Footer() {
    return (

        <Styles>
            <div className="footer">
                <Container>
                    <Row>
                        <Col md="6" sm="12" className="footer__menu">
                            <div>
                                <h4>Shop</h4>
                                <Link to="/clothes" style={{ textDecoration: 'none' }}><p>Dresses</p></Link>
                                <Link to="/clothes" style={{ textDecoration: 'none' }}><p>Tops</p></Link>
                                <Link to="/clothes" style={{ textDecoration: 'none' }}><p>Bottoms</p></Link>
                            </div>
                            <div>
                                <h4>Menu</h4>
                                <Link to="/user" style={{ textDecoration: 'none' }}><p>My Account</p></Link>
                                <Link to="/favorites" style={{ textDecoration: 'none' }}><p>My Favorites</p></Link>
                                <Link to="/basket" style={{ textDecoration: 'none' }}><p>My Account</p></Link>
                            </div>
                        </Col>
                        <Col md="6" sm="12" className="footer__newsletter">
                            <h3>Sign up for our newsletter and get 10% off.</h3>
                            <p>Sign Up</p>
                        </Col>
                    </Row>
                    <Row>
                        <div className="footer__icons">
                            <img src={Facebook} alt="facebook" />
                            <img src={Twitter} alt="twitter" />
                            <img src={Instagram} alt="instagram" />
                            <img src={Youtube} alt="youtube" />
                        </div>
                    </Row>
                    <Row>
                        <div className="footer__rights">
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                            <p>© & Web Shop</p>
                        </div>


                    </Row>
                </Container>
            </div>
        </Styles>






    )
}

export default Footer
