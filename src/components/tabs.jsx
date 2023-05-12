import { useState } from 'react';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };


    const faqData = [
        {
            id: 1,
            title: "A whale holds nearly 30% of Dogecoin supply! Is this true?",
            subTitle: " A common source of FUD surrounding Dogecoin is the claim that certain wallets holding a large percentage of the supply are owned by private investors or so-called “whales”. In reality, many of the top Dogecoin wallets are cold wallets or hot wallets controlled by..",
        },
        {
            id: 2,
            title: "Dogecoin has no utility!",
            subTitle: "Oh yes it does, and it always has! The simple fact is that money has utility - and Dogecoin is money! Indeed, Dogecoin is one of the few cryptocurrencies that has been used for this main purpose from day one. Dogecoin was first meant to be a joke - and it served, and will serve, …",
        },
        {
            id: 3,
            title: "Can you put a cap on Dogecoin?",
            subTitle: "Right now, and for the next hundred years or so, Dogecoin operates like, and will continue to operate like, most other crypto assets. “Capped” assets are nowhere near mined out – and will continue adding to their supply, just like Dogecoin, for the foreseeable future. Dogecoin’s …",
        },
        {
            id: 4,
            title: "Dogecoin and coin burning ",
            subTitle: "Dogecoin does not need coin burning marketing mechanisms that new tokens and other chains have attempted to implement to artificially inflate their prices. Simplez.",
        },
        {
            id: 5,
            title: "Dogecoin has no developers!",
            subTitle: "Oh, yes it does - and it always has! Dogecoin’s primary purpose has always been to be used as a currency. Dogecoin was originally a fork of a cryptocurrency called Luckycoin - itself a fork of Litecoin. Billy Markus, co-creator of Dogecoin with Jackson Palmer, acted as a solo …",
        },

    ];
    const howData = [
        {
            id: 1,
            title: "Making Memes",
            subTitle: " Memes are awesome, and they’re easy to make! There’s lots of meme maker websites, and even meme applications that you can install on your smartphone to makes memes on the run. You may even go one step further and create Dogecoin-themed meme templates which have a possibility of …",
        },
        {
            id: 2,
            title: "Mining Dogecoin",
            subTitle: "Miners and mining are at the center of Dogecoin’s Proof of Work consensus mechanism. Check these Dogepedia articles to understand what miners do, how they interact with nodes, and why mining pools come into play when it comes to mining: What is a miner? What is a mining …",
        },
      

    ];
    const documentationData = [
        {
            id: 1,
            title: "How do I backup a Dogecoin wallet?",
            subTitle: "A wallet is just a collection of private keys and public keys. Each one of the wallet’s private keys is a randomised 256-bit number unique to your wallet, and it is what you need to be able to access and spend your coins. Your public address - the address which other Dogecoin …",
        },
        {
            id: 2,
            title: "How can I become a Dogecoin developer?            ",
            subTitle: "Dogecoin is an open-source project, meaning that anyone with some technical know-how can contribute to Dogecoin’s technical development. Even if you’re new to the space, it’s never too late to learn new tricks! Dogecoin has an amazing team of developers and volunteers who are …",
        },
        {
            id: 3,
            title: "How Does Dogecoin Work?            ",
            subTitle: "Magic and memes! (Just kidding. Kind of.) First things first: Dogecoin is money. Like other popular cryptocurrencies, Dogecoin works by utilising blockchain technology. Unlike a lot of other popular cryptocurrencies, though, the fees to send Dogecoin are extremely small, and the …",
        },
        {
            id: 4,
            title: "What is a mining pool?            ",
            subTitle: "Mining pools are services, operated by third parties not affiliated with Dogecoin, which allow a group of miners to combine their hashing power when attempting to solve the “puzzles” involved in mining Dogecoin. Mining rewards - consisting of 10,000 Dogecoin per block …",
        },
        {
            id: 5,
            title: "Charities Accepting Doge          ",
            subTitle: "Dogecoin’s history includes many charitable endeavours: from funding clean water wells in 2014 for Kenya, to the #TeamSeas initiative in 2021 – and many worthwhile causes in-between. The past year, though, has seen a dramatic increase in charities directly accepting Dogecoin … ",
        },
       
      

    ];
    return (
        <div className='flex justify-between xs:block sm:block xs:space-y-5 sm:space-y-5 '>
            <ul className="pt-8 xs:pt-1 sm:pt-1 md:pt-1 w-[30%] xs:w-[100%] sm:w-[100%]" role="tablist">
                <li
                    role="presentation"
                    className={`text-[22px] border-b hover:text-[#ccae40] w-[100%] py-[10px] font-[600] mr-4 cursor-pointer ${activeTab === 0 ? 'text-[#ccae40]' : 'text-black'
                        }`}
                    onClick={() => handleTabClick(0)}
                >
                    FAQ
                </li>
                <li
                    role="presentation"
                    className={`text-[22px] border-b hover:text-[#ccae40] w-[100%] py-[10px] font-[600] mr-4 cursor-pointer ${activeTab === 1 ? 'text-[#ccae40]' : 'text-black'
                        }`}
                    onClick={() => handleTabClick(1)}
                >
                    Resources
                </li>
                <li
                    role="presentation"
                    className={`text-[22px] border-b hover:text-[#ccae40] w-[100%] py-[10px] font-[600] mr-4 cursor-pointer ${activeTab === 2 ? 'text-[#ccae40]' : 'text-black'
                        }`}
                    onClick={() => handleTabClick(2)}
                >
                    How To's
                </li>
                <li
                    role="presentation"
                    className={`text-[22px] border-b hover:text-[#ccae40] w-[100%] py-[10px] font-[600] mr-4 cursor-pointer ${activeTab === 3 ? 'text-[#ccae40]' : 'text-black'
                        }`}
                    onClick={() => handleTabClick(3)}
                >
                    Documentation
                </li>
            </ul>
            <div className='w-[60%] xs:w-[100%] sm:w-[100%]'>
                <div
                    className={`px-4 xs:px-0 sm:px-0 ${activeTab === 0 ? 'block' : 'hidden'
                        }`}
                >
                    {
                        faqData.map((item) => (
                            <div className="space-y-4 w-[100%]   px-5 sm:px-0 xs:px-0 xs:w-[100%] xs:m-auto">
                            <details className="group "  >
                                <summary
                                    className="flex space-x-3 items-center  py-2  cursor-pointer focus:outline outline-blue-300"
                                >
                                    <svg
                                        className="flex-shrink-0  ml-1.5 w-5 h-5 transition duration-300 group-open:-rotate-180"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                    <h3 className="pb-[3px] text-[18px] sm:text-[16px] xs:text-[14px] font-[600] pb-4 text-start">{item.title}</h3>

                                </summary>

                                <p className="text-start text-[16px]  font-Poppins sm:text-[14px] xs:text-[14px] font-[400] px-10 py-4 sm:px-2 xs:px-2  leading-relaxed ">
                                    {item.subTitle}
                                </p>
                            </details>


                        </div>
                        ))

                    }
                </div>
                <div
                    className={`px-4 ${activeTab === 1 ? 'block' : 'hidden'
                        }`}
                >
                   <div className='space-y-4'>
                    <h6>A list of resources created by shibes that can be useful to work with Dogecoin and to research it.</h6>
                    <h3 className='text-[24px] font-[600] leading-[32px]'>Tools to Monitor and Study Dogecoin and its Network</h3>
                    <ul className='pl-10 space-y-1'>
                        <li className='list-disc'>SoChain - Dogecoin chain explorer.</li>
                        <li className='list-disc'>Dogechain - Dogecoin chain explorer.</li>
                        <li className='list-disc'>Blockshibe - monitor the work of miners and mining pools.</li>
                        <li className='list-disc'>Blockchair - monitor the number and versions of Dogecoin …</li>
                    </ul>
                   </div>
                </div>
                <div
                    className={`px-4 xs:px-0 sm:px-0 ${activeTab === 2 ? 'block' : 'hidden'
                        }`}
                >
                {
                        howData.map((item) => (
                            <div className="space-y-4 w-[100%] sm:w-[100%]  px-5 sm:px-0 xs:px-0 xs:w-[100%] xs:m-auto">
                            <details className="group " >
                                <summary
                                    className="flex space-x-3  items-center  py-2  cursor-pointer focus:outline outline-blue-300"
                                >
                                    <svg
                                        className="flex-shrink-0  ml-1.5 w-5 h-5 transition duration-300 group-open:-rotate-180"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                    <h3 className="pb-[3px] text-[18px] sm:text-[16px] xs:text-[14px] font-[600] pb-4 text-start">{item.title}</h3>

                                </summary>

                                <p className="text-start text-[16px]  font-Poppins sm:text-[14px] xs:text-[14px] font-[400] px-10 py-4 sm:px-2 xs:px-2  leading-relaxed ">
                                    {item.subTitle}
                                </p>
                            </details>


                        </div>
                        ))

                    }
                </div>
                <div
                    className={`px-4 xs:px-0 sm:px-0 ${activeTab === 3 ? 'block' : 'hidden'
                        }`}
                >
                   
                   {
                        documentationData.map((item) => (
                            <div className="space-y-4 w-[100%]   px-5 sm:px-0 xs:px-0 xs:w-[100%] xs:m-auto">
                            <details className="group " >
                                <summary
                                    className="flex space-x-3 items-center  py-2  cursor-pointer focus:outline outline-blue-300"
                                >
                                    <svg
                                        className="flex-shrink-0  ml-1.5 w-5 h-5 transition duration-300 group-open:-rotate-180"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                    <h3 className="pb-[3px] text-[18px] sm:text-[16px] xs:text-[14px] font-[600] pb-4 text-start">{item.title}</h3>

                                </summary>

                                <p className="text-start text-[16px]  font-Poppins sm:text-[14px] xs:text-[14px] font-[400] px-10 py-4 sm:px-2 xs:px-2  leading-relaxed ">
                                    {item.subTitle}
                                </p>
                            </details>


                        </div>
                        ))

                    }
                </div>
            </div>
        </div>
    );
};

export default Tabs;
