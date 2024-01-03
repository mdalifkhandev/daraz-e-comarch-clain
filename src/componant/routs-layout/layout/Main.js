import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../sheard/header/navebar/Header';
import Footer from '../../sheard/footer/Footer ';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='mx-20'>
            <Outlet></Outlet>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;