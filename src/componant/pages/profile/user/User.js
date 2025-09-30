import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Loading from '../../../hocks/loading/Loading';
import toast from 'react-hot-toast';
import { Authcontext } from '../../../context/authprovaider/Authprovider';

const User = () => {
const {user}=useContext(Authcontext)
    const { data,refetch,  isLoading } = useQuery({ //refetch,
        queryKey: ["users"],
        queryFn: async () => {
            const res = await fetch(`https://daraz-e-comarch-server.vercel.app/users`);
            // const res = await fetch(`http://localhost:5000/users`);
            const data = res.json();
            return data;
        },
    });
    if (isLoading) {
       return <Loading></Loading>
    }
    const hendlemakeadmin=id=>{
        const uri=`https://daraz-e-comarch-server.vercel.app/users/admin/${id}?email=${user?.email}`
        // const uri=`http://localhost:5000/users/admin/${id}?email=${user?.email}`
        fetch(uri,{
            method:"PATCH"
        })
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
            toast(data.message ? data.message : 'Make Admin successfully' )
            refetch()
        })
        .catch(error=>{
            console.log(error)
            toast.error(error.message)
        })
    }
    return (
        <div className=' w-full min-h-[calc(100vh-12rem)]'>
            <div className='flex items-center justify-between'>
                <h2 className='text-xl font-bold'>Users</h2>
                <div className='text-sm opacity-70'>Total: {data?.length || 0}</div>
            </div>
            <div className="rounded-xl border border-base-200 bg-base-100 p-0 overflow-hidden w-full">
                <div className="overflow-x-auto w-full">
                    <table className="table table-zebra">
                        <thead className='bg-base-200'>
                            <tr>
                                <th className='w-16'>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th className='w-40 text-right'>Role / Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.map((u, index) => (
                                <tr key={u._id || index}>
                                    <td>{index + 1}</td>
                                    <td>{u.name || '—'}</td>
                                    <td className='truncate max-w-[280px] md:max-w-none'>{u.email}</td>
                                    <td className='text-right'>
                                        {u.role === 'admin' ? (
                                            <span className='badge badge-primary'>Admin</span>
                                        ) : (
                                            <button className='btn btn-primary btn-sm' onClick={()=>hendlemakeadmin(u._id)}>Make Admin</button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default User;