import React from 'react';

const Slider = ({slide}) => {
    const {img,prev,next,id}=slide
    return (
        
            
      
        <div id={`slide${id}`} className="carousel-item relative w-full">
          <img src={img} alt='slider' className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover rounded-xl" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral/60 via-transparent to-transparent pointer-events-none rounded-xl"></div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href={`#slide${prev}`} className="btn btn-circle">❮</a>
            <a href={`#slide${next}`} className="btn btn-circle">❯</a>
          </div>
        </div>
      
        
    );
};

export default Slider;