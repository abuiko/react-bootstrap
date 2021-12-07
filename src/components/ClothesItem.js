import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
import Jeans from "../assets/images/jeans.jpeg";

function ClothesItem() {
    return (
        <div className="card">
            <div className="card__top">
                <img src={Jeans} alt="jeans" />
            </div>
            <div className="card__bottom">
                <div className="card__bottom__text">
                    <h5>Name</h5>
                    <p>Price</p>
                </div>
                <div className="card__bottom__icon">
                    <FontAwesomeIcon className="heart__icon" icon={farHeart} />
                </div>
            </div>

        </div>
    )
}

export default ClothesItem
