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
            console.log(data);
            toast(data.message ? data.message : 'Make Admin successfully' )
            refetch()
        })
        .catch(error=>{
            console.log(error)
            toast.error(error.message)
        })
    }
    return (
        <div>


            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Name</th>
                            <th>E-mail</th>
                            <th>Passwoed</th>
                            <th>role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((user, index) => <tr className="bg-red-300" key={index}>
                                <th>{index + 1}</th>
                                <td>{user.name ? user.name : <p>Name</p>}</td>
                                <td>{user?.email}</td>
                                <td>{user?.password ? user.password : <p>Password</p>}</td>
                                <td>{user?.role ? user.role : <button className='btn btn-sm  btn-primary' onClick={()=>hendlemakeadmin(user._id)} >Make Admin </button>}</td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default User;