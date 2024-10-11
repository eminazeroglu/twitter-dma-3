import { createContext, useContext, useState } from "react";
import { APP_CONFIG } from "../configs/appConfig";

const GlobalContext = createContext(null);

export const GlobalContextProvider = ({children}) => {

    const [state, setState] = useState({
        theme: localStorage.theme ? localStorage.theme : APP_CONFIG.defaultTheme,
    })

    const handleState = (name, payload) => {
        setState(oldState => ({
            ...oldState,
            [name]: payload
        }))
    }

    const changeTheme = () => {
        const theme = state.theme === 'dark' ? 'light' : 'dark'  
        handleState('theme', theme)
        localStorage.setItem('theme', theme)
    }

    const values = {
        ...state,
        changeTheme,
        handleState
    }

    return (
        <GlobalContext.Provider value={values}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useContextGlobal = () => useContext(GlobalContext)