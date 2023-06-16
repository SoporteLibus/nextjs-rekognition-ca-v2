"use client"
import React, { useState } from "react"

export const Context = React.createContext({})

interface ContextProp {
    children: React.ReactNode
}

const ContextProvider: React.FC<ContextProp> = ({ children }) => {
    const [ title, setTitle ] = useState([])
    return <Context.Provider value={{ title, setTitle }}>
        {children}
    </Context.Provider>
}

export default ContextProvider