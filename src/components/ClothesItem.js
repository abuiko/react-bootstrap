import React, { useState, useContext } from 'react'
import PropTypes from "prop-types"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { faPlusSquare as farPlusSquare } from '@fortawesome/free-regular-svg-icons'
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
                right: 9%;
                transform: translate(-9%, -5%);
                font-size: 1.8rem;
                cursor: pointer;
            }
            .cart__icon {
                position: absolute;
                bottom: 5%;
                right: 9%;
                transform: translate(-9%, -5%);
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
    const { toggleFavorite, addToCart, cartItems } = useContext(Context)
    const [hovered, setHovered] = useState(false)

    function heartIcon() {
        if (item.isFavorite) {
            return <FontAwesomeIcon className="heart__icon" onClick={() => toggleFavorite(item.id)} icon={faHeart} />
        } else if (hovered) {
            return <FontAwesomeIcon className="heart__icon" onClick={() => toggleFavorite(item.id)} icon={farHeart} />
        }
    }

    function cartIcon() {
        const alreadyInCart = cartItems.find(cartItem => cartItem.id === item.id)
        if (alreadyInCart) {
            return <FontAwesomeIcon className="cart__icon" onClick={() => addToCart(item)} icon={faPlusSquare}></FontAwesomeIcon>
        } else if (hovered) {
            return <FontAwesomeIcon className="cart__icon" onClick={() => addToCart(item)} icon={farPlusSquare}></FontAwesomeIcon>
        }
    }


    return (
        <Styles>
            <div className="card" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                <div className="card__top">
                    <img src={item.url} alt="jeans" />
                    {heartIcon()}
                    {cartIcon()}

                </div>
                <div className="card__bottom">
                    <div className="card__bottom__text">
                        <h5>{item.name}</h5>
                        <p>{item.price}</p>
                    </div>


                </div>

            </div>
        </Styles >

    )
}


Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}


export default ClothesItem
