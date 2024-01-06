import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Productscard from '../../../../prosucts/productscard/Productscard';
import Catacaro from '../../catacaro/Catacaro';

const Catagorydatalode = () => {
    const produc=useLoaderData()
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
        </div>
    );
};

export default Catagorydatalode;