import React, { useContext, useEffect, useState } from 'react';
import './Cat.css'
import { Link } from 'react-router-dom';
import { Authcontext } from '../../../../context/authprovaider/Authprovider';
import Loading from '../../../../hocks/loading/Loading';
// import Productscard from '../../../prosucts/productscard/Productscard';

const Catagoris = () => {

    const {loading}=useContext(Authcontext)
    const [dtaloding,setdtaloding]=useState(true)
    const [data, setdata] = useState()
    // const [categorywicdata, setcategorywicdata] = useState()
    // const [catadata, setcatadata] = useState()
    useEffect(() => {
        // fetch(`http://localhost:5000/catagories`)
        fetch(`https://daraz-e-comarch-server.vercel.app/catagories`)
            .then(res => res.json())
            .then(data => {
                setdata(data)
                setdtaloding(false)
            })
    }, [])
    // useEffect(() => {
    //     fetch(`http://localhost:5000/catagorie-lod-data?category=${catadata}`,
            // {
            //     method: "POST",
            //     headers: {
            //       "content-type": "application/json"
            //     },
            //     body: JSON.stringify(categorywicdata)
            // }
        // )
            // .then(res => res.json())
            // .then(data => setcategorywicdata(data))
    // }, [catadata, setcategorywicdata])
    const arr = []
    data?.forEach(x => {
        // console.log(x.category);
        if (!arr.includes(x.category)) {
            arr.push((x.category))
        }
    });
    //const arrr=arr.sort(1)
    // console.log(arrr);
    // const onclkhendler = event => {
    //     const categote = event.target.value
    //     setcatadata(categote)
    // }
    // console.log(categorywicdata);
    if(loading || dtaloding){
        return <Loading></Loading>
    }
    return (
        <div>


            {/* <div className='lg:max-h-80 overflow-y-scroll'>
                {
                    arr?.map(x => <button
                        value={x}
                        onClick={onclkhendler}
                        
                        className='menu mt-1 p-2 shadow bg-orange-500 rounded-box w-52'
                    >
                        {x}
                    </button>)
                }
            </div> */}
            <ul className='overover lg:max-h-80 p-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-1 gap-2'>
                {
                    // lg:max-h-80 overflow-y-scroll overover
                    arr?.map((catagore,index) => <Link
                        to={`/category/${catagore}`}
                        // key={catagore}
                        key={index}
                        className='menu mt-1 p-2 text-center shadow bg-primary text-primary-content rounded-box w-full'
                    >
                        {/* <li key={catagore} >{catagore}</li> */}{catagore}
                    </Link>)
                }
            </ul>
            {/* <div className='grid mt-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3'>

                {
                    categorywicdata?.map(produc => <Productscard
                        key={produc._id}
                        produc={produc}
                    ></Productscard>)
                }
            </div> */}

        </div>
    );
};

export default Catagoris;