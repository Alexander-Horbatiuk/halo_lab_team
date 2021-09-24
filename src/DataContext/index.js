import React, {useState, useEffect, createContext} from "react";

export const DataContext = createContext()

export const MuContextProvider = ({children}) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://run.mocky.io/v3/b7d36eea-0b3f-414a-ba44-711b5f5e528e")
            .then(res => res.json())
            .then(result => setItems(result))
    }, [])

    return (
        <DataContext.Provider value={items}>
            {children}
        </DataContext.Provider>
    )
}
