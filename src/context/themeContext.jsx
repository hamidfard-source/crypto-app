import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext= createContext();
const ThemeContextProvider = ({children}) => {
    const [darkMode,setDarkMode] = useState(false)
    useEffect(()=>{
        document.documentElement.classList.toggle('dark')
    },[darkMode])
    return (
        <ThemeContext.Provider value={{darkMode,setDarkMode}}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useThemeContext = ()=>{
    return useContext(ThemeContext)
}

export default ThemeContextProvider;
