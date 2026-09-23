import React from 'react'

const Card = ({imgsrcf,htext,ptext,imgsrcs,className} ) => {
  return (
    <div className={`hover:scale-110 transition w-[346px] bg-[#FFFFFF1A] p-10 h-105
       mt-18.75 rounded-[20px] hover:bg-[#734BDF] ${className}`}>
        <img src={imgsrcf} alt="" />
        <h1 className='text-[20px] leading-[22px] font-onset text-white mt-25 '> {htext} </h1>
        <p className='text-[16px] mt-3 leading-[25px] font-normal text[#FFFFFF] text-white'> {ptext} </p>
      <img src={imgsrcs} alt=""  className='mt-8'/>
    </div>
  )
}

export default Card
