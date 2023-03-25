import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

export const StringContext = createContext(null);

export const StringProvider = ({ children }) => {
    const [string, setString] = useState("");
    const [charList, setCharList] = useState([]);

    useEffect(() => {
        setCharList(string.split(""));
    }, [string]);

    const updateCharList = (id) => {
        console.log(id);
        setCharList(prev => prev.filter((char, index) => {
            console.log(index, id, char, prev[id]);
            return index === id || char !== prev[id]
        }));
    }

    const colorSet = useMemo( () => Array.from({length: 26 * 2}, (_,index) => {
        const red = Math.floor(Math.random()*255 + index)
        const green = Math.floor(Math.random()*255 + index) + (254 / 2 - red) 
        const blue = Math.floor(Math.random()*255 + index)
        return `rgb(${red},${green},${blue})`
    }), [string]);
    console.log('color', colorSet);

    const value = { string, setString, charList, setCharList, updateCharList, colorSet }
    return (
        <StringContext.Provider value={value}>
        {children}
        </StringContext.Provider>
    );
}

export const useString = () => {
    return useContext(StringContext);
}