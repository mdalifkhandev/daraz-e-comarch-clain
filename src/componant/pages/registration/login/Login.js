import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Authcontext } from '../../../context/authprovaider/Authprovider';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const { googlelogin, loginuser } = useContext(Authcontext)
    const { register, handleSubmit } = useForm()
    const [errors, seterrors] = useState('')
    const location=useLocation()
    const navigate=useNavigate()
    const from = location?.state?.from?.pathname || "/";
    const onSubmit = data => {
        const email = data.email
        const password = data.password
        loginuser(email, password)
            .then(resualt => {
                // console.log(resualt.user);
                toast.success('Login successfully')
                navigate(from, { replace: true });
                
            })
            .catch((error) => seterrors(error));
        //  console.log(email,password)
    };


    const googlehendler = () => {
        googlelogin()
            .then(resualt => {
                const name = resualt.user.displayName
                const email=resualt.user.email
                saveuser(name,email)
                // console.log(resualt.user);
                toast.success('Login successfully')
                navigate(from, { replace: true });
            })
            .catch((error) => seterrors(error));
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
        })
    }
    return (
		<div className='min-h-[calc(100vh-5rem)] grid place-items-center bg-base-200/30 px-4'>
			<div className='w-full max-w-4xl rounded-2xl overflow-hidden border border-base-300 shadow-lg bg-base-100 grid md:grid-cols-2'>
				<div className='hidden md:flex items-center justify-center p-8 bg-gradient-to-br from-neutral to-neutral/80 text-base-100'>
					<div>
						<h2 className='text-3xl font-extrabold'>Welcome back</h2>
						<p className='opacity-90 mt-2'>Login to continue shopping and track your orders.</p>
					</div>
				</div>
				<div className='p-6 md:p-8'>
					<h1 className='text-2xl font-bold mb-4'>Login</h1>
					<form onSubmit={handleSubmit(onSubmit)}>
						<label className='label'><span className='label-text'>Email</span></label>
						<input type='email' placeholder='you@example.com' className='input input-bordered w-full' {...register("email")} />
						<label className='label mt-2'><span className='label-text'>Password</span></label>
						<input type='password' placeholder='••••••••' className='input input-bordered w-full' {...register("password")} />
						<button className='btn mt-4 w-full btn-primary' type="submit">Sign in</button>
					</form>
					<div className='flex items-center justify-between mt-2 text-sm'>
						<Link to='/forgatepassword' className='link link-hover'>Forgot password?</Link>
					</div>
					{errors ? <p className='text-error my-3'>{errors.message}</p> : null}
					<div className='divider'>OR</div>
					<button onClick={googlehendler} className="btn w-full btn-outline">Continue with Google</button>
					<p className='mt-4 text-sm text-center'>
						New here? <Link className='link link-primary' to='/signup'>Create an account</Link>
					</p>
				</div>
			</div>
		</div>
    );
};

export default Login;