import React from 'react';
import { Link } from "react-router-dom"
import { Footer } from '../components/Footer'
import { Row, Col, Button, Container } from "react-bootstrap";
import styled from "styled-components";
import Dress from "../assets/images/dress-main.jpeg";
import Jeans from "../assets/images/jeans.jpeg";
import Top from "../assets/images/tops.jpeg";


const Styles = styled.div`
   .banner {
        
        margin: 0.2rem;
        background-color: #28262B;
        padding: 1.5rem;
        color: #fff;
        text-align: center;
       
   }
   .banner h2 {
       font-size: 1.8rem;
       margin-bottom: 0rem;
       letter-spacing: 0.1rem;
   }
  
    .tops {
        
        background: url(${Top}) no-repeat;
        
    }
    .dresses {
        background: url(${Dress}) no-repeat;
        
    }
    .jeans {
        background: url(${Jeans}) no-repeat;     
    }

    .tops, .dresses, .jeans {
        height: 600px;
        background-size: cover;
        background-position: center;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin: 0.2rem;
    }   

    .tops h2, .dresses h2, .jeans h2 {
        font-size: 3.3rem;
        font-weight: bolder;
    }

    @media only screen and (max-width: 500px) {
        .tops, .dresses, .jeans {
            height: 450px;
        }
        .banner h2 {
            font-size: 1rem;
        }
        .tops h2, .dresses h2, .jeans h2 {
            font-size: 1.7rem;
            
        }
    }
`;

export const Home = () => {
    return (
        <Styles>
            <Container fluid className="img-container">
                <Row>

                    <Col className="banner">
                        <h2>Fall Sale: new price cuts added Up to 50% off can't-miss picks!</h2>
                    </Col>
                </Row>
                <Row>

                    <Col sm className="dresses">
                        <div>
                            <h2>Dresses</h2>
                            <p>Evening, Casual, Coctail.</p>
                            <Link to="/clothes"><Button type="button" variant="dark" size="lg">See More</Button></Link>
                        </div>
                    </Col>
                    <Col sm className="tops">
                        <div>
                            <h2>Tops</h2>
                            <p>Sweaters, Hoodies, Tees, Coats, Jackets.</p>
                            <Link to="/clothes"><Button type="button" variant="dark" size="lg">See More</Button></Link>
                        </div>
                    </Col>
                    <Col sm className="jeans">
                        <div>
                            <h2>Pants</h2>
                            <p>Jeans, Pant, Shorts, Skirts.</p>
                            <Link to="/clothes"><Button type="button" variant="dark" size="lg">See More</Button></Link>
                        </div>
                    </Col>

                </Row>
            </Container>
            {/* <Footer /> */}
        </Styles>

    )
}
