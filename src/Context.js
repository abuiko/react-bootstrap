import React, { useState, useEffect } from 'react'

const Context = React.createContext()

function ContextProvider(props) {
    const [allClothes, setAllClothes] = useState([])
    const [cartItems, setCartItems] = useState([])


    const url = "https://raw.githubusercontent.com/abuiko/react-bootstrap-assets/master/images.json"


    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setAllClothes(data))
    }, [])

    function toggleFavorite(id) {
        const updatedArr = allClothes.map(item => {

            if (item.id === id) {
                return {
                    ...item,
                    isFavorite: !item.isFavorite
                }
            }
            return item
        })
        setAllClothes(updatedArr)
    }

    function addToCart(newItem) {
        setCartItems(prevItems => [...prevItems, newItem])
    }
    function removeFromCart(id) {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    }

    function emptyCart() {
        setCartItems([])
    }


    return (
        <Context.Provider
            value={{
                allClothes,
                toggleFavorite,
                addToCart,
                removeFromCart,
                emptyCart,
                cartItems
            }
            }>
            {props.children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }
