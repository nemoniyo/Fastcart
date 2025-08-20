
import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Carousel } from 'antd';
import Banner from "../components/banner";
import BannerTwo from "../components/bannerTwo";
import BannerThree from "../components/bannerThree";

import redLine from "../assets/images/redLine.png";
import arrowUp from '../assets/images/UpArrow.png';
import Fitches from "../components/fitches";

export default function Home() {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    return (<>
        <div>
            <div className="flex pl-[350px] h-[700px]">
                <div className="w-[250px] h-[490px] border-r-3 border-gray-300 pt-[50px]">
                    <ul className="text-[20px] font-[500] flex flex-col gap-[20px] ">
                        <li className="hover:text-[#DB4444] transition-all duration-500">Woman’s Fashion</li>
                        <li className="hover:text-[#DB4444] transition-all duration-500">Men’s Fashion</li>
                        <li className="hover:text-[#DB4444] transition-all duration-500">Electronics</li>
                        <li className="hover:text-[#DB4444] transition-all duration-500">Home & Lifestyle</li>
                        <li className="hover:text-[#DB4444] transition-all duration-500">Medicine</li>
                        <li className="hover:text-[#DB4444] transition-all duration-500">Sports & Outdoor</li>
                        <li className="hover:text-[#DB4444] transition-all duration-500">Baby’s & Toys</li>
                        <li className="hover:text-[#DB4444] transition-all duration-500">Groceries & Pets</li>
                        <li className="hover:text-[#DB4444] transition-all duration-500">Health & Beauty</li>
                    </ul>
                </div>
                <div>
                    <Carousel afterChange={onChange} className="w-[1100px] h-[450px]">
                        <Banner />
                    </Carousel>
                </div>
            </div>
            <div className="flex justify-center">
                <BannerTwo />
            </div>
            <div className="flex gap-[30px] items-center lg:pl-[330px] py-[20px]">
                <img src={redLine} alt="redLine" className="w-[20px] h-[40px]" />
                <p className="text-[18px] font-[600] text-[#DB4444]">Feature</p>
            </div>
            <h1 className="text-[36px] dark:text-[whitesmoke] text-[black] font-[600] lg:pl-[330px] pb-[50px]">New Arrival</h1>
            <div className="flex flex-wrap justify-center">
                <BannerThree />
            </div>
            <div className="flex justify-center">
                <Fitches/>
            </div>
            <div className="flex justify-center py-[40px]">
                <div className="flex justify-end w-[1370px] h-[80px]">
                    <img src={arrowUp} alt="arrowUp" className="w-[66px] h-[66px]" />
                </div>
            </div>
        </div>
    </>)
}