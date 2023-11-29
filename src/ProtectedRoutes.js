import { Navigate } from "react-router";
import { UserAuth } from "./contexts/AuthContext";
import React from "react";

export const ProtectedRoute = ({children}) => {
    const { user } = UserAuth();

    if(!user) { 
        return <Navigate to='/' />
    }

    return children
}

export const GuestRoute = ({children}) => {
    const { user } = UserAuth();

    if(user) {
        return <Navigate to='/' />
    }

    return children
}