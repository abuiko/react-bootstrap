import React, { useState } from 'react'

const Context = React.createContext()

function ContextProvider(props) {
    const [allClothes, setClothes] = useState([])

    return (
        <Context.Provider value={{ allClothes }}>
            {props.children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }
