import React from 'react';
import { Row } from "react-bootstrap";
// import { Context } from "../Context"

import Recom1 from "../assets/images/recom1.png";
import Recom2 from "../assets/images/recom2.png";
import Recom3 from "../assets/images/recom3.png";
import Recom4 from '../assets/images/recom4.png';
import styled from "styled-components";

const Styles = styled.div`

    .recommended {
        background: #fff;
        padding: 5rem 2rem;
        text-align: center;
        
        h2 {
            text-transform: uppercase;
            font-weight: normal;
            margin-bottom: 2rem;
            font-size: 2rem;
        }
       
        &__group {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
        }

        .img__wrapper {
            position: relative;
            width: 15em;
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
    @media only screen and (max-width: 550px) {
        .recommended h2 {
            font-size: 1.5rem;
        }
    }


`;


function Recommended() {




    return (
        <Styles>
            <Row className="recommended">
                <h2>Recommended for you</h2>
                {/* <button>Click</button> */}
                <div className="recommended__group">

                    <div className="img__wrapper">

                        <img className="recommended__img" src={Recom1} alt="sweater" />

                    </div>
                    <div className="img__wrapper">
                        <img className="recommended__img" src={Recom2} alt="dress" />

                    </div>
                    <div className="img__wrapper">
                        <img className="recommended__img" src={Recom3} alt="pants" />

                    </div>
                    <div className="img__wrapper">
                        <img className="recommended__img" src={Recom4} alt="sweatshirt" />

                    </div>

                </div>
            </Row>
        </Styles>

    )
}

export default Recommended
