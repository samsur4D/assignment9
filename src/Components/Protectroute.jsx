import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router-dom';

const Protectroute = ({children}) => {
    console.log(children)
    const {user} = useContext(AuthContext)
    if(user){
        return children
    }
    return <Navigate to="/login"></Navigate>
};

export default Protectroute;