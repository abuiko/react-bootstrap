import React, { useContext } from 'react'
import { Context } from "../Context"
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Styles = styled.div`
    .cart__item {
        display: flex;
        margin-bottom: 1rem;
        margin-right: 4rem;
        background-color: #F9F9F9;
        position: relative;
        align-items: center;

        .item__desc {
            margin-left: 4rem;
            h5 {
                text-transform: capitalize;
            }
        }
        .trash__icon {
            position: absolute;
            top: 8%;
            right: 2%;
            font-size: 1.2rem;
            cursor: pointer;
            
        }
    }
    @media only screen and (max-width: 1000px) {
        .cart__item {
            margin-right: 0rem;
        }
        .item__img {
            width: 90px;
            
        }
    }

    @media only screen and (max-width: 450px) {
        
        .item__img {
            width: 70px;
            
        }
        .trash__icon {
            font-size: 1rem;
        }
        .item__desc {
            margin-left: 2rem;
            h5, p {
                font-size: 0.9rem;
                
            }
            p {
                margin-bottom: 0rem;
            }
        }
       
    }
`;

function CartItem({ item }) {
    const { removeFromCart } = useContext(Context)
    return (
        <Styles>
            <div className="cart__item">
                <img className="item__img" src={item.url} alt={item.name} width="120px" />
                <div className="item__desc">
                    <h5>{item.name}</h5>
                    <p>{item.price}</p>
                </div>
                <FontAwesomeIcon className="trash__icon" onClick={() => removeFromCart(item.id)} icon={faTimes} />
            </div>
        </Styles>

    )
}

export default CartItem
