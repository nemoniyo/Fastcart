import React from 'react';
import Navbar from '../components/navbar';
import Footer from "../components/footer";
const LogIn = () => {
    return (
        <div>
            <Navbar />
            <div className='flex justify-center pt-[300px] pb-[250px]'>
                <div className='flex flex-col gap-[20px]'>
                    <h1 className='text-[36px] font-[500]'>Log in to Exclusive</h1>
                    <p className='text-[16px] font-[500]'>Enter your details below</p>
                    <input type="text" placeholder='Email or phone number' className='w-[420px] h-[56px] p-[5px] px-[15px] rounded-[4px] border-[2px] border-black dark:border-white placeholder:text-[gray] dark:placeholder:text-[#DB4444] outline-none focus:border focus:border-[#DB4444] transition-all duration-500' />
                    <input type="password" placeholder='Password' className='w-[420px] h-[56px] p-[5px] px-[15px] rounded-[4px] border-[2px] border-black  dark:border-white placeholder:text-[gray] dark:placeholder:text-[#DB4444] outline-none focus:border focus:border-[#DB4444] transition-all duration-500' />
                    <button className='w-[420px] h-[56px] hover:underline hover:text-[crimson] transition-all duration-500 text-[#DB4444] text-[20px] font-[500]'>Forget Password?</button>
                    <button className='w-[420px] h-[56px] bg-[#DB4444] hover:bg-[crimson] transition-all duration-500 text-[18px] font-[500] text-[whitesmoke] rounded-[4px]'>Log in</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default LogIn
