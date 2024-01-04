import React from 'react';
import Carousel from "../homehade/Carousel/Carousel";
import Products from '../../prosucts/products/Products';


const Home = () => {
    return (
        <div className='mt-8'> 
            <div className='flex flex-row gap-3'>
                <div className='basis-2/12 shadow-xl rounded-xl border'>
                    <h1>Catagoris</h1>
                </div>
                <div className='basis-10/12 rounded-xl shadow-xl border'>
                    <Carousel></Carousel>
                </div>
            </div>
            <Products></Products>
        </div>
    );
};

export default Home;