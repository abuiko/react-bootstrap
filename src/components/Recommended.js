import React from 'react'
import { Col } from "react-bootstrap";

import Recom1 from "../assets/images/recom1.png";
import Recom2 from "../assets/images/recom2.png";
import Recom3 from "../assets/images/recom3.png";
import Recom4 from '../assets/images/recom4.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';

import styled from "styled-components";

const Styles = styled.div`

    .recommended {
        background: #fff;
        padding: 4rem 2rem 3rem;
        margin-bottom: 3rem;
        text-align: center;
        
        h2 {
            text-transform: uppercase;
            font-weight: normal;
            margin-bottom: 2rem;
        }
       
        &__group {
            display: flex;
            justify-content: space-around;
            margin-bottom: 2rem;
        }

        .img__wrapper {
            position: relative;
            width: 300px;
            margin: 0.4rem;

            img {
                object-fit: cover;
                width: 100%;
            }
            .heart__icon {
                position: absolute;
                top: 5%;
                right: 5%;
                font-size: 1.8rem;
                color: #28262B;
                cursor: pointer;

                &:hover {
                    color: #BE1212;
                }
            }
        }

        
    }  


`;


function Recommended() {
    return (
        <Styles>
            <Col className="recommended">
                <h2>Recommended for you</h2>
                <div className="recommended__group">

                    <div className="img__wrapper">
                        <img className="recommended__img" src={Recom1} alt="sweater" />
                        <FontAwesomeIcon className="heart__icon" icon={faHeart} />
                    </div>
                    <div className="img__wrapper">
                        <img className="recommended__img" src={Recom2} alt="dress" />
                        <FontAwesomeIcon className="heart__icon" icon={faHeart} />
                    </div>
                    <div className="img__wrapper">
                        <img className="recommended__img" src={Recom3} alt="pants" />
                        <FontAwesomeIcon className="heart__icon" icon={faHeart} />
                    </div>
                    <div className="img__wrapper">
                        <img className="recommended__img" src={Recom4} alt="sweatshirt" />
                        <FontAwesomeIcon className="heart__icon" icon={faHeart} />
                    </div>

                </div>
            </Col>
        </Styles>

    )
}

export default Recommended
