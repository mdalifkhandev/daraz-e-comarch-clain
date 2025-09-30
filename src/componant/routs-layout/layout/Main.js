import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../sheard/header/navebar/Header';
import MiniCartDrawer from '../../sheard/header/navebar/MiniCartDrawer';
import Footer from '../../sheard/footer/Footer ';

const Main = () => {
    return (
        <div className='bg-base-100 text-base-content'>
            <Header></Header>
            <MiniCartDrawer></MiniCartDrawer>
            <div className='max-w-7xl mx-auto px-4 md:px-10 lg:px-20'><Outlet></Outlet></div>
            <Footer></Footer>
        </div>
    );
};

export default Main;