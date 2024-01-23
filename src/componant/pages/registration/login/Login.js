import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
    const {register,handleSubmit}=useForm()
    const onSubmit = data => console.log(data);
    return (
        <div  className='grid place-content-center'>
            <div  className='w-80 shadow-2xl m-4 p-6'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("firstName")} />
                <select {...register("gender")}>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                </select>
                <input type="submit" />
            </form>

            </div>
        </div>
    );
};

export default Login;