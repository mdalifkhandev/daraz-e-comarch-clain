import React, { useState } from 'react';
import Carousel from "../homehade/Carousel/Carousel";
import Products from '../../prosucts/products/Products';
import Catagoris from '../../home/homehade/catagories/Catagoris';


const Home = () => {
    const [categorywicdata, setcategorywicdata] = useState()
    return (
        <div className='mt-8'> 
            <div className='flex flex-row gap-3'>
                <div className='basis-2/12 shadow-xl rounded-xl border'>
                    <Catagoris
                    setcategorywicdata={setcategorywicdata}
                    ></Catagoris>
                </div>
                <div className='basis-10/12 rounded-xl shadow-xl border'>
                    <Carousel></Carousel>
                </div>
            </div>
            <Products
            categorywicdata={categorywicdata}
            ></Products>
        </div>
    );
};

export default Home;