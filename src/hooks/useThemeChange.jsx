import { useEffect } from "react"
import { useContextGlobal } from "../context/GlobalContext";
import { APP_CONFIG } from "../configs/appConfig";

export const useThemeChange = () => {

    const {theme} = useContextGlobal();
    

    const initialTheme = () => {
        const darkMode = theme === 'dark';
        if (darkMode)
            document.querySelector('html').classList.add('dark')
        else
            document.querySelector('html').classList.remove('dark')
    }

    useEffect(() => {
        initialTheme()
    }, [theme, APP_CONFIG.defaultTheme])
}