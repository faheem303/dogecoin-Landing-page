import React from 'react';
import Button from '../../components/Button/button';


import doge from "../../assects/images/doge.webp"
import doge1 from "../../assects/images/d.png"
import doge2 from "../../assects/images/o.png"
import doge3 from "../../assects/images/g.png"
import doge4 from "../../assects/images/e.png"
import GetstartedCard from '../../components/GetstartedCard/GetstartedCard';


const DoOnlySection = () => {
    return (
        <div className=''>
            <div className='container'>
                <div className='flex justify-between xs:block sm:block md:block xs:space-y-5 sm:space-y-5 md:space-y-5 items-center pb-8'>
                    <div className='w-[48%] xs:w-[100%] sm:w-[100%] md:w-[100%]'>
                        <iframe width="100%" height="300" src="https://www.youtube.com/embed/tgbNymZ7vqY">
                        </iframe>
                    </div>
                    <div className='w-[50%] xs:w-[100%] sm:w-[100%] md:w-[100%] space-y-3'>
                        <h2 className='text-[45px] font-[700]'>Do Only Good Everyday.</h2>
                        <h5 className='text-[22px] font-[200]'>
                            The Dogecoin community cares about supporting each other, being kind, teaching people about cryptocurrency, fundraising, having fun, making memes, and being absurd. This is nicely captured by Dogecoin’s unofficial tagline: Do Only Good Everyday. Get involved in our awesome community via the below links:
                        </h5>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default DoOnlySection;