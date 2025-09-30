import React, { useContext } from 'react';
import { Authcontext } from '../../../../context/authprovaider/Authprovider';
import toast from 'react-hot-toast';

const Account = () => {
    const { user,emailverification,removeuser,logoutuser } = useContext(Authcontext)
    // console.log(user.emailVerified);
    const emailverifacation = () => {
        emailverification()
        .then(resualt=>{
            // console.log(resualt.user.emailVerified);
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
        <div className='w-full'>
            <div className='rounded-2xl border border-base-200 bg-base-100 p-6'>
                <div className='flex items-start gap-4'>
                    <div className="avatar placeholder">
                        <div className="bg-primary/10 text-primary rounded-full w-16">
                            <span className='text-lg font-bold'>
                                {(user?.displayName || 'U')?.split(' ')?.map(p=>p[0]).slice(0,2).join('')}
                            </span>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <div className='flex items-center gap-2'>
                            <h1 className='text-2xl font-bold'>{user.displayName || 'User'}</h1>
                            {user?.emailVerified ? (
                                <span className='badge badge-success'>Verified</span>
                            ) : (
                                <span className='badge badge-warning'>Not verified</span>
                            )}
                        </div>
                        <div className='opacity-80'>{user.email}</div>

                        <div className='mt-4 flex flex-wrap gap-2'>
                            {user?.emailVerified ? (
                                <button className="btn btn-success btn-sm" disabled> Email verified </button>
                            ) : (
                                <button onClick={emailverifacation} className="btn btn-primary btn-sm">Verify email</button>
                            )}
                            <button onClick={signoutuser} className='btn btn-ghost btn-sm'>Sign out</button>
                            <button onClick={deleteusehendler} className='btn btn-error btn-sm'>Delete account</button>
                        </div>
                    </div>
                </div>

                <div className='divider'></div>
                <div className='grid sm:grid-cols-2 gap-4'>
                    <div className='rounded-xl border border-base-200 p-4'>
                        <div className='font-semibold mb-1'>Security tips</div>
                        <ul className='list-disc ml-4 text-sm opacity-80 space-y-1'>
                            <li>Use a strong password and never share it.</li>
                            <li>Enable email verification to protect your account.</li>
                        </ul>
                    </div>
                    <div className='rounded-xl border border-base-200 p-4'>
                        <div className='font-semibold mb-1'>Profile info</div>
                        <div className='text-sm opacity-80'>Name: {user.displayName || '—'}</div>
                        <div className='text-sm opacity-80'>Email: {user.email || '—'}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;