import React from 'react';
import Navbar from '../components/navbar';
import Footer from "../components/footer";
import { API } from "../config";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
    let navigate = useNavigate();
    async function login(userName, password) {
        const res = await API.post("Account/login", { userName, password });
        if (res.data.data) {
            localStorage.setItem("accessToken", res.data.data);
            navigate("/home");
        }
    };

    const handlesubmit = (e) => {
        e.preventDefault();
        let userName = e.target["userName"].value;
        let password = e.target["password"].value;
        login(userName, password);
    };

    return (
        <div>
            <div className='flex justify-center pt-[300px] pb-[250px]'>
                <div className='flex flex-col gap-[20px]'>
                    <h1 className='text-[36px] font-[500]'>Log in to Exclusive</h1>
                    <p className='text-[16px] font-[500]'>Enter your details below</p>
                    <form onSubmit={handlesubmit} className='flex flex-col gap-[20px]'>
                        <input type="text" name='userName' placeholder='Email or phone number' className='w-[420px] h-[56px] p-[5px] px-[15px] rounded-[4px] border-[2px] border-black dark:border-white placeholder:text-[gray] dark:placeholder:text-[#DB4444] outline-none focus:border focus:border-[#DB4444] transition-all duration-500' />
                        <input type="password" name='password' placeholder='Password' className='w-[420px] h-[56px] p-[5px] px-[15px] rounded-[4px] border-[2px] border-black  dark:border-white placeholder:text-[gray] dark:placeholder:text-[#DB4444] outline-none focus:border focus:border-[#DB4444] transition-all duration-500' />
                        <button className='w-[420px] h-[56px] hover:underline hover:text-[crimson] transition-all duration-500 text-[#DB4444] text-[20px] font-[500]'>Forget Password?</button>
                        <button type='submit' className='w-[420px] h-[56px] bg-[#DB4444] hover:bg-[crimson] transition-all duration-500 text-[18px] font-[500] text-[whitesmoke] rounded-[4px]'>Log in</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LogIn
