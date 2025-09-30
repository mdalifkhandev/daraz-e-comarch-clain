import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Authcontext } from '../../../context/authprovaider/Authprovider';

const Productscard = ({ produc }) => {
    const { name,price,img,category,_id } = produc
    // console.log(_id);
    const { user } = useContext(Authcontext)
    const navigate = useNavigate()

    const handleBuyNow = () => {
        if(!user){
            navigate('/login')
            return
        }
        navigate(`/producdetails/payment/${_id}`)
    }
   
    return (
        // <div className='grid grid-cols-3'>
            <div className="card w-full bg-white shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1 rounded-xl border border-base-200">
                <figure className='p-4 relative'>
                    <span className='badge badge-secondary absolute left-6 top-6 shadow'>20% OFF</span>
                    <img loading='lazy' src={img} alt={category} className='h-56 sm:h-64 md:h-72 lg:h-80 w-full object-cover mt-4 rounded-xl shadow-xl transition-transform duration-300 group-hover:scale-[1.03]'/>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <h2>Price : $ {Math.floor((price/100)*80)}</h2>
                    <h2>Price : $ <span className='line-through'>{price}</span>  <span className='font-bold ml-5' > 20% OFF</span></h2>
                    <div className="card-actions justify-between items-center">
                        <button className="btn btn-success btn-sm" onClick={handleBuyNow}>Buy Now</button>
                        <Link className="btn btn-primary btn-sm" to={`/producdetails/${_id}`}>Details</Link>
                    </div>
                </div>
            </div>
        // </div>
    );
};

export default Productscard;