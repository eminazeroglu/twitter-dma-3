import { Navigate } from "react-router-dom";

function AuthLayout({children}) {

    const token = localStorage.token;

    if (token) return <Navigate to={'/'}/>

    return (
        <div>
            {children}
        </div>
    );
}

export default AuthLayout;