import React, { Fragment, useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaCartArrowDown, FaRegStar, FaStar } from "react-icons/fa";
import useTitle from '../../../../hocks/usetitle/useTitle';
import toast from 'react-hot-toast';
import { Authcontext } from '../../../../context/authprovaider/Authprovider';

const Productdetails = () => {
    const data = useLoaderData()
    const {user}=useContext(Authcontext)
    // let i=0
    useTitle(data.name)
    const ra = data.ratings
    
    const addcrtdata = {
        category:data.category,
        img:data.img,
        name:data.name,
        price:data.price,
        ratings:data.ratings,
        ratingsCount:data.ratingsCount,
        seller:data.seller,
        cardid:data._id,
        user:{
            name:user?.displayName,
            email:user?.email
        }
    }
    // console.log(addcrtdata.user);
    
    const hendaleaddtocard = event => {
        saveuser(addcrtdata)
        console.log(data);
    }

    const saveuser = (data) => {

        fetch(`http://localhost:5000/cart`, {
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
    return (
        <div>
            <div className='grid lg:grid-cols-3 gap-3 mt-8 shadow-2xl rounded-2xl'>
                <div className=' mx-3'>
                    <img className='overflow-hidden hover:scale-150 cursor-pointer rounded-2xl m-4 shadow-2xl' src={data.img} alt={data.name} />
                </div>
                <div className='m-4 shadow-lg'>
                    <h1 className='font-bold text-3xl'>{data.name}</h1>
                    <h1 className='font-bold text-xl'>{data.ratings} Ratings</h1>
                    <h1 className='font-bold text-xl'> Brand : {data.seller} </h1>
                    <h1 className='font-bold text-5xl'> $ {Math.floor((data.price / 100) * 80)}</h1>
                    <h1 className='font-bold text-xl line-through'> $ {data.price}  </h1>
                    <h1 className='font-bold text-xl'> 20%  OFF</h1>
                    <div className='grid grid-cols-2 gap-4 my-10'>
                        <button className='btn btn-primary'><Link to={`/producdetails/payment/${data._id}`}>Buy Now</Link></button>
                        <button className='btn btn-outline outline-dotted' style={{ backgroundColor: 'orange' }} onClick={hendaleaddtocard} >Add To Card <FaCartArrowDown className='text-3xl text-black' /></button>
                    </div>
                </div>
                <div className='shadow-2xl m-4'>
                    <h1 className='mx-4 my-5 font-bold text-lg'>Dhaka, Dhaka North, Banani Road No. 12 - 19</h1>
                    <h1 className='mx-4 my-5 font-bold text-lg'>Fastest Delivery Tomorrow 11 Jan Tomorrow</h1>
                    <h1 className='mx-4 my-5 font-bold text-lg'>Standard Delivery 15 Jan - 20 Jan 5 - 10 day(s)</h1>
                    <h1 className='mx-4 my-5 font-bold text-lg'>Cash on Delivery Available</h1>
                </div>
            </div>
            <div className='my-5 shadow-xl p-3'>
                <h1 className='font-bold text-3xl'>Product details of {data.name}</h1>
                <div className='grid grid-cols-2 '>
                    <ul className='list-disc'>
                        <li> quality Details Best Quality </li>
                        <li> quality Details Best Quality </li>
                        <li> quality Details Best Quality </li>
                        <li> quality Details Best Quality </li>
                        <li> quality Details Best Quality </li>
                    </ul>
                    <ul className='list-disc'>
                        <li> quality Details Best Quality </li>
                        <li> quality Details Best Quality </li>
                        <li> quality Details Best Quality </li>
                        <li> quality Details Best Quality </li>
                        <li> quality Details Best Quality </li>
                    </ul>
                </div>


            </div>
            <div>
                <h1 className='text-5xl font-bold'>Ratings</h1>
                <div className='flex gap-4 mt-5 ' style={{ color: 'gold' }}>
                    <h1 className='text-5xl font-bold' key={data._id}>{data.ratings}</h1>
                    <h1 className='bg-orange-400 mx-5 p-3 text-2xl' key={data._id}>very Good</h1>
                </div>
                <div className='flex mt-5 p-5'>
                    {
                        Array.from({ length: ra }, (v, i) =>
                            <>
                                <FaStar className='text-5xl font-bold' style={{ color: 'gold' }} />
                            </>

                        )
                    }
                    <FaRegStar className='text-5xl font-bold' style={{ color: 'gold' }} />
                </div>
                <h1 className='text-2xl'>Total Rating : {data?.ratingsCount}</h1>
            </div>
            <div>
                <h1>Revuew :</h1>
                {/* <div>
                    <h1>This produc is good</h1>
                    <img className='w-40' alt='' src={data.img} />
                </div> */}
            </div>
        </div>
    );
};

export default Productdetails;