import React, {  useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Productscard from '../../../../prosucts/productscard/Productscard';
import Catacaro from '../../catacaro/Catacaro';
import useTitle from '../../../../../hocks/usetitle/useTitle';

const Catagorydatalode = () => {
    const produc = useLoaderData()
    const numberofproduc = produc.length
    // console.log(produc.length);
    const catagory = produc[0].category
    // console.log(catagory);
    useTitle(catagory)
    // const [numberofproduc, setnumberofproduc] = useState()
    const [page, setpage] = useState(0)
    const [prpagdata, setprpagdata] = useState(10)
    const totalpag = Math.ceil(numberofproduc / prpagdata)
    return (
        <div>
            <Catacaro></Catacaro>
            <div className='grid mt-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3'>
                {
                    produc?.map(produc => <Productscard
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

export default Catagorydatalode;