import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'


function ClothesItem({ item }) {
    return (
        <div className="card">
            <div className="card__top">
                <img src={item.url} alt="jeans" />
            </div>
            <div className="card__bottom">
                <div className="card__bottom__text">
                    <h5>{item.name}</h5>
                    <p>{item.price}</p>
                </div>
                <div className="card__bottom__icon">
                    <FontAwesomeIcon className="heart__icon" icon={farHeart} />
                </div>
            </div>

        </div>
    )
}

export default ClothesItem
