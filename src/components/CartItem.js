import React from 'react'
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Styles = styled.div`
    .cart__item {
        display: flex;
        margin-bottom: 1rem;
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
`;

function CartItem({ item }) {
    return (
        <Styles>
            <div className="cart__item">
                <img className="item__img" src={item.url} alt={item.name} width="120px" />
                <div className="item__desc">
                    <h5>{item.name}</h5>
                    <p>{item.price}</p>
                </div>
                <FontAwesomeIcon className="trash__icon" icon={faTimes} />
            </div>
        </Styles>

    )
}

export default CartItem
