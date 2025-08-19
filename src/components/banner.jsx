import React from 'react';
import LogoApple from "../assets/images/apple.logo.png";
import { ArrowRight } from 'lucide-react';
import Iphone from "../assets/images/iphone14promax.png";

const Banner = () => {
    return (
        <div>
            <div className="bg-[black] flex justify-between w-[1060px] h-[440px] m-[50px] p-[50px]">
                <div>
                    <div className="flex items-center gap-[30px]">
                        <img src={LogoApple} alt="LogoApple" className="w-[40px] h-[50px]" />
                        <p className="text-[18px] text-[whitesmoke] font-[500]">iPhone 14 Series</p>
                    </div>
                    <h1 className="text-[48px] text-[white] font-[600] m-[15px]">Up to 10% <br />
                        off Voucher</h1>
                    <button className="flex text-[18px] text-[whitesmoke] font-[500] items-center gap-[15px]">
                        <p className="underline">Shop Now</p>
                        <ArrowRight />
                    </button>
                </div>
                <div>
                    <img src={Iphone} alt="Ipkone" className='w-[500px] h-[350px]' />
                </div>
            </div>
        </div>
    )
}

export default Banner
