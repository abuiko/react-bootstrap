import React, { useContext } from 'react';
import { Context } from "../Context";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import ClothesItem from '../components/ClothesItem';

const Styles = styled.div`
    .container {
        margin-top: 5rem;
    }
    .favorites {
        display: grid;
        grid-template-columns: repeat(auto-fill, 350px);
        grid-gap: 0.5rem;
        justify-content: center;
        margin-top: 3rem; 
    
    }
 
    
`;

export const Favorites = () => {
    const { allClothes } = useContext(Context)
    const favClothes = allClothes.filter(clothes => clothes.isFavorite === true)
    const favorite = favClothes.map(item => <ClothesItem key={item.id} item={item} />)
    return (
        <Styles>
            <div className="container">
                <h1 className="text-center mb-3">My Favorites</h1>

                {favorite.length > 0 ?
                    <div className="favorites">{favorite}</div> :
                    <div className="text-center">

                        <p className="mb">Want to save the items you love? Just click on the heart icon found on the product
                        image and it will show up here.</p>
                        <Button variant="outline-dark" size="lg" type="button">Browse Now</Button>
                    </div>

                }
            </div>
        </Styles>
    )
}
