import React from 'react';

import doge from "../../assects/icons/logo.png"


const Footer = () => {
    return (
        <div className=''>
            <div className='container '>
                <div className='pt-24 space-y-3'>
                    <div className='flex xs:block xs:space-y-6 sm:space-y-6 sm:block justify-between '>
                        <div className='space-y-3 w-[30%] xs:w-[100%] sm:w-[100%] '>
                            <div className='flex space-x-3'>
                                <img className='w-[52px]' src={doge} alt="" />
                                <h3 className='text-[36px] text-'>DOGECOIN</h3>
                            </div>
                            <p className='text-[14px]'>The Shiba Inu is a Japanese breed of dog that was popularized as an online meme and represents Dogecoin. Dogecoin was created by Jackson Palmer & Shibetoshi Nakamoto.</p>
                        </div>
                        <div className='space-y-5 xs:px-8 sm:px-8'>
                            <h3 className='text-[22px] font-[600]'>Legal</h3>
                          <div className='space-y-3'>
                          <a href="" className='block text-[14px]'>Trademarks</a>
                          </div>
                        </div>
                        <div className='space-y-5 xs:px-8 sm:px-8'>
                            <h3 className='text-[22px] font-[600]'>Sitemap</h3>
                           <div className='space-y-3'>
                           <a href="" className='block text-[14px]' >So Home</a>
                            <a href="" className='block text-[14px]' > What is Dogecoin?</a>
                            <a href="" className='block text-[14px]' >Much Wallets</a>
                            <a href="" className='block text-[14px]' > Very Community</a>
                            <a href="" className='block text-[14px]' > So Dogepedia</a>
                           </div>
                           
                        </div>
                        <div className='space-y-5 xs:px-8 sm:px-8'>
                            <h3 className='text-[22px] font-[600]'>Foundation</h3>
                            <div className='space-y-3'>
                            <a href="" className='block text-[14px]' >Trademarks</a>
                            <a href="" className='block text-[14px]' >About</a>
                            <a href="" className='block text-[14px]' >Manifesto</a>
                            <a href="" className='block text-[14px]' >Advisors</a>
                            <a href="" className='block text-[14px]' >Blog</a>
                            <a href="" className='block text-[14px]' >Trailmap</a>
                            </div>
                            
                        </div>
                    </div>
                   
                  
                    <div className='border-t border-gray-300 pt-4 pb-6 '>
                        <div className='text-center'>
                            <h4 className='text-[#595959]'>Contributors</h4>
                            <h4 className='text-[#595959]'>© 2013-2023 | The Dogecoin Foundation & Dogecoin Project. All rights reserved.</h4>
                            {/* <div className='flex space-x-6'>
                                <img src={twit} className='w-[20px] h-[20px]' alt="" />
                                <img src={insta} className='w-[20px] h-[20px]' alt="" />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;