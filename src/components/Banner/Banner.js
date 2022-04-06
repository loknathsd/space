import React from 'react';
import MainBanner from '../MainBanner/MainBanner';
import Navigation from '../Navbar/Navigation';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-style'>
            <Navigation></Navigation>
            <MainBanner></MainBanner>
            
        </div>
    );
};

export default Banner;