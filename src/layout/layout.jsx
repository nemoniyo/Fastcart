import React from 'react'
import useDarkSide from '../config/useDarkMode';
import ThemeToggle from '../components/switch';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Layout = () => {
    const [theme, toggleTheme] = useDarkSide();

    return (
        <div>
            <Navbar/>
            <ul className="flex gap-[10px]">
                <li>
                    <Link to={"/"}></Link>
                </li>
                
            </ul>
            <Outlet />
            <Footer/>
        </div>
    )
}

export default Layout
