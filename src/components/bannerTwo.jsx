import React from 'react'
import days from "../assets/images/5days.png";
import hours from "../assets/images/23hours.png";
import seconds from "../assets/images/35seconds.png";
import minutes from "../assets/images/59minutes.png";
import JBL from "../assets/images/jbl.speaker.png";

const BannerTwo = () => {
    return (
        <div>
            <div className='bg-[black] flex flex-wrap gap-[150px] justify-center items-center mb-[50px] w-[1370px] h-[500px] p-[50px] border-[1px] border-[whitesmoke]'>
                <aside className='flex flex-col gap-[25px]'>
                    <p className='text-[#00FF66] text-[18px] font-[600]'>Categories</p>
                    <h1 className='text-[whitesmoke] text-[48px] font-[600]'>Enhance Your <br />
                        Music Experience
                    </h1>
                    <div className='flex gap-[25px] w-[320px] h-[62px]'>
                        <img src={hours} alt="hours" className='w-[62px] h-[62px]' />
                        <img src={days} alt="days" className='w-[62px] h-[62px]' />
                        <img src={minutes} alt="minutes" className='w-[62px] h-[62px]' />
                        <img src={seconds} alt="seconds" className='w-[62px] h-[62px]' />
                    </div>
                    <button className='bg-[#00FF66] w-[170px] h-[55px] text-[20px] font-[500] rounded-[4px] hover:opacity-50 transition-all duration-500'>By Now!</button>
                </aside>
                <div>
                    <img src={JBL} alt="JBL" className='w-[600px] h-[420px]' />
                </div>
            </div>
        </div>
    )
}

export default BannerTwo
