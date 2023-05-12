import React ,{useState} from 'react';
import Button from '../../components/Button/button';
import menu from "../../assects/icons/menu.png"
import Logo from "../../assects/images/logo.png"


const Navbar = () => {

    const [navBarOpen, setNavBarOpen] = useState(false);

    const handleNavbarMenu = () => {
        setNavBarOpen(!navBarOpen)
    }
    const handleNavbarMenuClose = () => {
        setNavBarOpen(false)
    }

    return (
        <div>
            <nav className="relative py-4 mainBg px-6 " >
                <header className="">
               
                    <div
                        className=" container flex items-center justify-between  mx-auto max-w-screen-2xl sm:px-0 xs:px-0 lg:px- "
                    >
                      <a href="">
                      <div className="flex items-end space-x-2">
                            <img className='w-[60px]' src={Logo} alt="" />
                            <h3 className='text-[26px] text-white leading-[23px] pb-1'>Pepe <br /> King</h3>
                        </div>
                      </a>
                        <div className='flex items-center justify-between md:hidden xs:justify-start space-x-16 xs:space-x-0 '>
                            <div className='flex justify-between space-x-12 xs:hidden sm:hidden md:hidden '>
                                <h4 className='text-white font-[poppins] text-[18px] text-orange-200 font-[400]   ' > <a href="#about">About</a> </h4>
                                <h4 className='text-white font-[poppins] text-[18px] text-orange-200 font-[400]  ' > <a href="#tokenomics">Tokenomics</a> </h4>
                                <h4 className='text-white font-[poppins] text-[18px] text-orange-200 font-[400]  ' > <a href="#partners">Partners</a> </h4>
                                <h4 className='text-white font-[poppins] text-[18px] text-orange-200 font-[400]  '>  <a href="#whitepaper">Whitepaper</a></h4>
                                <h4 className='text-white font-[poppins] text-[18px] text-orange-200 font-[400]  '> <a href="#roadmap">Roadmap</a> </h4>

                            </div>
                        </div>
                        <div className='space-x-4 flex items-center'>
                            <Button text="SWAP" ButtnClass="px-6 text-[20px] xs:text-[16px] py-2 text-orange-500 font-[500] bg-white rounded-[25px]" />
                            <div className='2xl:hidden xl:hidden lg:hidden md:block sm:block xs:block'>
                                <img src={menu} onClick={handleNavbarMenu} alt="" />
                            </div>
                        </div>
                        {
                            navBarOpen &&
                            <div className='  ' >

                                <div className='absolute mainBg left-0 top-20 w-[100%] z-[9999] h-[full] space-y-8 py-12 px-6 2xl:hidden xl:hidden lg:hidden    '>
                                    <button className='text-white font-[poppins] text-[16px] font-[400] hover:text-[#a0a0a0]' onClick={handleNavbarMenuClose}  ><a href="#about">About</a></button>
                                    <h4 className='text-white font-[poppins] text-[16px] font-[400] hover:text-[#a0a0a0]' onClick={handleNavbarMenuClose} > <a href="#tokenomics">Tokenomics</a> </h4>
                                    <h4 className='text-white font-[poppins] text-[16px] font-[400] hover:text-[#a0a0a0]' onClick={handleNavbarMenuClose} > <a href="#partners">Partners</a> </h4>
                                    <h4 className='text-white font-[poppins] text-[16px] font-[400] hover:text-[#a0a0a0]' onClick={handleNavbarMenuClose} > <a href="#whitepaper">Whitepaper</a> </h4>
                                    <h4 className='text-white font-[poppins] text-[16px] font-[400] hover:text-[#a0a0a0]' onClick={handleNavbarMenuClose}> <a href="#roadmap">Roadmap</a></h4>
                                    <li className='flex items-center'>


                                    </li>

                                </div>
                            </div>
                        }

                    </div>
                </header >



            </nav >
        </div>
    );
};

export default Navbar;