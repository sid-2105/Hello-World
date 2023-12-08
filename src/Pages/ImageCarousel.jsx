import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageCarousel.css'

const ImageCarousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:2000,
    centerMode:true,
    centerPadding:50,
    // variableWidth:true,
    adaptiveHeight:true,
    arrows:true,
    pauseOnHover:true,
    lazyLoad:'ondemand'
    // nextArrow:<CustomNextArrow/>,
    // prevArrow:<CustomPrevArrow/>,
    //  dotsClass:'custom_dots',
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div className='carouselimg' key={index}>
          <img src={image} alt={`slide-${index}`} />
        </div>
      ))}
    </Slider>
  );
};

export default ImageCarousel