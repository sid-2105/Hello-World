import React from 'react';
import "./ScrollToTop.css";

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className='logo'>
      <img
        src="./logo69.png"
        alt="Scroll to Top"
        onClick={scrollToTop}
      />
    </div>
  );
};

export default ScrollToTop;
