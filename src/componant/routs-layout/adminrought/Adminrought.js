import React, {  useContext } from 'react';
import { Authcontext } from '../../context/authprovaider/Authprovider';
import useAdmin from '../../hocks/isadmin/useAdmin';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../hocks/loading/Loading';

const Adminrought = ({children}) => {
    const {user,loading}=useContext(Authcontext)
    const [isAdmin,isadminloding]=useAdmin(user?.email)
    const location=useLocation()
    if(loading || isadminloding){
        return <Loading></Loading>
    }
    if(user && isAdmin){
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default Adminrought;