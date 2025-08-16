import React from 'react'
import LogoFastcart from "../assets/images/fastcart.logo.png"
import useDarkSide from '../config/useDarkMode';
import ThemeToggle from '../components/switch';
const Navbar = () => {
        const [theme, toggleTheme] = useDarkSide();
    return (
        <div>
            <nav>
                <img src={LogoFastcart} alt="" />
                <ul>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>About</li>
                </ul>
                <div>
                    <input type="text" placeholder='What are you looking for?' />
                    <div onClick={toggleTheme} className='m-[30px]'>
                        <ThemeToggle />
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
