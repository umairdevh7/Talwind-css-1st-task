import React from 'react'

const Quotes = () => {
  return (
    <div className='flex flex-row justify-between'>
        <div className='flex flex-col gap-5'>
            <h1 className='text-5xl'>What is USD Bloom?</h1>
            <button className='bg-black w-fit text-white px-[20px] py-[5px] rounded-2xl cursor-pointer'>Explore now</button>
        </div>
        <div className='w-[400px] text-[27px] text-shadow-olive-500 mr-4'>
            USD Bloom is a yield-bearing stablecoin that helps your capital grow while staying pegged to the U.S. Dollar.
        </div>
    </div>
  )
}

export default Quotes