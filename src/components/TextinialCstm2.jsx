import React from 'react'
import logos from '../assets/logos.png'

const TextinialCstm2 = ( {fasttxt} ) => {
  return (
    <div>
        <div className='flex justify-between gap-4.50 w-44'>
            <div className=''>
            <img src={logos} alt="" />
            </div>
            <h1 className='text-[28px] leading-6.25 font-bold text-white ml-2'>{fasttxt} </h1>
        </div>
      
    </div>
  )
}

export default TextinialCstm2
