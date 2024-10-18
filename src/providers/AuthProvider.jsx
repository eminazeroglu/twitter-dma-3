import { Navigate } from "react-router-dom";
import { useContextGlobal } from "../context/GlobalContext";
import { getStorage } from "../utils/storageUtil";

function AuthProvider({children}) {

    const {storage} = useContextGlobal();

    if (!storage.token) return <Navigate to={'/login'} />

    return children;
}

export default AuthProvider;