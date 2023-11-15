import { Navigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from '../../contexts/AuthContext';


export const Logout = async () => {
    const {logout} = UserAuth()

    const navigate = useNavigate()

    
    try {
        await logout();
        console.log('You are logout')
    } catch (e) {
        console.log(e.message)
    }
    
}