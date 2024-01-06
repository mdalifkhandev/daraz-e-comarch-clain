import React from 'react';
import Products from '../../prosucts/products/Products';
import Catacaro from '../homehade/catacaro/Catacaro';


const Home = () => {
    return (
        <div className='mt-8'>
            <Catacaro></Catacaro>
            <Products></Products>
        </div>
    );
};

export default Home;