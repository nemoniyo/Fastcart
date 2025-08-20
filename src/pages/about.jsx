import React from 'react';
import Navbar from '../components/navbar';
import Footer from "../components/footer";
import Fitches from "../components/fitches";
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import services3 from "../assets/images/Services (3).png";
import services4 from "../assets/images/Services (4).png";
import services5 from "../assets/images/Services (5).png";
import services6 from "../assets/images/Services (6).png";
import aboutIM from "../assets/images/aboutImage.png";
import aboutIM1 from "../assets/images/aboutImage1.png";
import aboutIM2 from "../assets/images/aboutImage2.png";
import aboutIM3 from "../assets/images/aboutImage3.png";

const About = () => {
    return (<>
        <div>
            <div className='lg: px-[340px] py-[90px]'>
                <Link to={'/home'}>
                    <p className='text-[gray] hover:text-[black] transition-all duration-500'>Home / <b className='text-[black]'> About</b></p>
                </Link>
            </div>
            <div className='flex flex-wrap justify-center lg:gap-[240px] pb-[100px]'>
                <aside className='flex flex-col gap-[30px]'>
                    <h1 className='text-[64px] text-[black] dark:text-[whitesmoke] font-[600]'>Our Story</h1>
                    <p className='text-[18px] text-[black] dark:text-[whitesmoke] font-[400]'>
                        Launced in 2015, Exclusive is South Asia’s premier online shopping <br />
                        makterplace with an active presense in Bangladesh. Supported <br />
                        by wide range of tailored marketing, data and service solutions, <br />
                        Exclusive has 10,500 sallers and 300 brands and serves 3 <br />
                        millioons customers across the region.
                    </p>
                    <p className='text-[18px] text-[black] dark:text-[whitesmoke] font-[400]'>
                        Exclusive has more than 1 Million products to offer, growing at a <br />
                        very fast. Exclusive offers a diverse assotment in categories <br />
                        ranging  from consumer.
                    </p>
                </aside>
                <div>
                    <img src={aboutIM} alt="aboutIM" className='w-[570px] h-[415px]' />
                </div>
            </div>
            <div className='flex lg:flex-wrap lg:gap-[85px] lg:h-[430px] justify-center items-center text-[black] dark:text-[whitesmoke]'>
                <div className='w-[270px] h-[230px] border-[2px] border-gray-400 rounded-[4px] flex flex-col justify-center items-center'>
                    <img src={services3} alt="services3" className='w-[80px] h-[80px]' />
                    <h1 className='text-[38px] font-[700]'>10.5k</h1>
                    <p className='text-[18px] text-[500]'>Sallers active our site</p>
                </div>
                <div className='w-[270px] h-[230px] border-[2px] border-gray-400 rounded-[4px] flex flex-col justify-center items-center text-[whitesmoke] dark:text-[black] bg-[#DB4444]'>
                    <img src={services4} alt="services4" className='w-[80px] h-[80px]' />
                    <h1 className='text-[38px] font-[700]'>33k</h1>
                    <p className='text-[18px] text-[500]'>Mopnthly Produduct Sale</p>
                </div>
                <div className='w-[270px] h-[230px] border-[2px] border-gray-400 rounded-[4px] flex flex-col justify-center items-center'>
                    <img src={services5} alt="services5" className='w-[80px] h-[80px]' />
                    <h1 className='text-[38px] font-[700]'>45.5k</h1>
                    <p className='text-[18px] text-[500]'>Customer active in our site</p>
                </div>
                <div className='w-[270px] h-[230px] border-[2px] border-gray-400 rounded-[4px] flex flex-col justify-center items-center'>
                    <img src={services6} alt="services6" className='w-[80px] h-[80px]' />
                    <h1 className='text-[38px] font-[700]'>25k</h1>
                    <p className='text-[18px] text-[500]'>Anual gross sale in our site</p>
                </div>
            </div>
            <div className='flex flex-wrap justify-center items-center lg:gap-[60px] gap-[30px] py-[100px]'>
                <div className='flex flex-col gap-[15px] border-[2px] border-[white] p-[15px]'>
                    <img src={aboutIM1} alt="aboutIM1" className='w-[370px] h-[430px]' />
                    <h1 className='text-[36px] font-[500]'>Tom Cruise</h1>
                    <p className='text-[18px] font-[400]'>Founder & Chairman</p>
                    <div className='flex gap-[20px]'>
                        <Twitter />
                        <Instagram />
                        <Facebook />
                    </div>
                </div>
                <div className='flex flex-col gap-[15px] border-[2px] border-[white] p-[15px]'>
                    <img src={aboutIM2} alt="aboutIM2" className='w-[370px] h-[430px]' />
                    <h1 className='text-[36px] font-[500]'>Emma Watson</h1>
                    <p className='text-[18px] font-[400]'>Managing Director</p>
                    <div className='flex gap-[20px]'>
                        <Twitter />
                        <Instagram />
                        <Facebook />
                    </div>
                </div>
                <div className='flex flex-col gap-[15px] border-[2px] border-[white] p-[15px]'>
                    <img src={aboutIM3} alt="aboutIM3" className='w-[370px] h-[430px]' />
                    <h1 className='text-[36px] font-[500]'>Will Smith</h1>
                    <p className='text-[18px] font-[400]'>Product Designer</p>
                    <div className='flex gap-[20px]'>
                        <Twitter />
                        <Instagram />
                        <Facebook />
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <Fitches/>
            </div>
        </div>
    </>)
}

export default About
