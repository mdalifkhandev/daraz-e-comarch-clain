import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../../hocks/usetitle/useTitle';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Cheakout from './cheakout/Cheakout';



// const stripePromise = loadStripe(process.env.REACT_APP_TOKEN_STRIP);
const stripePromise = loadStripe('pk_test_51NrtkkG1p3nVEVTLlIhN9JauWDQ4WVtWQ7GTOSj5wjMyrQjjQ7NMU5KyiRYJ3HKn2xXRQU0D9RLyBbdU5LjkKmSb00fo9FLHfW');
// console.log(process.env.REACT_APP_TOKEN_STRIP);



const Payment = () => {
    const dat = useLoaderData()
    console.log(dat);
    const [quentity, setquentity] = useState(1)
    useTitle(`Payment ${dat.name}`)
    const pleasehendler = () => {
        setquentity(quentity + 1)
    }
    const ninusehundler = () => {
        setquentity(quentity - 1)
    }
    const dailyvary = 69
    const itemtotalprice = (dat.price) * quentity
    const totalprice=dailyvary + ((dat.price) * quentity)
    const catdta={
        dailyvary,
        itemtotalprice,
        totalprice,
        id:dat._id,
        quentity,
        img:dat.img,
        name:dat.name,
        seller:dat.seller,
        
    }
    const options = {
        mode: 'payment',
        amount: totalprice,
        currency: 'usd',
        // Fully customizable with appearance API.
        appearance: {
            /*...*/
        },
    };
    // console.log(catdta);
    return (
        <div>
            <div className='grid grid-cols-3 gap-3 my-8'>
                {/* user details */}
                <div className='col-span-2 shadow-xl'>
                    <div className='shadow-xl'>
                        <h1>user name</h1>
                        <h1>user phon</h1>
                        <h1>user address</h1>
                        <h1>user Email</h1>
                    </div>
                    {/* produc details */}
                    <div className='shadow-xl mt-5'>
                        <div className='flex shadow-xl'>
                            <img alt='' className='w-44 rounded-xl' src={dat.img} />
                            <div className='ml-5 my-2 p-5'>
                                <h1>{dat.name}</h1>
                                <h1>
                                    <button disabled={quentity === 1} onClick={ninusehundler} className='mx-4 btn btn-outline'> -</button>
                                    {quentity}
                                    <button className='mx-4 btn btn-outline' onClick={pleasehendler}>+</button>
                                </h1>
                                <h1>Quentity : {quentity}</h1>
                                <h1>Price : {(dat.price)}</h1>
                                <h1>Item Total Price : {itemtotalprice}</h1>
                                <h1>Dalevary chaege : {dailyvary}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                {/* payment details */}
                <div className='shadow-xl  divide-y-4 p-5 m-5'>
                    <div className='shadow-xl '>
                        <p>Discount and Payment</p>
                        <p className='flex justify-between'><span> Voucher</span><span><small>nathing</small></span></p>
                        <p className='flex justify-between mb-8'><span>Promo Code</span><span><small>nathing</small></span></p>

                    </div>
                    <div>
                        <p>Order Summary</p>
                        <p className='flex justify-between'><span>Item Total Price</span><span>{itemtotalprice}</span></p>
                        <p className='flex justify-between'><span> Delivery Fee</span><span>{dailyvary}</span></p>
                        <p className='flex justify-between'><span> Total Payment</span><span>{totalprice}</span></p>

                    </div>


                    <div>
                    </div>
                </div>
            </div>
                        <Elements stripe={stripePromise} options={options}>
                            <Cheakout
                            catdta={catdta}
                            />
                        </Elements>
        </div>
    );
};

export default Payment;