import React from 'react';
import { Link } from "react-router-dom"
import { Row, Col, Button, Container } from "react-bootstrap";
import styled from "styled-components";
import Dress from "../assets/images/dress-main.jpeg";
import Jeans from "../assets/images/jeans.jpeg";
import Top from "../assets/images/tops.jpeg";
import Banner from '../assets/images/banner.jpg'
import Recommended from '../components/Recommended'



const Styles = styled.div`
    .img-container {
        padding-top: 3rem;
    }
    .main__banner {
        margin: 0.2rem 0.2rem 1rem;
        background: url(${Banner}) no-repeat;
        height: 450px;
        position: relative;
        
        
        div {
            
            position: absolute;
            top: 50%;
            left: 10%;
            transform: translate(-5%, -50%);
            background: #fff;
            max-width: 500px;
            padding: 3rem;

            h2 {
                font-weight: bolder;
                margin-bottom: 2rem;
                font-size: 2.7rem;
            }
        }
    }
   .extra__banner {
        
        margin: 0.2rem 0.2rem 1rem;
        background-color: #28262B;
        padding: 1.5rem;
        color: #fff;
        text-align: center;

        h2 {
            font-size: 1.8rem;
            margin-bottom: 0rem;
            letter-spacing: 0.1rem;
        }
       
   }
   .clothes__cards {
       margin-bottom: 3rem;
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
        height: 450px;
        background-size: cover;
        background-position: center;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin: 0.2rem;
        
        div {
            background: rgba(255,255,255,0.6);
            padding: 2rem 3rem;
            width: 80%;
            
        }
        h2 {
            font-size: 3rem;
            font-weight: bold;
        }
    } 
        
    }  

    @media only screen and (max-width: 500px) {
        .tops, .dresses, .jeans {
            height: 450px;

            h2 {
                font-size: 1.7rem;
            }
        }
        .main__banner {
            margin-bottom: 0rem;
        }
        .main__banner div {
            h3 {
                font-size: 1rem;
            }
            h2 {
                font-size: 2rem;
            }
            
            
        }
        
        .extra__banner {
            margin-bottom: 0.2rem;
            h2 {
            font-size: 0.8rem;
            
            }
        }
        .tops, .dresses, .jeans {
            height: 400px;
            margin: 0rem 0rem 0.1rem;

            div {
                width: 90%;
            }
        }
        
        
    }
`;

export const Home = () => {
    return (
        <Styles>
            <Container fluid className="img-container">
                <Row>
                    <Col className="main__banner">
                        <div>
                            <h3>GET HOLIDAY READY</h3>
                            <h2>UP TO 30% OFF</h2>
                            <Link to="/clothes"><Button className="banner__btn" type="button" variant="dark" size="lg">Shop now</Button></Link>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="extra__banner">
                        <h2>FREE EXPRESS SHIPPING FOR $75+ ORDERS</h2>
                    </Col>
                </Row>

                <Row className="clothes__cards">

                    <Col sm className="dresses">
                        <div>
                            <h2>Dresses</h2>
                            <p>Evening, Casual, Coctail.</p>
                            <Link to="/clothes"><Button type="button" variant="dark" size="md">See More</Button></Link>
                        </div>
                    </Col>
                    <Col sm className="tops">
                        <div>
                            <h2>Tops</h2>
                            <p>Sweaters, Hoodies, Jackets.</p>
                            <Link to="/clothes"><Button type="button" variant="dark" size="md">See More</Button></Link>
                        </div>
                    </Col>
                    <Col sm className="jeans">
                        <div>
                            <h2>Pants</h2>
                            <p>Jeans, Pant, Shorts, Skirts.</p>
                            <Link to="/clothes"><Button type="button" variant="dark" size="md">See More</Button></Link>
                        </div>
                    </Col>

                </Row>
                <Row>
                    <Recommended />
                </Row>


            </Container>

        </Styles>

    )
}
