import React from 'react';
import useTitle from '../../../hocks/usetitle/useTitle';
import Carousel from '../homehade/Carousel/Carousel';
import Testimonials from '../homehade/Testimonials';
import BusinessGrowthPlan from '../homehade/BusinessGrowthPlan';


const Home = ({search}) => {
    // console.log(search);
    useTitle(' Home')
    return (
        <div className='mt-8'>
            <Carousel></Carousel>
            <Testimonials></Testimonials>
            <BusinessGrowthPlan></BusinessGrowthPlan>
        </div>
    );
};

export default Home;