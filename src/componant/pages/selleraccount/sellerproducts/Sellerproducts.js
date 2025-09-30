import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Authcontext } from '../../../context/authprovaider/Authprovider';
import { Link } from 'react-router-dom';
import Loading from '../../../hocks/loading/Loading';

const Sellerproducts = () => {
    const { user } = useContext(Authcontext)
    const { data: dbs } = useQuery({
        queryKey: ['selleruser', user.email],
        queryFn: async () => {
            const res = await fetch(`https://daraz-e-comarch-server.vercel.app/selleruser/${user?.email}`)
            // const res = await fetch(`http://localhost:5000/selleruser/${user?.email}`)
            const data = res.json()
            return data

        }
    })
    const { data: datas,isLoading } = useQuery({
        queryKey: ['selleruser', dbs?.name],
        queryFn: async () => {
            const res = await fetch(`https://daraz-e-comarch-server.vercel.app/sellerallproducts/${dbs?.name}`)
            // const res = await fetch(`http://localhost:5000/sellerallproducts/${dbs?.name}`)
            const data = res.json()
            return data

        }
    })

    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <div className='flex items-center justify-between mt-2'>
                <h2 className='text-xl font-bold'>Your products</h2>
                <Link to='/sellerpage/addproduct' className='btn btn-primary btn-sm'>Add new</Link>
            </div>
            <div className='grid mt-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
                {datas?.map(data => (
                    <div key={data._id} className="card bg-base-100 border border-base-200 shadow-sm">
                        <figure className='p-3'><img src={data?.img} alt={data?.name} className='h-48 w-full object-cover rounded-xl' /></figure>
                        <div className="card-body">
                            <h3 className="font-semibold line-clamp-2">{data?.name}</h3>
                            <div className='text-sm opacity-80'>${Math.floor((data?.price / 100) * 80)} <span className='line-through ml-2'>${data?.price}</span></div>
                            <div className="card-actions justify-end mt-2">
                                <Link className="btn btn-ghost btn-sm" to={`/producdetails/${data._id}`}>View</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sellerproducts;