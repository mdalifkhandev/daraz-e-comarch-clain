import React from 'react';
import Catagoris from '../catagories/Catagoris';
import Carousel from '../Carousel/Carousel';

const Catacaro = () => {
    return (
        <div>
            <div className="hero  ">
                <div className="hero-content flex-col lg:flex-row">
                    <Catagoris></Catagoris>
                    <div>
                        <Carousel></Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Catacaro;