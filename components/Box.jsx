import React from 'react'

const Box = () => {
    return (
        <div className='flex flex-row justify-between mt-5 mb-5'>
            <div className='w-[50%] h-[300px] rounded-4xl bg-[url(https://images.pexels.com/photos/30413636/pexels-photo-30413636.jpeg)] bg-no-repeat bg-center bg-cover p-[25px]'>
                <h1 className='text-white font-semibold text-[29px] mb-[150px]'>Capital That Grows</h1>
                <p className='text-white w-[480px] text-lg'>Earn your income as your stablecoins are deployed into high-performing Defi protocols.</p>
            </div>
            <div className='w-[300px] h-[300px] bg-[#1b011bef] rounded-4xl p-[25px]'>
                <h2 className='text-white font-semibold text-[29px] mb-[90px]'>Always liquid,<br />always stable</h2>
                <p className='text-white'>Stay fully dollar-pegged with instant access to your funds - no lockups or delays</p>
            </div>
            <div className='w-[300px] h-[300px] bg-[#1b011bef] rounded-4xl p-[25px]'>
                <h2 className='text-white font-semibold text-[29px] mb-[90px]'>100%<br />Hands-free</h2>
                <p className='text-white'>No need to manage strategies.US Bloom works in the background for you. </p>
            </div>
        </div>
    )
}

export default Box