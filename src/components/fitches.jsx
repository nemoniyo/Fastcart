import React from 'react'
import services from "../assets/images/Services.png";
import services1 from "../assets/images/Services (1).png";
import services2 from "../assets/images/Services (2).png";
const Fitches = () => {
    return (
        <div>
            <div className="flex items-center justify-center gap-[250px] w-[1370px] h-[281px] border-[2px] border-[white] my-[150px]">
                    <div className="flex flex-col justify-center gap-[10px] items-center w-[262px] h-[161px]">
                        <img src={services} alt="services" className="w-[80px] h-[80px]" />
                        <p className="text-[22px] text-[black] dark:text-[whitesmoke] font-[600]">FREE AND FAST DELIVERY</p>
                        <p className="text-[16px] text-[black] dark:text-[whitesmoke]">Free delivery for all orders over $140</p>
                    </div>
                    <div className="flex flex-col justify-center gap-[10px] items-center w-[262px] h-[161px]">
                        <img src={services1} alt="services1" className="w-[80px] h-[80px]" />
                        <p className="text-[22px] text-[black] dark:text-[whitesmoke] font-[600]">24/7 CUSTOMER SERVICE</p>
                        <p className="text-[16px] text-[black] dark:text-[whitesmoke]">Friendly 24/7 customer support</p>
                    </div>
                    <div className="flex flex-col justify-center gap-[10px] items-center w-[262px] h-[161px]">
                        <img src={services2} alt="services2" className="w-[80px] h-[80px]" />
                        <p className="text-[20px] text-[black] dark:text-[whitesmoke] font-[600]">MONEY BACK GUARANTEE</p>
                        <p className="text-[16px] text-[black] dark:text-[whitesmoke]">We reurn money within 30 days</p>
                    </div>
                </div>
        </div>
    )
}

export default Fitches
