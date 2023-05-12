import React from 'react';
import Button from '../../components/Button/button';


import icon1 from "../../assects/icons/f1.png"
import icon2 from "../../assects/icons/f2.png"
import icon3 from "../../assects/icons/f3.png"
import icon4 from "../../assects/icons/f4.png"
import GetstartedCard from '../../components/GetstartedCard/GetstartedCard';
import FindOutCard from '../../components/FindOutCard';


const FindOutSection = () => {

    const findCardData = [
        {
            id: 1,
            img:icon1,
            title: "Foundation",
            para: "Learn more about the Dogecoin Foundation and its Trailmap for Dogecoin!",
        },
        {
            id: 2,
            img:icon2,
            title: "Blogs",
            para: "Stay up to date with blog posts from Foundation Developers!",
        },
        {
            id: 3,
            img:icon3,
            title: "Announcements",
            para: "Announcements from the Dogecoin Foundation can be found here.",
        },
        {
            id: 4,
            img:icon4,
            title: "IP FAQs",
            para: "Read our responses to some frequently asked questions about Dogecoin IP.",
        },
      

    ];



    return (
        <div className='pt-12 pb-20'>
            <div className='container'>
                <div className='flex justify-around items-center  '>
               <h2 className='text-[2rem] font-[700]'>Find out more about Dogecoin</h2>
                </div>
                <div className='grid grid-cols-4 gap-5 xs:grid-cols-1  sm:grid-cols-2  md:grid-cols-2  pt-10'>

                    {
                        findCardData.map((item)=>(
                            <FindOutCard 
                            img={item.img}
                            title={item.title}
                            para={item.para}
                            />
                        ))

                    }

                   
                </div>
            </div>


        </div>
    );
};

export default FindOutSection;