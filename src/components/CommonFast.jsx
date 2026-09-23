import React from 'react'
import Flex from './Flex'

const CommonFast = ({fastcmntext,scomntext,className,clasname2} ) => {
  return (
    <div className={`${className}text-[#161A2D] `}>
      <Flex className='items-center gap-2.5 justify-center '>


  <span className='w-1.5 h-1.5 bg-primary rounded-full'></span>
     <h5 className={` text-sm font-semibold ${clasname2}`}> {fastcmntext} </h5>
      </Flex>
      <h1 className='text-[48px] text-center  font-semibold align-middle w-182.5 mx-auto'> {scomntext} </h1>
    </div>
  )
}

export default CommonFast
