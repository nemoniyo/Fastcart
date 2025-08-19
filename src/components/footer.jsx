import React from 'react'
import { SendHorizontal, Facebook, Twitter, Instagram } from 'lucide-react';


const Footer = () => {
    return (
        <div>
            <footer className='bg-[black]'>
                <div className='flex gap-[150px] justify-center bg-[black] text-[whitesmoke] pt-[100px] pb-[50px]'>
                    <div className='flex flex-col gap-[15px]'>
                        <ul className='flex flex-col gap-[15px]'>
                            <li className='text-[24px] font-[500]'>Exclusive</li>
                            <li className='text-[20px] font-[500]'>Subscribe</li>
                            <li className='text-[18px] font-[400]'>Get 10% off your first order</li>
                        </ul>
                        <div className='w-[230px] h-[50px] rounded-[4px] flex justify-center items-center gap-[5px] border-[2px] border-white'>
                            <input type="text" placeholder='Enter your email' className='w-[170px] p-[5px] px-[15px] placeholder:text-[gray] outline-none placeholder:text-[18px]' />
                            <SendHorizontal />
                        </div>
                    </div>
                    <div>
                        <ul className='flex flex-col gap-[15px]'>
                            <li className='text-[24px] font-[500]'>Support</li>
                            <li className='text-[18px] font-[400]'>111 Bijoy sarani, Dhaka,<br />
                                DH 1515, Bangladesh.</li>
                            <li className='text-[18px] font-[400]'>exclusive@gmail.com</li>
                            <li className='text-[18px] font-[400]'>+88015-88888-9999</li>
                        </ul>
                    </div>
                    <div className='flex gap-[150px]'>
                    <div>
                        <ul className='flex flex-col gap-[12px] text-[18px] font-[400]'>
                            <li className='text-[24px] font-[500]'>Account</li>
                            <li>My Account</li>
                            <li>Cart</li>
                            <li>Wishlist</li>
                            <li>Shop</li>
                        </ul>
                    </div>
                    <div>
                        <ul className='flex flex-col gap-[12px] text-[18px] font-[400]'>
                            <li className='text-[24px] font-[500]'>Quick Link</li>
                            <li>Privacy Policy</li>
                            <li>Terms Of Use</li>
                            <li>FAQ</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    </div>
                    <div>
                        <p className='text-[24px] font-[500]'>Social </p>
                        <div className='flex gap-[25px] mt-[10px]'>
                            <Facebook />
                            <Twitter />
                            <Instagram/>
                            <Instagram/>
                        </div>
                    </div>
                </div>
                    <p className='text-[18px] font-[500] text-center text-gray-700 pb-[30px]'>Copyright Rimel 2022. All right reserved</p>
            </footer>
        </div>
    )
}

export default Footer