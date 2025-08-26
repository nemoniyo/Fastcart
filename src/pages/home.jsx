import React, { useEffect } from "react";
import "../App.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Carousel } from 'antd';
import Banner from "../components/banner";
import BannerTwo from "../components/bannerTwo";
import BannerThree from "../components/bannerThree";
import stars from "../assets/images/Five star.png";
import redLine from "../assets/images/redLine.png";
import arrowUp from '../assets/images/UpArrow.png';
import Fitches from "../components/fitches";
import skidka from "../assets/images/Discount percent.png";
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { Eye } from 'lucide-react';
import { useDispatch, useSelector } from "react-redux";
import { getCategory, getData } from "../reducers/todoSlice";

export default function Home() {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    const dispatch = useDispatch();
    const { data, category, } = useSelector((state) => state.counter);

    useEffect(() => {
        dispatch(getData())
        dispatch(getCategory())
    }, [dispatch]);

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
                        <Banner />
                        <Banner />
                        <Banner />
                    </Carousel>
                </div>
            </div>
            <div className="flex gap-[30px] items-center lg:pl-[330px] py-[20px]">
                <img src={redLine} alt="redLine" className="w-[20px] h-[40px]" />
                <p className="text-[18px] font-[600] text-[#DB4444]">Today's</p>
            </div>
            <div className="h-[150px]">
                <h1 className="text-[38px] font-[600] lg:pl-[330px]">Flash Sales</h1>
            </div>
            <div className="flex gap-[40px] justify-center">
                {data?.data?.products.slice(0, 4).map((element) => {
                    return (
                        <div key={element.id} className="border hoverArticle border-[whitesmoke] shadow-lg p-[20px] relative">
                            <img src={`http://37.27.29.18:8002/images/${element.image}`} alt="Image product" className="w-[270px] h-[270px]" />
                            <div className='hoverAdd absolute flex items-center justify-center w-[270px] bottom-[-50px] top-[95px] transition-all duration-300'>
                                <button className='bg-black hover:opacity-50 cursor-pointer w-full transition-all duration-300 text-white py-[10px] text-center text-[20px]'>Add to cart</button>
                            </div>
                            <h1 className="text-[20px] font-[500]">{element.productName}</h1>
                            <div className="flex gap-[15px] items-center text-[18px] font-[500]">
                                <p>{element.price}</p>
                                <p className="text-[brown]">{element.discountPrice}</p>
                            </div>
                            <div className="flex gap-[10px] items-center">
                                <img src={stars} alt="stars" className="w-[100px] h-[20px]" />
                                <p className="text-[18px] text-[grey] font-[400]">{`(${element.quantity})`}</p>
                            </div>
                            <Link to={'/wishlist'}>
                                <div className="absolute top-[30px] left-[250px] bg-[whitesmoke] w-[40px] h-[40px] rounded-[50%] flex items-center justify-center">
                                    <Heart />
                                </div>
                            </Link>
                            <div className="absolute top-[80px] left-[250px] bg-[whitesmoke] w-[40px] h-[40px] rounded-[50%] flex items-center justify-center">
                                <Eye />
                            </div>
                            <div className="absolute top-[20px]">
                                <img src={skidka} alt="skidka" className="w-[55px] h-[26px]" />
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="flex justify-center h-[100px] items-center mt-[50px]">
                <button className='w-[350px] h-[56px] rounded-[4px] bg-[#DB4444] hover:bg-[crimson] transition-all duration-500 text-[18px] text-[whitesmoke]'>View All</button>
            </div>
            <div className="flex gap-[30px] items-center lg:pl-[330px] py-[20px] mt-[100px]">
                <img src={redLine} alt="redLine" className="w-[20px] h-[40px]" />
                <p className="text-[18px] font-[600] text-[#DB4444]">Categories</p>
            </div>
            <div className="h-[150px]">
                <h1 className="text-[38px] font-[600] lg:pl-[330px]">Browse By Category</h1>
            </div>
            <div className="flex gap-[30px] items-center lg:pl-[330px] py-[20px]">
                <img src={redLine} alt="redLine" className="w-[20px] h-[40px]" />
                <p className="text-[18px] font-[600] text-[#DB4444]">This Month</p>
            </div>
            <div className="h-[150px] flex items-center gap-[290px]">
                <h1 className="text-[38px] font-[600] lg:pl-[330px]">Best Selling Products</h1>
                <button className='w-[215px] h-[56px] rounded-[4px] bg-[#DB4444] hover:bg-[crimson] transition-all duration-500 text-[18px] text-[whitesmoke] lg:ml-[500px]'>View All</button>
            </div>
            <div className="flex gap-[40px] justify-center mb-[100px]">
                {data?.data?.products.slice(5, 9).map((element) => {
                    return (
                        <div key={element.id} className="border hoverArticle border-[whitesmoke] shadow-lg p-[20px] relative">
                            <img src={`http://37.27.29.18:8002/images/${element.image}`} alt="Image product" className="w-[270px] h-[270px]" />
                            <div className='hoverAdd absolute flex items-center justify-center w-[270px] bottom-[-50px] top-[95px] transition-all duration-300'>
                                <button className='bg-black hover:opacity-50 cursor-pointer w-full transition-all duration-300 text-white py-[10px] text-center text-[20px]'>Add to cart</button>
                            </div>
                            <h1 className="text-[20px] font-[500]">{element.productName}</h1>
                            <div className="flex gap-[15px] items-center text-[18px] font-[500]">
                                <p>{element.price}</p>
                                <p className="text-[brown]">{element.discountPrice}</p>
                            </div>
                            <div className="flex gap-[10px] items-center">
                                <img src={stars} alt="stars" className="w-[100px] h-[20px]" />
                                <p className="text-[18px] text-[grey] font-[400]">{`(${element.quantity})`}</p>
                            </div>
                            <Link to={'/wishlist'}>
                                <div className="absolute top-[30px] left-[250px] bg-[whitesmoke] w-[40px] h-[40px] rounded-[50%] flex items-center justify-center">
                                    <Heart />
                                </div>
                            </Link>
                            <div className="absolute top-[80px] left-[250px] bg-[whitesmoke] w-[40px] h-[40px] rounded-[50%] flex items-center justify-center">
                                <Eye />
                            </div>
                            <div className="absolute top-[20px]">
                                <img src={skidka} alt="skidka" className="w-[55px] h-[26px]" />
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="flex justify-center">
                <BannerTwo />
            </div>
            <div className="flex gap-[30px] items-center lg:pl-[330px] py-[20px] mt-[100px]">
                <img src={redLine} alt="redLine" className="w-[20px] h-[40px]" />
                <p className="text-[18px] font-[600] text-[#DB4444]">Our Products</p>
            </div>
            <div className="h-[150px]">
                <h1 className="text-[38px] font-[600] lg:pl-[330px]">Explore Our Products</h1>
            </div>
            <div className="flex flex-wrap gap-[40px] justify-center lg:ml-[300px] w-[1400px]">
                {data?.data?.products.slice(0, 8).map((element) => {
                    return (
                        <div key={element.id} className="border hoverArticle border-[whitesmoke] shadow-lg p-[20px] relative">
                            <img src={`http://37.27.29.18:8002/images/${element.image}`} alt="Image product" className="w-[270px] h-[270px]" />
                            <div className='hoverAdd absolute flex items-center justify-center w-[270px] bottom-[-50px] top-[95px] transition-all duration-300'>
                                <button className='bg-black hover:opacity-50 cursor-pointer w-full transition-all duration-300 text-white py-[10px] text-center text-[20px]'>Add to cart</button>
                            </div>
                            <h1 className="text-[20px] font-[500]">{element.productName}</h1>
                            <div className="flex gap-[15px] items-center text-[18px] font-[500]">
                                <p>{element.price}</p>
                                <p className="text-[brown]">{element.discountPrice}</p>
                            </div>
                            <div className="flex gap-[10px] items-center">
                                <img src={stars} alt="stars" className="w-[100px] h-[20px]" />
                                <p className="text-[18px] text-[grey] font-[400]">{`(${element.quantity})`}</p>
                            </div>
                            <Link to={'/wishlist'}>
                                <div className="absolute top-[30px] left-[250px] bg-[whitesmoke] w-[40px] h-[40px] rounded-[50%] flex items-center justify-center">
                                    <Heart />
                                </div>
                            </Link>
                            <div className="absolute top-[80px] left-[250px] bg-[whitesmoke] w-[40px] h-[40px] rounded-[50%] flex items-center justify-center">
                                <Eye />
                            </div>
                            <div className="absolute top-[20px]">
                                <img src={skidka} alt="skidka" className="w-[55px] h-[26px]" />
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="flex justify-center h-[100px] items-center mt-[50px]">
                <button className='w-[350px] h-[56px] rounded-[4px] bg-[#DB4444] hover:bg-[crimson] transition-all duration-500 text-[18px] text-[whitesmoke]'>View All Products</button>
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
                <Fitches />
            </div>
            <div className="flex justify-center py-[40px]">
                <div className="flex justify-end w-[1370px] h-[80px]">
                    <img src={arrowUp} alt="arrowUp" className="w-[66px] h-[66px]" />
                </div>
            </div>
        </div>
    </>)
}