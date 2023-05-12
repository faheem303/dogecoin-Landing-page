import React from 'react';
import Button from '../../components/Button/button';


import doge from "../../assects/images/doge.webp"
import doge1 from "../../assects/images/d.png"
import doge2 from "../../assects/images/o.png"
import doge3 from "../../assects/images/g.png"
import doge4 from "../../assects/images/e.png"
import GetstartedCard from '../../components/GetstartedCard/GetstartedCard';


const WhatisDogeSection = () => {
    return (
        <div className=''>
            <div className='container'>
                <div className='py-20 '>
                <div className='flex xs:space-y-5 sm:space-y-5 md:space-y-5 justify-between xs:block sm:block py-5  xs:py-8 sm:py-10 md:py-10 px-5 xs:px-0 sm:px-0'>
                    <div className='w-[52%] xs:w-[100%] sm:w-[100%] md:w-[100%] space-y-4'>
                        <h2 className='text-[45px] font-[700]'>What is Dogecoin?</h2>
                        <h4 className='text-[1.8rem] font-[400]'>An open-source peer-to-peer digital currency, favoured by <span className='text-[#ffc107]'>Shiba Inus worldwide.

                        </span> </h4>
                        <p>At its heart, Dogecoin is the accidental crypto movement that makes people smile! It is also an opensource peer-to-peer cryptocurrency that utilises blockchain technology, a highly secure decentralised system of storing information as a public ledger that is maintained by a network of computers called nodes. More than this, though, is the ethos of Dogecoin, summarised in the Dogecoin Manifesto , and its amazing, vibrant community made up of friendly folks just like you! Learn more.</p>
                    </div>
                    <div className='bgd w-[40%] xs:w-[100%] sm:w-[100%] md:w-[100%] flex items-center'>
                        <img src={doge} alt="" />
                    </div>
                    

                </div>
                <div className='space-y-6 px-5 xs:px-0 sm:px-0'>
                    <div>
                        <h2 className='text-[45px] font-[700]'>Getting started</h2>
                    </div>
                    <div className='grid grid-cols-3 md:grid-cols-2 md:gap-y-8 sm:grid-cols-1 xs:grid-cols-1 xs:gap-y-10 sm:gap-y-10 col gap-x-5'>
                        <GetstartedCard 
                        titel="choose your wallet"
                        titelNum="01"
                        para="A wallet is necessary for people wanting to use, trade, or hold Dogecoin. You can pick a wallet"
                        btnText="Learn more ."
                        />
                        <GetstartedCard 
                        titel="configure your wallet"
                        titelNum="02"
                        para="After downloading, you can configure your wallet according to our"
                        btnText="guide ."
                        /><GetstartedCard 
                        titel="get some dogecoin"
                        titelNum="03"
                        para="There’s lots of ways to get your hands on some Dogecoin."
                        btnText="Learn more ."
                        />
                    </div>
                </div>
                <div className='pt-24 pb-3'>
                    <div className='flex justify-between'>
                        <img className='w-[22%] md:w-[20%] sm:w-[20%] xs:w-[20%]' src={doge1}  alt="" />
                        <img className='w-[22%] md:w-[20%] sm:w-[20%] xs:w-[20%]' src={doge2} alt="" />
                        <img className='w-[22%] md:w-[20%] sm:w-[20%] xs:w-[20%]' src={doge3} alt="" />
                        <img className='w-[22%] md:w-[20%] sm:w-[20%] xs:w-[20%]' src={doge4} alt="" />
                    </div>
                </div>
                </div>
            </div>

        </div>
    );
};

export default WhatisDogeSection;