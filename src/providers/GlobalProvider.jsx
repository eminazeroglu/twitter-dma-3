import { useThemeChange } from "../hooks/useThemeChange";
import { Toaster } from 'react-hot-toast';

function GlobalProvider({children}) {

    useThemeChange()

    return (
        <>
            {children}
            <Toaster />
        </>
    );
}

export default GlobalProvider;