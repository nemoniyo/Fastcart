
import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Carousel } from 'antd';
import Banner from "../components/banner";
import BannerTwo from "../components/bannerTwo";
import BannerThree from "../components/bannerThree";


export default function Home() {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    return (<>
        <div>
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
                            <Banner/>
                        </Carousel>
                    </div>
                </div>
                <div className="flex justify-center">
                    <BannerTwo/>
                </div>
                <div className="flex justify-center">
                    <BannerThree/>
                </div>
            </div>
        </div>
    </>)
}