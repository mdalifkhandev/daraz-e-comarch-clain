import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Authcontext } from '../../../context/authprovaider/Authprovider';
import Loading from '../../../hocks/loading/Loading';
import { useQuery } from '@tanstack/react-query';

const Myaddcart = () => {
    // const [cartdata, setcartdata] = useState()
    const {loading}=useContext(Authcontext)
    // const [dataloading,setloading]=useState(true)
    // useEffect(() => {
    //     fetch(`http://localhost:5000/cart`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setcartdata(data);
    //             setloading(false)
    //             // console.log(data);
    //         })
    // }, [])
    const { data, isLoading } = useQuery({
        queryKey: ['order'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/cart`)
            const data = res.json()
            return data
        }
    })
    if( loading || isLoading  ){
        return <Loading></Loading>
    }
    return (
        <div>
            {
                data?.map(data =><div
                key={data._id}
                >
                        <div className="hero">
                            <div className="hero-content flex-col lg:flex-row">
                                <img alt={data.name} src={data.img} />
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