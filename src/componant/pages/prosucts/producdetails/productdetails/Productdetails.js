import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaCartArrowDown, FaRegStar, FaStar } from "react-icons/fa";

const Productdetails = () => {
    const data = useLoaderData()
    console.log(data);
    // let i=0
    const ra = data.ratings
    // const [rat,setrat]=useState()
    // while (i<=ra) {
    //     console.log(i);
    //     i++
    // }
    // for (let i = 1; i <= ra; i++) {
    //     console.log(i);
    //     const reat=<>
    //     <FaStar/>
    //     </>
    //     return reat
    // }

    return (
        <div>
            <div className='grid lg:grid-cols-3 gap-3 mt-8 shadow-2xl rounded-2xl'>
                <div className='shadow-xl mx-3'>
                    <img className='overflow-hidden hover:scale-150 cursor-pointer' src={data.img} alt={data.name} />
                </div>
                <div className='m-3 shadow-lg'>
                    <h1 className='font-bold text-3xl'>{data.name}</h1>
                    <h1 className='font-bold text-xl'>{data.ratings} Ratings</h1>
                    <h1 className='font-bold text-xl'> Brand : {data.seller} </h1>
                    <h1 className='font-bold text-5xl'> $ {(data.price / 100) * 80}</h1>
                    <h1 className='font-bold text-xl line-through'> $ {data.price}  </h1>
                    <h1 className='font-bold text-xl'> 20%  OFF</h1>
                    <div className='grid grid-cols-2 gap-4 my-10'>
                        <button className='btn btn-primary'>Buy Now</button>
                        <button className='btn btn-outline outline-dotted' style={{ backgroundColor: 'orange' }} >Add To Card <FaCartArrowDown className='text-3xl text-black' /></button>
                    </div>
                </div>
                <div className='shadow-2xl'>
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
                <div className='flex gap-4 mt-5 ' style={{color:'gold'}}>
                    <h1 className='text-5xl font-bold'>{data.ratings}</h1>
                    <h1 className='bg-orange-400 mx-5 p-3 text-2xl'>very Good</h1>
                </div>
                <div className='flex mt-5 p-5'>
                {
                    Array.from({ length: ra }, (v, i) => <>
                        <FaStar className='text-5xl font-bold' style={{color:'gold'}} />

                    </>
                    )
                }
                <FaRegStar className='text-5xl font-bold' style={{color:'gold'}} />
                </div>
                <h1 className='text-2xl'>Total Rating : {data?.ratingsCount}</h1>
            </div>
            <div>
                <h1>Revuew :</h1>
                <div>
                    <h>This produc is good</h>
                    <img className='w-40' alt='' src={data.img}/>
                </div>
            </div>
        </div>
    );
};

export default Productdetails;