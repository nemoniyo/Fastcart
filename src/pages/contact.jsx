import React from 'react'
import phoneIcon from "../assets/images/icons-phone.png";
import emailIcon from "../assets/images/icons-mail.png";
import { Link } from 'react-router-dom';

const Contact = () => {
    return (<>
        <div>
            <div className='lg: px-[340px] py-[90px]'>
                <Link to={'/home'}>
                    <p className='text-[gray] hover:text-[black] transition-all duration-500'>Home / <b className='text-[black]'> Contact</b></p>
                </Link>
            </div>
            <div className='flex flex-wrap justify-center lg:gap-[150px] gap-[35px] mb-[250px]'>
                <div className=' flex flex-col w-[350px] h-[434px] gap-[15px] p-[30px] border-[2px] border-[whitesmoke] rounded-[4px] shadow-lg'>
                    <div className='flex gap-[20px] items-center'>
                        <img src={phoneIcon} alt="phoneIcon" className='w-[40px] h-[40px]' />
                        <p className='text-[24px] font-[600]'>Call To Us</p>
                    </div>
                    <p className='text-[16px] font-[400]'>We are available 24/7, 7 days a week.</p>
                    <p className='text-[16px] font-[400]'>Phone: +8801611112222</p>
                    <hr />
                    <div className='flex gap-[20px] items-center'>
                        <img src={emailIcon} alt="emailIcon" className='w-[40px] h-[40px]' />
                        <p className='text-[24px] font-[600]'>Write To US</p>
                    </div>
                    <p className='text-[16px] font-[400]'>
                        Fill out our form and we will contact <br />
                        you within 24 hours.
                    </p>
                    <p className='text-[16px] font-[400]'>Emails: customer@exclusive.com</p>
                    <p className='text-[16px] font-[400]'>Emails: support@exclusive.com</p>
                </div>
                <div className='w-[780px] h-[434px] border-[2px] border-[whitesmoke] rounded-[4px] p-[30px] py-[50px] shadow-lg'>
                    <div className='flex gap-[20px] justify-center'>
                        <input type="text" placeholder='Name' className='w-[220px] h-[56px] p-[5px] px-[15px] rounded-[4px] border-[2px] border-[whitesmoke] dark:border-white placeholder:text-[gray] dark:placeholder:text-[#DB4444] outline-none focus:border focus:border-[#DB4444] transition-all duration-500' />
                        <input type="text" placeholder='Email or phone number' className='w-[220px] h-[56px] p-[5px] px-[15px] rounded-[4px] border-[2px] border-[whitesmoke] dark:border-white placeholder:text-[gray] dark:placeholder:text-[#DB4444] outline-none focus:border focus:border-[#DB4444] transition-all duration-500' />
                        <input type="password" placeholder='Password' className='w-[220px] h-[56px] p-[5px] px-[15px] rounded-[4px] border-[2px] border-[whitesmoke]  dark:border-white placeholder:text-[gray] dark:placeholder:text-[#DB4444] outline-none focus:border focus:border-[#DB4444] transition-all duration-500' />
                    </div>
                    <div className='flex justify-center '>
                        <textarea name="" className='rounded-[4px] dark:border-white placeholder:text-[gray] dark:placeholder:text-[#DB4444] outline-none focus:border focus:border-[#DB4444] transition-all duration-500 p-[15px] w-[700px] h-[176px] border-[2px] border-[whitesmoke] mb-[40px] mt-[20px]' placeholder='Your Massage'></textarea>
                    </div>
                    <button className='w-[215px] h-[56px] rounded-[4px] bg-[#DB4444] hover:bg-[crimson] transition-all duration-500 text-[18px] text-[whitesmoke] lg:ml-[500px]'>Send Massage</button>
                </div>
            </div>
        </div>
    </>)
}

export default Contact
