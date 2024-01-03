import React from 'react';
import Slider from '../slider/Slider';

const Carousel = () => {
  const sliderData = [
    {
      img: 'https://icms-image.slatic.net/images/ims-web/b96579bb-84d7-488b-b565-a4d8ab89d7dd.jpg',
      prev: 4,
      next: 2,
      id: 1
    },
    {
      img: 'https://icms-image.slatic.net/images/ims-web/aeda11c1-aa0a-45dc-b77c-d47404ce5f1b.jpg',
      prev: 1,
      next: 3,
      id: 2
    },
    {
      img: 'https://icms-image.slatic.net/images/ims-web/54ab8c87-35df-421f-8d2f-c0089b6b350c.jpg',
      prev: 2,
      next: 4,
      id: 3
    },
    {
      img: 'https://icms-image.slatic.net/images/ims-web/05da6bc6-a6e4-4e27-81ab-d3572a9b2433.jpg',
      prev: 3,
      next: 1,
      id: 4
    },
  ]
  return (
    <div className="carousel w-full">

      {
        sliderData.map(slide=><Slider
        key={slide.id}
        slide={slide}
        ></Slider>)
      }

    </div>
  );
};

export default Carousel;