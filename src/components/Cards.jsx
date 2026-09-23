import React from 'react'
import Flex from './Flex'

const Cards = ({ imgsrcshe, mtextf,mtexts,share} ) => {
  return (
    <div className='w-117.75 h-159 bg-[#F6F6F7] rounded-[20px] p-2.5'>
      <img className='hover:scale-110 transition' src={imgsrcshe} alt="" />
      <Flex className='items-center justify-between p-10'>
      <div>
        <h1 className='text-[20px] leading-[22px] font-bold'>{mtextf} </h1>
        <h2 className='text-[16px] leading-[25.25px] mt-[11px] text-[#737681]'>{mtexts}</h2>
        </div>
            <div>
            <img src={share} alt="" />
            </div>
            </Flex>
    </div>
  )
}

export default Cards
