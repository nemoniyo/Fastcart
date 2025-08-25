import React from 'react'
import { Link } from 'react-router-dom';

const Account = () => {
    return (<>
        <div>
            <div className='lg: px-[340px] py-[90px]'>
                <Link to={'/home'}>
                    <p className='text-[gray] hover:text-[black] transition-all duration-500'>Home / <b className='text-[black]'>My account</b></p>
                </Link>
            </div>
            <div className='flex flex-wrap justify-center gap-[230px] mb-[300px]'>
                <div className='flex flex-col gap-[15px]'>
                    <p className='text-[18px] font-[500] hover:text-[crimson] transition-all duration-500'>Manage My Account</p>
                    <ul className='text-[16px] text-[#808080] font-[400] flex flex-col gap-[8px]'>
                        <li className='hover:text-[#DB4444] transition-all duration-500'>My Profile</li>
                        <li className='hover:text-[#DB4444] transition-all duration-500'>Address Book</li>
                        <li className='hover:text-[#DB4444] transition-all duration-500'>My Payment Options</li>
                    </ul>
                    <p className='text-[18px] font-[500] hover:text-[crimson] transition-all duration-500'>Manage My Orders</p>
                    <ul className='text-[16px] text-[#808080] font-[400] flex flex-col gap-[8px]'>
                        <li className='hover:text-[#DB4444] transition-all duration-500'>My Returns</li>
                        <li className='hover:text-[#DB4444] transition-all duration-500'>My Cancellations</li>
                    </ul>
                    <p className='text-[18px] font-[500] hover:text-[crimson] transition-all duration-500'>Manage My Wishlist</p>
                </div>
                <div className='w-[950px] h-[592px] border-[whitesmoke] shadow-lg p-[50px]'>
                    <h1 className='text-[24px] text-[#DB4444] font-[500]'>Profile</h1>
                    <div className='flex gap-[20px] mb-[25px]'>
                        <input type="text" placeholder='First name' className='w-[420px] h-[56px] p-[5px] px-[15px] rounded-[4px] border-[2px] border-[whitesmoke] dark:border-white placeholder:text-[gray] dark:placeholder:text-[#DB4444] outline-none focus:border focus:border-[#DB4444] transition-all duration-500' />
                        <input type="text" placeholder='Last name' className='w-[420px] h-[56px] p-[5px] px-[15px] rounded-[4px] border-[2px] border-[whitesmoke] dark:border-white placeholder:text-[gray] dark:placeholder:text-[#DB4444] outline-none focus:border focus:border-[#DB4444] transition-all duration-500' />
                    </div>
                    <div className='flex gap-[20px] mb-[50px]'>
                        <input type="text" placeholder='Email address' className='w-[420px] h-[56px] p-[5px] px-[15px] rounded-[4px] border-[2px] border-[whitesmoke] dark:border-white placeholder:text-[gray] dark:placeholder:text-[#DB4444] outline-none focus:border focus:border-[#DB4444] transition-all duration-500' />
                        <input type="text" placeholder='Street address' className='w-[420px] h-[56px] p-[5px] px-[15px] rounded-[4px] border-[2px] border-[whitesmoke] dark:border-white placeholder:text-[gray] dark:placeholder:text-[#DB4444] outline-none focus:border focus:border-[#DB4444] transition-all duration-500' />
                    </div>
                    <h1 className='text-[24px] font-[500]'>Password Changes</h1>
                    <input type="text" placeholder='Current passwod' className='mb-[25px] w-[850px] h-[56px] p-[5px] px-[15px] rounded-[4px] border-[2px] border-[whitesmoke] dark:border-white placeholder:text-[gray] dark:placeholder:text-[#DB4444] outline-none focus:border focus:border-[#DB4444] transition-all duration-500' />
                    <div className='flex gap-[20px]'>
                        <input type="text" placeholder='New passwod' className='w-[420px] h-[56px] p-[5px] px-[15px] rounded-[4px] border-[2px] border-[whitesmoke] dark:border-white placeholder:text-[gray] dark:placeholder:text-[#DB4444] outline-none focus:border focus:border-[#DB4444] transition-all duration-500' />
                        <input type="text" placeholder='Confirm new passwod' className='w-[420px] h-[56px] p-[5px] px-[15px] rounded-[4px] border-[2px] border-[whitesmoke] dark:border-white placeholder:text-[gray] dark:placeholder:text-[#DB4444] outline-none focus:border focus:border-[#DB4444] transition-all duration-500' />
                    </div>
                    <div className='flex gap-[5px] pt-[35px] lg:pl-[420px]'>
                    <button className='w-[215px] h-[56px] rounded-[4px] hover:bg-[crimson] transition-all duration-500 text-[18px] text-[black]'>Cancel</button>
                    <button className='w-[215px] h-[56px] rounded-[4px] bg-[#DB4444] hover:bg-[crimson] transition-all duration-500 text-[18px] text-[whitesmoke]'>Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Account
