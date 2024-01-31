import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Authcontext } from '../../../context/authprovaider/Authprovider';
import toast from 'react-hot-toast';

const Createselleraccount = () => {
    const { user, googlelogin } = useContext(Authcontext)
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const name = user?.displayName
        const email = user?.email
        const number = data.number
        const address = data.address
        const role = 'sller'
        //    console.log(name,email,number,address);
        saveselleruser(name, email, number, address, role)
        reset()
    };

    const saveselleruser = (name, email, number, address, role) => {
        const data = {
            name,
            email,
            number,
            address,
            role
        }
        fetch(`https://daraz-e-comarch-server.vercel.app/selleruser`, {
        // fetch(`http://localhost:5000/selleruser`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Seller created successfully')
                    googlelogin()
                        .then(resualt => {
                            console.log(resualt.user);
                            toast.success('Seller Signup successfully')
                        })
                        .catch((error) => console.log(error));
                }
            })
    }
    // console.log(user);
    return (
        <div className='grid  place-content-center'>
            <div className='w-80 shadow-2xl m-4 p-6'>
                <form onSubmit={handleSubmit(onSubmit)}  >
                    <h1 className='text-4xl font-bold text-center m-3'> Create Seller Account</h1>
                    <span className="label">Your Name</span>
                    <input readOnly placeholder='Type your First name' className='input input-primary input-bordered w-full text-white' value={user?.displayName} />
                    <br />
                    <span className="label">Your Email</span>
                    <input readOnly type='email' placeholder='Type Your Email' className='input input-bordered w-full text-white' value={user?.email} />
                    <br />
                    <span className="label">Your Phone Number</span>
                    <input required type='number' placeholder='Type Your Number' className='input input-bordered w-full text-white' {...register("number", { minLength: 10, maxLength: 12 })} />
                    <br />
                    <span className="label">Your Address</span>
                    <input required type='text' placeholder='Type Your Address' className='input input-bordered w-full text-white' {...register("address")} />
                    <br />
                    <input className='btn mt-4 w-full btn-primary' type="submit" />
                </form>


            </div>
        </div>
    );
};

export default Createselleraccount;