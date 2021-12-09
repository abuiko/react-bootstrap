import React, { useContext } from 'react'
import ClothesItem from '../components/ClothesItem'
import { Context } from "../Context";



function Clothes() {
    const { allClothes } = useContext(Context)

    const clothesCards = allClothes.map(item => (
        <ClothesItem key={item.id} item={item} />
    ))
    return (

        <div className="clothes">
            {clothesCards}
        </div>


    )
}

export default Clothes
