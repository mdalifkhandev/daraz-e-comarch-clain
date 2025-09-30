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
        <div className='min-h-[calc(100vh-5rem)] grid place-items-center bg-base-200/30 px-4'>
            <div className='w-full max-w-3xl rounded-2xl overflow-hidden border border-base-300 shadow-lg bg-base-100 grid md:grid-cols-2'>
                <div className='hidden md:flex items-center justify-center p-8 bg-gradient-to-br from-secondary to-primary text-base-100'>
                    <div>
                        <h2 className='text-3xl font-extrabold'>Become a Seller</h2>
                        <p className='opacity-90 mt-2'>Grow your business with Khan Market.</p>
                    </div>
                </div>
                <div className='p-6 md:p-8'>
                    <h1 className='text-2xl font-bold mb-4'>Create Seller Account</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className='label'><span className='label-text'>Your name</span></label>
                        <input readOnly className='input input-bordered w-full' value={user?.displayName || ''} />
                        <label className='label mt-2'><span className='label-text'>Your email</span></label>
                        <input readOnly type='email' className='input input-bordered w-full' value={user?.email || ''} />
                        <label className='label mt-2'><span className='label-text'>Phone number</span></label>
                        <input required type='tel' placeholder='01XXXXXXXXX' className='input input-bordered w-full' {...register("number", { minLength: 10, maxLength: 12 })} />
                        <label className='label mt-2'><span className='label-text'>Address</span></label>
                        <input required type='text' placeholder='Shop/House, Road, City' className='input input-bordered w-full' {...register("address")} />
                        <button className='btn mt-4 w-full btn-primary' type="submit">Create seller</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Createselleraccount;