import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Authcontext } from '../../../context/authprovaider/Authprovider';
import Loading from '../../../hocks/loading/Loading';

const Myaddcart = () => {
    const [cartdata, setcartdata] = useState()
    const {loading}=useContext(Authcontext)
    useEffect(() => {
        fetch(`http://localhost:5000/cart`)
            .then(res => res.json())
            .then(data => {
                setcartdata(data);
                // console.log(data);
            })
    }, [])
    if(loading){
        return <Loading></Loading>
    }
    return (
        <div>
            {
                cartdata?.map(data =><div
                key={data._id}
                >
                        <div className="hero">
                            <div className="hero-content flex-col lg:flex-row">
                                <img src={data.img} />
                                <div>
                                    <h1 className="text-5xl font-bold">{data.name}</h1>
                                    <p className="my-1">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                    <p className="font-bold text-xl my-1">Price : $ {Math.floor((data.price/100)*80)}</p>
                                    <p className="font-bold text-xl line-through my-1">$ {data.price}</p>
                                    <button className="btn btn-primary"><Link to={`/producdetails/${data.cardid}`}>Details</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default Myaddcart;