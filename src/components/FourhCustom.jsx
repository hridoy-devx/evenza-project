import React from 'react'
import Flex from './Flex'

const FourhCustom = ({textsrc}) => {
  return (
    <>
      <div className=''>
        <Flex className='justify-between items-center'>
          <div className=' bg-[#FFFFFF] rounded-2xl w-[214px] py-5'>
            <h1>{textsrc}</h1>
          </div>
            
</Flex>
      
      </div>
    </>
  )
}

export default FourhCustom
