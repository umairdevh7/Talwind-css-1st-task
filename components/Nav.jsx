import React from 'react'

const Nav = () => {
    return (
        <div className='flex items-center justify-between p'>
            <h2 className='font-bold text-2xl'>BloomFi</h2>
            <ul className='flex items-center justify-between gap-7'>
                <li className='font-semibold cursor-pointer'>USD Bloom</li>
                <li className='font-semibold cursor-pointer'>Business</li>
                <li className='font-semibold cursor-pointer'>Treasury</li>
                <li className='font-semibold cursor-pointer'>Developers</li>
                <li className='font-semibold cursor-pointer' >Join US</li>
            </ul>
            <button className='bg-black text-white px-[20px] py-[5px] rounded-2xl cursor-pointer'>LaunchBETA</button>
        </div>
    )
}

export default Nav