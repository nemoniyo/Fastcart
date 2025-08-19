import React from 'react'
import Navbar from '../components/navbar'
import LogoGoogle from "../assets/images/Icon-Google.png"
import { Link } from 'react-router-dom';
import Footer from '../components/footer';

const SignUp = () => {
    return (
        <div>
            <div className='flex justify-center pt-[300px] pb-[250px]'>
                <div className='flex flex-col gap-[20px]'>
                    <h1 className='text-[36px] font-[500]'>Create an account</h1>
                    <p className='text-[16px] font-[500]'>Enter your details below</p>
                    <input type="text" placeholder='Name' className='w-[420px] h-[56px] p-[5px] px-[15px] rounded-[4px] border-[2px] border-black dark:border-white placeholder:text-[gray] dark:placeholder:text-[#DB4444] outline-none focus:border focus:border-[#DB4444] transition-all duration-500' />
                    <input type="text" placeholder='Email or phone number' className='w-[420px] h-[56px] p-[5px] px-[15px] rounded-[4px] border-[2px] border-black dark:border-white placeholder:text-[gray] dark:placeholder:text-[#DB4444] outline-none focus:border focus:border-[#DB4444] transition-all duration-500' />
                    <input type="password" placeholder='Password' className='w-[420px] h-[56px] p-[5px] px-[15px] rounded-[4px] border-[2px] border-black  dark:border-white placeholder:text-[gray] dark:placeholder:text-[#DB4444] outline-none focus:border focus:border-[#DB4444] transition-all duration-500' />
                    <button className='w-[420px] h-[56px] bg-[#DB4444] hover:bg-[crimson] transition-all duration-500 text-[18px] font-[500] text-[whitesmoke] rounded-[4px]'>Create Account</button>
                    <button className='w-[420px] h-[56px] rounded-[4px] flex gap-[20px] justify-center items-center border border-black dark:border-white hover:opacity-55 transition-all duration-500'>
                        <img src={LogoGoogle} alt="LogoGoogle" className='w-[24px] h-[24px]' />
                        <p className='text-[16px] font-[500] hover:underline hover:text-[#DB4444] transition-all duration-500'>Sign up with Google</p></button>
                    <p className='text-center flex items-center gap-4 justify-center'>Already have account?
                        <Link to={'/logIn'}>
                        <b className='hover:underline hover:text-[#DB4444] transition-all duration-500'>Log in</b>
                        </Link>    
                        </p>
                </div>
            </div>
        </div>
    )
}

export default SignUp
