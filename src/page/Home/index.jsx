import React, {  useEffect, useRef, useState } from 'react';
import HeroSection from './Herosection';
import WhatisDogeSection from './WhatisDoge';
import DoOnlySection from './DoOnly';
import MediaSection from './MediaSection';
import FaqsSection from './FaqsSection';
import FindOutSection from './FindOutSection';


const Home = () => {

    return (
        <div className=' relative m-0' >
            <div className=''>
                <HeroSection />
            </div>
            <div>
                <WhatisDogeSection />
            </div>
            <div>
                <DoOnlySection />
            </div>
            <div>
                <MediaSection />
            </div>
            <div>
                <FaqsSection/>
            </div>
            <div>
                <FindOutSection />
            </div>
           
           

        </div>
    );
};

export default Home;