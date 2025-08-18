import React from 'react'
import LogoFastcart from "../assets/images/fastcart.logo.png"
import useDarkSide from '../config/useDarkMode';
import ThemeToggle from '../components/switch';
import { Search, Heart, ShoppingCart } from 'lucide-react';
const Navbar = () => {
        const [theme, toggleTheme] = useDarkSide();
    return (
        <div>
            <nav className='flex items-center gap-[240px] justify-center p-[20px]'>
                <img 
                src={LogoFastcart}
                alt="LogoFastcart"
                className='w-[200px] h-[65px]'
                />
                <ul className='flex gap-[45px] text-[18px] items-center'>
                    <li className='hover:underline'>Home</li>
                    <li className='hover:underline'>Contact</li>
                    <li className='hover:underline'>About</li>
                </ul>
                <div className='flex gap-[30px] items-center'>
                    <div className='flex items-center bg-gray-300 w-[255px] h-[45px] gap-[12px] p-[5px] pl-[18px] rounded-[4px]'>
                    <input
                    type="text"
                    placeholder='What are you looking for?'
                    className='outline-none'
                    />
                    <Search />
                    </div>
                    <div onClick={toggleTheme} className='m-[10px]'>
                        <ThemeToggle />
                    </div>
                    <Heart />
                    <ShoppingCart />
                </div>
            </nav>
            <hr className='mt-[5px]'/>
        </div>
    )
}

export default Navbar

