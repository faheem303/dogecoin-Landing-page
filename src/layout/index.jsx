import React from 'react';
import Navbar from './Navbar/navbar';
import Footer from './Footer/footer';
import Home from '../page/Home/index.jsx';


const Layout = () => {
    return (
        <div className='m-auto relative'>
                <div>
                    <Navbar />
                </div>
                <div className=' m-0'>
                    <Home />
                </div>
                <div>
                    <Footer />
                </div>
              
        </div>
    );
};

export default Layout;