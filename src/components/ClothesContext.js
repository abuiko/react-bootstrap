import React, { useState, createContext } from 'react';

export const ClothesContext = createContext();

export const ClothesProvider = props => {
    const [clothes, setClothes] = useState([
        {
            id: 1,
            name: "Cotton Dress",
            price: 17.99,
            img: "/gallery/img/dress.jpeg",
            type: 'dress',
            stars: 5,

        },
        {
            id: 2,
            name: "Cotton Dress",
            price: 17.99,
            img: "/gallery/img/dress2.jpeg",
            type: 'dress',
            stars: 3.9,
        },
        {
            id: 3,
            name: "Cotton Dress",
            price: 17.99,
            img: "/gallery/img/dress3.jpeg",
            type: 'dress',
            stars: 4.4,
        },
        {
            id: 4,
            name: "Bikini Top",
            price: 7.99,
            img: "/gallery/img/bikini.jpeg",
            type: 'top',
            stars: 4.2,
        },
        {
            id: 5,
            name: "Cotton Blouse",
            price: 12.99,
            img: "/gallery/img/blouse.jpeg",
            type: 'top',
            stars: 3.2,
        },
        {
            id: 6,
            name: "Hoodie",
            price: 27.99,
            img: "/gallery/img/hoodie.jpeg",
            type: 'top',
            stars: 4.9,
        },
        {
            id: 7,
            name: "Jacket",
            price: 27.99,
            img: "/gallery/img/jacket.jpeg",
            type: 'top',
            stars: 4,
        },
        {
            id: 8,
            name: "Pants",
            price: 15.99,
            img: "/gallery/img/pants.jpeg",
            type: 'bottom',
            stars: 4.1,
        },
        {
            id: 9,
            name: "Pants",
            price: 15.99,
            img: "/gallery/img/pants2.jpeg",
            type: 'bottom',
            stars: 3.8,
        },
        {
            id: 10,
            name: "Shorts",
            price: 15.99,
            img: "/gallery/img/shorts.jpeg",
            type: 'bottom',
            stars: 4.6,
        },
        {
            id: 11,
            name: "Sweatshirt",
            price: 15.99,
            img: "/gallery/img/sweatshirt.jpeg",
            type: 'top',
            stars: 3.1,
        },
        {
            id: 12,
            name: "Sweatshirt",
            price: 15.99,
            img: "/gallery/img/sweatshirt2.jpeg",
            type: 'top',
            stars: 5,
        },
        {
            id: 13,
            name: "Top",
            price: 15.99,
            img: "/gallery/img/top.jpeg",
            type: 'top',
            stars: 2.7,
        },
        {
            id: 14,
            name: "Top",
            price: 15.99,
            img: "/gallery/img/top2.jpeg",
            type: 'top',
            stars: 4.2,
        },
        {
            id: 14,
            name: "Top",
            price: 15.99,
            img: "/gallery/img/top3.jpeg",
            type: 'top',
            stars: 3.5,
        },
        {
            id: 15,
            name: "Top",
            price: 15.99,
            img: "/gallery/img/top5.jpeg",
            type: 'top',
            stars: 4,
        },
        {
            id: 16,
            name: "Top",
            price: 15.99,
            img: "/gallery/img/vest.jpeg",
            type: 'top',
            stars: 5,
        },
        {
            id: 18,
            name: "Pleated Skirt",
            price: 13.99,
            img: "/gallery/img/skirt.jpeg",
            type: 'bottom',
            stars: 4.6,
        },
        {
            id: 19,
            name: "Cropped Sweatshirt",
            price: 23.99,
            img: "/gallery/img/sweatshirt3.jpeg",
            type: 'top',
            stars: 4.9,
        },
        {
            id: 20,
            name: "Bodysuit",
            price: 23.99,
            img: "/gallery/img/bodysuit.jpeg",
            type: 'top',
            stars: 4.1,
        },

    ])

    return (
        <ClothesContext.Provider value={[clothes, setClothes]} >
            { props.children}
        </ClothesContext.Provider >
    )
}