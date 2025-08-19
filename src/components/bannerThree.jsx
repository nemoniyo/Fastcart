import React from 'react'

const BannerThree = () => {
    return (
        <div>
            <div className='flex gap-[30px]'>
                <div className='w-[670px] h-[600px] bg-[black] border-[2px] border-[whitesmoke] rounded-[4px]'>
                    <div className=''>
                        <div className='pt-[410px] p-[40px] flex flex-col gap-[15px]'>
                            <h3 className='text-[24px] text-[whitesmoke] font-[600]'>PlayStation 5</h3>
                            <p className='text-[16px] text-[whitesmoke] font-[400]'>Black and White version of the PS5 <br />
                                coming out on sale.
                            </p>
                            <p className="text-[18px] text-[whitesmoke] underline hover:text-[#DB4444] transition-all duration-500">Shop Now</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-[30px]'>
                    <div className='w-[670px] h-[284px] bg-[black] border-[2px] border-[whitesmoke] rounded-[4px]'>
                        <div className=''>
                            <div className='pt-[100px] p-[40px] flex flex-col gap-[15px]'>
                                <h3 className='text-[24px] text-[whitesmoke] font-[600]'>Women’s Collections</h3>
                                <p className='text-[16px] text-[whitesmoke] font-[400]'>Featured woman collections that<br />
                                    give you another vibe.
                                </p>
                                <p className="text-[18px] text-[whitesmoke] underline hover:text-[#DB4444] transition-all duration-500">Shop Now</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-[30px]'>
                        <div className='w-[320px] h-[284px] bg-[black] border-[2px] border-[whitesmoke] rounded-[4px]'>
                            <div className=''>
                                <div className='pt-[130px] p-[40px] flex flex-col gap-[10px]'>
                                    <h3 className='text-[24px] text-[whitesmoke] font-[600]'>Speakers</h3>
                                    <p className='text-[16px] text-[whitesmoke] font-[400]'>Amazon wireless speakers</p>
                                    <p className="text-[18px] text-[whitesmoke] underline hover:text-[#DB4444] transition-all duration-500">Shop Now</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-[320px] h-[284px] bg-[black] border-[2px] border-[whitesmoke] rounded-[4px]'>
                            <div className=''>
                                <div className='pt-[130px] p-[40px] flex flex-col gap-[10px]'>
                                    <h3 className='text-[24px] text-[whitesmoke] font-[600]'>Perfume</h3>
                                    <p className='text-[16px] text-[whitesmoke] font-[400]'>GUCCI INTENSE OUD EDP</p>
                                    <p className="text-[18px] text-[whitesmoke] underline hover:text-[#DB4444] transition-all duration-500">Shop Now</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerThree
