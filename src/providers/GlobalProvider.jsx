import { useThemeChange } from "../hooks/useThemeChange";

function GlobalProvider({children}) {

    useThemeChange()

    return children;
}

export default GlobalProvider;