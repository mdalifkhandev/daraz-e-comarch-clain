import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Loading from '../../../hocks/loading/Loading';
import { Authcontext } from '../../../context/authprovaider/Authprovider';

const Myorder = () => {
    const {loading}=useContext(Authcontext)
    const { data, isLoading } = useQuery({
        queryKey: ['order'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myorder`)
            const data = res.json()
            return data
        }
    })
    console.log(data);
    if (isLoading || loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            {
                data?.map(order => <div key={order._id} className="hero">
                    <div className="hero-content flex-col lg:flex-row">
                        <img alt={order.img} className='rounded-2xl shadow-2xl' src={order.img} />
                        <div className='shadow-2xl p-3 rounded-2xl'>
                            <h1 className="text-5xl font-bold">{order.producname}</h1>
                            <p className="py-1">Price : {order.price}</p>
                            <p className="py-1">Quentity : {order.quentity}</p>
                            <p className="py-1">Quentity : {order.seller}</p>
                            <p className="py-1">Order Id : {order.orderId}</p>
                            <p className="py-1">Transaction Id : {order.transactionId}</p>
                        </div>
                        <div className='shadow-2xl p-3 rounded-2xl'>
                            <h1 className="text-2xl w-52 font-bold">Payment details</h1>
                            <p className="py-1">Name : {order.name}</p>
                            <p className="py-1">E-mail : {order.email}</p>
                            <p className="py-1">Adddress : {order.address}</p>
                            <p className="py-1">Phone : {order.phon}</p>
                            
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Myorder;