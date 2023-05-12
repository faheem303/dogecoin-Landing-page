import React from 'react';
import Button from '../../components/Button/button';


import icon1 from "../../assects/icons/T.svg"
import icon2 from "../../assects/icons/R.svg"
import icon3 from "../../assects/icons/D.svg"
import GetstartedCard from '../../components/GetstartedCard/GetstartedCard';


const MediaSection = () => {
    return (
        <div className=''>
            <div className='container'>
                <div className='flex justify-around items-center pb-8'>
               <a href=""> <img className='w-[160px]'  src={icon1} alt="" /></a>
               <a href=""> <img className='w-[160px]'  src={icon2} alt="" /></a>
               <a href=""> <img className='w-[160px]'  src={icon3} alt="" /></a>
                </div>
            </div>


        </div>
    );
};

export default MediaSection;