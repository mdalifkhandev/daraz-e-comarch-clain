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
                console.log(resualt.user);
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
        fetch(`http://localhost:5000/users`,{
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
        <div className='grid place-content-center'>
            <div className='w-80 shadow-2xl m-4 p-6'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1 className='text-4xl font-bold text-center m-3'> Login</h1>
                    <span className="label">Type Your Email</span>
                    <input type='email' placeholder='Type Your Email' className='input input-bordered w-full text-white' {...register("email")} />
                    <br />
                    <span className="label">Type Your password</span>
                    <input type='password' placeholder='Type Your password' className='input input-bordered w-full text-white' {...register("password")} />
                    <br />
                    <input className='btn mt-4 w-full btn-primary' type="submit" />
                    <p className='my-2' >You have not account <Link to='/signup'> Please Signup </Link> </p>
                    {/* <div className='divider divider-primary'>OR</div> */}
                    <p className='my-2' ><Link to='/forgatepassword'> Forgate Password </Link> </p>
                    {
                        errors ? <p className='text-red-600 my-3'>{errors.message}</p> : <p></p>
                    }

                </form>
                <div className='divider divider-secondary'>
                    OR
                </div>
                <button onClick={googlehendler} className="btn w-full btn-outline">
                    CONTINUE WITH GOOGLE
                </button>
            </div>
        </div>
    );
};

export default Login;