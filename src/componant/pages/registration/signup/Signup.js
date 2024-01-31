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
                        console.log(resualt);
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
        <div className='grid place-content-center'>
            <div className='w-80 shadow-2xl m-4 p-6'>
                <form onSubmit={handleSubmit(onSubmit)}  >
                    <h1 className='text-4xl font-bold text-center m-3'> Signup</h1>
                    <span className="label">Type your First name</span>
                    <input required placeholder='Type your First name' className='input input-primary input-bordered w-full text-white' {...register("firstName")} />
                    <br />
                    <span className="label">Type your lest name</span>
                    <input required placeholder='Type your lest name' className='input input-bordered w-full text-white' {...register("lestName")} />
                    <br />
                    <span className="label">Type Your Email</span>
                    <input required type='email' placeholder='Type Your Email' className='input input-bordered w-full text-white' {...register("email")} />
                    <br />
                    <span className="label">Type Your password</span>
                    <input required type='password' placeholder='Type Your password' className='input input-bordered w-full text-white' {...register("password")} />
                    <br />
                    <input className='btn mt-4 w-full btn-primary' type="submit" />
                    <p>Alrady have an account <Link to='/login'> Please login </Link> </p>
                </form>
                <div className='divider'>
                    OR
                </div>
                <button onClick={googlehendler} className="btn w-full btn-outline">
                    CONTINUE WITH GOOGLE
                </button>
            </div>
        </div>
    );
};

export default Signup;