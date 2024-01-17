import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../../hocks/usetitle/useTitle';

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
    return (
        <div className='grid grid-cols-3 gap-3 my-8'>
            {/* user details */}
            <div className='col-span-2 shadow-xl'>
                <div className='shadow-xl'>
                    <h1>user name</h1>
                    <h1>user phon</h1>
                    <h1>user address</h1>
                </div>
                {/* produc details */}
                <div className='shadow-xl mt-5'>
                    <div className='flex shadow-xl'>
                        <img alt='' className='w-44 rounded-xl' src={dat.img} />
                        <div className='ml-5 my-2 p-5'>
                            <h1>{dat.name}</h1>
                            <h1>  <button disabled={quentity === 1} onClick={ninusehundler} className='mx-4 btn btn-outline'> -</button> {quentity} <button className='mx-4 btn btn-outline' onClick={pleasehendler}>+</button> </h1>
                            <h1>Quentity : {quentity}</h1>
                            <h1>Price : {(dat.price)}</h1>
                            <h1> Total Price : {(dat.price) * quentity}</h1>
                            <h1>Dalevary chaege : {dailyvary}</h1>
                        </div>
                    </div>
                </div>
            </div>
            {/* payment details */}
            <div className='shadow-xl  divide-y-4 p-5 m-5'>
                <div className='shadow-xl '>
                    <p>Discount and Payment</p>
                    <p className='flex justify-between'><span> Voucher</span><span>setwet</span></p>
                    <p className='flex justify-between mb-8'><span>Promo Code</span><span>setwet</span></p>

                </div>
                <div>
                    <p>Order Summary</p>
                    <p className='flex justify-between'><span> Total payment</span><span>{(dat.price) * quentity}</span></p>
                    <p className='flex justify-between'><span> Delivery Fee</span><span>{dailyvary}</span></p>
                    <p className='flex justify-between'><span> Total Payment</span><span>{dailyvary + ((dat.price) * quentity)}</span></p>

                </div>

            </div>
        </div>
    );
};

export default Payment;