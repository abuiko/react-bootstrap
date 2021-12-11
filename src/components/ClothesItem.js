import React, { useState, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import styled from "styled-components";
import { Context } from "../Context"

const Styles = styled.div`
    
    .card {
        border:  none;
        width: 330px;           
      
        &__top {
            position: relative;
            margin-bottom: 1rem;
            img {
                width: 100%;
            }
            .heart__icon {
                position: absolute;
                top: 5%;
                right: 5%;
                transform: translate(-5%, -5%);
                font-size: 1.8rem;
                cursor: pointer;
            }
        }
        &__bottom {
            padding: 0.2rem 1rem 0.7rem;
           
        }
        &__bottom__text {
            h5 {
                font-weight: normal;
                text-transform: capitalize;
                letter-spacing: 0.1rem;
                font-size: 1.3rem;
            }
        }
    }
`;

function ClothesItem({ item }) {
    const { toggleFavorite } = useContext(Context)
    const [hovered, setHovered] = useState(false)

    function heartIcon() {
        if (item.isFavorite) {
            return <FontAwesomeIcon className="heart__icon" onClick={() => toggleFavorite(item.id)} icon={faHeart} />
        } else if (hovered) {
            return <FontAwesomeIcon className="heart__icon" onClick={() => toggleFavorite(item.id)} icon={farHeart} />
        }
    }


    return (
        <Styles>
            <div className="card" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                <div className="card__top">
                    <img src={item.url} alt="jeans" />
                    {heartIcon()}

                </div>
                <div className="card__bottom">
                    <div className="card__bottom__text">
                        <h5>{item.name}</h5>
                        <p>{item.price}</p>
                    </div>

                </div>

            </div>
        </Styles>

    )
}

export default ClothesItem
