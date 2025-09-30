import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Breadcrumbs from '../../../../sheard/breadcrumbs/Breadcrumbs';
import { FaCartArrowDown, FaRegStar, FaStar } from "react-icons/fa";
import useTitle from '../../../../hocks/usetitle/useTitle';
import toast from 'react-hot-toast';
import { Authcontext } from '../../../../context/authprovaider/Authprovider';
import Loading from '../../../../hocks/loading/Loading'

const Productdetails = () => {
    const data = useLoaderData()
    const {user,loading}=useContext(Authcontext)
    const navigate = useNavigate()
    // let i=0
    useTitle(data.name)
    const ra = data.ratings
    // console.log(user);
    const addcrtdata = {
        category:data.category,
        img:data.img,
        name:data.name,
        price:data.price,
        ratings:data.ratings,
        ratingsCount:data.ratingsCount,
        seller:data.seller,
        cardid:data._id,
        username:user?.displayName,
        useremail:user?.email
        
    }
    // console.log(addcrtdata.user);
    
    const hendaleaddtocard =()=> {
        if(!user){
            navigate('/login')
            return
        }
        saveuser(addcrtdata)
    }

    const handleBuyNow = () => {
        if(!user){
            navigate('/login')
            return
        }
        navigate(`/producdetails/payment/${data._id}`)
    }

    const saveuser = (data) => {

        fetch(`https://daraz-e-comarch-server.vercel.app/cart`, {
        // fetch(`http://localhost:5000/cart`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Add Product successfully')
            })
    }
    if(loading){
        return <Loading></Loading>
    }
   
    return (
        <div className='mt-6'>
            <Breadcrumbs items={[{ label: 'Products', to: '/'} , { label: data.category, to: `/category/${data.category}`}, { label: data.name }]} />
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-6'>
                {/* left: gallery */}
                <div className='lg:col-span-5'>
                    <div className='rounded-xl border border-base-200 bg-base-100 p-4'>
                        <img className='w-full max-h-[520px] object-cover rounded-lg' src={data.img} alt={data.name} />
                        <div className='grid grid-cols-5 gap-3 mt-3'>
                            {[...Array(5)].map((_,i)=> (
                                <img key={i} className='h-16 w-full object-cover rounded-md border border-base-200' src={data.img} alt={data.name} />
                            ))}
                        </div>
                    </div>
                </div>
                {/* middle: info */}
                <div className='lg:col-span-4'>
                    <div className='rounded-xl border border-base-200 bg-base-100 p-5'>
                        <h1 className='text-2xl lg:text-3xl font-bold leading-snug'>{data.name}</h1>
                        <div className='flex items-center gap-3 mt-3'>
                            <div className='flex items-center' style={{ color: 'gold' }}>
                                {Array.from({ length: ra }, (v, i) => <FaStar key={i} className='text-lg' />)}
                                <FaRegStar className='text-lg' />
                            </div>
                            <span className='text-sm opacity-80'>{data.ratings} Ratings</span>
                            <span className='badge badge-ghost'>Sold by {data.seller}</span>
                        </div>

                        <div className='mt-5 space-y-2'>
                            <div className='flex items-end gap-3'>
                                <div className='text-4xl font-extrabold text-primary'>$ {Math.floor((data.price / 100) * 80)}</div>
                                <div className='line-through text-base-300 text-xl'>$ {data.price}</div>
                                <div className='badge badge-secondary'>20% OFF</div>
                            </div>
                            <p className='text-sm opacity-80'>VAT included where applicable</p>
                        </div>

                        <div className='mt-6'>
                            <h3 className='font-semibold mb-2'>Highlights</h3>
                            <ul className='list-disc ml-6 space-y-1 text-sm'>
                                <li>Best-in-class quality and performance</li>
                                <li>Authentic seller: {data.seller}</li>
                                <li>Top rated: {data.ratings} / 5</li>
                                <li>Fast shipping available</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* right: purchase box */}
                <div className='lg:col-span-3'>
                    <div className='rounded-xl border border-base-200 bg-base-100 p-5 sticky top-24'>
                        <div className='mb-4'>
                            <div className='text-sm font-semibold mb-1'>Deliver to</div>
                            <div className='text-sm'>Dhaka, Dhaka North, Banani Road No. 12 - 19</div>
                            <div className='text-sm mt-1'>Fastest Delivery: Tomorrow</div>
                            <div className='text-sm'>Standard Delivery: 5 - 10 day(s)</div>
                            <div className='text-sm mt-1'>Cash on Delivery Available</div>
                        </div>

                        <div className='grid grid-cols-1 gap-3 mt-4'>
                            <button className='btn btn-primary btn-block shadow' onClick={handleBuyNow}>Buy Now</button>
                            <button className='btn btn-outline btn-success btn-block shadow' onClick={hendaleaddtocard}>
                                Add To Cart <FaCartArrowDown className='text-xl text-black inline ml-1' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* details section */}
            <div className='my-6 grid grid-cols-1 lg:grid-cols-12 gap-6'>
                <div className='lg:col-span-8'>
                    <div className='shadow-sm rounded-xl border border-base-200 p-5'>
                        <h2 className='font-bold text-2xl mb-3'>Product details of {data.name}</h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <ul className='list-disc ml-5 space-y-1'>
                                <li> quality Details Best Quality </li>
                                <li> quality Details Best Quality </li>
                                <li> quality Details Best Quality </li>
                                <li> quality Details Best Quality </li>
                                <li> quality Details Best Quality </li>
                            </ul>
                            <ul className='list-disc ml-5 space-y-1'>
                                <li> quality Details Best Quality </li>
                                <li> quality Details Best Quality </li>
                                <li> quality Details Best Quality </li>
                                <li> quality Details Best Quality </li>
                                <li> quality Details Best Quality </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='lg:col-span-4'>
                    <div className='shadow-sm rounded-xl border border-base-200 p-5'>
                        <h2 className='text-xl font-bold'>Ratings</h2>
                        <div className='flex items-center gap-3 mt-3' style={{ color: 'gold' }}>
                            <div className='text-3xl font-bold'>{data.ratings}</div>
                            <div className='badge badge-secondary'>Very Good</div>
                        </div>
                        <div className='flex mt-4'>
                            {Array.from({ length: ra }, (v, i) => <FaStar key={i} className='text-2xl' style={{ color: 'gold' }} />)}
                            <FaRegStar className='text-2xl' style={{ color: 'gold' }} />
                        </div>
                        <div className='mt-2 text-sm'>Total Rating : {data?.ratingsCount}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Productdetails;