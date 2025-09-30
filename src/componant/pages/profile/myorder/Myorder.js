import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Loading from '../../../hocks/loading/Loading';
import { Authcontext } from '../../../context/authprovaider/Authprovider';
import { Link } from 'react-router-dom';

const Myorder = () => {
    const {loading,user}=useContext(Authcontext)
    // const uri=`http://localhost:5000/myorder?email=${user?.email}`
    // console.log(user.email);
    const { data, isLoading } = useQuery({
        queryKey: ['order',user.email],
        queryFn: async () => {
            // const res = await fetch(`http://localhost:5000/myorder?email=${user?.email}`)
            const res = await fetch(`https://daraz-e-comarch-server.vercel.app/myorder?email=${user?.email}`)
            const data = res.json()
            return data
        }
    })
    // console.log(data);
    if (isLoading || loading) {
        return <Loading></Loading>
    }
    if(data?.length === 0){
        return <div className='text-center my-40 text-5xl'>
         <h1>Your Card is Emty</h1>
         <Link className='link' to='/'>Please go to home And click here</Link>
        </div>
    }
    return (
        <div className='space-y-4 w-full min-h-[calc(100vh-12rem)]'>
            <h2 className='text-xl font-bold'>My Orders</h2>
            <div className='grid gap-4 grid-cols-1 lg:grid-cols-2'>
                {data?.map(order => (
                    <div key={order._id} className='rounded-xl border border-base-200 bg-base-100 p-4'>
                        <div className='flex items-start gap-4'>
                            <img alt={order.producname} className='w-28 h-28 object-cover rounded-lg border' src={order.img} />
                            <div className='flex-1'>
                                <h3 className='font-semibold'>{order.producname}</h3>
                                <div className='text-sm mt-1'>Qty: {order.quentity} • Seller: {order.seller}</div>
                                <div className='text-sm opacity-80'>Order: {order.orderId}</div>
                                <div className='text-sm opacity-80'>TXN: {order.transactionId}</div>
                            </div>
                            <div className='text-right'>
                                <div className='font-extrabold text-primary'>${order.price}</div>
                            </div>
                        </div>
                        <div className='mt-3 text-sm grid sm:grid-cols-2 gap-2'>
                            <div>
                                <div className='font-medium'>Shipping</div>
                                <div>{order.name}</div>
                                <div className='opacity-80'>{order.address}</div>
                                <div className='opacity-80'>{order.email} • {order.phon}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Myorder;