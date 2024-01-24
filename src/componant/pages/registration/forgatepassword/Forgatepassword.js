import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Authcontext } from '../../../context/authprovaider/Authprovider';
import toast from 'react-hot-toast';

const Forgatepassword = () => {
    const {forgatepassword}=useContext(Authcontext)
    const { register, handleSubmit } = useForm();
    const [message,setmesdsage]=useState()
    const onSubmit = data => {
        const email=(data.email)
        forgatepassword(email)
        .then(resualt=>{
            console.log(resualt);
            setmesdsage('Cheak your Email and Change password')
            toast.success('Cheak your Email and Change password')
        })
        .catch(error=>{
            console.log(error)
            toast.error(error.message)
        })
    };
    return (
        <>
        <form className='flex justify-center mt-24' onSubmit={handleSubmit(onSubmit)}>
            <input className='input text-white' {...register('email') } required />
            <br/>
            <input className='btn btn-success ml-5' type="submit" />
        </form>
        <p className='flex justify-center mt-5 text-green-600 text-3xl font-bold mb-24'>{message}</p>
        </>
    );
};

export default Forgatepassword;