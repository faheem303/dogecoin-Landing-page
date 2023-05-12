import React from 'react';
import Button from '../../components/Button/button';


import Hero from "../../assects/images/hero.png"

const HeroSection = () => {
    return (
        <div className='mainBg md:mdnavbar sm:mdnavbar xs:mdnavbar'>
            <div className='container'>
                <div className='flex md:block py-[2rem] '>
                    <div className='w-[30%] max-w-[580px] mx-auto md:hidden sm:hidden xs:hidden'>
                        <img src={Hero} alt="" />
                    </div>
                    <div className='space-y-5  w-[58%] md:w-[100%] sm:w-[100%] xs:w-[100%] py-5 px-20 md:px-6 sm:px-6 xs:px-0 ' >
                        <h2 className=' hero-text text-[148.32px] md:text-[108.32px] sm:text-[80.32px] xs:text-[50.32px] leading-[0.92]  font-[Montserrat] font-[800] text-white'>
                            PEPE  <br />
                            KING

                        </h2>
                        <div className='max-w-[498px] md:max-w-[100%] sm:max-w-[100%] xs:max-w-[100%]  md:w-auto sm:w-auto xs:w-auto'>

                            <p className='text-[18px] leading-[140%] text-white'>
                                Discover PEPE KING, the perfect blend of FLOKI and PEPE tokens. Leveraging the hype, we’ve created a standout crypto project for investors and enthusiasts. Embrace the excitement with PEPE KING - where innovation meets hype.
                            </p>
                        </div>
                        <div className='space-x-4 md:space-x-0 sm:space-x-0 xs:space-x-0  flex md:block sm:block xs:block   md:w-[100%] sm:w-[100%] xs:w-[100%]'>
                            <Button text="BUY" ButtnClass=" md:w-[100%] w-[90px] sm:w-[100%] xs:w-[100%] px-6 text-[20px] py-2 text-orange-500 font-[500] bg-white rounded-[25px]" />

                            <a href="https://t.me/+J8FIdfUHyLtmZjc0" className='' target="blank">
                                <Button text="Telegram" ButtnClass="md:w-[100%] xs:my-4 sm:my-4 md:my-4   sm:w-[100%] xs:w-[100%] xs:w-[100%] px-6 text-[20px] py-2 text-orange-500 font-[500] bg-white rounded-[25px]" />
                            </a>

                            <a href="https://twitter.com/therealpepeking" target="blank">
                                <Button text="Twitter" ButtnClass="md:w-[100%] sm:w-[100%] xs:w-[100%] sx:w-[100%] px-6 text-[20px] py-2 text-orange-500 font-[500] bg-white rounded-[25px]" />
                            </a>


                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default HeroSection;