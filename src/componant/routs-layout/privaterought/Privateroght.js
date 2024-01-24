import React, { useContext } from 'react';
import { Authcontext } from '../../context/authprovaider/Authprovider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../hocks/loading/Loading';

const Privateroght = ({children}) => {
    const {user,loading}=useContext(Authcontext)
    const location=useLocation()
    if(loading){
       return <Loading></Loading>
    }
    if(user){
       return children
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default Privateroght;