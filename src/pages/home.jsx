
import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Carousel } from 'antd';
import Banner from "../components/banner";


export default function Home() {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    return (<>
        <div>
            <div>
                <div className="flex pl-[350px] h-[700px]">
                    <div className="w-[250px] border-r-3 border-gray-400 pt-[50px]">
                        <ul className="text-[20px] font-[500] flex flex-col gap-[20px]">
                            <li>Woman’s Fashion</li>
                            <li>Men’s Fashion</li>
                            <li>Electronics</li>
                            <li>Home & Lifestyle</li>
                            <li>Medicine</li>
                            <li>Sports & Outdoor</li>
                            <li>Baby’s & Toys</li>
                            <li>Groceries & Pets</li>
                            <li>Health & Beauty</li>
                        </ul>
                    </div>
                    <div>
                        <Carousel afterChange={onChange} className="w-[1060px] h-[450px]">
                            <Banner/>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </>)
}