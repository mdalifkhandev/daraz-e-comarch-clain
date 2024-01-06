import React, { useEffect, useState } from 'react';
import Productscard from '../productscard/Productscard';


const Products = ({ categorywicdata }) => {

    const [numberofproduc, setnumberofproduc] = useState()
    const [data, setdata] = useState([])
    const [page, setpage] = useState(0)
    const [prpagdata, setprpagdata] = useState(10)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const uri = `http://localhost:5000/all-products?page=${page}&size=${prpagdata}`
        fetch(uri)//?page=${page}&size=${prpagdata}
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setdata(data.resualt)
                setnumberofproduc(data.count)
                setLoading(false)
            })
    }, [page, prpagdata])
    // console.log(numberofproduc);

    const totalpag = Math.ceil(numberofproduc / prpagdata)
    console.log(categorywicdata);
    // if(data.length=0){
    //     return 0
    // }
    // console.log(totalpag);
    if (loading) {
        <h1>Loading .... </h1>
    }

    return (
        <div>
            <div className='grid mt-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3'>
               


               {
                    data.map(produc => <Productscard
                        key={produc._id}
                        produc={produc}
                    ></Productscard>)
                }
            </div>
            <div className="pagination">
                <p>Currently selected page: {page + 1} and size: {prpagdata}</p>
                {
                    [...Array(totalpag || numberofproduc).keys()].map(number => <button
                        key={number}
                        className={page === number ? 'btn m-3' : 'btn btn-outline m-3'}
                        onClick={() => setpage(number)}
                    >
                        {number + 1}
                    </button>)
                }
                <select onChange={event => setprpagdata(event.target.value)}
                    className='btn btn-outline m-3'
                >
                    <option value="10">10</option>
                    <option value="5">5</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
            </div>
        </div>
    );
};

export default Products;