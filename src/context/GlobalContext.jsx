import { createContext, useContext, useState } from "react";
import { APP_CONFIG } from "../configs/appConfig";
import { allStorage, getStorage, setStorage } from "../utils/storageUtil";

const GlobalContext = createContext(null);

export const GlobalContextProvider = ({children}) => {

    const [state, setState] = useState({
        storage: allStorage(),
        errors: {},
        pageTitle: '',
        theme: getStorage('theme') ? getStorage('theme') : APP_CONFIG.defaultTheme,
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
        setStorage('theme', theme)
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