import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Stats from './stats';
import Pricing from './pricing';

import Education from './Education';
import OpenAcount from '../OpenAccount';
import Navbar from '../Navbar';
import Footer from '../Footer';
function HomePage() {
    return (
        <>
        
        <Hero/>
        <Awards/>
        <Stats/>
        <Pricing/>        
        <Education/>
        <OpenAcount/>
        
        </>
      );
}

export default HomePage;