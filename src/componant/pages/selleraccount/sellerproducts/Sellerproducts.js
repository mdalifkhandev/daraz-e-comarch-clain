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
        <div className='grid mt-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3'>
            {
                datas?.map(data => <div key={data._id}>
                    {/* <div className='grid grid-cols-3'> */}
                        <div className="card w-auto bg-white shadow-2xl mt-3">
                            <figure><img src={data?.img} alt='{category}' className=' h-80 w-80 mt-8 rounded-xl shadow-xl' /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{data?.name}</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <h2>Price : $ {Math.floor((data?.price / 100) * 80)}</h2>
                                <h2>Price : $ <span className='line-through'>{data?.price}</span>  <span className='font-bold ml-5' > 20% OFF</span></h2>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary" ><Link to={`/producdetails/${data._id}`}>Details</Link></button>
                                </div>
                            </div>
                        {/* </div> */}
                    </div>
                </div>)
            }
        </div>
    );
};

export default Sellerproducts;