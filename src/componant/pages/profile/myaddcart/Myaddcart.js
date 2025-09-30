import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Authcontext } from '../../../context/authprovaider/Authprovider';
import Loading from '../../../hocks/loading/Loading';
// import { useQuery } from '@tanstack/react-query';

const Myaddcart = () => {
    // const [cartdata, setcartdata] = useState()
    const {loading,user}=useContext(Authcontext)
    const [dataloading,setloading]=useState(true)
    const [data,setcartdata]=useState()
    useEffect(() => {
        // fetch(`http://localhost:5000/cart?email=${user.email}`)
        fetch(`https://daraz-e-comarch-server.vercel.app/cart?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setcartdata(data);
                setloading(false)
                // console.log(data);
            })
    }, [user.email])
    // const uri=`http://localhost:5000/cart?email=${user.email}`
    // console.log(uri);
    // const { data, isLoading } = useQuery({
    //     queryKey: ['order',user.email],
    //     queryFn: async () => {
    //         const res = await fetch(uri)
    //         const data = res.json()
    //         return data
    //     }
    // })
    if( loading || dataloading  ){
        return <Loading></Loading>
    }
    if(data?.length===0){
        return <div className='text-center my-40 text-5xl'>
         <h1>Your Card is Emty</h1>
         <Link className='link' to='/'>Please go to home And click here</Link>
        </div>
    }
    // console.log(data.length);
    return (
        <div className='space-y-4 w-full min-h-[calc(100vh-12rem)]'>
            <h2 className='text-xl font-bold'>My Cart</h2>
            <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                {data?.map(item => (
                    <div key={item._id} className='rounded-xl border border-base-200 bg-base-100 p-3'>
                        <img className='w-full h-40 object-cover rounded-lg' alt={item.name} src={item.img} />
                        <div className='mt-3'>
                            <h3 className='font-semibold line-clamp-2'>{item.name}</h3>
                            <div className='text-sm mt-1'>
                                <span className='font-bold text-primary'>$ {Math.floor((item.price/100)*80)}</span>
                                <span className='line-through ml-2'>$ {item.price}</span>
                            </div>
                            <div className='mt-3 flex justify-between'>
                                <Link className='btn btn-ghost btn-sm' to={`/producdetails/${item.cardid}`}>Details</Link>
                                <Link className='btn btn-primary btn-sm' to={`/producdetails/payment/${item.cardid}`}>Buy now</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Myaddcart;