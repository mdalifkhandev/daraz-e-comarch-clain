import React from 'react';
import Products from '../../prosucts/products/Products';
import Catacaro from '../homehade/catacaro/Catacaro';
import useTitle from '../../../hocks/usetitle/useTitle';


const Home = ({search}) => {
    // console.log(search);
    useTitle(' Home')
    return (
        <div className='mt-8'>
            <Catacaro></Catacaro>
            <Products></Products>
        </div>
    );
};

export default Home;