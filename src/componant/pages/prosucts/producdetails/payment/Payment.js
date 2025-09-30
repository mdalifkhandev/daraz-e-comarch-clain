import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../../hocks/usetitle/useTitle';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Cheakout from './cheakout/Cheakout';
import { Authcontext } from '../../../../context/authprovaider/Authprovider';



const stripePromise = loadStripe(process.env.REACT_APP_TOKEN_STRIP);



const Payment = () => {
    const { user } = useContext(Authcontext)
    const [phon, setphon] = useState('')
    const [address, setaddress] = useState('')
    const name = user?.displayName
    const email = user?.email
    // console.log(name, email, user, phon, address);
    const dat = useLoaderData()
    // console.log(dat);
    const [quentity, setquentity] = useState(1)
    useTitle(`Payment ${dat.name}`)
    const pleasehendler = () => {
        setquentity(quentity + 1)
    }
    const ninusehundler = () => {
        setquentity(quentity - 1)
    }
    const dailyvary = 5
    const itemtotalprice = Math.floor((((dat.price) * quentity) / 100) * 80)
    const totalprice = dailyvary + Math.floor((((dat.price) * quentity) / 100) * 80)
    const catdta = {
        dailyvary,
        itemtotalprice,
        totalprice,
        id: dat._id,
        quentity,
        img: dat.img,
        producname: dat.name,
        seller: dat.seller,
        name,
        email,
        phon,
        address
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

    const hendlsubmitnumber = event => {
        setphon(event.target.value)
    };
    const hendlsubmitaddress = event => {
        setaddress(event.target.value)
    };

    return (
        <div className='max-w-7xl mx-auto px-4 py-6'>
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-6'>
                {/* left: product + user */}
                <div className='lg:col-span-7'>
                    <div className='rounded-xl border border-base-200 bg-base-100 p-4'>
                        <div className='flex items-start gap-4'>
                            <img alt={dat.name} className='w-32 h-32 object-cover rounded-lg border' src={dat.img} />
                            <div className='flex-1'>
                                <h1 className='font-semibold text-lg'>{dat.name}</h1>
                                <div className='mt-2 flex items-center gap-2'>
                                    <button disabled={quentity === 1} onClick={ninusehundler} className='btn btn-outline btn-sm'>-</button>
                                    <span className='font-semibold'>{quentity}</span>
                                    <button className='btn btn-outline btn-sm' onClick={pleasehendler}>+</button>
                                </div>
                                <div className='mt-2 text-sm opacity-80'>Seller: {dat.seller}</div>
                            </div>
                            <div className='text-right'>
                                <div className='text-2xl font-extrabold text-primary'>$ {Math.floor((dat.price / 100) * 80)}</div>
                                <div className='line-through text-base-300'>$ {dat.price}</div>
                            </div>
                        </div>
                    </div>
                    <div className='rounded-xl border border-base-200 bg-base-100 p-4 mt-4'>
                        <h2 className='font-semibold mb-3'>Shipping details</h2>
                        <div className='grid sm:grid-cols-2 gap-3'>
                            <div>
                                <label className='label'><span className='label-text'>Full name</span></label>
                                <input value={name || ''} readOnly className='input input-bordered w-full' />
                            </div>
                            <div>
                                <label className='label'><span className='label-text'>Email</span></label>
                                <input value={email || ''} readOnly className='input input-bordered w-full' />
                            </div>
                            <div>
                                <label className='label'><span className='label-text'>Phone</span></label>
                                <input required onChange={hendlsubmitnumber} name='phon' className='input input-bordered w-full' placeholder='01XXXXXXXXX' />
                            </div>
                            <div className='sm:col-span-2'>
                                <label className='label'><span className='label-text'>Address</span></label>
                                <input required onChange={hendlsubmitaddress} name='address' className='input input-bordered w-full' placeholder='House, Road, City' />
                            </div>
                        </div>
                    </div>
                </div>
                {/* right: summary + stripe */}
                <div className='lg:col-span-5'>
                    <div className='rounded-xl border border-base-200 bg-base-100 p-5 sticky top-24'>
                        <h2 className='font-semibold mb-3'>Order Summary</h2>
                        <div className='space-y-2 text-sm'>
                            <div className='flex justify-between'><span>Items total</span><span>$ {itemtotalprice}</span></div>
                            <div className='flex justify-between'><span>Delivery fee</span><span>$ {dailyvary}</span></div>
                            <div className='divider my-2'></div>
                            <div className='flex justify-between font-semibold'><span>Total</span><span>$ {totalprice}</span></div>
                        </div>
                        <div className='mt-4'>
                            <Elements stripe={stripePromise} options={options}>
                                <Cheakout catdta={catdta} />
                            </Elements>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;