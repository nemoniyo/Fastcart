import React from 'react'
import useDarkSide from '../config/useDarkMode';
import ThemeToggle from '../components/switch';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
    const [theme, toggleTheme] = useDarkSide();

    return (
        <div>
            <ul className="flex gap-[10px]">
                <li>
                    <Link to={"/"}></Link>
                </li>
                
            </ul>
            <Outlet />
        </div>
    )
}

export default Layout
