import React, { useState, useEffect } from 'react'

const Context = React.createContext()

function ContextProvider(props) {
    const [allClothes, setAllClothes] = useState([])
    const url = "https://raw.githubusercontent.com/abuiko/react-bootstrap-assets/master/images.json"


    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setAllClothes(data))
    }, [])

    console.log(allClothes)
    return (
        <Context.Provider value={{ allClothes }}>
            {props.children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }
