import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Authcontext } from '../../../context/authprovaider/Authprovider';
import Loading from '../../../hocks/loading/Loading';
// import { useQuery } from '@tanstack/react-query';

const Myaddcart = () => {
    // const [cartdata, setcartdata] = useState()
    const {loading,user}=useContext(Authcontext)
    const [dataloading,setloading]=useState(true)
    const [data,setcartdata]=useState()
    useEffect(() => {
        fetch(`https://daraz-e-comarch-server.vercel.app/cart?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setcartdata(data);
                setloading(false)
                // console.log(data);
            })
    }, [user.email])
    // const uri=`http://localhost:5000/cart?email=${user.email}`
    // console.log(uri);
    // const { data, isLoading } = useQuery({
    //     queryKey: ['order',user.email],
    //     queryFn: async () => {
    //         const res = await fetch(uri)
    //         const data = res.json()
    //         return data
    //     }
    // })
    if( loading || dataloading  ){
        return <Loading></Loading>
    }
    if(data?.length===0){
        return <div className='text-center my-40 text-5xl'>
         <h1>Your Card is Emty</h1>
         <Link className='link' to='/'>Please go to home And click here</Link>
        </div>
    }
    // console.log(data.length);
    return (
        <div>
            {
                data?.map(data =><div
                key={data._id}
                >
                        <div className="hero">
                            <div className="hero-content flex-col lg:flex-row">
                                <img className='w-72' alt={data.name} src={data.img} />
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