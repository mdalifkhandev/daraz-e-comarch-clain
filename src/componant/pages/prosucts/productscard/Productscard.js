import React from 'react';
import { Link } from 'react-router-dom';

const Productscard = ({ produc }) => {
    const { name,price,img,category,_id } = produc
    console.log(_id);
   
    return (
        // <div className='grid grid-cols-3'>
            <div className="card w-auto bg-white shadow-2xl">
                <figure><img src={img} alt={category} className=' h-80 w-80 mt-8 rounded-xl shadow-xl'/></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <h2>Price : $ {price}</h2>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" ><Link to={`/producdetails/${_id}`}>Details</Link></button>
                    </div>
                </div>
            </div>
        // </div>
    );
};

export default Productscard;