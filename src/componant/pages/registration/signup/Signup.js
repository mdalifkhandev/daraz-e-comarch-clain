import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import useTitle from '../../../hocks/usetitle/useTitle';
import { Authcontext } from '../../../context/authprovaider/Authprovider';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Signup = () => {
    useTitle("Signup")
    const { createUser, googlelogin, updateuser } = useContext(Authcontext)
    const location=useLocation()
    const navigate=useNavigate()
    const from = location?.state?.from?.pathname || "/";
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const name = data.firstName + ' ' + data.lestName
        const email = data.email
        const password = data.password
        createUser(email, password)
            .then(resualt => {
                const userinfo = {
                    displayName: name,
                };
                updateuser(userinfo)
                    .then(resualt => {
                        // console.log(resualt);
                        toast.success('Signup successfully')
                        saveuser(name,email,password)

                    })
                    .catch(error => console.log(error))
                console.log(resualt);
            })
            .catch(error => console.log(error))
    };
    const googlehendler = () => {
        googlelogin()
            .then(resualt => {
                const name = resualt.user.displayName
                const email=resualt.user.email
                saveuser(name,email)
                // console.log(resualt.user);
                toast.success('Signup successfully')
            })
            .catch((error) => console.log(error));
    }

    const saveuser=(name,email,password)=>{
        const user={name,email,password}
        fetch(`https://daraz-e-comarch-server.vercel.app/users`,{
        // fetch(`http://localhost:5000/users`,{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            toast.success('User created successfully')
            navigate(from, { replace: true });
        })
    }

    return (
        <div className='min-h-[calc(100vh-5rem)] grid place-items-center bg-base-200/30 px-4'>
            <div className='w-full max-w-4xl rounded-2xl overflow-hidden border border-base-300 shadow-lg bg-base-100 grid md:grid-cols-2'>
                <div className='hidden md:flex items-center justify-center p-8 bg-gradient-to-br from-primary to-accent text-base-100'>
                    <div>
                        <h2 className='text-3xl font-extrabold'>Create your account</h2>
                        <p className='opacity-90 mt-2'>Join Khan Market and start saving today.</p>
                    </div>
                </div>
                <div className='p-6 md:p-8'>
                    <h1 className='text-2xl font-bold mb-4'>Sign up</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className='label'><span className='label-text'>First name</span></label>
                        <input required placeholder='Your first name' className='input input-bordered w-full' {...register("firstName")} />
                        <label className='label mt-2'><span className='label-text'>Last name</span></label>
                        <input required placeholder='Your last name' className='input input-bordered w-full' {...register("lestName")} />
                        <label className='label mt-2'><span className='label-text'>Email</span></label>
                        <input required type='email' placeholder='you@example.com' className='input input-bordered w-full' {...register("email")} />
                        <label className='label mt-2'><span className='label-text'>Password</span></label>
                        <input required type='password' placeholder='••••••••' className='input input-bordered w-full' {...register("password")} />
                        <button className='btn mt-4 w-full btn-primary' type="submit">Create account</button>
                    </form>
                    <div className='divider'>OR</div>
                    <button onClick={googlehendler} className="btn w-full btn-outline">Continue with Google</button>
                    <p className='mt-4 text-sm text-center'>
                        Already have an account? <Link className='link link-primary' to='/login'>Sign in</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;