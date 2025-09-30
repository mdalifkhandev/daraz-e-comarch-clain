import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Authcontext } from '../../../context/authprovaider/Authprovider';

const Addproduct = () => {
    const { user } = useContext(Authcontext)
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const category = (data.catagore)
        const img = data.img
        const name = data.name
        const price = data.price
        const quantity = data.quantity
        const ratings = 4
        const ratingsCount = 850
        const seller = data.seller
        const shipping = 900
        const stock = 20
        // const catagore=catagore.toLowerCase()
        const productdata = {
            name,
            seller,
            quantity,
            category,
            img,
            price,
            ratingsCount,
            ratings,
            shipping,
            stock
        }
        // console.log(productdata);
        saveproduct(productdata);
        reset();
    };

    const saveproduct = (data) => {
        const url = `https://daraz-e-comarch-server.vercel.app/all-products?email=${user.email}`
        // const url = `http://localhost:5000/all-products?email=${user.email}`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast(data.message ? `Product not Added Please seller Login${data.message}` : 'Products added successfully')
            })
    }
    if (!user.emailVerified) {
        return <h1>Please verify your E-mail</h1>
    }
    return (
        <div className='max-w-4xl mx-auto'>
            <div className='rounded-2xl border border-base-300 shadow-lg p-6 mt-4 bg-base-100'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1 className='text-2xl font-bold mb-4 text-center'>Add new product</h1>
                    <div className='grid sm:grid-cols-2 gap-4'>
                        <div className='sm:col-span-2'>
                            <label className='label'><span className='label-text'>Product name</span></label>
                            <input required type='text' placeholder='Type product name' className='input input-bordered w-full' {...register("name")} />
                        </div>
                        <div>
                            <label className='label'><span className='label-text'>Category</span></label>
                            <input required type='text' placeholder='e.g. phone, laptop' className='input input-bordered w-full' {...register("catagore")} />
                        </div>
                        <div>
                            <label className='label'><span className='label-text'>Seller name</span></label>
                            <input readOnly type='text' value={user.displayName} className='input input-bordered w-full' {...register("seller")} />
                        </div>
                        <div className='sm:col-span-2'>
                            <label className='label'><span className='label-text'>Image URL</span></label>
                            <input required type='text' placeholder='https://...' className='input input-bordered w-full' {...register("img")} />
                        </div>
                        <div>
                            <label className='label'><span className='label-text'>Quantity</span></label>
                            <input required type='number' placeholder='Quantity' className='input input-bordered w-full' {...register("quantity")} />
                        </div>
                        <div>
                            <label className='label'><span className='label-text'>Price</span></label>
                            <input required type='number' placeholder='Price' className='input input-bordered w-full' {...register("price")} />
                        </div>
                    </div>
                    <button className='btn mt-6 w-full btn-primary' type="submit">Save product</button>
                </form>
            </div>
        </div>
    );
};

export default Addproduct;