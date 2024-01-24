import React, { useContext } from 'react';
import { Authcontext } from '../../../../context/authprovaider/Authprovider';
import toast from 'react-hot-toast';

const Account = () => {
    const { user,emailverification,removeuser,logoutuser } = useContext(Authcontext)
    // console.log(user.emailVerified);
    const emailverifacation = () => {
        emailverification()
        .then(resualt=>{
            console.log(resualt.user.emailVerified);
        })

    }

    const deleteusehendler=()=>{
        removeuser()
        .then(resualt=>{
            console.log(resualt);
            toast.success('User Deleted successfully')
        })
        .catch(error=>{
            toast.error(error.message)
        })
    }

    const signoutuser=()=>{
        logoutuser()
        .then(resualt=>{
            console.log(resualt)
            toast.success('Sign Out successfully')
        })
        .catch(error=>console.log(error))
    }

    return (
        <div>
            <h1>User Name : {user.displayName}</h1>
            <h1>User Email : {user.email}</h1>
            {user?.emailVerified ? (

                <button className=" my-5 bg-green-600 rounded-xl p-2  text-white">
                    Your Email Verifide
                </button>

            ) : (

                <button onClick={emailverifacation} className="btn my-5 btn-primary">
                    Email Verifecation
                </button>

            )}
            <br/>
            <button onClick={deleteusehendler} className='btn btn-warning'>Delete User</button>
            <br/>
            <button onClick={signoutuser} className='btn my-3 btn-primary'>Sign Out user</button>
        </div>
    );
};

export default Account;