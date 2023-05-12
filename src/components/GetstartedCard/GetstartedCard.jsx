import React from 'react';
import Button from '../../components/Button/button';




const GetstartedCard = ({ titelNum, titel, para, btnText }) => {
    return (
        <div className='space-y-3'>
            <div className='flex justify-between flex-col h-[180px] sm:h-[150px] md:h-[180px]'>
                <div className='space-y-3'>
                    <div className='flex space-x-3 '>
                        <div className='rounded-[5px] text-white bg-[#dfc66d] text-[18px] font-[600] px-4 py-[5px]'>
                            <h5>{titelNum}</h5>
                        </div>
                        <h5 className='text-[24px] font-[600]'>{titel}</h5>
                    </div>
                    <p>{para}</p>
                </div>
                <div>
                    <button className='text-[15px] border border-gray-500 px-4 py-[7px] rounded-[5px] hover:text-[#dfc66d]  '>{btnText}</button>
                </div>
            </div>

        </div>
    );
};

export default GetstartedCard;