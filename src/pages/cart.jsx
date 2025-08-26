import React from 'react'
import { Link } from 'react-router-dom';


const Cart = () => {
    return (<>
        <div>
            <div className='lg: px-[340px] py-[90px]'>
                <Link to={'/home'}>
                    <p className='text-[gray] hover:text-[black] transition-all duration-500'>Home / <b className='text-[black]'>Cart</b></p>
                </Link>
            </div>
        </div>
    </>)
}

export default Cart
