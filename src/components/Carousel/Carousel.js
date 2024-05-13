import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Carousel.css'
import Box  from '@mui/material/Box';

const Carousel = ({children}) => {

    const options = {
        loop: true,
        center: true,
        margin: 8,
        autoplay: true,
        dots: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            770:{
                items: 2,
                nav: true,
            },
            1000: {
                items: 2,
                nav: true,
            },
            1200: {
                items: 3,
                nav: true,
            }
        }
    };

  return (
      <Box sx={{m:'auto'}}>
        <OwlCarousel  className='owl-theme' {...options}>
            {children}
        </OwlCarousel>
      </Box>
  );
};

export default Carousel;
