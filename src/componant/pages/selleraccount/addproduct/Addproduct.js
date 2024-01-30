import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Authcontext } from '../../../context/authprovaider/Authprovider';

const Addproduct = () => {
    const {user}=useContext(Authcontext)
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
        const url = `http://localhost:5000/all-products?email=${user.email}`
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
                toast(data.message ? `Product not Added Please seller Login${data.message}` : 'Products added successfully' )
            })
    }
    return (
        <div className='m-auto w-4/5'>
            <div className='   place-content-center shadow-2xl m-4 p-6'>
                <form onSubmit={handleSubmit(onSubmit)}  >
                    <h1 className='text-4xl font-bold text-center m-3'> New product add</h1>
                    <span className="label">Product Name Name</span>
                    <input required type='text' placeholder='Type product name' className='input input-primary input-bordered w-full text-white' {...register("name")} />

                    <span className="label">Product catagore</span>
                    <input required type='text' placeholder='Type catagori' className='input input-bordered w-full text-white' {...register("catagore")} />

                    <span className="label">Seller name</span>
                    <input readOnly type='text' value={user.displayName} placeholder='Type Seller Name' className='input input-bordered w-full text-white' {...register("seller")} />


                    <span className="label">img URL</span>
                    <input required type='text' placeholder='image URL' className='input input-bordered w-full text-white' {...register("img")} />

                    <span className="label">product quantity</span>
                    <input required type='number' placeholder='Quentity' className='input input-bordered w-full text-white' {...register("quantity")} />

                    <span className="label">product price</span>
                    <input required type='number' onFocus={this} placeholder='Price' className='input input-bordered w-full text-white' {...register("price")} />

                    <input className='btn mt-4 w-full btn-primary' type="submit" />
                </form>


            </div>
        </div>
    );
};

export default Addproduct;