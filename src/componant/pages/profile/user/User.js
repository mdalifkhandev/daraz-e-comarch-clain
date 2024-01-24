import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../../hocks/loading/Loading';

const User = () => {

    const { data, refetch, isLoading } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users`);
            const data = res.json();
            return data;
        },
    });
    if (isLoading) {
       return <Loading></Loading>
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
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((user, index) => <tr className="bg-primary" key={index}>
                                <th>{index + 1}</th>
                                <td>{user.name ? user.name : <p>Name</p>}</td>
                                <td>{user?.email}</td>
                                <td>{user?.password ? user.password : <p>Password</p>}</td>
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