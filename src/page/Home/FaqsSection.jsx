import React from 'react';
import Button from '../../components/Button/button';


import img1 from "../../assects/images/22.png"
import Tabs from '../../components/tabs';


const FaqsSection = () => {
    return (
        <div className='bg-[#fafafa] py-12'>
            <div className='container relative'>
                <div className='flex justify-between xs:block sm:block md:block '>
                    <div className='w-[23%] xs:w-[100%] sm:w-[100%] md:w-[100%] ml-[-50px] xs:ml-[0px] sm:ml-[0px] md:ml-[0px]  xl:ml-[0px] 2xl:ml-[0px] pt-8'>
                        <img className='w-[100%] m-auto'  src={img1} alt="" />
                    </div>
                    <div className='w-[73%] xs:w-[100%] sm:w-[100%] md:w-[100%] '>
                        <Tabs />
                    </div>
                  
                </div>
                <div className='flex justify-center pt-6'>
                     <button className='px-10 py-4 bg-[#dfc66d] rounded-full '>VIEW ALL</button>
                </div>
            </div>


        </div>
    );
};

export default FaqsSection;