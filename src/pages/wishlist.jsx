import React, { useEffect } from 'react'
import redLine from "../assets/images/redLine.png";
import { useDispatch, useSelector } from "react-redux";
import { getCategory, getData } from "../reducers/todoSlice";
import { Eye } from 'lucide-react';
import stars from "../assets/images/Five star.png";
import skidka from "../assets/images/Discount percent.png";

const Wishlist = () => {
    const dispatch = useDispatch();
    const { data, category, } = useSelector((state) => state.counter);

    useEffect(() => {
        dispatch(getData())
        dispatch(getCategory())
    }, [dispatch]);

    return (<>
        <div>
            <div className="h-[150px] flex items-center gap-[450px]">
                <h1 className="text-[38px] font-[600] lg:pl-[330px]">Wishlist </h1>
                <button className='w-[300px] h-[56px] rounded-[4px] bg-[white] border-[2px] border-[black] hover:text-[whitesmoke] hover:bg-[crimson] transition-all duration-500 text-[18px] text-[black] lg:ml-[500px]'>Move All To Bag</button>
            </div>
            <div className="flex gap-[30px] items-center lg:pl-[330px] py-[20px] mb-[50px]">
                <img src={redLine} alt="redLine" className="w-[20px] h-[40px]" />
                <p className="text-[24px] font-[600]">Just For You</p>
            </div>
            <div className="flex gap-[40px] justify-center mb-[150px]">
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
                            <div className="absolute top-[30px] left-[250px] bg-[whitesmoke] w-[40px] h-[40px] rounded-[50%] flex items-center justify-center">
                                <Eye />
                            </div>
                            <div className="absolute top-[20px]">
                                <img src={skidka} alt="skidka" className="w-[55px] h-[26px]" />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </>)
}

export default Wishlist
