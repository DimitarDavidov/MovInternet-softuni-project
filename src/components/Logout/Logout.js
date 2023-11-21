import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import { UserAuth } from '../../contexts/AuthContext';


export const Logout = () => {
    const {logout} = UserAuth()

    useEffect(() => {
        logout()
    });
   

    return <Navigate to='/' />
    
}