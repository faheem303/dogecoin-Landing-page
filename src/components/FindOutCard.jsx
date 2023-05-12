import React from 'react';



const FindOutCard = ({ img, title, para, }) => {
    return (
        <div className=' flex justify-center '>
            <div className='py-8 px-5 bg-[#fcf4df] rounded-lg h-[340px] w-[250px] space-y-4 '>
                <img className='w-[80px]' src={img} alt="" />
                <h3 className='pl-2 text-[18px] font-[600]'>{title}</h3>
                <p className='pl-2 pb-3 '>{para}</p>
                <a href="" className='pl-2 underline'>Visit -></a>
            </div>
        </div>
    );
};

export default FindOutCard;