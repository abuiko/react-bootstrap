import React, { useContext } from 'react';
import { Context } from "../Context";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import ClothesItem from '../components/ClothesItem';

const Styles = styled.div`
    .fav__container {
        margin-top: 5rem;
        position: relative;
        min-height: 70vh;
        background-color: white;
        padding: 3rem 0rem;
    }
    .favorites {
        display: grid;
        grid-template-columns: repeat(auto-fill, 330px);
        grid-gap: 0.5rem;
        justify-content: center;
        margin-top: 3rem; 
    }
    .empty__fav {
        position: absolute;
        bottom: 50%;
        left: 50%;
        transform: translate(-50%);
        p {
            margin-bottom: 1.9rem;
            font-size: 1.2rem;
        }
       
        

        
    }
 
    
`;

export const Favorites = () => {
    const { allClothes } = useContext(Context)
    const favClothes = allClothes.filter(clothes => clothes.isFavorite === true)
    const favorite = favClothes.map(item => <ClothesItem key={item.id} item={item} />)
    return (
        <Styles>
            <div className="fav__container">

                {favorite.length > 0 ?
                    <div>
                        <h1 className="text-center mb-3">My Favorites</h1>
                        <div className="favorites">{favorite}</div>
                    </div> :
                    <div className="text-center empty__fav">
                        <h1 className="text-center mb-3">My Favorites</h1>
                        <p className="mb">Want to save the items you love? Just click on the heart icon found on the product
        image and it will show up here.</p>
                        <Button variant="dark" size="lg" type="button">Browse Now</Button>
                    </div>

                }




            </div>
        </Styles>
    )
}
